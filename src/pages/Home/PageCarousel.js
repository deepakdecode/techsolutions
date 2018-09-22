import React, { Component } from 'react';

class PageCarousel extends Component {
    render() {
        return (
            <div id="mySlides" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#mySlides" data-slide-to="0" class="active"></li>
                    <li data-target="#mySlides" data-slide-to="1"></li>
                    <li data-target="#mySlides" data-slide-to="2"></li>
                    <li data-target="#mySlides" data-slide-to="3"></li>
                </ul>

                <div class="carousel-inner">
                    <div class="item active">
                        <img src="images\slide1.jpg" alt="World" width="100%" height="400" />
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>We had such a great time in LA!</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images\slide2.jpg" alt="United States" width="100%" height="400" />
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>We had such a great time in LA!</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images\slide3.jpg" alt="Australia" width="100%" height="400" />
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>We had such a great time in LA!</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images\slide4.jpg" alt="Human" width="100%" height="400" />
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>We had such a great time in LA!</p>
                        </div>
                    </div>
                </div>
                <a class="left carousel-control" href="#mySlides" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#mySlides" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        )
    }
}
export default PageCarousel;