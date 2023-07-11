import { Course } from "../../domain/course";
import { CourseRepository } from "../../domain/course.repository";

export function createCourse(courseRepository: CourseRepository, course: Course): void {
  courseRepository.save(course);
}