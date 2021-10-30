import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/site/core/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private helperService : HelperService,
              private router: Router,
              private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.helperService.loadScript(
      '../../../../assets/js/scripts.js'
    );
  }

}
