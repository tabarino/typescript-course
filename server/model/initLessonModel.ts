import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

interface Lesson extends Model {
    url: string,
    description: string,
    duration: string,
    seqNo: number,
    courseId: number,
    pro: boolean,
    tags: string,
    gitHubUrl: string
}

type LessonStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Lesson;
}

export function initLessonModel(sequelize: Sequelize) {
    return <LessonStatic>sequelize.define('Lesson', {
        url: DataTypes.STRING,
        description: DataTypes.STRING,
        duration: DataTypes.STRING,
        seqNo: DataTypes.INTEGER,
        courseId: DataTypes.INTEGER,
        pro: DataTypes.BOOLEAN,
        tags: DataTypes.STRING,
        gitHubUrl: DataTypes.STRING
    });
}
