import React, { Component } from 'react';
import CourseServiceClient from '../services/CourseServiceClient';

class CourseList extends Component {

    constructor(props) {
        super(props);
        this.courseService = CourseServiceClient.instance;
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.state = {
            courses: [],
            course: {
                title: '',
                id: 0
            }
        }
    }

    render() {
        return (
            <div>
                <div class="row">
                    Course Manager
                    <input className="form-control"
                           placeholder="New Course Title"
                           value={this.state.course.title}
                           onChange={this.titleChanged}
                    />
                    <button
                        className="btn btn-primary btn-block"
                        onClick={this.createCourse}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
                <ul className="list-group">
                    <span className="float-left">
                        <i>Title </i>
                        <i> Owned By  </i>
                        <i>Last Updated</i>
                    </span>
                    {this.renderListCourses(this.state.courses)}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.courseService.findAllCourses().then((value) => this.setState({courses : value}));
    }

    renderListCourses(courses) {
        let courseList = courses.map(function(course) {
            return <CourseRow course={course}/>
        });
        return courseList;
    }

    titleChanged(e) {
        this.setState({
            course: {title: e.target.value}
        });
    }

    createCourse() {
        this.state.course.id = this.state.courses.length + 1;
        console.log(this.state.course);
        this.courseService.createCourse(this.state.course);
        this.setState({
            course : {
                title: ''
            }
        })
    }

    deleteCourse(id) {
        this.courseService.deleteCourse(id);
    }

    
}

class CourseRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                <span className="float-left">
                    <i>{this.props.course.title}</i>
                    <i> me  </i>
                    <i>{this.props.course.modified}</i>
                </span>
                <span className="float-right">
                 <i className="fa fa-trash"></i>
                 <i className="fa fa-pencil"></i>
               </span>
            </li>
        )
    }
}

export default CourseList