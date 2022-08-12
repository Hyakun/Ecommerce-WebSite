import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  instagram = faInstagram;
  facebook = faFacebook;
  youtube = faYoutube;
  twitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
