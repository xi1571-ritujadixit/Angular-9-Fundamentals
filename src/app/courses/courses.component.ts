import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    selectedCourse = null;
    courses = [
        {
            id: 1,
            title: 'Angular 9 Fundamentals',
            description: 'Learn the fundamentals of Angular 9',
            percentComplete: 26,
            favorite: true
        },
        {
            id: 2,
            title: 'JavaScript The Really REALLY HARD PARTS',
            description: 'Worship Will Sentence',
            percentComplete: 50,
            favorite: true
        }
    ];

    constructor() { }

    ngOnInit(): void {
        this.resetSelectedCourse();
    }

    resetSelectedCourse() {
        const emptyCourse = {
            id: null,
            title: '',
            description: '',
            percentComplete: 0,
            favorite: false
        };

        this.selectedCourse = emptyCourse;
    }

    selectCourse(course) {
        this.selectedCourse = course;
    }

    saveCourse() {
        console.log('SAVE COURSE!');
    }

    deleteCourse(courseId) {
        console.log('COURSE DELETED!', courseId);
    }

    cancel() {
        this.resetSelectedCourse();
    }

}
