import React from 'react'
import './footer.css'

const Footer = () => (
	<footer>
		<div className="footer__conteiner">
			<div className="footer__content">
				<div className="footer__column">
					<a href="#">Destinations</a>
					<a href="#">Inspirations</a>
					<a href="#">Services</a>
				</div>
				<div className="footer__column">
					<a href="#">Conditions générales</a>
					<a href="#">Mentions légales</a>
					<a href="#">Politique de confidentialité</a>
				</div>
				<div className="footer__column">
					<a href="#">Qui sommes-nous</a>
					<a href="#">Avis</a>
					<a href="#">Contacts</a>
				</div>
			</div>
			<span className="copy">cuisinedevoyage.com © {new Date().getFullYear()}</span>
		</div>
	</footer>
)

export default Footer
