import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FinanceService } from '../finance.service';

function FocusOnInput(){
     document.getElementById("inputbox").focus();
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
  
})
export class SearchComponent implements OnInit {
  searchQuery: any;
  showsearch:any;
  autoFocusVar = {
    autofocus: false
    
  };
  closeResult: string;
  ShowData:any;
  prs:Object;
  constructor(private modalService: NgbModal, private serviceF:FinanceService) { }

  ngOnInit(): void {
    FocusOnInput()
    this.getClickData()
  }

  // ngAfterViewInit(): void {
  // this.autoFocusVar.autofocus=true;  
  // }
  showMessage(){
    console.log("clicking")
this.showsearch =this.searchQuery; 
 this.searchQuery='';

}
openLg(content) {
  this.modalService.open(content, { size: 'lg' });
}
getClickData(){
this.serviceF.getFinanceData().subscribe(success=>{
  console.log(success);
  // this.prs= JSON.parse(success);
  this.ShowData=success;
})
}
}
