import { Component, OnInit } from "@angular/core";
import * as SampleJson from "./sample.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Paymerang Test';
  sampleJson: any = (SampleJson as any).default;
  count: number = 0;
  invoiceCount: number = 0;
  pageNumbers: Array<number> = new Array();

  constructor () {}
  ngOnInit(){
    for (let i = 0; i < this.sampleJson.length; i++){
      this.pageNumbers.push(i+1);
    }
  }

  nextButton():void{
    var temp = this.count + 1;
    if (temp > this.sampleJson.length-1){
      this.count = 0;
    }
    else{
      this.count++;
    }
    this.invoiceCount = 0;

  }

  previousButton():void{
    var temp = this.count - 1;
    if (temp < 0){
      this.count = this.sampleJson.length-1;
    }
    else{
      this.count--;
    }
    this.invoiceCount=0;

  }

  nextInvoice():void{
    var temp = this.invoiceCount + 1;
    if (temp > this.sampleJson[this.count]["Remittance"].length-1){
      this.invoiceCount = 0;
    }
    else{
      this.invoiceCount++;
    }
  }

  previousInvoice():void{
      var temp = this.invoiceCount - 1;
      if (temp < 0){
        this.invoiceCount = this.sampleJson[this.count]["Remittance"].length-1;
      }
      else{
        this.invoiceCount--;
      }
    }

  selectPage(value: any):void {
    this.count = value - 1;
  }

}
