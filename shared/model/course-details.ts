import { Lesson } from './lesson';
import { CourseSummary } from './course-summary';

export interface CourseDetails extends CourseSummary {
    longDescription: string;
    comingSoon?: boolean;
    isNew: boolean;
    isOngoing?: boolean;
    lessons: Lesson[];
}
