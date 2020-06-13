import { Component, Input, OnInit } from '@angular/core';
import { CourseDetails } from '../../../../shared/model/course-details';

@Component({
    selector: 'course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
    @Input()
    courseDetails: CourseDetails;

    constructor() {
    }

    ngOnInit(): void {
    }
}
