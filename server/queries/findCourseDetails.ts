import { CourseModel, LessonModel } from '../model/model';
import { CourseDetails, createCourseDetails } from '../../shared/model/course-details';
import Bluebird from 'bluebird';

export function findCourseDetails(courseId: number): Bluebird<CourseDetails> {
    return CourseModel.findByPk(courseId, {
        include: [{
            model: LessonModel
        }]
    }).then(createCourseDetails);
}
