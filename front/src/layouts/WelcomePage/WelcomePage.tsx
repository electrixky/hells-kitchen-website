import styles from './WelcomePage.module.scss'
import WelcomeImage from './WelcomeImage/WelcomeImage'
import Navigation from './Navigation/Navigation'

const WelcomePage = () => {
	return <div className={styles.background} id='home'>
		<Navigation />
		<WelcomeImage />
		<a className={styles.arrow} href="#menu" >
			<i className="fa fa-chevron-down" aria-hidden="true"></i>
		</a>
	</div>
}

export default WelcomePage