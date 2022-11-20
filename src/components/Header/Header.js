import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate(); 
    
    const goHome =() =>{
      navigate('/');      
    }

    return(
    <div class="sample-header" onClick={goHome}>
      <div class="sample-header-section">
        <img src={require('./logo.jpeg')} className="logo" />
        <h1>UTOPÍA INFORMATIVA</h1>
      </div>
    </div>
    )
}
;


export default Header;
