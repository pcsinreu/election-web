import './CardElection.css'

function CardElection(props) {
    return (
      <div>
        <img src={require(`./img/${props.image}.png`)}/>
        <div>
          {props.name}
        </div>

      </div>
    );
  }


export default CardElection;