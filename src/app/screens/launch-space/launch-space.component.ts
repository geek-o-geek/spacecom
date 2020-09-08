import { Component, OnInit } from '@angular/core';
import { LaunchSpaceService } from './launch-space.service';
import { take } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-launch-space',
  templateUrl: './launch-space.component.html',
  styleUrls: ['./launch-space.component.css']
})
export class LaunchSpaceComponent implements OnInit {
  launchArr: Array<any> = [];
  launchServices$: any;
  years: Array<object> = [];
  filterObj: object;
  isLandSuccess: boolean;
  isLaunchSuccess: boolean;
  constructor(
    private loadingService: LoadingService,
    private launchServices: LaunchSpaceService) { }

  ngOnInit() {
    let fullYear = +(new Date().getFullYear());
    let currentIteration = fullYear;

    for(;fullYear - currentIteration <= 15; currentIteration--)
      this.years.push({value: currentIteration, isSelected: false});

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
    this.isLandSuccess = undefined
    this.isLaunchSuccess = undefined

    for (var i = 0; i < this.years.length; i++) {
      this.years[i]['isSelected'] = false;
    }
    this.filterObj = { limit: 50 }
    this.launchProgramList()
  }

  filters(obj){
    const { type, value } = obj;

    if(type == "launch_success")
      this.isLaunchSuccess = value
    
    if(type == "land_success")
      this.isLandSuccess = value  

    this.filterObj[type] = value;
    this.launchProgramList()
  }

  ngOnDestroy(){
    if(this.launchServices$) this.launchServices$.unsubscribe();
  }

}
