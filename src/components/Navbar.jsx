import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src='https://w7.pngwing.com/pngs/554/825/png-transparent-binary-file-computer-icons-binary-code-data-visualization-text-logo-sign.png' alt="logo" width={50} height={50}></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/binary">Binary-Conversion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/octal">Octal-Conversion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/hexa">HexaDecimal-Conversion</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
