import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends Component {
    render() {
        const services = this.props.serviceMenu;
        const serviceNode = services.map((service) => {
            return (
                <div class="column text-center">
                    <Link to={service.path + service.id}>
                        <span class="glyphicon glyphicon-heart logo-small"></span>
                        <h5 key={service.id}>{service.menuName}</h5>
                        {service.desc}
                    </Link>
                </div>
            )
        });

        const trainings = this.props.trainingMenu;
        const trainingNode = trainings.map((training) => {
            return (
                <li key={training.id}><Link class="dropdown-item" to={training.path + training.id}>{training.menuName}</Link></li>
            )
        });

        const groups = this.props.courseMenu;
        const groupNode = groups.map((group) => {
            const courseNode = group.courses.map((course) => {
                return (<Link to={group.path + group.id + "/" + course.id} key={course.id}>{course.courseName}</Link>);
            });
            return (
                <div class="column">
                    <h5 key={group.id}>{group.courseGroup}</h5>
                    {courseNode}
                </div>
            )
        });




        return (            
            <nav class="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <h4 className="text-right highlight">
                        <span className="glyphicon glyphicon-phone">: +91-800-580-4511&nbsp;&nbsp;&nbsp;</span>
                        <span className="glyphicon glyphicon-envelope">: info@something.com</span>
                    </h4>

                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"><span class="highlight">TECH</span>Solutions</a>
                    </div>
                    <div class="collapse navbar-collapse text-left" id="myNavbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li><Link to="/">HOME</Link></li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="/services">SERVICES
                                    <span class="caret"></span></a>
                                <div class="dropdown-content dropdown-content-service">
                                    {serviceNode}
                                </div>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="/Training">TRAINING
                                    <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    {trainingNode}
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="/Courses">COURSES
                                    <span class="caret"></span></a>
                                <div class="dropdown-content dropdown-content-course text-left">
                                    {groupNode}
                                </div>
                            </li>
                            <li><Link to="/Career">CAREERS</Link></li>
                            <li><Link to="/Resource">RESOURCES</Link></li>
                            <li><Link to="/ContactUs">CONTACT US</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default PageHeader;