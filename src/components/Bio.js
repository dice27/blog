import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginTop: rhythm(2),
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`xxx Team.`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>xxx Team.</strong> who lives and works in Osaka,
          Japan building useful things.{' '}
          <a
            href="#"
            style={{
              color:'#4C2600'
            }}
          >
            You should follow us on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
