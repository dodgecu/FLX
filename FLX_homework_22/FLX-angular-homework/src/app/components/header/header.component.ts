import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routeId: string;

  constructor(private router: Router) {
    this.router.events.subscribe((url: Event) => {
      if (url instanceof NavigationEnd) {
      }
    });
  }

  ngOnInit() {}
}
