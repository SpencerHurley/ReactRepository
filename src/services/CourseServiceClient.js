import React from 'react';

let _singleton = Symbol();
export default class CourseServiceClient {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseServiceClient(_singleton);
        return this[_singleton]
    }

    createCourse(course) {
        const COURSE_API_URL = 'http://localhost:8080/api/course/';
        return fetch(COURSE_API_URL,
            {   body: JSON.stringify(course),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }


    deleteCourse(courseId) {
        const COURSE_API_URL = 'http://localhost:8080/api/course/' + courseId;
        return fetch(COURSE_API_URL,
            {   headers: { 'Content-Type': 'application/json' },
                method: 'DELETE'
            }).then(function (response)
        { return response.json(); })
    }

    findAllCourses() {
        const COURSE_API_URL = 'http://localhost:8080/api/course/';
        return fetch(COURSE_API_URL,
            {   headers: { 'Content-Type': 'application/json' },
                method: 'GET'
            }).then(function (response)
        { return response.json(); })
    }

    findCourseById(courseId) {
        const COURSE_API_URL = 'http://localhost:8080/api/course/' + courseId;
        return fetch(COURSE_API_URL,
            {   headers: { 'Content-Type': 'application/json' },
                method: 'GET'
            }).then(function (response)
        { return response.json(); })
    }

    updateCourse(course) {
        const COURSE_API_URL = 'http://localhost:8080/api/course/';
        return fetch(COURSE_API_URL,
            {   body: JSON.stringify(course),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then(function (response)
        { return response.json(); })
    }
}