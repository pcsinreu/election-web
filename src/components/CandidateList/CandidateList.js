import './CandidateList.css'
import CandidateCard from '../CandidateCard/CandidateCard'
import candidateServices from '../../services/cadidateServices'
import React, { useState, useEffect } from 'react';


function CandidateList(props) {
    
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(candidateServices.getAll())
  },[]);

    return(
        <div className='CandidateList'>
            {data.map(function(candidate, idx){
                return (<CandidateCard key={idx} id={candidate.id} name={candidate.name} />)
            })}            
        </div>
    )
}

export default CandidateList;