AOS.init();
 
 particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 14,
        "density": {
          "enable": true,
          "value_area": 100
        }
      },
      "color": {
        "value": "#F1F6F9"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#F1F6F9"
        },
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  

  gsap.to ("#frontEnd", {
    delay:1.4,
    text:"Fullstack Web Developer,",
    duration:4,
    ease:"linear",
})

gsap.from ("img", {

    opacity:0,
    delay:5,
    duration:2
})
gsap.from (".fs-5", {
    y:-100,
     opacity:0,
     delay:.3,
     duration:2,
     
 })
 gsap.from ("#name", {
  opacity:0,
  delay:0.3,
  duration:2
})
 gsap.from (".info", {
    opacity:0,
    delay:0.3,
    duration:2
})
gsap.from (".moreInfo", {
  opacity:0,
  delay:5,
  duration:2.5
})

gsap.from ("h1", {
  opacity:0,
  delay:5.2,
  duration:2
})