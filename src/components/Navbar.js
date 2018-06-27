import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/fishLogo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container" style={{ backgroundColor: '#0078cf' }}>
      <div className="navbar-brand" style={{ padding: '0px 20px' }}>
        <Link to="/" className="navbar-item">
            <img src={logo} alt="Fish"/>
        </Link>
      </div>
      <div className="navbar-start">
        <Link to="/" className="navbar-item" style={{   color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }}>
          Cedric Hrng
        </Link>
        <Link className="navbar-item" to="/about" style={{ color: '#ffffff' }}>
          About Me
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/CedricWebProject/GatsbyBlog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
