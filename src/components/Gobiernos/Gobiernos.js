import './Gobiernos.css'
import CardElection from '../CardElection/CardElection';
import { useNavigate } from 'react-router-dom';

function Gobiernos(props) {

const navigate = useNavigate();

    return (
        <div className='gobiernos'>
            <CardElection name='Gobierno General' image='gobierno-central' />
            <CardElection name='Gobierno Regional' image='gobierno-regional'/>
            <CardElection name='Gobierno Municipal' image='gobierno-municipal'/>
      </div>

    );
  }


export default Gobiernos;