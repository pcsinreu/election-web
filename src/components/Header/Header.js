import React from 'react';
import './Header.css';

const Header = () => (
  <div class="sample-header">
  <div class="sample-header-section">
    <img src={require('./logo.jpeg')} className="logo" />
    <h1>UTOPÍA INFORMATIVA</h1>
  </div>
</div>
);


export default Header;
