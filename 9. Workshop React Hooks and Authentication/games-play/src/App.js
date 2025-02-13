import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AuthenticationProvider } from './contexts/AuthenticationContext';
import { gameServiceFactory } from './services/gameServices';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Catalogue } from './components/Catalogue/Catalogue';
import { CreateGame } from './components/CreateGame/CreateGame';
import { GameDetails } from './components/GameDetails/GameDetails';
import { EditGame } from './components/GameDetails/EditGame/EditGame';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Error404 } from './components/Errors/Errors';

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const gameService = gameServiceFactory(); //auth.accessToken

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


  const context = {
    onDeleteGame,
    // userId: auth._id,
    // token: auth.accessToken,
    // userEmail: auth.email,
  }

  return (
    <div className="App">
      <h1>Games play</h1>

      <div id="box">
        <AuthenticationProvider value={context}>

          <Header />

          {/* <!-- Main Content --> */}
          <main id="main-content">
            <Routes>
              {/* <!--Home Page--> */}
              <Route path='/' element={<Home games={games.sort(g => g._createdOn)} />} />

              {/* <!-- Login Page ( Only for Guest users ) --> */}
              <Route path='/login' element={<Login />} />

              <Route path='/logout' element={<Logout />} />

              {/* <!-- Register Page ( Only for Guest users ) --> */}
              <Route path='/register' element={<Register />} />

              {/* <!-- Create Page ( Only for logged-in users ) --> */}
              <Route path='/create-game' element={<CreateGame onSubmitHandler={onSubmitHandler} />} />

              {/* <!-- Catalogue --> */}
              <Route path='/catalogue' element={<Catalogue games={games} />} />

              {/* <GameDetails /> */}
              <Route path='/catalogue/:gameId' element={<GameDetails games={games} />} />

              {/* <!-- Edit Page ( Only for the creator )--> */}
              <Route path='/catalogue/:gameId/edit' element={<EditGame onSubmitEdit={onSubmitEdit} />} />

              {/* <!-- Errors --> */}
              <Route path='/*' element={<Error404 />} />
            </Routes>
          </main>

        </AuthenticationProvider>

      </div>
    </div>
  );
}

export default App;
