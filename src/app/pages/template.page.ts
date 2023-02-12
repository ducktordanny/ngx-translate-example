import {Component} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-template-page',
  template: `
    <p translate>HOME.APPLE</p>
    <p translate="HOME.CAT"></p>
    <p>{{'HOME.DOG' | translate}}</p>
  `,
  standalone: true,
  imports: [TranslateModule],
})
export class TemplatePageComponent {}
