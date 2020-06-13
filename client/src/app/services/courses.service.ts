import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseDetails } from '../../../../shared/model/course-details';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    constructor(private http: HttpClient) {
    }

    loadCourseDetails(courseId: number): Observable<CourseDetails> {
        return this.http.get(`/api/courses/${ courseId }`)
            .pipe(
                map(res => res['payload'])
            );
    }
}
