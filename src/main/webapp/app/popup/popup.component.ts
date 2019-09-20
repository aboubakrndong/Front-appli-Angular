import {Component, Input, OnInit} from '@angular/core';
import {ZonesService} from "app/entities/zones";
import {IZones} from "app/shared/model/zones.model";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {EnvoismsComponent} from "app/envoisms/envoisms.component";
import {MatDialog, MatDialogRef} from "@angular/material";



@Component({
  selector: 'jhi-editzone',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() zone: IZones;

  constructor( private zoneService: ZonesService, private modalService: NgbModal, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  ShareWithSms() {
    const dialogRef = this.dialog.open(EnvoismsComponent,
    { width:'600px' , closeOnNavigation:false, disableClose:true, height:'400px'});
    //modalRef.componentInstance.zone = this.zone;

  }

   ShareWithEmail() {
   var msgbody=("NomZone:"+this.zone.nomzone+
       "Couverture:"+this.zone.couverture+
       "Population:"+this.zone.population+
       "Cadastre:"+this.zone.cadastre)
     let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Your+Subject+here&body=' +msgbody+ '&ui=2&tf=1&pli=1';
     window.open(url, 'sharer', 'status=0,toolbar=yes, alwaysOnTop=yes ,scrollbars=yes,resizable=yes,top=100,left=500,width=700,height=500');
   }

  onNoClick(){
    //dialogRef.close();
    this.dialog.closeAll();
  }

}
