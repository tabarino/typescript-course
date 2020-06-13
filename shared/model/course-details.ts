import { Lesson } from './lesson';
import { CourseSummary } from './course-summary';

export interface CourseDetails extends CourseSummary {
    longDescription: string;
    comingSoon?: boolean;
    isNew: boolean;
    isOngoing?: boolean;
    Lessons: Lesson[];
}

export function createCourseDetails({
    id, description, url, iconUrl, courseListIcon, seqNo, longDescription, comingSoon, isNew, isOngoing, Lessons
}: any): CourseDetails {
    return {
        id, description, url, iconUrl, courseListIcon, seqNo, longDescription, comingSoon, isNew, isOngoing,
        Lessons: Lessons.map(createLessonFromDbModel)
    };
}

function createLessonFromDbModel({
    id, url, description, duration, seqNo, courseId, pro, tags
}: any) {
    return {
        id,
        url,
        description,
        duration,
        seqNo,
        courseId,
        pro,
        tags
    };
}
