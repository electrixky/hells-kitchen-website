import styles from './WelcomePage.module.scss'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import { IoIosArrowDown } from 'react-icons/io'

const WelcomePage = () => {
	return <div className={styles.background} id='home'>
		<Navigation />
		<Logo />
		<IoIosArrowDown className={styles.arrow}/>
	</div>
}

export default WelcomePage