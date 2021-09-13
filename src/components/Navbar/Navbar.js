import React, {useState} from 'react';


function Navbar() {
    const [collapse, setCollapse] = useState(false);

    const handleCollapseToggler = () => {
        setCollapse(!collapse);
    }
    return (
        <nav className="navbar navbar-expand-md navbar-light navbar-custom">
            <a className="navbar-brand ms-4" href="/">
                <img
                    src={`${process.env.PUBLIC_URL}LogoMuseoNormal-1.png`}
                    className={"navbar-logo"}
                    alt={"Museo de Guadalupe"}
                ></img>
                <img
                    src={`${process.env.PUBLIC_URL}LogoMuseoNormal-2.png`}
                    className={"navbar-logo"}
                    alt={"Museo de Guadalupe"}
                ></img>
            </a>
            <button
                className={"navbar-toggler"}
                type="button"
                onClick={handleCollapseToggler}>
                <span className={"navbar-toggler-icon"}></span>
            </button>

            <div
                className={"collapse navbar-collapse" + (collapse ? " show" : "")}
            >
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href="/instrucciones">Instrucciones</a>
                    </li>
                    <li className={"nav-item"}>
                        <a className={"nav-link"} href="/creditos">Créditos</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;