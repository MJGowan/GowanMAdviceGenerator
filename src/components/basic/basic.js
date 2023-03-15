import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './basic.css';
import fetchData from '../../Services/fetch';

export default function Screen() {

    const handleSubmit = async () => {
        const response = await fetchData();
        setAdvice(response.advice);
        setId(response.id);
    }

    const [advice, setAdvice] = useState("");
    const [id, setId] = useState("");

    return (
        <div className='background'>
            <Container fluid>
                <Row className="d-flex center">
                    <Col>
                        {/* lg={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }} */}
                        <Container fluid className="center box">
                            <br />
                            <p className='advice' onChange={e => setId(e.target.value)}>ADVICE # {id}</p>
                            <br />
                            <p className='quote' onChange={e => setAdvice(e.target.value)}>"{advice}"</p>
                            <br/>
                        <Container fluid>
                            <svg className='dividerDesktop divider' width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
                            <svg className='dividerMobile divider' width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
                        </Container>
                        </Container>
                        <Container fluid className='button center' onClick={handleSubmit}>
                            <svg className='dice' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}