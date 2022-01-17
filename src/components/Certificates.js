import React from 'react'
import Container from '../components/Container/Container'

const Certificates = ({certificates}) => {
    return (
        <Container>
            <div className='certificates'>
                {
                    certificates.map((certificate, index) =>
                    <div key={index} className={`certificate certificate-${index}`}>
                        <img src={certificate.image ? certificate.image.mediaItemUrl: ''} />
                    </div>
                    )
                }            
            </div>
        </Container>
    )
}

export default Certificates
