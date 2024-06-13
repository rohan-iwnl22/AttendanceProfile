import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProfilePhoto = ({ src, name }) => {
    return (
        <Card style={{ width: '250px', height: '250px' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    );
};


ProfilePhoto.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
};

export default ProfilePhoto;
