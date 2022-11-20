import { useParams } from 'react-router-dom'
import './CandidateDetail.css'
import candidateServices from '../../services/cadidateServices'
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from "react-router-dom";

const CandidateDetail =() =>{
    const { id } = useParams()
    const [data, setData] = useState({});
    const [comentarios, setComentarios] = useState([]);
  
    useEffect(() => {
      setData(candidateServices.getById(id))
      setComentarios(candidateServices.getCommentsById(id))
      console.log(data)
    },[data]);

    return(
        <div>
            <div> <Link to="/CandidateList">Regresar</Link></div>
            <div className='CandidateDetail'>
                <div >
                    <div className='HojaDeVida'>
                        <div>
                            <img src={require(`./user.png`)}/>
                            <h6>Estudios</h6>
                            <p>{data.estudios}</p>
                            <h6>Antecendentes</h6>
                            <p>{data.antecedentes}</p>
                            <h6>Acusaciones</h6>
                            <p>{data.estudios}</p>

                        </div>
                        <h5>Hoja de vida {id}</h5>
                    </div>
                    <div className='Interactua'>
                        <h5>Interactúa con tu opinión</h5>
                        <h6>Sobre el candidato :</h6>
                        <textarea></textarea>
                        <Button variant="primary">Publicar</Button>
                        
                    </div>                
                    <div className='Comentarios'>
                        <h5>Comentarios</h5>
                        
                        {comentarios.map(function(comentario, id){
                            return(<div>{comentario.name}</div>)
                        })}
                        
                    </div>
                </div>
                <div>
                    <h5>Propuestas</h5>
                </div>
            </div>
        </div>
    )

}

export default CandidateDetail