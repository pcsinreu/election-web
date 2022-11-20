
import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
    
    return(
        
        <footer class="footer-area footer--light">
  <div class="footer-big">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="footer-widget">
            <div class="widget-about">
              <img src="http://placehold.it/250x80" alt="" class="img-fluid" />
              <p>Pregúntanos</p>
              <ul class="contact-details">
                <li>
                  <span class="icon-earphones"></span> Call Us:
                  <a href="tel:344-755-111">344-755-111</a>
                </li>
                <li>
                  <span class="icon-envelope-open"></span>
                  <a href="mailto:support@aazztech.com">support@fmtech.com</a>
                </li>
              </ul>
              </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu footer-menu--1">
              <h4 class="footer-widget-title">Redes sociales</h4>
              <ul>
                <li>
                    <a href="#" class="fa fa-facebook"></a>
                </li>
                <li>
                    <a href="#" class="fa fa-twitter"></a>
                </li>
                <li>
                    <a href="#" class="fa fa-instagram"></a>
                </li>
                <li>
                    <a href="#" class="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu no-padding">
              <h4 class="footer-widget-title">JNE</h4>
                <p>
                    Información evaluada de Jurado Nacional de Elecciones
                </p>
                <a href='https://www.jne.gob.pe'>https://www.jne.gob.pe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mini-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright-text">
            <p>© 2022
              <a href="#">DigiPro</a>. All rights reserved. Created by
              <a href="#">FMTech</a>
            </p>
          </div>

          <div class="go_top">
            <span class="icon-arrow-up"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
    </footer>

        
        )
}

export default Footer;