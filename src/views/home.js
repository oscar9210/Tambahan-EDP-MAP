import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn1 from '../components/sign-in1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Silky Remarkable Seahorse</title>
        <meta property="og:title" content="Silky Remarkable Seahorse" />
      </Helmet>
      <SignIn1
        button={
          <Fragment>
            <span className="home-text1">Button</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text2">Selamat Datang di EDP MAP</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text3">EDP MAP</span>
          </Fragment>
        }
        rootClassName="sign-in1root-class-name"
      ></SignIn1>
    </div>
  )
}

export default Home
