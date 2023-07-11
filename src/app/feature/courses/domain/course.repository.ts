import { Course } from "./course";

export interface CourseRepository {
  save(course: Course): void;
}
