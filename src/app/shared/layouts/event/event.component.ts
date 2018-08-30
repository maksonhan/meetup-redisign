import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/utils/api/api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {

  public photos: any;

  constructor(private route: ActivatedRoute, private api: ApiService) {

  }

  ngOnInit() {
  }


}
