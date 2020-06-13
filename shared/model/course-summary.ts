export interface CourseSummary {
    readonly id: number;
    description: string;
    readonly url: string;
    readonly iconUrl: string;
    readonly courseListIcon: string;
    readonly seqNo: number;
}

export function createCourseSummary({ id, description, url, iconUrl, courseListIcon, seqNo }: any): CourseSummary {
    return {
        id, description, url, iconUrl, courseListIcon, seqNo
    };
}

export function createCourseSummaries(data: any[]): CourseSummary[] {
    return data.map(createCourseSummary);
}
