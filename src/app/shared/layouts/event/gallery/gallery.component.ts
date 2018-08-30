import { Component, Input, OnInit } from '@angular/core';
import { globalstore } from 'src/app/common/constants/gallery';
import { ApiService } from 'src/app/core/utils/api/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  @Input() public photos;

  public eventsPhotos: any;
  private gallerycounter = 8;
  constructor(private api: ApiService) {
  this.eventsPhotos = globalstore.gallery.slice(0, this.gallerycounter);
  console.log(this.eventsPhotos);
  }

  ngOnInit() {
  }
  expandGallery() {
    this.gallerycounter += 4;
    this.eventsPhotos = globalstore.gallery.slice(0, this.gallerycounter);
  }

  public getPhoto() {
    this.api.getPhotoEvent(12).subscribe(data => {
      this.photos = data;
      console.log(this.api.getPhotoEvent);
    });
  }

}
