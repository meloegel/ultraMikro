import React from 'react'
import SimpleSlider from './GallerySlider'


const Gallery = () => {

    return (
        <div>
            <h1 className='galleryTitle'>Gallery</h1>
            <SimpleSlider />
            <div>
                <h2 className='crossedPolars'>Crossed Polars - Microscopy Art</h2>
                <div className='aboutArt'>
                    <div>
                        <p>These images are photomicrographs of crystalline material as viewed with a polarized microscope. The
                        material may be examined as-is, or heated to melt and then allowed to freeze at room temperature. The
                                    specimen is viewed between polarized filters, crossed at 90°.</p>
                    </div>
                    <div>
                        <img src={require('../img/scope.jpg')} alt='Microscope' className='bottomGalleryImg' />
                    </div>
                    <div>
                        <img src={require('../img/microScope.jpg')} alt='Microscope Front' className='bottomGalleryImg' />
                    </div>
                    <div>
                        <p> What we see are colors produced by interference of light waves after passing through the substance in
                        different vectors and at different speeds, yeilding striking contrast and effects. The colortation is
                        thinkness dependent and solid form-specific. Most solids have three-dimensional symmetry (crystalline)
                        and even semi-solids form liquid crystals of two-dimensional symmetry, like soap. Both inorganic and
                        organic substances can yeild beautiful colors and structure when viewed in this manner. The large images
                                    are printed on an Epson Ultra-Chrome K3 2400 printer on Epson photo grade paper.</p>
                    </div>
                    <div>
                        <p> Scott has an undergraduate degree in Biology from WMU, but his keen interest in microscopy and crystal
                        chemistry began during assignment in Quality Control at the Upjohn Company in the 70's. He is a
                        Kalamazoo, MI native and legacy Upjohn-Pharmacia-Pfizer scientist with R&D and product launch
                        experience. He is now Princial Consultant for Ultramikro, LLC, a particulate matter control advisory
                                    company and Crossed Polars microcrystalline artworks.</p>
                    </div>
                    <div id='scottImgDiv'>
                        <img id='scottImg' src={require('../img/Scott_Photo_2.jpg')} alt='Scott' />
                    </div>
                </div>
                <div className='pricing'>
                    <h2>Pricing</h2>
                    <img className='price' src={require('../img/Artwork_Price_List_JPEG.jpg')} alt='pricing' />
                </div>
            </div>
        </div>
    )
}

export default Gallery;