import { Component, OnInit } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { Observable } from 'rxjs';
import { CourseDetails } from '../../../shared/model/course-details';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    course$: Observable<CourseDetails>;

    constructor(private coursesService: CoursesService) {
    }

    ngOnInit() {
        this.course$ = this.coursesService.loadCourseDetails(1);
    }
}
