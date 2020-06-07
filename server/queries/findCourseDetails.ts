import { CourseModel, LessonModel } from '../model/model';

export function findCourseDetails(courseId: number) {
    return CourseModel.findByPk(courseId, {
        include: [{
            model: LessonModel
        }]
    });
}
