import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { MyparisComponent } from './myparis/myparis.component';
import { MyprofilComponent} from './myprofil/myprofil.component';
import { RuleGameComponent} from './ruleGame/ruleGame.component';
import { RankingComponent} from './userManagement/ranking/ranking.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, MyparisComponent, MyprofilComponent, RuleGameComponent, RankingComponent],
  imports: [BrowserModule, AppBoostrapModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
