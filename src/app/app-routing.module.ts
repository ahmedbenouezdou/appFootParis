import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { MyparisComponent} from './myparis/myparis.component';
import { MyprofilComponent} from './myprofil/myprofil.component';
import { RuleGameComponent} from './ruleGame/ruleGame.component';
import { RankingComponent} from './userManagement/ranking/ranking.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'myparis',  component: MyparisComponent },
  { path: 'myprofil',  component: MyprofilComponent },
  { path: 'ruleGame',  component: RuleGameComponent },
  { path: 'ranking',  component: RankingComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}