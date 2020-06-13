import { Lesson } from './lesson';

export interface Course {
    description: string;
    readonly url: string;
    longDescription: string;
    readonly iconUrl: string;
    readonly courseListIcon: string;
    readonly seqNo: number;
    comingSoon?: boolean;
    isNew: boolean;
    isOngoing?: boolean;
    lesson: Lesson[];
}
