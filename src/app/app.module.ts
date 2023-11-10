import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second/second.component";
import { TwoComponent } from "./components/two/two.component";
import { FormsModule } from "@angular/forms";
import { SommeComponent } from './components/somme/somme.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, TwoComponent, SommeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
