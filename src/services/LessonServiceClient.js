import React from 'react';

let _singleton = Symbol();

export default class LessonServiceClient {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseServiceClient(_singleton);
        return this[_singleton]
    }

    createLesson(courseId, moduleId, lesson) {
        const COURSE_API_URL = 'http://localhost:8080/api/course/{cid}/module/{mid}/lesson';
        return fetch(COURSE_API_URL.replace('cid', courseId).replace('mid', moduleId),
            {   body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteLesson(courseId) {
        const COURSE_API_URL = 'http://localhost:8080/api/lesson/{id}';
        return fetch(COURSE_API_URL.replace('id', courseId),
            {   headers: { 'Content-Type': 'application/json' },
                method: 'DELETE'
            }).then(function (response)
        { return response.json(); })
    }

    findAllLessons() {
        const COURSE_API_URL = 'http://localhost:8080/api/lesson';
        return fetch(COURSE_API_URL,
            {   headers: { 'Content-Type': 'application/json' },
                method: 'GET'
            }).then(function (response)
        { return response.json(); })
    }

    findLessonById(id) {
        const COURSE_API_URL = 'http://localhost:8080/api/lesson/{id}';
        return fetch(COURSE_API_URL.replace('id', id),
            {   headers: { 'Content-Type': 'application/json' },
                method: 'GET'
            }).then(function (response)
        { return response.json(); })
    }

    findAllLessonsForModule(moduleId, courseId) {
        const COURSE_API_URL = 'http://localhost:8080/api/course/{cid}/module/{mid}/lesson';
        return fetch(COURSE_API_URL.replace('id', moduleId).replace('cid', courseId),
            {   headers: { 'Content-Type': 'application/json' },
                method: 'GET'
            }).then(function (response)
        { return response.json(); })
    }

    updateLesson(lesson, id) {
        const COURSE_API_URL = 'http://localhost:8080/api/lesson/{id}';
        return fetch(COURSE_API_URL.replace('id', id),
            {   body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then(function (response)
        { return response.json(); })
    }

}