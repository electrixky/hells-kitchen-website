import styles from './Submission.module.scss'
import Button from '../../../../components/Button/Button'

const Submission = () => {
	return <div className={styles.submission}>
		<label htmlFor="name" className={styles.label}>Name</label>
		<input type="text" className={styles.input} placeholder='Your name' required/>
		<Button style='buttonBlue'>BOOK</Button>
	</div>
}

export default Submission