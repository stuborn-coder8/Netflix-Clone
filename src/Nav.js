import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Nav.css';

export default function Nav() {

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => (window.scrollY > 100) ? handleShow(true) : handleShow(false);

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img
                    onClick={() => history.push("/")}
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
                    alt=""
                />

                <img
                    onClick={() => history.push("/profile")}
                    className="nav__avatar"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
                    alt=""
                />
            </div>
        </div>
    )
}
