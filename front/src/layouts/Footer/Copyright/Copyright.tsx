import styles from './Copyright.module.scss'

const Copyright = () => {
	return (
		<div className={styles.copyright}>
			<p>&copy; Copyright {new Date().getFullYear()}</p>
		</div>
	)
}

export default Copyright
