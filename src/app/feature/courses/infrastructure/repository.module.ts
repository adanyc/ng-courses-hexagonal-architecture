import { InjectionToken, NgModule } from '@angular/core';
import { CourseRepository } from '../domain/course.repository';
import { LocalStorageCourseRepository } from './local-storage-course.repository';

export const COURSE_REPOSITORY = new InjectionToken<CourseRepository>('CourseRepository');

@NgModule({
  providers: [
    {
      provide: COURSE_REPOSITORY,
      useFactory: () => new LocalStorageCourseRepository(),
    },
  ],
})
export class RepositoryModule { }