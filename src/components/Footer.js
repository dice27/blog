import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr
          style={{
            marginBottom: rhythm(0.5),
          }}
        />
        <div
        style={{
          color: '#666',
          fontSize: '12px',
          paddingTop: rhythm(0.3),
          marginBottom: rhythm(0.3),
          lineHeight: '2.2em',
          textAlign: 'center',
        }}
        >
          © <a href="https://github.com/dice27" >dice27</a>
        </div>
      </footer>
    )
  }
}

export default Footer
