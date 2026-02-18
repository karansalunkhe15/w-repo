import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  images = [
  '_09A5773.JPG.jpeg',
  '_09A5794.JPG.jpeg',
  '_09A5801.JPG.jpeg',
  '_09A5807.JPG.jpeg',
  '_09A5859.JPG.jpeg'
];

imagess = [
  'DSC04544.JPG.jpeg',
  'DSC04238.JPG.jpeg',
  'DSC04281.JPG.jpeg',
  'DSC04435 (1).JPG.jpeg',
  'DSC04452.JPG.jpeg',
  'DSC04455.JPG.jpeg',
  'DSC04477.JPG.jpeg',
  'DSC04513.JPG.jpeg',
  'DSC04605.JPG.jpeg'
];



  constructor() { }

  ngOnInit(): void {
    
  }

}
