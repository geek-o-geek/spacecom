import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  showSpinner: boolean = false;
  constructor(private spinnerService: LoadingService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.init()
  }

  init() {
    console.log("init called...")
    this.spinnerService.getSpinnerObserver()
    .subscribe((status) => {
      console.log(status, "status")
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });
  }

}
