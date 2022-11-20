import './Gobiernos.css'
import CardElection from '../CardElection/CardElection';

function Gobiernos(props) {
    return (
        <div className='gobiernos'>
            <CardElection name='Gobierno General' image='gobierno-central'/>
            <CardElection name='Gobierno Regional' image='gobierno-regional'/>
            <CardElection name='Gobierno Municipal' image='gobierno-municipal'/>
      </div>

    );
  }


export default Gobiernos;