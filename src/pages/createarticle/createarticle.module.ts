import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateArticlePage } from './createarticle';

@NgModule({
  declarations: [
    CreateArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateArticlePage),
  ],
})
export class CreateArticlePageModule {}
