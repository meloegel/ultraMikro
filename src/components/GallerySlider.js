import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className='sliderDiv'>
                <Slider {...settings}>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/Adipic_acid_Feather_Dance.jpg')} alt='Adipic acid - Feather Dance' className='galleryImg' />
                        <h3>Adipic acid - Feather Dance</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/Toluic_acid_The_Forest.jpg')} alt='Toluic acid - The Forest' className='galleryImg' />
                        <h3>Toluic acid - The Forest</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/chloro-anthraquinone_Froggy.jpg')} alt='Chloro-anthraquinone - Froggy' className='galleryImg' />
                        <h3>Chloro-anthraquinone - Froggy</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/Methylparaben_Crystal Weave_Fuschia Thumb.jpg')} alt='Methylparabean Crystal Weave - Fuschia Thumb' className='galleryImg' />
                        <h3>Methylparabean Crystal Weave - Fuschia Thumb</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/Toluic_acid_A_Walk_Through_The_Crystalline_Forest.jpg')} alt='Toluic acid - A Walk Thorugh The Crystalline Forest' className='galleryImg' />
                        <h3>Toluic acid - A Walk Thorugh The Crystalline Forest</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/Propylparaben_SKY Thumb.jpg')} alt='Propylparaben - Sky Thumb' className='galleryImg' />
                        <h3>Propylparaben - Sky Thumb</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;