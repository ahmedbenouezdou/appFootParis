import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-paris',
  templateUrl: './myparis.component.html',
  styleUrls: [  ]
})
export class MyparisComponent implements OnInit  {
  results = '';

  constructor(private http: HttpClient)
  {
    
  }
  ngOnInit(): void {
    this.http.get('../app/mesparis/equipe.json').subscribe(data => {
      console.log(data);
    });
  }
}



