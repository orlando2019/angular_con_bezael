import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../../cargar-scripts.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css'],
})
export class Page404Component implements OnInit {
  constructor(private _CargarScript: CargarScriptsService) {
    _CargarScript.Cargar(['script']);
  }

  ngOnInit(): void {}
}
