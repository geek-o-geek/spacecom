import { Component, OnInit } from '@angular/core';
import { LaunchSpaceService } from './launch-space.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-launch-space',
  templateUrl: './launch-space.component.html',
  styleUrls: ['./launch-space.component.css']
})
export class LaunchSpaceComponent implements OnInit {
  launchArr: Array<any> = [];
  launchServices$: any;
  years: Array<number> = [];
  filterObj: object
  constructor(private launchServices: LaunchSpaceService) { }

  ngOnInit() {
    let fullYear = +(new Date().getFullYear());
    let currentIteration = fullYear;

    for(;fullYear - currentIteration <= 15; currentIteration--)
      this.years.push(currentIteration);

    this.years.reverse();
    this.setInitialFilter();
  }

  launchProgramList(){
    this.launchServices$ = this.launchServices.launches(this.filterObj)
    .pipe(take(1))
    .subscribe(res => {
      this.launchArr = res;
    })
  }

  setInitialFilter(){
    this.filterObj = { limit: 10 }
    this.launchProgramList()
  }

  filters(obj){
    const { type, value } = obj;

    this.filterObj[type] = value;
    this.launchProgramList()
  }

  ngOnDestroy(){
    if(this.launchServices$) this.launchServices$.unsubscribe();
  }

}
