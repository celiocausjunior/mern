import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import './MainNavigation.css'
import Navlinks from './NavLinks'
import SideDrawer from './SideDrawer'

const MainNavigation = (propos) => {
  return (
    <>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <Navlinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button>
          <span className="main-navigation__menu-btn" />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <Navlinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation
