import './CardElection.css'
import { useNavigate } from 'react-router-dom';


function CardElection(props) {

const navigate = useNavigate(); 

  const goNext =() =>{
    navigate('/candidateList');
  }

    return (
      <div className='CardElection' onClick={goNext}>
        <img src={require(`./img/${props.image}.png`)}/>
        <div>
          {props.name}
        </div>

      </div>
    );
  }


export default CardElection;