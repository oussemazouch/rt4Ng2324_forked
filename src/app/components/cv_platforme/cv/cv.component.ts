import {Component, OnInit} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit
{
  personnes:Personne [];
  SelectedPesonne:Personne;
  constructor() {
    this.personnes=[
      new Personne(1,'zouch','oussema',21,'oussema_zouch.jpg',111888888,'pentester'),
      new Personne(2,'abdelkader','iheb',22,'geder.jpg',111666666,'game developper'),
      new Personne(3,'merhben','aziz',22,'merhben.png',111444444,'pentester'),
      new Personne(4,'test','test',22,'',555555555,'test')

    ];
    this.SelectedPesonne=new Personne();
  }

  ngOnInit(): void {
  }

  selectPersonne(personne:Personne){
  this.SelectedPesonne=personne;
  }


}
