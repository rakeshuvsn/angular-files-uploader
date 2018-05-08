import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilesUploaderModule } from './files-uploader/files-uploader.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FilesUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
