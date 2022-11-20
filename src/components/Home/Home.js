import '../../App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Gobiernos from '../Gobiernos/Gobiernos';
import Body from '../Body/Body';

function Home() {
  return (
    <div className="App">
      <Gobiernos />
      <Body />
    </div>
  );
}

export default Home;