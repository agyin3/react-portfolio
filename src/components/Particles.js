import React from 'react'
import Particle from 'react-particles-js'
import { particlesConfig } from '../particlesjs-config.js'

const Particles = () => {
    return(
        <>
            <Particle 
            className='particle-background' 
            params={
                {
                    "particles": {
                      "number": {
                        "value": 118,
                        "density": {
                          "enable": true,
                          "value_area": 473.4885849793636
                        }
                      },
                      "color": {
                        "value": "#ffffff"
                      },
                      "shape": {
                        "type": "triangle",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        },
                        "polygon": {
                          "nb_sides": 3
                        },
                        // "image": {
                        //   "src": "img/github.svg",
                        //   "width": 100,
                        //   "height": 100
                        // }
                      },
                      "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 38.97970619046457,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#efd0ca",
                        "opacity": 0.7135183670851577,
                        "width": 0.6413648243462091
                      },
                      "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "bounce",
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
                          "enable": false,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 323.67632367632365,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 671.3286713286714,
                          "size": 83.91608391608392,
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
                  }
            }/>
        </>
    )
}

export default Particles