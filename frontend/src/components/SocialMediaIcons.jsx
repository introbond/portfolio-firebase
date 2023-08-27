import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import { SiGitbook } from 'react-icons/si';

const SocialMediaIcons = () => {
    const openInNewTab = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div>
            <MailIcon
                className="icon-social"
                style={{ bottom: '250px', right: '40px' }}
                onClick={() => openInNewTab('')}
            />
            <FacebookIcon
                className="icon-social"
                style={{ bottom: '200px', right: '40px' }}
                onClick={() => openInNewTab('')}
            />
            <LinkedInIcon
                className="icon-social"
                style={{ bottom: '150px', right: '40px' }}
                onClick={() => openInNewTab('')}
            />
            <SiGitbook
                className="icon-social"
                style={{ bottom: '100px', right: '40px', width: '25px', height: '25px'}}
                onClick={() => openInNewTab('')}
            />
            <GitHubIcon
                className="icon-social"
                style={{ bottom: '50px', right: '40px' }}
                onClick={() => openInNewTab('https://github.com/introbond')}
            />
        </div>
    );
};

export default SocialMediaIcons;
