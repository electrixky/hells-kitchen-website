import styles from './ButtonDate.module.scss'

const ButtonDate = ({ day, date }) => {
	return <div className={styles.input}>
		<div className={styles.cell}>{day}</div>
		<div className={styles.cell}>{date}</div>
	</div>
}

export default ButtonDate