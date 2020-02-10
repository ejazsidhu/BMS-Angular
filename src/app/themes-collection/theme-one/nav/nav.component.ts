import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input('navbar') navbarItem

  // navbarItem=[
  //   {
  //     title:'Home',
  //     link:'home'
  //   },
  //   {
  //     title:'Service',
  //     link:'service'
  //   },
  //   {
  //     title:'About',
  //     link:'about'
  //   },
  //   {
  //     title:'Contact Us',
  //     link:'contact_us'
  //   }
  // ]

  constructor() { }

  ngOnInit() {
  }

}
