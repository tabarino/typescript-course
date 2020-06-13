import { CourseModel } from '../model/model';
import { CourseSummary, createCourseSummaries } from '../../shared/model/course-summary';
import Bluebird from 'bluebird';

export function findAllCourses(): Bluebird<CourseSummary[]> {
    return CourseModel.findAll({
        order: ['seqNo']
    }).then(createCourseSummaries);
}
