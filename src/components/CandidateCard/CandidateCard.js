import './CandidateCard.css'
import { useNavigate } from 'react-router-dom';

const CandidateCard = (props) =>{

    const navigate = useNavigate(); 

    const goToDetail = (id) =>{
        navigate('/candidateDetail/'+id);
    }
    
    return(
        <div className='CandidateCard' onClick={() =>goToDetail(props.id)}>
            <img src={require(`./user.png`)}/>
            <h4>{props.name}</h4>
        </div>
    )
}

export default CandidateCard;