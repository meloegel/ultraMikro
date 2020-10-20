import React from 'react'



const Home = () => {

    return (
        <div>
            <div className='titleDiv'>
                <h1 className='mainTitle'>Ultramikro</h1>
            </div>
            <div className='scope'>
                <h1>Scope of Services</h1>
                <p>Ultramikro, LLC is a consultant firm providing guidance for pharmaceutical and food industries in
                contamination control and in global pharmacopeial compliance. Particulate matter in the pharmaceutical
                presentation may be due to foreign material or due to substances intrinsic to the formulation, process or
                package. Detecting visible particles in the final product and tracking the subvisible particle load are key
                quality parameters and essential in product improvement activities. Reducing particle impact is quite
                dependent upon their identification, which is facilitated through analysis by a variety of instruments and
            approaches. Microscopical applications are foremost in the Ultramikro approach.</p>

                <p>DS (Scott) Aldrich is owner and president of Ultramikro and has 40 years of industrial experience in
                pharmaceutical development and processing in commercial production and new product design and launch. He has
                extensive experience in active ingredient and excipient processing and in product forms such as oral liquid,
                oral solid dose (immediate and controlled release), emulsion, sterile injections, suspensions, lyophilized
                cake and topical presentations. Development and commercial product support include packaging selection
                (glass, metal, rubber, plastic) for conventional and device industries, package presentation and release
            inspection procedures.</p>

                <p>DS Aldrich is a long-standing member of the Parenteral Drug Association, American Chemical Society and
                Microscopy Society of America. He has been an expert volunteer for the United States Pharmacopeia (USP)
                since 2005, and currently serves on the Dosage Forms expert committee for 2015-2020. The USP committee
                proposes and revises standards for pharmaceutical products, and focuses on many official chapters;
                including, &lt;1&gt; Injections, &lt;381&gt; Elastomeric Closures for Injections, &lt;788&gt; Particulate
                Matter in Injections and &lt;789&gt; Particulate Matter in Ophthalmic Solutions among others, and related
            monographs.</p>
            </div>
            <div className='services'>
                <h2>The firm provides as primary services:</h2>
                <ul>
                    <li>Guidance for pharmaceutical development systems, including inspection and analytical methods for
                materials analysis, especially particulate matter.</li>
                    <li> Microscopy Training </li>
                    <ul class='subList'>
                        <li>
                            Presentations are offered for the fundamentals and use of all microscopies, including optical, infrared,
                            laser (Raman) and electron. These microscopical techniques provide the core competency for “particle
                        hunting”.</li>
                    </ul>
                    <li>Evaluation of visual inspection systems, and development of visual inspection capability. </li>
                    <li> Consideration of USP trends, FDA expectations.</li>
                    <ul class='subList'>
                        <li>Review of the methods used for visual inspection particle sizing and counting to comply with compendial
                    guidance. Advice for use of alternate methods and validation of current methods is included. </li>

                        <li>Review of the methods used for particle sizing and counting.</li>
                    </ul>
                    <li>Lab design and equipment selection for particle laboratories</li>
                    <li>Particulate matter detection and characterization process (forensic) training </li>
                    <ul class='subList'>
                        <li>Particle detection, isolation, manipulation, and analysis are key elements of the microscopical process.
                        The goal of this training is to bring attention and practice in techniques of particle manipulation,
                    characterization and ultimately, identification.</li>
                    </ul>
                    <li>Product stability evaluation method development</li>
                    <li>USP particulate matter assay methodology training for General Chapters &lt;787&gt;, &lt;788&gt;,
                &lt;789&gt;, and &lt;790&gt;.</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;