import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

interface Course extends Model {
    description: string;
    url: string;
    longDescription: string;
    iconUrl: string;
    courseListIcon: string;
    seqNo: number;
    comingSoon: boolean;
    isNew: boolean;
    isOngoing: boolean;
}

type CourseStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Course;
}

const sequelize = new Sequelize('mysql://root:Root1234@127.0.0.1:3306/typescript-course');

const CourseModel = <CourseStatic>sequelize.define('Course', {
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    longDescription: DataTypes.TEXT,
    iconUrl: DataTypes.STRING,
    courseListIcon: DataTypes.STRING,
    seqNo: DataTypes.INTEGER,
    comingSoon: DataTypes.BOOLEAN,
    isNew: DataTypes.BOOLEAN,
    isOngoing: DataTypes.BOOLEAN
});

CourseModel.findAll()
    .then(
        results => console.log(JSON.stringify(results))
    );
