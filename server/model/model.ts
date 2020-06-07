import { Sequelize } from 'sequelize';
import { initCourseModel } from './initCourseModel';
import { initLessonModel } from './initLessonModel';

const dbUrl = 'mysql://root:Root1234@127.0.0.1:3306/typescript-course';
const sequelize = new Sequelize(dbUrl);

export const CourseModel = initCourseModel(sequelize);
export const LessonModel = initLessonModel(sequelize);

CourseModel.hasMany(LessonModel, { foreignKey: "courseId" });
LessonModel.belongsTo(CourseModel, { foreignKey: "courseId"});
