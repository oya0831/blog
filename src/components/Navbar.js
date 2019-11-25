import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import PreviewCompatibleImage from './PreviewCompatibleImage'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      drawerLayoutClass: 'pc-layout',
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
              drawerLayoutClass: 'drawer-layout',
              aboutTextPositionClass: '',
              contactTextPositionClass: '',
            })
          : this.setState({
              navBarActiveClass: '',
              drawerLayoutClass: 'pc-layout',
              aboutTextPositionClass: 'about-position',
              contactTextPositionClass: 'contact-position',
            })
      }
    )
  }

  render() {
    const { data } = this.props
    //main image
    const mainImage = this.props.state==="index" ? data.main : data.sub

    //day image
    const hamImage = data.ham_before
    const ownerImage = data.owner_before
    const storyImage = data.story_before
    const hoverImage = data.ham_after

    //information image
    const aboutImage = data.about
    const contactImage = data.contact

    //wood image
    const woodImage = this.props.state==='index' ? data.index_wood : data.other_wood
    const woodImageLayout = this.props.state==='index' ? 'indexwood-layout' : 'otherwood-layout'

    //hamster image
    const hamsterImage = this.props.state==='index' ? data.index_hamster : data.other_hamster
    const hamsterImageLayout = this.props.state==='index' ? 'indexham-layout' : 'otherham-layout'

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
              <Link className="navbar-item text-layout" to="/blog/ham">
              はむ日和
              </Link>
              <Link className="navbar-item text-layout" to="/blog/owner">
              飼い主日和
              </Link>
              <Link className="navbar-item text-layout" to="/blog/story">
              ネタ日和
              </Link>
              <Link className="navbar-item text-layout" to="/hamz">
              うちのはむちゃんず
              </Link>
            </>
            :  
            <>
              <div className="column is-3 is-offset-1">
                <Link to="/blog/ham">
                  <div className="sub-navbar">
                    <div className="navtext-layout">
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
                    <div className="navtext-layout">
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
                    <div className="navtext-layout">
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
            </>
          }
          <div className={`${this.state.aboutTextPositionClass}`}>
            <Link to="/about">
              <PreviewCompatibleImage
                imageInfo={{
                  image: aboutImage,
                  alt: "about image"
                }}
              />
            </Link>
          </div>
          <div className={`${this.state.contactTextPositionClass}`}>
            <Link to="/contact">
              <PreviewCompatibleImage
                imageInfo={{
                  image: contactImage,
                  alt: "contact image"
                }}
              />
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default ({ state }) => (
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
      contact:file(relativePath: {eq: "contact.png"}) {
        ...imageField
      }
      index_hamster:file(relativePath: {eq: "pyokooo.png"}) {
        ...imageField
      }
      other_hamster:file(relativePath: {eq: "gomagoma.png"}) {
        ...imageField
      }
      ham_before:file(relativePath: {eq: "ham-day.png"}) {
        ...imageField
      }
      ham_after:file(relativePath: {eq: "after.png"}) {
        ...imageField
      }
      owner_before:file(relativePath: {eq: "owner-day.png"}) {
        ...imageField
      }
      story_before:file(relativePath: {eq: "story-day.png"}) {
        ...imageField
      }
    }
  `}
  render={(data) => <Navbar data={data} state={state} />}
/>
)
