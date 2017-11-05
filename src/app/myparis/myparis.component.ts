import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MyparisService } from './myparis.service';


@Component({
  selector: 'app-my-paris',
  templateUrl: './myparis.component.html',
  styleUrls: [  ]
})
export class MyparisComponent  {

    configs;

  constructor(private _MyparisService: MyparisService) {
         this._MyparisService.getConfiguration().subscribe((res) => {
                this.configs = res;
                console.log('after reading');
                console.log(this.configs);
            },
            (error) => console.log('error : ' + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
        );
  }
}



