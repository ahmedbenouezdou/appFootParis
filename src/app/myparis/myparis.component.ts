import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MyparisService } from './myparis.service';


@Component({
    selector: 'app-my-paris',
    templateUrl: './myparis.component.html',
    styleUrls: []
})
export class MyparisComponent {

    configs;
    t = {};


    constructor(private _MyparisService:MyparisService) {
        this._MyparisService.getConfiguration().subscribe((res) => {
                this.configs = res;
                console.log('after reading');
                console.log(this.configs);
            },
            (error) => console.log('error : ' + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
        );
        this.t = [
            {
                groupe: 'A',
                equipes: [{titre: "Russie", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}, 
                    {titre: "Uruguay", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}, 
                    {titre: "Egypte", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Arabie Saoudite", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}]
            },
            {
                groupe: 'B',
                equipes: [{titre: "Portugal", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Espagne", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}, 
                    {titre: "Iran", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}, 
                    {titre: "Maroc", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0
                }]
            },
            {
                groupe: 'C',
                equipes: [
                    {titre: "France", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Pérou", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Danemark", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Australie", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}]
            },
            {
                groupe: 'D',
                equipes: [
                    {titre: "Argentine", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Croatie", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Islande", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Nigeria", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}]
            },
            {
                groupe: ' E',
                equipes: [{titre: "Brésil", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Suisse", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Costa Rica", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Serbie", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}]
            },
            {
                groupe: ' F',
                equipes: [
                    {titre: "Allemagne", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Mexique", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Suède", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Corée du Sud", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}]
            },
            {
                groupe: ' G',
                equipes: [
                    {titre: "Belgique", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Angleterre", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Tunisie", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Panama", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}]
            },
            {
                groupe: ' H',
                equipes: [
                    {titre: "Pologne", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Colombie", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Sénégal", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0},
                    {titre: "Japon", g: 0, n: 0, p: 0, BP: 0, BC: 0, point: 0}]
            }
        ];


    }
}



