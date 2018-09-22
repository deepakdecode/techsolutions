import React, { Component } from 'react';

class PageFooter extends Component {
    render() {
        return (
            <footer class="container-fluid text-center">
                <a href="#myPage" title="To Top">
                    <span class="glyphicon glyphicon-chevron-up"></span>
                </a>
                <p>Bootstrap Theme Made By <a href="/" title="Visit us">www.abcd.com</a></p>
            </footer>
        )
    }
}
export default PageFooter;