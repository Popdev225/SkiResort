import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



const Footer = () => {
    return (


        /* SOCIAL LINKS */

        <footer className="footer mt-auto py-2 bg-dark">
            <div className="flex-row space-between px-2">
                <span className="footer px-3">
                    &copy;{(new Date().getFullYear())}
                    {' '}by
                    {' '}<a className="footer px-2" href="https://github.com/stellalph" target="_blank" rel="noopener noreferrer">Stella Ling</a>
                </span>
                <span><a className="footer px-2" href="https://github.com/stellalph/MERN-Ski-Resort.git" target="_blank" rel="noopener noreferrer">< BsGithub style={{ color: 'white', fontSize: '30px' }} /></a></span>
                <span><a className="footer px-2" href="https://www.linkedin.com/in/stella-ling-46246476" target="_blank" rel="noopener noreferrer">< BsLinkedin style={{ color: 'light-blue', fontSize: '30px' }} /></a></span>
                <span><a className="footer px-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">< BsTwitter style={{ color: 'white', fontSize: '30px' }} /></a></span>


            </div>



        </footer>
    );
};

export default Footer;

