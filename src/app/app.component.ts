import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle(dimension: string) {
    for(let key in this.hideDivs) {
      this.hideDivs[key] = true;
    }
    console.log(this.hideDivs);
    this.hideDivs[dimension] = false;
    console.log(this.hideDivs);
  }

  hideDivs: any = {
    cooking: false,
    shoes: true
  }
}
