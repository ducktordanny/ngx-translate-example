import {Component} from "@angular/core";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-props-page',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Value</mat-label>
      <input matInput type="number" #input value="1" autocomplete="off">
    </mat-form-field>

    <p>{{'PROPS.VALUE' | translate: {value: input.value} }}</p>
    <p translate [translateParams]="{value: input.value}">PROPS.VALUE</p>

    <p>{{propsValueWithService | async}}</p>
    <p>{{propsValueWithService2 | async}}</p>
  `,
  standalone: true,
  imports: [
    TranslateModule,
    MatInputModule,
    CommonModule
  ],
})
export class PropsPageComponent {
  public propsValueWithService = this.translateService.stream('PROPS.VALUE', {value: '.stream()'});
  public propsValueWithService2 = this.translateService.get('PROPS.VALUE', {value: '.get()'});
  constructor(private translateService: TranslateService) {}
}
