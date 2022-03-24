import React from "react";
import CarouselComponent from "./CarouselComponent";
import Slider from "react-slick";


const ArrowLeft = (props) => (
    <div
        {...props}
        className={'prev'}>
        <img src="./images/leftArrow.svg"/>
    </div>
);
const ArrowRight = (props) => (
    <div
        {...props}
        className={'next'}>
        <img src="./images/rightArrow.svg"/>
    </div>
);
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFooter: 1
        };

        this.settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 7,
            arrows: true,
            prevArrow: <ArrowLeft/>,
            nextArrow: <ArrowRight/>,
            responsive: [
                {
                    breakpoint: 506,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        arrows: true,
                        prevArrow: <ArrowLeft/>,
                        nextArrow: <ArrowRight/>,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        arrows: true,
                        prevArrow: <ArrowLeft/>,
                        nextArrow: <ArrowRight/>,
                    }
                },
                {
                    breakpoint: 648,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        arrows: true,
                        prevArrow: <ArrowLeft/>,
                        nextArrow: <ArrowRight/>,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 7,
                        infinite: true,
                        arrows: true,
                        prevArrow: <ArrowLeft/>,
                        nextArrow: <ArrowRight/>,
                    }
                },
                {
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 7,
                        infinite: true,
                        arrows: true,
                        prevArrow: <ArrowLeft/>,
                        nextArrow: <ArrowRight/>,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 7,
                        infinite: true,
                        arrows: true,
                        prevArrow: <ArrowLeft/>,
                        nextArrow: <ArrowRight/>,
                    }
                },
            ]
        };
    }

    render() {
        return (
            <div className="container">
                <SimpleSlider settings={this.settings} data={this.props.data.dateOfTheLesson}/>
            </div>
        );
    }
}

class SimpleSlider extends React.Component {
    render() {
        return (
            <Slider {...this.props.settings}>
                {this.props.data.map(item => {
                    console.log(item)
                    return <div>
                        <CarouselComponent date={item.date}/>
                    </div>
                })}
            </Slider>

        );
    }
}
