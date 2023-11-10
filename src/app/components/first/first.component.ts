import { Component } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent {
  constructor() {}
  //state => attributes
  isHidden = true;
  message = "";
  name = "aymen";
  // behaviour => methods
  showHide() {
    this.isHidden = !this.isHidden;
  }
}
