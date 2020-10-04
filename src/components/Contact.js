import React from 'react'



const Contact = () => {

    return (
        <div>
            <div className='contactDiv'>
                <h1>D Scott Aldrich<br></br>
                President, Ultramikro, LLC<br></br>
                Particulate Matter Control Consulting<br></br></h1>
                <h2>Contact Information</h2>
                <div className='addrDiv'>
                    <h3>Address:</h3>
                    <address>11133 ED Avenue <br></br>
                        Richland, MI 49083</address>
                </div>
                <p className='contactPhone'>Business phone/fax: (269)629-4995</p>
                <div className='addrDiv'>
                    <h3>Email:</h3>
                    <p className='email'>info@ultramikro.com</p>
                </div>
                <div id='scottImgDivContact'>
                    <img id='scottImgContact' src={require('../img/Scott_Photo_2.jpg')} alt='Scott' />
                </div>
            </div>
        </div>
    )
}

export default Contact;