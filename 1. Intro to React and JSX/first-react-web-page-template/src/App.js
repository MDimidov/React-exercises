// import "./App.css";
import Desc from "./components/Desc";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Tickets from "./components/Tickets";

function App() {
  return (
    <div>
      <Navigation />
      <Header />

      <div className="container">
        <Desc />
        <Speakers />
      </div>

      <Tickets />
      <Schedule />

      <Footer />
    </div>
  );
}

export default App;
