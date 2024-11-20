import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar1 from '../components/navbar1'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home1 - Silky Remarkable Seahorse</title>
        <meta property="og:title" content="Home1 - Silky Remarkable Seahorse" />
      </Helmet>
      <Navbar1
        link2={
          <Fragment>
            <span className="home1-text1">Map</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home1-text2">Logout</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home1-text3">Dashboard</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home1-text4">Report</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home1-text5">FAQ</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home1-text6">Contact</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home1-text7">Sign Up</span>
          </Fragment>
        }
      ></Navbar1>
    </div>
  )
}

export default Home1
