import React from 'react';
import { FaGithub, FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (


        /* SOCIAL LINKS */

        <footer className="w-100 mt-auto bg-secondary p-4">
            <div className="flex-row space-between px-2">
                <span className="footer px-3">
                    &copy;{(new Date().getFullYear())}
                    {' '}by
                    {' '}<a className="footer px-2" href="https://github.com/stellalph" target="_blank" rel="noopener noreferrer">Stella Ling</a>
                </span>
                <span><a className="footer px-2" href="https://github.com/stellalph/MERN-Ski-Resort.git" target="_blank" rel="noopener noreferrer">< FaGithub /></a></span>
                <span><a className="footer px-2" href="https://www.linkedin.com/in/stella-ling-46246476" target="_blank" rel="noopener noreferrer">< FaLinkedin /></a></span>
                <span><a className="footer px-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">< FaTwitterSquare /></a></span>
            </div>

        

        </footer>
    );
};

export default Footer;