import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
    declarations: [
        AppComponent,
        CourseDetailsComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
