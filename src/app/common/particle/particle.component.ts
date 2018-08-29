import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.sass']
})
export class ParticleComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor() { }

  ngOnInit() {

    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: '#f68b1f'
        },
        shape: {
          type: 'triangle',
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#123672',
          opacity: 0.2,
          width: 1
        },
        move: {
          speed: 2,
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'none',
            duration: 0.5
          },
          onclick: {
            enable: true,
            mode: 'grab'
          }
        }
      },
      modes: {
        grab: {
          distance: 350,
          line_linked: {
            opacity: 1
          }
        }
      }
    };
  }

}
