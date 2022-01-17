import React from 'react'
import Container from './Container/Container';
const Banner = (props) => {
    const banner = props.banner;
    return (
        <>
            <div className='banner' style={{backgroundImage: `url(${banner.background && banner.background.mediaItemUrl })`}}>
                <Container>
                    <div className="banner-wrapper">
                        <div className="banner-content">
                            <h2>Category Film</h2>
                            <h1>{banner.title}</h1>
                            <p className='content'>{banner.content}</p>
                        </div>
                    </div>
                </Container>
            </div>  
        </>
    )
}

export default Banner
