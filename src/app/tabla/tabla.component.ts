import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  usuarioo:any;
  constructor() { 
    this.usuarioo=localStorage.getItem('user');
    this.usuarioo=JSON.parse(this.usuarioo);
  }

  ngOnInit(): void {
  }

}
