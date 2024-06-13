import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FacultyPfp from './Facultypfp'
import dummyImage from '../MentorProfile/profileDummy.svg'
import FacultyCalendar from './FacultyCalendar'
import 'react-calendar/dist/Calendar.css';
import './Fpfp.css'

const FacultyProfile = () => {
    return (
        <>
            <Container >
                <Row>
                    <Col className='profContainer'>
                        <FacultyPfp
                            src={dummyImage}
                            name="Prof. XYZ"
                            subject="ABC"
                        />
                    </Col>
                    <Col>
                        <FacultyCalendar />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FacultyProfile