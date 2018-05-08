/**
 * Created by UPPALAR on 5/8/2018.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilesUploaderComponent } from './files-uploader.component';



@NgModule({
    declarations: [
        FilesUploaderComponent,
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        FilesUploaderComponent
    ],
    providers: [],
})
export class FilesUploaderModule { }