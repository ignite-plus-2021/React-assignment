import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.jpeg';

export default function Profile() {
    return (
        <div>
            <div className='card'>
                <div className='card-image'>
                    <img className='activator' src={ImgProfile} alt='Keerthana' />
                </div>
                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>
                        Keerthana B
                    </span>
                    <p style={{ fontSize: "15px" }}><i class="fas fa-phone"></i> Phone:<br></br></p>
                    8095926831<br></br>
                    <p style={{ fontSize: "15px" }}> <i class="fas fa-code"></i> Github:</p>
                    <p style={{ fontSize: "12px" }}>https://github.com/Keerthanab14</p>
                </div>

                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>
                        Education
                    </span>
                    <div className='row body'>
                        <div className='col-10'>
                            <div>
                                <strong>Sir M Visvesvaraya Institute Of Technology, Bangalore</strong>
                            </div>

                            Aug 2018-May 2022<br></br>

                            <div>
                                BE in  Electronics and Communication.<br>
                                </br>
                                CGPA : 9.5/10
                            </div>
                        </div>
                    </div>
                    <div className='row body'>
                        <div className='col-10'>
                            <div>
                                <strong>Deeksha Center for Learning, Bangalore</strong>
                            </div>
                            Mar 2016-Mar 2018<br></br>

                            <div>
                                Graduated XII <br>
                                </br>
                                Percentage: 96%
                            </div>
                        </div>
                    </div>

                    <span className='card-title activator grey-text text-darken-4'>
                        Coursework
                    </span>
                    <div className='row body'>
                        <div className='col-10'>
                            <div>
                                <strong>  UNDERGRADUATE</strong>
                            </div>
                        </div>
                        <ul>
                            <li>
                                Python<br></br>
                            </li>
                            <li>
                                Data Structures<br></br>
                            </li>
                            <li>
                                C language<br></br>
                            </li>
                            <li>
                                Computer Organization<br></br>
                            </li>
                            <li>
                                Enterpreneurship<br></br>
                            </li>
                            <li>
                                Verilog HDL<br></br>
                            </li>
                            <li>
                                Digital Signal Processing<br></br>
                            </li>
                            <li>
                                Information Theory
                            </li>
                            <li>
                                Microcontrollers
                            </li>
                            <li>
                                Engineering Mathematics
                            </li>
                            <li>
                                Communication Systems
                            </li>
                        </ul>
                    </div>

                    <span className='card-title activator grey-text text-darken-4'>
                        Skills
                    </span>
                    <div className='row body'>
                        <div className='col-10'>
                            <div>
                                <strong>Programming Languages</strong>
                            </div>
                        </div>
                        <ul class>
                            <li>
                                Python<br></br>
                            </li>
                            <li>
                                Java<br></br>
                            </li>
                            <li>
                                C language<br></br>
                            </li>
                            <li>
                                C++<br></br>
                            </li>
                            <li>
                                Python<br></br>
                            </li>
                            <li>
                                Javascript<br></br>
                            </li>

                        </ul>
                    </div>
                    <div className='row body'>
                        <div className='col-10'>
                            <div>
                                <strong>Technologies</strong>
                            </div>
                        </div>
                        <ul>
                            <li>
                                Web development<br></br>
                            </li>
                            <li>
                                Data analytics<br></br>
                            </li>
                            <li>
                                Machine Learning<br></br>
                            </li>
                            <li>
                                Computer Vision<br></br>
                            </li>
                            <li>
                                Cloud computing<br></br>
                            </li>
                        </ul>
                    </div>
                    <div className='row body'>
                        <div className='col-1'>
                            <div>
                                <strong><left>Tools</left></strong>
                            </div>
                        </div>
                        <ul>
                            <li>
                                GIT<br></br>
                            </li>
                            <li>
                                BASH<br></br>
                            </li>
                            <li>
                                MySQL<br></br>
                            </li>

                        </ul>
                    </div>
                    <span className='card-title activator grey-text text-darken-4'>
                        Certifications
                    </span>
                    <div className='row body'>
                        <div className='col-1'>
                            <div>

                            </div>
                        </div>
                        <ul>
                            <li>
                                Project management specialization by Google.
                            </li>
                            <li>
                                IBM Data science specialization.
                            </li>
                            <li>
                                UI/UX Specialization by Google.
                            </li>
                            <li>
                                ML by Andrew NG.
                            </li>


                        </ul>
                    </div>

                </div>
            </div>
        </div>


    );
}
