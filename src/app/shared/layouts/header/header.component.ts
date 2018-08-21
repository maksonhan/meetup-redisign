import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  public arr = ['Мероприятия', 'Спикеры', 'Стажировки'];
  public left: number = -460;
  public bodyShadowIndex: number = -1;
  public bodyShadowOpacity: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

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

  public scrollToSubscribe() {
    window.scrollTo(0, 3300);
  }
}
