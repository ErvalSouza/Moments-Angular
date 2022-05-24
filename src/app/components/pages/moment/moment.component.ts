import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { MessagesService } from 'src/app/services/messages.service';

import {environment} from 'src/environments/environment'


import { MomentsService } from 'src/app/services/moments.service';

import { Moment } from 'src/app/Moment';
import {faTimes,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?:Moment
  baseApiUrl=environment.baseApiUrl
  faTimes=faTimes
  faEdit=faEdit

  constructor(
    private momentService: MomentsService, 
    private route:ActivatedRoute,
    private messagesService: MessagesService,
    private router:Router,
    
    ) { }

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get("id"))

    this.momentService.getMoment(id).subscribe((item)=>(this.moment=item.data))
  }

 async removeHandler(id:number){
  
  await this.momentService.removeMoment(id).subscribe()
  
  this.messagesService.add("Registro Excluido com Sucesso")

  this.router.navigate(["/"])
  
  }

}
