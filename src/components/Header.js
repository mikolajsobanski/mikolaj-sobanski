import { Row, Col } from 'react-bootstrap'
import logo from '../assets/fak.jpg'
import './css/header.css'

function Header() {
    return(
        <div className='header-mainDiv'>
            <Row className='header-row'>
                <Col md={8} className='header-firstCol'>
                    <div className='header-firstColDiv'>
                    <div>
                        Mikołaj Sobański
                    </div>
                    <div>
                        Designer & Software developer
                    </div>
                    <div>
                        Data management & Data Science 
                    </div>
                    </div>
                    
                </Col>
                <Col md={4}  className='header-firstCol'>
                    <img src={logo} className="header-myPhoto" />
                </Col>
            </Row>
        </div>
    )
}

export default Header