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
                        <img src={require('../styles/img/art/Phenacetin_Psychic_River.jpg')} alt='Phenacetin - Psychic River' className='galleryImg' />
                        <h3>Phenacetin - Psychic River</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Adipic_Acid_Feather_Dance.jpg')} alt='Adipic acid - Feather Dance' className='galleryImg' />
                        <h3>Adipic acid - Feather Dance</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Toluic_acid_The_Forest.jpg')} alt='Toluic acid - The Forest' className='galleryImg' />
                        <h3>Toluic acid - The Forest</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Benzoic_acid_Jamaica_Mon.jpg')} alt='Benzoic acid - Jamacia Mon' className='galleryImg' />
                        <h3>Benzoic acid - Jamacia Mon</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Niacinamide_Eiger_Green.jpg')} alt='Nicinamide - Eiger Green' className='galleryImg' />
                        <h3>Nicinamide - Eiger Green</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Alprazolam_Xmas.png')} alt='Alprazolam - Xmas' className='galleryImg' />
                        <h3>Alprazolam - Xmas</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Phenacetin_Purple_Rain_Navaho.jpg')} alt='Phenacetin - Purple Rain Navaho' className='galleryImg' />
                        <h3>Phenacetin - Purple Rain Navaho</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/chloro-anthraquinone_Froggy.jpg')} alt='Chloro-anthraquinone - Froggy' className='galleryImg' />
                        <h3>Chloro-anthraquinone - Froggy</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Methylparaben_Crystal Weave_Fuschia Thumb.jpg')} alt='Methylparabean - Crystal Weave Fuschia Thumb' className='galleryImg' />
                        <h3>Methylparabean Crystal Weave - Fuschia Thumb</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Benzoic_acid_Spherulites.jpg')} alt='Benzoic Acid - Spherilites' className='galleryImg' />
                        <h3>Benzoic Acid - Spherilites</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Toluic_acid_A_Walk_Through_The_Crystalline_Forest.jpg')} alt='Toluic acid - A Walk Thorugh The Crystalline Forest' className='galleryImg' />
                        <h3>Toluic acid - A Walk Thorugh The Crystalline Forest</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Propylparaben_Sky_Thumb.png')} alt='Propylparaben - Sky Thumb' className='galleryImg' />
                        <h3>Propylparaben - Sky Thumb</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Adipic_acid_Feather_Dance_Fire.jpg')} alt='Adipic acid - Feather Dance Fire' className='galleryImg' />
                        <h3>Adipic acid - Feather Dance Fire</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Toluic_acid_Glacial_Valley.jpg')} alt='Toluic acid - Glacial Valley' className='galleryImg' />
                        <h3>Toluic acid - Glacial Valley</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Niacinamide_Eiger.jpg')} alt='Niacinamide - Eiger' className='galleryImg' />
                        <h3>Niacinamide - Eiger</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Phenacetin_PurpleRain.jpg')} alt='Phenacetin - Purple Rain' className='galleryImg' />
                        <h3>Phenacetin - Purple Rain</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Niacinamide_Gaia_Flag.jpg')} alt='Nicinamide - Gaia Flag' className='galleryImg' />
                        <h3>Nicinamide - Gaia Flag</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Propylparaben_Redshift.jpg')} alt='Propylparaben - Red Shift' className='galleryImg' />
                        <h3>Propylparaben - Red Shift</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Methylparaben_Crystal Weave_Teal.jpg')} alt='Methylparabean - Crystal Weave Teal' className='galleryImg' />
                        <h3>Methylparabean - Crystal Weave Teal</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Phenacetin_Blue_Lagoon.jpg')} alt='Phenacetin - Blue Lagoon' className='galleryImg' />
                        <h3>Phenacetin - Blue Lagoon</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Adipic_acid_Feather_Dance_Sha.jpg')} alt='Adipic acid - Feather Dance Sha' className='galleryImg' />
                        <h3>Adipic acid - Feather Dance Sha</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Vanillin_Flame.jpg')} alt='Vanillin - Flame' className='galleryImg' />
                        <h3>Vanillin - Flame</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Niacinamide_Eiger_Fire.jpg')} alt='Niacinamide - Eiger Fire' className='galleryImg' />
                        <h3>Niacinamide - Eiger Fire</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Benzoic_Acid_Fusion.jpg')} alt='Benzoic Acid - Fusion' className='galleryImg' />
                        <h3>Benzoic Acid - Fusion</h3>
                    </div>
                    <div className='galleryDiv'>
                        <img src={require('../styles/img/art/Niacinamide_Eiger_Gray.jpg')} alt='Nicinamide - Eiger Gray' className='galleryImg' />
                        <h3>Nicinamide - Eiger Gray</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;