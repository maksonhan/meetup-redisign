import { Component, OnInit } from '@angular/core';
import { globalstore } from 'src/app/common/constants/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  public eventsPhotos: any;
  private gallerycounter = 8;
  constructor() {
  this.eventsPhotos = globalstore.gallery.slice(0, this.gallerycounter);
  console.log(this.eventsPhotos);
  }

  ngOnInit() {
  }
  expandGallery() {
    this.gallerycounter += 4;
    this.eventsPhotos = globalstore.gallery.slice(0, this.gallerycounter);
  }

}
