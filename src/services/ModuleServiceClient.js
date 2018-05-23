import React from 'react';

let _singleton = Symbol();
export default class ModuleServiceClient {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseServiceClient(_singleton);
        return this[_singleton]
    }

    createModule(module, cid) {
        const COURSE_API_URL = 'http://localhost:8080/api/course/{cid}/module';
        return fetch(COURSE_API_URL.replace('cid', cid),
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteModule(id) {
        const COURSE_API_URL = 'http://localhost:8080/api/module/{id}';
        return fetch(COURSE_API_URL.replace('id', id),
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'DELETE'
            }).then(function (response)
        { return response.json(); })
    }


    findAllModules() {
        const COURSE_API_URL = 'http://localhost:8080/api/course/';
        return fetch(COURSE_API_URL,
            {   headers: { 'Content-Type': 'application/json' },
                method: 'GET'
            }).then(function (response)
        { return response.json(); })
    }

    findModuleById(courseId) {
        const COURSE_API_URL = 'http://localhost:8080/api/module/{id}';
        return fetch(COURSE_API_URL.replace('id', courseId),
            {   headers: { 'Content-Type': 'application/json' },
                method: 'GET'
            }).then(function (response)
        { return response.json(); })
    }

    findAllModulesForCourse(courseId) {
        const COURSE_API_URL = 'http://localhost:8080/api/course/{cid}/module';
        return fetch(COURSE_API_URL.replace('cid', courseId),
            {   headers: { 'Content-Type': 'application/json' },
                method: 'GET'
            }).then(function (response)
        { return response.json(); })
    }

    updateModule(module, id) {
        const COURSE_API_URL = 'http://localhost:8080/api/module/{id}';
        return fetch(COURSE_API_URL.replace('id', id),
            {   body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            }).then(function (response)
        { return response.json(); })
    }
}