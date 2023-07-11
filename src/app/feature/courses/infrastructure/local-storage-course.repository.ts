import { Course } from "../domain/course";
import { CourseRepository } from "../domain/course.repository";

export class LocalStorageCourseRepository implements CourseRepository {
  save(course: Course) {
    // localStorage.setItem('course', JSON.stringify(course));
    const courses = this.getAllFromLocalStorage();

    courses.set(course.id, course);
    localStorage.setItem('courses', JSON.stringify(Array.from(courses.entries())));
  }

  private getAllFromLocalStorage() {
    const courses = localStorage.getItem('courses');

    if (courses === null) {
      return new Map();
    }

    return new Map(JSON.parse(courses) as Iterable<[string, Course]>);
  }
}