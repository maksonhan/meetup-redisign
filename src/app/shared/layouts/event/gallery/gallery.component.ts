import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  public eventsPhoto: any;
  constructor() {
    this.eventsPhoto = [
      {thumbnail: '0', big: '1'},
      {thumbnail: '1', big: '1'},
      {thumbnail: '2', big: '1'},
      {thumbnail: '3', big: '1'},

      {thumbnail: '4', big: '1'},
      {thumbnail: '5', big: '1'},
      {thumbnail: '0', big: '1'},
      {thumbnail: '1', big: '1'},

      {thumbnail: '2', big: '1'},
      {thumbnail: '3', big: '1'},
      {thumbnail: '4', big: '1'},
      {thumbnail: '5', big: '1'},

      {thumbnail: '0', big: '1'},
      {thumbnail: '1', big: '1'},
      {thumbnail: '2', big: '1'},
      {thumbnail: '3', big: '1'},

      {thumbnail: '4', big: '1'},
      {thumbnail: '5', big: '1'},
      {thumbnail: '0', big: '1'},
      {thumbnail: '1', big: '1'},
    ];
    console.log(this.eventsPhoto[1].thumbnail);
  }

  ngOnInit() {
  }

}
