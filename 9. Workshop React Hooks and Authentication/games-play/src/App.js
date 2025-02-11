import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Catalogue } from './components/Catalogue/Catalogue';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { GameDetails } from './components/GameDetails/GameDetails';
import { Error404 } from './components/Errors/Errors';
import { useEffect, useState } from 'react';
import { gameServiceFactory } from './services/gameServices';
import { AuthenticationContext } from './contexts/AuthenticationContext';
import { authenticationFactory } from './services/authenticationServices';
import { Logout } from './components/Logout/Logout';
import { EditGame } from './components/GameDetails/EditGame/EditGame';

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const gameService = gameServiceFactory(auth.accessToken);
  const authService = authenticationFactory(auth.accessToken);

  useEffect(() => {
    gameService.getAllGames()
      .then(setGames);
  }, []);

  async function onSubmitHandler(game) {
    const newGame = await gameService.createGame(game);
    setGames(state => [...state, newGame]);
    navigate('/catalogue');
  };

  async function onSubmitEdit(gameId, game) {
    const editGame = await gameService.editGame(gameId, game);
    setGames(state => state.map(s => s._id === editGame._id ? editGame : s));
    navigate(`/catalogue/${gameId}`);
  }

  async function onDeleteGame(gameId) {
    await gameService.deleteGame(gameId);
    setGames(state => state.filter(s => s._id !== gameId));

    navigate(`/catalogue/`);
  }
  async function onLoginSubmit(data) {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate('/catalogue')
    } catch {
      console.log('Your email or password is wrong!');
    }
  }

  async function onRegisterSubmit(data) {
    const { confirmPassword, ...regData } = data

    if (confirmPassword !== regData.password) {
      return;
    }

    try {
      const result = await authService.register(regData);
      navigate('/catalogue');
      console.log(result);  // TODO
    } catch {
      console.log('Sth Wrong');
    }
  }

  async function onLogout() {
    const result = await authService.logout();
    setAuth({});
  };

  const context = {
    onLoginSubmit,
    onLogout,
    onRegisterSubmit,
    onDeleteGame,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken
  }

  return (
    <div className="App">
      <h1>Games play</h1>

      <div id="box">
        <AuthenticationContext.Provider value={context}>

          <Header />

          {/* <!-- Main Content --> */}
          <main id="main-content">
            <Routes>
              {/* <!--Home Page--> */}
              <Route path='/' element={<Home />} />

              {/* <!-- Login Page ( Only for Guest users ) --> */}
              <Route path='/login' element={<Login />} />

              <Route path='/logout' element={<Logout />} />

              {/* <!-- Register Page ( Only for Guest users ) --> */}
              <Route path='/register' element={<Register />} />

              {/* <!-- Create Page ( Only for logged-in users ) --> */}
              <Route path='/create-game' element={<CreateGame onSubmitHandler={onSubmitHandler} />} />

              {/* <!-- Catalogue --> */}
              <Route path='/catalogue' element={<Catalogue games={games} />} />

              {/* <!--Details Page--> */}
              <Route path='/catalogue/:gameId' element={<GameDetails games={games} />} />

              {/* <!-- Edit Page ( Only for the creator )--> */}
              <Route path='/catalogue/:gameId/edit' element={<EditGame onSubmitEdit={onSubmitEdit} />} />

              {/* <!-- Errors --> */}
              <Route path='/*' element={<Error404 />} />
            </Routes>










            {/* <GameDetails /> */}
          </main>

        </AuthenticationContext.Provider>

      </div>
    </div>
  );
}

export default App;
