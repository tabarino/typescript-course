export interface Lesson {
    readonly url: string;
    description: string;
    duration: string;
    readonly seqNo: number;
    courseId: number;
    pro: boolean;
    tags?: string;
}
