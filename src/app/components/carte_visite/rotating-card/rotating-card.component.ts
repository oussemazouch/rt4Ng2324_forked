import { Component } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css']
})
export class RotatingCardComponent {
  FirstName= "oussema";
  Name= "zouch";
  Job="Junior penetration tester";
  FavouriteCitation="it's not over until i win";
  image_path="/assets/images/oussema_zouch.jpg"
  job_description="perform simulated cyberattacks on a company's computer systems and networks.";
  job_keywords="web attacks ,network pentesting"
  contructor() {}
  changecard(firstname:any,name:any,job:any,citation:any,image:any,job_description:any,keywords:any){
    this.FirstName=firstname.value;
    this.Name=name.value;
    this.Job=job.value;
      this.FavouriteCitation=citation.value;
    this.image_path="/assets/images/"+ image.value;
    this.job_description=job_description.value;
    this.job_keywords=keywords.value;
  }
}
