import { CourseModel } from '../model/model';

export function findCourseDetails(courseId: number) {
    return CourseModel.findByPk(courseId);
}
