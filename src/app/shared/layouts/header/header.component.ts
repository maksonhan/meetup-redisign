import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  public logo: string;
  public headerListChange: string;
  public burgerSwitch: string;
  public arr = ['Мероприятия', 'Спикеры', 'Карьера'];
  public right = -420;
  public bodyShadowIndex = -1;
  public bodyShadowOpacity = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.changeHeaderStyle();
  }

  public ngOnInit() {
  }

  public appearNav() {
    this.right = 0;
    this.bodyShadowIndex = 50;
    this.bodyShadowOpacity = 0.8;
    this.burgerSwitch = 'hover_burger-line';
  }

  public exitNav() {
    this.right = -420;
    this.bodyShadowIndex = -1;
    this.bodyShadowOpacity = 0;
    this.burgerSwitch = 'null';
  }

  public openPage(link: string) {
    this.router.navigate([link], { relativeTo: this.route });
  }

  public changeHeaderStyle() {
    const url = this.router.url;
    if (url === '/events' || url === '/speakers') {
      this.logo = 'LogoDark.png';
      this.headerListChange = 'black-style';
    } else {
      this.logo = 'LogoLight.png';
      this.headerListChange = 'white-style';
    }
  }
  public burgerNavigation() {
    return this.right !== 0 ? this.appearNav() : this.exitNav();
  }
}
