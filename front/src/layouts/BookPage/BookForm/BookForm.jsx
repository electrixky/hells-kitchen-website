import styles from './BookForm.module.scss'
import Heading from './Heading/Heading'
import ButtonDate from './ButtonDate/ButtonDate'
import Button from './Button/Button'
import Submission from './Submission/Submission'

const BookForm = () => {
	return <div className={styles.form}>
		<Heading>Date</Heading>
		<div className={styles.inputs}>
			<ButtonDate day='Mo' date='16' />
			<ButtonDate day='Tu' date='17' />
			<ButtonDate day='We' date='18' />
			<ButtonDate day='Th' date='19' />
			<ButtonDate day='Fr' date='20' />
			<ButtonDate day='Sa' date='21' />
			<ButtonDate day='Su' date='22' />
		</div>

		<Heading>Time</Heading>
		<div className={styles.inputs}>
			<Button value='18pm'/>
			<Button value='19pm'/>
			<Button value='20pm'/>
			<Button value='21pm'/>
			<Button value='22pm'/>
		</div>

		<Heading>People</Heading>
		<div className={styles.inputsPeople}>
			<Button value='1-2'/>
			<Button value='3-4'/>
			<Button value='5-6'/>
			<Button value='>6'/>
		</div>

		<Submission/>
	</div>
}

export default BookForm