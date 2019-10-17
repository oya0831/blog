import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        {/*<div className="container">*/}
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
              <Link className="navbar-item" to="/blog/ham" state={{ path: "ham" }}>
                はむ日和
              </Link>
              <Link className="navbar-item" to="/blog/owner" state={{ path: "owner" }}>
                飼い主日和
              </Link>
              <Link className="navbar-item" to="/blog/story" state={{ path: "story" }}>
                ネタ日和
              </Link>
          </div>
        {/*</div>*/}
      </nav>
    )
  }
}

export default Navbar
