import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CookbookSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CookbookSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CookbookSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CookbookSharedModule {
  static forRoot() {
    return {
      ngModule: CookbookSharedModule
    };
  }
}
