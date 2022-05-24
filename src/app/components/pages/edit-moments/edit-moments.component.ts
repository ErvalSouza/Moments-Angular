import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MomentsService } from 'src/app/services/moments.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-moments',
  templateUrl: './edit-moments.component.html',
  styleUrls: ['./edit-moments.component.css']
})
export class EditMomentsComponent implements OnInit {

moment!:Moment;
btnText="Editar";
baseApiUrl=environment.baseApiUrl



  constructor(
    private momentService:MomentsService,
    private route: ActivatedRoute
     
     ) { }

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get("id"))

    this.momentService.getMoment(id).subscribe((item)=>{
      this.moment= item.data
    })
  }

}
