# NgxTranslate and i18n

## What is ngx-translate?

- i18n library for Angular
- It has a service, a directive and a pipe
- It grabs translations from simple JSON files
- Can change between languages in run time

## Load translation files

- No loader by default
- You can write your own
  - Using `HttpClient` or `fs`
- Use `@ngx-translate/http-loader`
- Other libs that may fit for your needs

## NgxTranslate HttpLoader

- Looks for `/assets/i18n/<lang>.json` by default
- Load files with `HttpClient`
