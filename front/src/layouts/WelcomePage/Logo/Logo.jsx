import styles from './Logo.module.scss'
import logo from '../../../logo.svg'

const Logo = () => {
	return <img className={styles.logo} src={logo} alt="Hell's Kitchen Logo" />
}

export default Logo