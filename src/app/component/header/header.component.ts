import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titre: string =  'Bienvenue !';
  slogan: string = 'Réalisé avec un superbe SSD Samsung EVO 970 Plus !';
  testlaclasse: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
