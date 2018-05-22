import React, { Component } from 'react';
import ModuleServiceClient from '../services/ModuleService';

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.moduleService = ModuleServiceClient.instance;
    }

    renderModules(listModules){

    }

    render() {
        let listModules = moduleService.findAllModules();
        return renderModules(listModules);
    }

}

