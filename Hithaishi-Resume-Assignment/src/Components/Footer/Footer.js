import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <span>
            <a  className="link" href="https://www.linkedin.com/in/meghana-dinesh-48720b192/" target="_blank"><LinkedInIcon /></a>
            <a  className="link" href="https://github.com/Meghana-Dinesh2000" target="_blank"><GitHubIcon/></a>
            <a  className="link" href="https://www.instagram.com/meghana_dinesh6/" target="_blank"><InstagramIcon /></a>
            <a  className="link" href="https://www.facebook.com/meghana.dinesh.127" target="_blank"><FacebookIcon/></a>
            <a  className="link" href="https://twitter.com/dinesh_meghana?s=08" target="_blank"><TwitterIcon/></a>
            </span>
        </div>
        
    )
}

export default Footer
