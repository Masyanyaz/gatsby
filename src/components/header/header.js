import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./header-menu.css"

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const headerClass = scrollTop === 0 ? 'header__menu' : 'header__menu scrolled'

  return(
      <header style={scrollTop === 0 ? {paddingBottom: "0"} : {paddingBottom: "200px"}}> {/*TODO перенести scrolled из header__menu в header, убрать стили*/}
        <div className={headerClass}>
          <div className="header__menu-left-side">
            <Link to="#" className="header__menu-left-side-element" id="hmlse__left">Destinations </Link>
            <Link to="#" className="header__menu-left-side-element" id="hmlse__center" >Inspirations</Link>
            <Link to="#" className="header__menu-left-side-element" id="hmlse__right"> Services </Link>
          </div>
          <div className="header__menu-center">
            <Link to="/">
              <img src="https://cuisinedevoyage.com/img/logo-v2t.svg" alt="" />
            </Link>
            <p>Voyagez a votre gout!</p>
          </div>
          <div className="header__menu-right-side">
            <div className="header__menu-right-side-top">
              <Link to="#">
                <img src="https://cuisinedevoyage.com/img/mail.svg" alt="" />
              </Link>
              <Link to="#">
                <img src="https://cuisinedevoyage.com/img/phone.svg" id="phone" alt="" />
              </Link>
              <Link to="#" className="header__menu-right-side-top-button">envoyer une demande</Link>
            </div>
            <div className="header__menu-right-side-bottom">
              <Link to="#" className="header__menu-right-side-bottom-element">Qui sommes-nous</Link>
              <Link to="#" className="header__menu-right-side-bottom-element">Nouvelles</Link>
              <Link to="#" className="header__menu-right-side-bottom-element">Contacts</Link>
            </div>
          </div>
        </div>
      </header>
  )
}

/*Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}*/

export default Header
