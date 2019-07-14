import { NgModule } from '@angular/core';

import { CookbookSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [CookbookSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [CookbookSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CookbookSharedCommonModule {}
