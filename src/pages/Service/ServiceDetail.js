import React, { Component } from 'react';

class ServiceDetail extends Component {
    render() {
        const services = this.props.data;
        const id = this.props.match.params.id;
        const service = services.filter(service => {
            if (service.id == id) {
                return service;
            }
        });
        return (
            <div>
               <h1> {service[0].content}</h1>
            </div>
        )
    }
}

export default ServiceDetail;