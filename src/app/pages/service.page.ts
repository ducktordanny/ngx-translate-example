import {AfterViewInit, Component, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";
import {tap} from "rxjs";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-service-page',
  template: `
    <p>Get translation with .stream(): {{english$ | async}}</p>
    <p>Get translation with .get(): {{english2$ | async}}</p>
    <p>Lang change: {{(langChange$ | async)?.lang}}</p>
    <button mat-raised-button (click)="onLanguageChange('en')">this.translateService.use('en')</button>
    <button mat-raised-button (click)="onLanguageChange('hu')">this.translateService.use('hu')</button>
    <button mat-raised-button (click)="onLanguageChange('ge')">this.translateService.use('ge')</button>
    <p>
      <button mat-raised-button color="primary" (click)="onBrowserLang()">get browser lang</button>
    </p>
  `,
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class ServicePageComponent {
  public langChange$ = this.translateService.onLangChange;
  public english$ = this.translateService.stream('LANGUAGES.EN');
  public english2$ = this.translateService.get('LANGUAGES.EN');

  constructor(private translateService: TranslateService) {}

  public onLanguageChange(lang: string): void {
    this.translateService.use(lang);
  }

  public onBrowserLang(): void {
    console.log(this.translateService.getBrowserLang());
    console.log(this.translateService.getBrowserCultureLang());
  }
}
