import React from 'react'

import './footer.css'

import Link from '../global/link'

const Footer = () => (
	<footer>
		<div className="footer__conteiner">
			<div className="footer__content">
				<div className="footer__column">
					<Link to="#">Destinations</Link>
					<Link to="#">Inspirations</Link>
					<Link to="#">Services</Link>
				</div>
				<div className="footer__column">
					<Link to="#">Conditions générales</Link>
					<Link to="#">Mentions légales</Link>
					<Link to="#">Politique de confidentialité</Link>
				</div>
				<div className="footer__column">
					<Link to="#">Qui sommes-nous</Link>
					<Link to="#">Avis</Link>
					<Link to="#">Contacts</Link>
				</div>
			</div>
			<span className="copy">cuisinedevoyage.com © {new Date().getFullYear()}</span>
		</div>
	</footer>
)

export default Footer
