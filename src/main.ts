import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './main/webapp/core/app.module';
import { environment } from './main/webapp/environments/environment';

/*if (environment.production) {
  enableProdMode();
}*/
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
