import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  constructor(private dataService: DataService){ 
  
  }
  
  ngOnInit(){
    this.dataService.dataEmitter.subscribe((val)=>{
      this.inputText = val;
    });
  }
  
  inputText: string = '';
}
