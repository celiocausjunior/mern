import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '../UIElements/Backdrop'
import MainHeader from './MainHeader'
import './MainNavigation.css'
import Navlinks from './NavLinks'
import SideDrawer from './SideDrawer'

const MainNavigation = (propos) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={openDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <Navlinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler }>
          <span />
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

export default MainNavigation;
