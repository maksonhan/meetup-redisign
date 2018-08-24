import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.sass']
})
export class SpeakersComponent implements OnInit {

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
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'triangle',
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#000000',
          opacity: 0.3,
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
            mode: 'repulse',
            duration: 0.5
          },
          onclick: {
            enable: true,
            'mode': 'push'
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
