import React, { useEffect } from 'react';
import './Cloud.css'

function CloudWord() {
  useEffect(() => {

    const tagcanvas = window.tagcanvas;
    const canvas = document.getElementById('myCanvas');
    $(document).ready(function () {
      if(!$(canvas).tagcanvas({
          textColour: null,
          outlineColour: "transparent",
          reverse: true,
          depth: 0.01,
          maxSpeed: 0.1,
          weight: false,
      }, "tags")){
          // something went wrong; hide the canvas container
          $("#cloudmyCanvasContainer").hide();
      }
    });
  }, []);

  return <canvas id="myCanvas" width="400" height="400">
    <ul id="tags">
                <li><a href="#cloud" class="API">RESTful API</a></li>
                <li><a href="#cloud" class="API">Postman</a></li>
                <li><a href="#cloud" class="art">After Effects</a></li>
                <li><a href="#cloud" class="art">Figma</a></li>
                <li><a href="#cloud" class="art">Photoshop</a></li>
                <li><a href="#cloud" class="art">Sony Vegas</a></li>
                <li><a href="#cloud" class="cloud">AWS</a></li>
                <li><a href="#cloud" class="database">ETL</a></li>
                <li><a href="#cloud" class="database">Excel</a></li>
                <li><a href="#cloud" class="database">MySQL</a></li>
                <li><a href="#cloud" class="database">SAP</a></li>
                <li><a href="#cloud" class="framework">Bootstrap</a></li>
                <li><a href="#cloud" class="framework">Django</a></li>
                <li><a href="#cloud" class="framework">Flask</a></li>
                <li><a href="#cloud" class="framework">Pandas</a></li>
                <li><a href="#cloud" class="framework">React</a></li>
                <li><a href="#cloud" class="framework">JQuery</a></li>
                <li><a href="#cloud" class="framework">SQLAlchemy</a></li>
                <li><a href="#cloud" class="lang">Javascript</a></li>
                <li><a href="#cloud" class="lang">Json</a></li>
                <li><a href="#cloud" class="lang">Python</a></li>
                <li><a href="#cloud" class="lang">TypeScript</a></li>
                <li><a href="#cloud" class="os">Linux</a></li>
                <li><a href="#cloud" class="os">Bash/Powershell</a></li>
                <li><a href="#cloud" class="tech">NPM</a></li>
                <li><a href="#cloud" class="tech">Vite.JS</a></li>
                <li><a href="#cloud" class="tech">Git</a></li>
                <li><a href="#cloud" class="technique">CI/CD</a></li>
                <li><a href="#cloud" class="technique">Scrum</a></li>
            </ul>
  </canvas>;
}

export default CloudWord;
