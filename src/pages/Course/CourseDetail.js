import React, { Component } from 'react';

class CourseDetail extends Component {
    render() {
        const groups = this.props.data;
        const id = this.props.match.params.Group;
        const groupNode = groups.filter((group) => {
            if (group.id == this.props.match.params.Group)
                return group;
        });

        const courseNode = groupNode[0].courses.filter((course) => {
            if (course.id == this.props.match.params.Course)
                return course;
        });


        const contentNode = courseNode[0].content.map((content) => {
            return (<li key={content.desc}>{content.desc}</li>);
        });

        const objectiveNode = courseNode[0].objective.map((objective) => {
            return (<li key={objective.desc}>{objective.desc}</li>);
        });

        const prerequisiteNode = courseNode[0].prerequisite.map((prerequisite) => {
            return (<li key={prerequisite.desc}>{prerequisite.desc}</li>);
        });



        return (
            <div className="container-fluid">
                <img src="../../image/csharp.png" alt={courseNode[0].courseName} width="100%" height="400"></img>
                <h1 className="text-center">Course Name:&nbsp;&nbsp;&nbsp;{courseNode[0].courseName}</h1>
                <div className="panel-group">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="row">                              
                                <div className="col-sm-3 text-center">Duration:&nbsp;&nbsp;&nbsp;{courseNode[0].duration}</div>
                                <div className="col-sm-3 text-center"></div>
                                <div className="col-sm-3 text-center"></div>
                                <div className="col-sm-3 text-center">Course Fee:&nbsp;&nbsp;&nbsp;INR&nbsp;{courseNode[0].fee}</div>
                            </div>
                        </div>

                        <div className="panel-body">
                            <ul>{courseNode[0].courseDesc}</ul>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">Objective</div>
                        <div className="panel-body"><ul>{objectiveNode}</ul></div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">Pre-Requisites</div>
                        <div className="panel-body"><ul>{prerequisiteNode}</ul></div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">Contents:</div>
                        <div className="panel-body"><ul>{contentNode}</ul></div>
                    </div>


                </div>
            </div>
        );

    }
}
export default CourseDetail;