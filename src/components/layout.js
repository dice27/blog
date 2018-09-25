import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

require("prismjs/themes/prism-okaidia.css");

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            backgroundColor: '#312114',
            color: '#FBE9D6',
            height: rhythm(2.8),
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: 0,
              marginBottom: rhythm(-1),
              lineHeight: rhythm(2.8),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              ydah.blog
            </Link>
          </h2>
        </div>
      )
    } else {
      header = (
        <div
          style={{
            backgroundColor: '#312114',
            color: '#FBE9D6',
            height: rhythm(2.8),
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: 0,
              marginBottom: rhythm(-1),
              lineHeight: rhythm(2.8),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              ydah.blog
            </Link>
          </h2>
        </div>
      )
    }
    return (
      <div>
        {header}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
          }}
        >
        {children}
        </div>
      </div>
    )
  }
}

export default Template
