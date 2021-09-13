import React from "react";

function Footer() {
    return (
        <footer className="footer text-center text-lg-start text-muted">
            <div className="footer-1">
                <img
                    src={`${process.env.PUBLIC_URL}SC-Negro.png`}
                    className={"footer-logo"}
                    alt={"Secretaría de Cultura"}
                ></img>
                <div className={"logo-sep"}></div>
                <img
                    src={`${process.env.PUBLIC_URL}inah.png`}
                    className={"footer-logo"}
                    alt={"Instituto Nacional de Antropología e Historia"}
                ></img>
            </div>
            <div className="text-center p-1 footer-2">
                © 2021&nbsp;
                <a
                    className="text-reset fw-bold"
                    href="https://web.facebook.com/museo.guadalupe"
                >Museo de Guadalupe</a>
            </div>
        </footer>
    )
}

export default Footer;