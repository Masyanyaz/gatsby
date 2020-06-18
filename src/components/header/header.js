import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header-menu.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className = "header__menu">
        <div className = "header__menu-left-side">
            <Link to = "#" className = "header__menu-left-side-element" id = "hmlse__left" > Destinations </Link>
            <Link to="#" className="header__menu-left-side-element" id="hmlse__center">Inspirations</Link>
            <Link to = "#" className = "header__menu-left-side-element" id = "hmlse__right" > Services </Link>
        </div>
    <div className="header__menu-center">
        <Link href="/"><img src="https://cuisinedevoyage.com/img/logo-v2t.svg" alt=""/></Link>
        <p>Voyagez a votre gout!</p>
    </div>
    <div className="header__menu-right-side">
        <div className="header__menu-right-side-top">
            <Link to="#"><img src="https://cuisinedevoyage.com/img/mail.svg" alt=""/></Link>
            <Link to="#"><img src="https://cuisinedevoyage.com/img/phone.svg" id="phone" alt=""/></Link>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
