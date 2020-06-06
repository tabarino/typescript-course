import { initCourseModel } from './initCourseModel';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:Root1234@127.0.0.1:3306/typescript-course');
export const CourseModel = initCourseModel(sequelize);
