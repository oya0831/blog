import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import './all.sass'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      drawerActiveClass: '',
      importantTextActiveClass: 'navbar-layout',
      drawerLayoutClass: '',
      importantTextLayoutClass: 'burger-position',
      aboutTextPositionClass: 'about-position',
      contactTextPositionClass: 'contact-position',
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
              drawerActiveClass: 'drawer-active',
              importantTextActiveClass: '',
              drawerLayoutClass: 'drawer-layout',
              importantTextLayoutClass: '',
              aboutTextPositionClass: '',
              contactTextPositionClass: '',
            })
          : this.setState({
              navBarActiveClass: '',
              drawerActiveClass: '',
              importantTextActiveClass: 'navbar-layout',
              drawerLayoutClass: '',
              importantTextLayoutClass: 'burger-position',
              aboutTextPositionClass: 'about-position',
              contactTextPositionClass: 'contact-position',
            })
      }
    )
  }

  render() {
    const { data } = this.props
    const image = this.props.state==="index" ? data.main : data.sub
    const imagePosition = this.props.state==='index' ? 'index-position': 'other-position'

    return (
      <div className="main-navbar">
        <PreviewCompatibleImage  imageInfo={{image: image, alt:"kinako"}}/>
        <Link to="/">
          <h1 className="main-text">はむっと！</h1>
        </Link>
        <div className="burger-position burger-layout">
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span/>
            <span/>
            <span/>
          </div>
        </div>
           
        <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass} ${this.state.drawerLayoutClass}`}
        >
          { this.state.active ? 
            <>
              <Link className="navbar-item text-layout" to="/blog/ham" state={{ path: "ham" }}>
                はむ日和
              </Link>
              <Link className="navbar-item text-layout" to="/blog/owner" state={{ path: "owner" }}>
                飼い主日和
              </Link>
              <Link className="navbar-item text-layout" to="/blog/story" state={{ path: "story" }}>
                ネタ日和
              </Link>
              <Link className="navbar-item text-layout" to="/hamz" state={{ path: "hamz" }}>
                うちのはむちゃんず
              </Link>
            </>
            :  
            <>
              <div className="column is-4 has-text-centered">
                <Link className="navbar-item" to="/blog/ham" state={{ path: "ham" }}>
                  はむ日和
                </Link>
                </div>
                <div className="column is-4">
                  <Link className="navbar-item" to="/blog/owner" state={{ path: "owner" }}>
                    飼い主日和
                  </Link>
                </div>
                <div className="column is-4">
                  <Link className="navbar-item" to="/blog/story" state={{ path: "story" }}>
                    ネタ日和
                  </Link>
                </div>
                <div className={imagePosition}>
                  <Link to="/hamz">
                    <div 
                      style={{
                        width: '50px',
                        display: 'inline-block'
                      }}
                    >
                      <PreviewCompatibleImage  imageInfo={{image: data.hamz, alt:"kinako"}}/>
                    </div>
                  </Link>
                </div>
              </>
          }

          <div className={`${this.state.aboutTextPositionClass}`}>
            <Link className="navbar-item text-layout" to="/about">
              { this.state.active === false && <span role="img" aria-label="ham">🐹</span> }
              このブログについて
            </Link>
          </div>
          <div className={`${this.state.contactTextPositionClass}`}>
            <Link className="navbar-item text-layout" to="/contact">
              { this.state.active === false && <span role="img" aria-label="ham">🐹</span> }
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ({ state }) => (
  <StaticQuery
    query={graphql`
      query {
        main:file(relativePath: {eq: "kinako.jpg"}) {
          childImageSharp{
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sub:file(relativePath: {eq: "kinako2.jpg"}) {
          childImageSharp{
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hamz:file(relativePath: {eq: "kinako3.JPG"}) {
          childImageSharp{
            fluid(maxWidth: 100, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <Navbar data={data} state={state} />}
  />
)
