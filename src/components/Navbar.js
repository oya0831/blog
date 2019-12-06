import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import PreviewCompatibleImage from './PreviewCompatibleImage'

import PathContext from '../contexts/PathContext'

const Navbar = class extends React.Component {
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

    //day image
    const hamImage = data.ham_before
    const ownerImage = data.owner_before
    const storyImage = data.story_before
    const hoverImage = data.hover_day
    
    //mobile day image
    const mbHamImage = data.mobile_ham
    const mbOwnerImage = data.mobile_owner
    const mbStoryImage = data.mobile_story
    //my hamsters
    const mbHamzImage = data.mobile_hamz

    //information image
    const aboutImage = data.about
    const contactImage = data.contact

    return (
      <PathContext.Consumer>
      { ({ path }) => {
        //main image
        const mainImage = path==='index' ? data.main : data.sub

        //wood image
        const woodImage = path==='index' ? data.index_wood : data.other_wood
        const woodImageLayout = path==='index' ? 'index-wood' : 'other-wood'

        //hamster image
        const hamsterImage = path==='index' ? data.index_hamster : data.other_hamster
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
                        image: mbHamImage,
                        alt: "ham image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/blog/owner">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: mbOwnerImage,
                        alt: "owner image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/blog/story">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: mbStoryImage,
                        alt: "story image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/hamz">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: mbHamzImage,
                        alt: "hamz image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/about">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: aboutImage,
                        alt: "about image"
                      }}
                    />
                  </Link>
                  <Link className="navbar-item mb-day-text" to="/contact">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: contactImage,
                        alt: "contact image"
                      }}
                    />
                  </Link>
                </>
                :  
                <>
                  <div className="column is-3 is-offset-1">
                    <Link to="/blog/ham">
                      <div className="sub-navbar">
                        <div className="day-text">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: hamImage,
                              alt: "ham day image"
                            }}
                          />
                        </div>
                        <div className="hover-layout">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: hoverImage,
                              alt: "hover image"
                            }}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="column is-3 is-offset-1">
                    <Link to="/blog/owner">
                      <div className="sub-navbar">
                        <div className="day-text">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: ownerImage,
                              alt: "owner day image"
                            }}
                          />
                        </div>
                        <div className="hover-layout">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: hoverImage,
                              alt: "hover image"
                            }}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="column is-3 is-offset-1">
                    <Link to="/blog/story">
                      <div className="sub-navbar">
                        <div className="day-text">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: storyImage,
                              alt: "story day image"
                            }}
                          />
                        </div>
                        <div className="hover-layout">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: hoverImage,
                              alt: "hover image"
                            }}
                          />
                        </div>
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
                          image: aboutImage,
                          alt: "about image"
                        }}
                      />
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div className="contact-position">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: contactImage,
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
        index_wood:file(relativePath: {eq: "another-hamz.png"}) {
          ...imageField
        }
        other_wood:file(relativePath: {eq: "utihamu.png"}) {
          ...imageField
        }
        about:file(relativePath: {eq: "about.png"}) {
          ...imageField
        }
        contact:file(relativePath: {eq: "contactdesuyo.png"}) {
          ...imageField
        }
        index_hamster:file(relativePath: {eq: "kinako2.png"}) {
          ...imageField
        }
        other_hamster:file(relativePath: {eq: "gomagoma.png"}) {
          ...imageField
        }
        ham_before:file(relativePath: {eq: "ham-day.png"}) {
          ...imageField
        }
        mobile_ham:file(relativePath: {eq: "hambiyori.png"}) {
          ...imageField
        }
        hover_day:file(relativePath: {eq: "after.png"}) {
          ...imageField
        }
        owner_before:file(relativePath: {eq: "owner-day.png"}) {
          ...imageField
        }
        mobile_owner:file(relativePath: {eq: "kainusibiyori.png"}) {
          ...imageField
        }
        story_before:file(relativePath: {eq: "story-day.png"}) {
          ...imageField
        }
        mobile_story:file(relativePath: {eq: "netabiyori.png"}) {
          ...imageField
        }
        mobile_hamz:file(relativePath: {eq: "utiham.png"}) {
          ...imageField
        }
      }
    `}
    render={(data) => <Navbar data={data} />}
  />
)
