import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    CoursesRoutingModule,
  ],
})
export class CoursesModule { }
