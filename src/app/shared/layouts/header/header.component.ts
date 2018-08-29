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
  public arr = ['Мероприятия', 'Спикеры', 'Карьера'];
  public left: number = -460;
  public bodyShadowIndex: number = -1;
  public bodyShadowOpacity: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.changeHeaderStyle();
  }

  public ngOnInit() {
  }

  public appearNav() {
    this.left = 0;
    this.bodyShadowIndex = 50;
    this.bodyShadowOpacity = 0.8;
  }

  public exitNav() {
    this.left = -460;
    this.bodyShadowIndex = -1;
    this.bodyShadowOpacity = 0;
  }

  public openPage(link: string) {
    this.router.navigate([link], { relativeTo: this.route });
  }
  changeHeaderStyle() {
    const url = this.router.url;
    if (url === '/events' || url === '/speakers') {
      this.logo = 'LogoDark.png';
      this.headerListChange = 'black-style';
    } else  {
      this.logo = 'LogoLight.png';
      this.headerListChange = 'white-style';
    }
  }
}
