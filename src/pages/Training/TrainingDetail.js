import React, { Component } from 'react';

class TrainingDetail extends Component {
    render() {
        const trainings = this.props.data;
        const id = this.props.match.params.id;
        const training = trainings.filter(training => {
            if (training.id == id) {
                return training;
            }
        });
        return (
            <div className="container-fluid">
                <img src="../../image/csharp.png" alt={training[0].menuName} width="100%" height="400"></img>
                <h1 className="text-center">{training[0].menuName}</h1>
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#About">About Us</a></li>
                    <li><a data-toggle="tab" href="#menu1">Need of internship</a></li>
                    <li><a data-toggle="tab" href="#menu2">Why JMD ?</a></li>
                    <li><a data-toggle="tab" href="#menu3">Course</a></li>
                    <li><a data-toggle="tab" href="#menu3">Apply</a></li>
                </ul>

                <div class="tab-content">
                    <div id="home" class="tab-pane fade in active">
                        <hr />
                        <p> Tech Solutions Pvt. Ltd.  is a Leading Software development, Networking-Security Solutions & IT Training Provider Company. Tech Solution IT Solutions Pvt. Ltd. is also a leading IT Training Service Provider in USA, Jaipur & KOTA that provides comprehensive education and training in various fields of Information Technology, Computer Networking – Security, Software – Website & Embedded Systems – Robotics field.  Tech Solution is providing Summer Training 2018 for Computer Science Engineering Students / Live Project Internship Program 2018 in Jaipur at 9 different locations for B.Tech/M.Tech/BCA/MCA/Bsc/Msc students in own Training-Development Centre with Live Projects.</p>

                        <p>Tech Solution is registered by Govt. of Rajasthan, Govt. of India & is exclusive HP Training Partner. Tech Solution is authorized testing center of Microsoft, Adobe, AutoDesk and HP.</p>

                        <p>Tech Solution is registered as “Tech Solution IT Solutions LLC” in USA and hence all certificates are issued by US company now. Summer Training 2018 for Computer Science Engineering Students is best provided for industry readiness.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <h3>Menu 1</h3>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="menu2" class="tab-pane fade">
                        <h3>Menu 2</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div id="menu3" class="tab-pane fade">
                        <h3>Menu 3</h3>
                        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrainingDetail;