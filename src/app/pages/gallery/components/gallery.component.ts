import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  test = {
    headline: 'Our Approach',
    tab: [
      {
        title: {
          text: 'Research',
        },
        open: true,
        content: {
          headline: 'Research & Analytics',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam consequuntur corporis reprehenderit repudiandae eveniet animi recusandae! Architecto, sequi explicabo, dignissimos id minima perspiciatis accusamus sapiente dolores voluptas magnam suscipit. Quo!',
          url: '#',
          destination: 'Details',
          image:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/undraw_research.svg',
        },
      },
      {
        title: {
          text: 'Planning',
        },
        content: {
          headline: 'Planning',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam consequuntur corporis reprehenderit repudiandae eveniet animi recusandae! Architecto, sequi explicabo, dignissimos id minima perspiciatis accusamus sapiente dolores voluptas magnam suscipit. Quo!',
          url: '#',
          destination: 'Details',
          image:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/undraw_planning.svg',
        },
        open: false,
      },
      {
        title: {
          text: 'Production',
        },
        content: {
          headline: 'Production',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam consequuntur corporis reprehenderit repudiandae eveniet animi recusandae! Architecto, sequi explicabo, dignissimos id minima perspiciatis accusamus sapiente dolores voluptas magnam suscipit. Quo!',
          url: '#',
          destination: 'Details',
          image:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/undraw_production.svg',
        },
        open: false,
      },
      {
        title: {
          text: 'Testing',
        },
        content: {
          headline: 'Testing',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam consequuntur corporis reprehenderit repudiandae eveniet animi recusandae! Architecto, sequi explicabo, dignissimos id minima perspiciatis accusamus sapiente dolores voluptas magnam suscipit. Quo!',
          url: '#',
          destination: 'Details',
          image:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/undraw_testing.svg',
        },
        open: false,
      },
      {
        title: {
          text: 'Result',
        },
        content: {
          headline: 'Result',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam consequuntur corporis reprehenderit repudiandae eveniet animi recusandae! Architecto, sequi explicabo, dignissimos id minima perspiciatis accusamus sapiente dolores voluptas magnam suscipit. Quo!',
          url: '#',
          destination: 'Details',
          image:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/undraw_result.svg',
        },
        open: false,
      },
    ],
  };
}
