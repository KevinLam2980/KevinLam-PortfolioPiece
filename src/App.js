import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";

import Header from "./components/header";
import NavBar from "./components/Nav";
import Projects from "./components/Pojects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import { useNotification } from "./components/Notifications/NotificationsProvider";

// let particleColor = "rgba(24, 191, 239, 0.9)"
let particleColor = "rgba(21, 41, 49, 0.9)";

function App() {
  const history = useHistory();
  const dispatchNotification = useNotification();

  useEffect(() => {
    history.push("/projects");

    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = window.window.innerWidth;
    canvas.height = window.window.innerHeight;

    let particlesArray;

    // get mouse position
    let mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 110) * (canvas.width / 110),
    };

    canvas.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    // create particle
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      // method to draw individual particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
      // check particle position, check mouse position, move the particle, draw the particle
      update() {
        // check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // check collision detection - mouse position/ particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }
        // move particle
        this.x += this.directionX / 2.5;
        this.y += this.directionY / 2.5;
        // draw particle
        this.draw();
      }
    }

    // create particle array
    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles * 1.5; i++) {
        let size = Math.random() * 5 + 1;
        let x =
          Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
        let y =
          Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 5 - 2.5;
        let directionY = Math.random() * 5 - 2.5;
        let color = particleColor;

        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    // check if particles are close enough to draw line between them
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);
          if (distance < (canvas.width / 5) * (canvas.height / 5)) {
            opacityValue = 1 - distance / 30000;
            // ctx.strokeStyle=`rgba(24, 191, 239, ${opacityValue})`
            ctx.strokeStyle = `rgba(21, 41, 49, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // resize event
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = (canvas.height / 80) * (canvas.height / 80);
      init();
    });

    // mouse out event
    canvas.addEventListener("mouseout", () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });
    canvas.addEventListener("mouseleave", () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    init();
    animate();

    // display welcome banner
    dispatchNotification({
        type: 'INFO',
        message: `Welcome! Feel free to reach out to me if you have any questions.`
    }) 
  }, []);

  return (
    <div id="container">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
      </Switch>
      <Footer />
      <canvas id="canvas1"></canvas>
    </div>
  );
}

export default App;
