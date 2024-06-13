import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProfilePhoto from './ProfilePhoto'
import './studentProf.css'
import StackedBarGraph from './Graphs/BarGraph'
// import dummyImage from './Graphs/dummyImage.svg'
import dummyImage from './Graphs/profileDummy.svg'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);





const Studentprofile = () => {

  const barData = {
    labels: ['CNND', 'AT', 'COA', 'EM-IV', 'OS'],
    datasets: [
      {
        label: 'Present',
        data: [35, 27, 39, 24, 20],
        backgroundColor: 'rgba(167, 201, 87)',
      },
      {
        label: 'Absent',
        data: [4, 12, 0, 15, 19],
        backgroundColor: 'rgba(239, 35, 60)',
      },
    ],
  };




  return (
    <Container md={6} sm={12} className='stdContainer'>
      <Row>
        <Col>
          <ProfilePhoto
            src={dummyImage}
            name="Rohan Prakasan"
          />
        </Col>
      </Row>
      <Row className='barGContainer'>
        <Col>
          <StackedBarGraph data={barData} />
        </Col>
      </Row>
    </Container >
  )
}

export default Studentprofile