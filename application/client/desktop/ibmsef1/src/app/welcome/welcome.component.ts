import { Component, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})

export class WelcomeComponent implements OnInit {
    columnDefs: any = [{ headerName: 'firstname', field: 'firstname'  },{ headerName: 'secondname', field: 'secondname'  },];
    public users = {
        firstname: '',
        secondname: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private welcomeService: WelcomeService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpCreate() {
        this.welcomeService.GpCreate(this.users).subscribe(data => {
            this.users.firstname = ''
 	 	this.users.secondname = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.welcomeService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}