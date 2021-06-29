import React from 'react';
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61959.08845003126!2d75.5296953332504!3d13.932206449007843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba8d0ec620495%3A0x5589d733c2761a17!2sShivamogga%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1624455249187!5m2!1sen!2sin" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8495071944'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'preepreethi636@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Shivamogga Karnataka'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;