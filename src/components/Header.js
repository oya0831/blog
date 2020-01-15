import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { Link, StaticQuery, graphql } from 'gatsby'

import PreviewCompatibleImage from './PreviewCompatibleImage'
import PathContext from '../contexts/PathContext'

//import Header Img
import hoverImg from '../img/header/after.png'
import aboutImg from '../img/header/about.png'
import contactImg from '../img/header/contact.png'
import indexWoodImg from '../img/header/index-hamz.png'
import otherWoodImg from '../img/header/other-hamz.png'
import kinakoImg from '../img/header/kinako.png'
import gomaImg from '../img/header/goma.png'
import hamUpImg from '../img/header/ham-up.png'

//import mobile Img
import mbHamzImg from '../img/header/mb-hamz.png'
import mbHamImg from '../img/header/ham-day.png'
import mbOwnerImg from '../img/header/owner-day.png'
import mbStoryImg from '../img/header/story-day.png'

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      drawerLayoutClass: 'drawer-layout',
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
              drawerLayoutClass: 'mb-drawer-layout',
              aboutTextPositionClass: '',
              contactTextPositionClass: '',
            })
          : this.setState({
              navBarActiveClass: '',
              drawerLayoutClass: 'drawer-layout',
              aboutTextPositionClass: 'about-position',
              contactTextPositionClass: 'contact-position',
            })
      }
    )
  }

  render() {
    const { data } = this.props

    return (
      <PathContext.Consumer>
      { ({ path }) => {
        //main image
        const mainImage = path==='index' ? data.main : data.sub

        //wood image
        const woodImage = path==='index' ? indexWoodImg : otherWoodImg
        const woodImageLayout = path==='index' ? 'index-wood' : 'other-wood'

        //hamster image
        const hamsterImage = path==='index' ? kinakoImg : gomaImg
        const hamsterImageLayout = path==='index' ? 'index-ham' : 'other-ham'

        return (
          <>
            <PreviewCompatibleImage
              imageInfo={{
                image: mainImage,
                alt: "main image"
              }}
            />
            <Link to="/">
              <h1 className="main-text">はむっと！</h1>
            </Link>
            <ScrollToTop showUnder={220} style={{zIndex: 10}}>
              <div className="ham-up-size">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: hamUpImg,
                    alt: "ham up image"
                  }}
                />
              </div>
            </ScrollToTop>
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
                  <Link className="navbar-item mb-day-text" to="/">
                    はむっと！
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/blog/ham">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: mbHamImg,
                        alt: "ham image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/blog/owner">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: mbOwnerImg,
                        alt: "owner image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/blog/story">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: mbStoryImg,
                        alt: "story image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/hamz">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: mbHamzImg,
                        alt: "hamz image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/about">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: aboutImg,
                        alt: "about image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/contact">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: contactImg,
                        alt: "contact image"
                      }}
                    />
                  </Link>
                </>
                :  
                <>
                  <div className="column ham-margin day-padding">
                    <Link to="/blog/ham">
                        <div className="soft-font navbar-item day-item day-text">
                          はむ日和
                        </div>
                        <div className="hover-layout">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: hoverImg,
                              alt: "hover image"
                            }}
                          />
                        </div>
                    </Link>
                  </div>
                  <div className="column owner-margin day-padding">
                    <Link to="/blog/owner">
                        <div className="soft-font navbar-item day-item day-text">
                          飼い主日和
                        </div>
                        <div className="hover-owner-layout">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: hoverImg,
                              alt: "hover image"
                            }}
                          />
                        </div>
                    </Link>
                  </div>
                  <div className="column story-margin day-padding">
                    <Link to="/blog/story">
                        <div className="soft-font navbar-item day-item day-text">
                          ネタ日和
                        </div>
                        <div className="hover-layout">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: hoverImg,
                              alt: "hover image"
                            }}
                          />
                        </div>
                    </Link>
                  </div>
                  <Link to="/hamz">
                    <div className={hamsterImageLayout}>
                      <PreviewCompatibleImage 
                        imageInfo={{
                          image: hamsterImage,
                          alt: "kinako or goma image"
                        }}
                      />
                    </div>
                    <div className={woodImageLayout}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: woodImage,
                          alt: "wood image"
                        }}
                      />
                    </div>
                  </Link>
                  <Link to="/about">
                    <div className="about-position">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: aboutImg,
                          alt: "about image"
                        }}
                      />
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div className="contact-position">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: contactImg,
                          alt: "contact image"
                        }}
                      />
                    </div>
                  </Link>
                </>
              }
            </div>
          </>
        )
      }}
      </PathContext.Consumer>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      fragment imageField on File {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      query {
        main:file(relativePath: {eq: "kinako.jpg"}) {
          ...imageField
        }
        sub:file(relativePath: {eq: "kinako2.jpg"}) {
          ...imageField
        }
      }
    `}
    render={(data) => <Header data={data} />}
  />
)
