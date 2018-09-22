import React, { Component } from 'react';

class SocialWidget extends Component {
    render() {
        return (
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#myPage">Logo</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#about">HOME</a></li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">SERVICES
                                <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Web Design & Development</a></li>
                                    <li><a class="dropdown-item" href="#">Cloud Development</a></li>
                                    <li><a class="dropdown-item" href="#">Product Development</a></li>
                                    <li><a class="dropdown-item" href="#">Business Intelligence Solution</a></li>
                                    <li><a class="dropdown-item" href="#">Mobile Development</a></li>
                                    <li><a class="dropdown-item" href="#">Content Management</a></li>
                                    <li><a class="dropdown-item" href="#">E-Commerce Solution</a></li>
                                    <li><a class="dropdown-item" href="#">ERP Solution</a></li>
                                    <li><a class="dropdown-item" href="#">Maintenance & Support</a></li>
                                </ul>


                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">TRAINING
                                <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Academic Internship</a></li>
                                    <li><a class="dropdown-item" href="#">Summer Internship</a></li>
                                    <li><a class="dropdown-item" href="#">Winter Internship </a></li>
                                    <li><a class="dropdown-item" href="#">Specialized Training</a></li>
                                    <li><a class="dropdown-item" href="#">Corporate Training</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">COURSES
                                <span class="caret"></span></a>
                                <div class="dropdown-content">
                                    <div class="row">
                                        <div class="column">
                                            <h5>.Net</h5>
                                            <a href="#">Classic ASP.Net</a>
                                            <a href="#">ASP.Net (MVC)</a>
                                            <a href="#">C#.Net / VB.Net </a>
                                        </div>
                                        <div class="column">
                                            <h5>Front-End Design</h5>
                                            <a href="#">HTML5/CSS</a>
                                            <a href="#">JavaScript/JQuery</a>
                                            <a href="#">Angular/React</a>
                                        </div>
                                        <div class="column">
                                            <h5>Cloud</h5>
                                            <a href="#">MS Azure/AWS</a>
                                            <a href="#">.Net on Azure</a>
                                            <a href="#">Web API</a>
                                        </div>
                                        <div class="column">
                                            <h5>Database</h5>
                                            <a href="#">SQL Server</a>
                                            <a href="#">Oracle</a>
                                            <a href="#">MySQL</a>
                                            <a href="#">MongoDB</a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="column">
                                            <h5>Mobility(Xamarin)</h5>
                                            <a href="#">Android</a>
                                            <a href="#">IOS</a>
                                            <a href="#">Windows</a>
                                        </div>
                                        <div class="column">
                                            <h5>Reporting</h5>
                                            <a href="#">Crystal Report</a>
                                            <a href="#">SSRS</a>
                                        </div>
                                        <div class="column">
                                            <h5>Artificial Intelligence</h5>
                                            <a href="#">UI Path</a>
                                            <a href="#">Blue Prism</a>
                                        </div>
                                        <div class="column">
                                            <h5>Scripting</h5>
                                            <a href="#">PHP</a>
                                            <a href="#">ASP</a>
                                        </div>
                                    </div>

                                    <div class="row">

                                        <div class="column">
                                            <h5>Machine Learning</h5>
                                            <a href="#">Python</a>
                                        </div>
                                        <div class="column">
                                            <h5>CRM</h5>
                                            <a href="#">MS Dynamics</a>
                                            <a href="#">Sales Force</a>
                                        </div>
                                        <div class="column">
                                            <h5>Content Management</h5>
                                            <a href="#">Sharepoint 2010-2016</a>
                                            <a href="#">Office 365</a>
                                        </div>
                                        <div class="column">
                                            <h5>Programming Fundamentals</h5>
                                            <a href="#">C & Data Structure</a>
                                            <a href="#">OOPS & C++</a>
                                            <a href="#">Classic Visual Basic</a>
                                        </div>

                                    </div>

                                </div>                            </li>
                            <li><a href="#portfolio">CAREERS</a></li>
                            <li><a href="#pricing">RESOURCES</a></li>
                            <li><a href="#contact">CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default SocialWidget;