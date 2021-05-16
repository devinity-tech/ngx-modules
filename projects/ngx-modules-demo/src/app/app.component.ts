import { Component } from '@angular/core';
import { PillType } from '@devinity-tech/ngx-modules/src/lib/pill'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pillType = PillType;
  title = 'ngx-modules-demo';
}
