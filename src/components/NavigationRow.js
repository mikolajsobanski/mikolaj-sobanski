import { Row, Col } from 'react-bootstrap'
import './css/navigationRow.css'

function NavigationRow() {
    return(
        <div className='navigationRow-mainDiv'>
            <Row className='navigationRow-row'>
                <Col>
                    About me
                </Col>
                <Col>
                    Contact
                </Col>
                <Col>
                    Projects
                </Col>
                <Col>
                    Education & Work
                </Col>
                <Col>
                    <a className='navigationRow-link' href="https://github.com/mikolajsobanski">Github</a>
                </Col>
                <Col>
                    <a className='navigationRow-link' href="https://www.linkedin.com/in/miko%C5%82aj-soba%C5%84ski-278a79275/">LinkedIn</a>
                </Col>
            </Row>
        </div>
    )
}
export default NavigationRow