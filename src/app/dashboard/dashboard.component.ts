import { Component, OnInit } from '@angular/core';
import { Records } from '../models/records';
import { FirebaseService } from '../services/firebase.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  records: Records[] = [];
  today_date = '';

  title = 'appBootstrap';

  closeResult: string = '';

  isUser = false;

  constructor(
    private modalService: NgbModal,
    public firebaseService: FirebaseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // this.records = this.firebaseService.readRecords();

    if (localStorage.getItem('user') != null) {
      this.isUser = true;
    } else {
      this.route.navigateByUrl('login');
      this.isUser = false;
    }

    if (this.isUser) {
      this.today_date = this.firebaseService.getDateFormat();

      for (const rec of this.records) {
        console.log(rec);
      }
    }
  }

  logout() {
    this.firebaseService.logout();
    this.route.navigateByUrl('login');
  }

  nextDate() {
    this.today_date = this.firebaseService.nextDate() + '';
    this.records = this.firebaseService.readRecords();
  }

  prevDate() {
    this.today_date = this.firebaseService.prevDate() + '';
    this.records = this.firebaseService.readRecords();
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
