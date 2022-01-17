import React from 'react'

const Services = ({services}) => {
    const ourServices = services.service
    return (
        <div className='services'>
            <div className="section-header">
                <h2>{services.servicesSubtitles}</h2>
                <h1>{services.servicesTitle}</h1>
            </div>
            <div className="our-services">
                {
                ourServices.map((service, index) => 
                    <div className="service" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.content}</p>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Services
