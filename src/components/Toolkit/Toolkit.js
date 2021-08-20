import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faSyncAlt, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import './Toolkit.css'

function Toolkit({button, enableButton, playHandler, resetHandler}) {
    return (
        <div className="controller-container">
            <FontAwesomeIcon
                className={"icon-button" + (enableButton ? "" : " disabled")}
                onClick={enableButton ? playHandler : "return false;"}
                icon={button ? faPlay : faPause}
                size={"3x"}
            />
            <FontAwesomeIcon className={"icon-button"} onClick={resetHandler} icon={faSyncAlt}/>
            <Link to="galeria">
                <FontAwesomeIcon className={"icon-button"} icon={faImages} size={"3x"}/>
            </Link>
        </div>
    )
}

Toolkit.propTypes = {
    button: PropTypes.bool,
    enableButton: PropTypes.bool,
    playHandler: PropTypes.func,
    resetHandler: PropTypes.func,
}

export default Toolkit;