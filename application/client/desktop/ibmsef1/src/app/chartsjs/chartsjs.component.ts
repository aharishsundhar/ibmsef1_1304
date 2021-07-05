import { Component, OnInit } from '@angular/core';
import { ChartsjsService } from './chartsjs.service';

@Component({
  selector: 'app-chartsjs',
  templateUrl: './chartsjs.component.html',
  styleUrls: ['./chartsjs.component.scss'],
})

export class ChartsjsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'user1', field: 'user1'  },{ headerName: 'user2', field: 'user2'  },{ headerName: 'user3', field: 'user3'  },];
    public chart = {
        user1: '',
        user2: '',
        user3: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private chartsjsService: ChartsjsService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpCreate() {
        this.chartsjsService.GpCreate(this.chart).subscribe(data => {
            this.chart.user1 = ''
 	 	this.chart.user2 = ''
 	 	this.chart.user3 = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.chartsjsService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}