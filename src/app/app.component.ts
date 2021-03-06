import { Component, TemplateRef, Input, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.logo {
      max-height: 30px;
      padding-bottom: 5px;
    }`
  ]
})
export class AppComponent {
  public modalRef: BsModalRef;
  public oneAtATime: boolean = false;
  tour = [];
  constructor(private modalService: BsModalService) {
    this.tour = ['Phase de groupes','8e de finale','1/4 de finale','Demi-finales','Finale'];
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }
}
