import React, { Component } from 'react';

import PageCarousel from './PageCarousel';
import PageContent from './PageContent';

class Home extends Component {
    render() {
        return (
            <div>
                <PageCarousel />              
                <PageContent />
            </div >
        )
    }
}

export default Home;
