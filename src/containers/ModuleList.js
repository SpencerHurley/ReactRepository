import React, { Component } from 'react';
import ModuleServiceClient from '../services/ModuleService';

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.moduleService = ModuleServiceClient.instance;
        this.setState({
            modules: []
        })
    }

    componentDidMount() {
        this.moduleService.findAllModules().then((value) => this.setState({modules : value}));
    }

    render() {
        return this.renderModules(listModules);
    }

    renderModules(listModules){

    }

}

class ModuleRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                    <i>{this.props.module.title}</i>
            </li>
        )
    }
}

