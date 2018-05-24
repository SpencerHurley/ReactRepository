import React, { Component } from 'react';
import CourseList from './CourseList'

export default class CourseManager extends Component {

    render() {
        return (
            <div>
                <tr style={{backgroundColor : '#72a9ff', }}>
                    <td style = {{}}>Course Manager</td>
                    <td></td>
                    <td>
                        <form>
                            <label>
                                Name:
                                <input type="text" name="name" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </td>
                </tr>
                <CourseList/>
            </div>
            )
    }
}
