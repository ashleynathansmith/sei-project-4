import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { pathname } = useLocation()
  const isLoggedIn = isAuthenticated()
  const history = useHistory()

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return  (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">NOT FAKE NEWS
          </Link>
          <span onClick={handleMenuToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/articles/" className="navbar-item">Latest Articles</Link>
            <Link to="/about/" className="navbar-item">About Us</Link>
            <Link to="/contact/" className="navbar-item">Contact Us</Link>
            {isLoggedIn && <Link to="/articles/new" className="navbar-item is-white"></Link>}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isLoggedIn ?
                  <>
                    <Link className="button is-light" to="/auth/register/">
                    Register
                    </Link>
                    <Link className="button is-light" to="/auth/login/">
                    Log in
                    </Link>
                  </>
                  :
                  <button className="button is-light" onClick={handleLogout}>Log Out</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav