import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Gobiernos from './components/Gobiernos/Gobiernos';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <Header/>
      <Gobiernos />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
