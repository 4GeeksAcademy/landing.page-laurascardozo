import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <h1 className="navbar-brand ps-3 text-light" href="#">PETS</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active text-light">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-light" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;