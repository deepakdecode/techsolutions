import React, { Component } from 'react';
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'


class Main extends Component {
    render() {
        
        const courseMenu = this.props.courseMenu;
        const serviceMenu = this.props.serviceMenu;
        const trainingMenu = this.props.trainingMenu;
        return (
            <div>
                <PageHeader courseMenu={courseMenu} serviceMenu={serviceMenu} trainingMenu={trainingMenu}/>
                <br />
                <div className="container">
                    {this.props.children}
                </div>
                <PageFooter />
            </div>

        );
    }
}

export default Main