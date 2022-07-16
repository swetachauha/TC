import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchTCComponent } from '../search-tc/search-tc.component';

@Component({
  selector: 'app-tctable',
  templateUrl: './tctable.component.html',
  styleUrls: ['./tctable.component.css']
})
export class TCTableComponent implements OnInit {

  @ViewChild (SearchTCComponent) child:SearchTCComponent | undefined;

  getStudent:any=[];
  dataTable:any;
  getPurchases:any=[];
  dtOptions: DataTables.Settings = {};
  title='pagination';
  tableSize:number=5;
  tableSizes:any=[5,10,15,20];
  page:number=1;
  count:number=0;
  isData:boolean | undefined;
  noData:string | undefined;
  date:Date| undefined;
  errorMessage:String | undefined;
 tc:any={};
  constructor() { }

  ngOnInit(): void {
    this.tc=this.child?.tc;
    

  }

 
}
