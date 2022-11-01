import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }

}
