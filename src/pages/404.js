import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
    <div id="wrapper">
      <h1>404 error</h1>
      {/* <img src={error} alt="Gnome rainbow sickness" /> */}
      <p>This makes me sick but...you just hit a route that doesn&#39;t exist</p>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
)

export default NotFoundPage

