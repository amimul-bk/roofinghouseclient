import React, { useEffect } from 'react';
import SuccessImages from '../../assets/SuccessImages.png';

//  Styles
const successPageStyles = {
    backgroundContainer: {
        position: 'relative',
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        marginTop: '70px',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: '-1',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    text: {
        color: '#fff',
        fontSize: '24px',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
    },
};

function SuccessPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={successPageStyles.backgroundContainer}>
            <div style={successPageStyles.backgroundImage}>
                <img style={successPageStyles.image} src={SuccessImages} alt='Ultimates Roofing LLC Home' />
            </div>
            <div style={successPageStyles.text}>
                <h1 style={{ fontWeight: "Bold" }}>Thank You</h1>
                <p>Your message was received successfully. We'll be in touch soon!</p>
            </div>
        </div>
    );
}

export default SuccessPage;
