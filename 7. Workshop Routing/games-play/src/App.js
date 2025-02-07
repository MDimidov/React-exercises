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
import * as request from './services/gameServices';

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    request.getAllGames()
      .then(setGames);
  }, []);

  async function onSubmitHandler(game) {
    const newGame = await request.createGame(game);
    setGames(state => [...state, newGame]);
    navigate('/catalogue');
  }

  return (
    <div className="App">
      <h1>Games play</h1>

      <div id="box">

        <Header />

        {/* <!-- Main Content --> */}
        <main id="main-content">
          <Routes>
            {/* <!--Home Page--> */}
            <Route path='/' element={<Home />} />

            {/* <!-- Login Page ( Only for Guest users ) --> */}
            <Route path='/login' element={<Login />} />

            {/* <!-- Register Page ( Only for Guest users ) --> */}
            <Route path='/register' element={<Register />} />

            {/* <!-- Create Page ( Only for logged-in users ) --> */}
            <Route path='/create-game' element={<CreateGame onSubmitHandler={onSubmitHandler} />} />

            {/* <!-- Catalogue --> */}
            <Route path='/catalogue' element={<Catalogue games={games} />} />

            <Route path='/catalogue/:gameId' element={<GameDetails games={games} />} />


            {/* <!-- Errors --> */}
            <Route path='/*' element={<Error404 />} />
          </Routes>








          {/* <!-- Edit Page ( Only for the creator )--> */}
          {/* <section id="edit-page" className="auth">
            <form id="edit">
              <div className="container">

                <h1>Edit Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" defaultValue="" />

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" defaultValue="" />

                <label htmlFor="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue="" />

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input className="btn submit" type="submit" value="Edit Game" />

              </div>
            </form>
          </section> */}

          {/* <!--Details Page--> */}
          {/* <GameDetails /> */}
        </main>


      </div>
    </div>
  );
}

export default App;
