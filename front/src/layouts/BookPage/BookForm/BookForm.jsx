import styles from './BookForm.module.scss'
import Heading from './Heading/Heading'
import InputDate from './InputDate/InputDate'
import Input from './Input/Input'
import Submission from './Submission/Submission'

const BookForm = () => {
	return <div className={styles.form}>
		<Heading>Date</Heading>
		<div className={styles.inputs}>
			<InputDate day='Mo' date='16' />
			<InputDate day='Tu' date='17' />
			<InputDate day='We' date='18' />
			<InputDate day='Th' date='19' />
			<InputDate day='Fr' date='20' />
			<InputDate day='Sa' date='21' />
			<InputDate day='Su' date='22' />
		</div>

		<Heading>Time</Heading>
		<div className={styles.inputs}>
			<Input value='18pm'/>
			<Input value='19pm'/>
			<Input value='20pm'/>
			<Input value='21pm'/>
			<Input value='22pm'/>
		</div>

		<Heading>People</Heading>
		<div className={styles.inputsPeople}>
			<Input value='1-2'/>
			<Input value='3-4'/>
			<Input value='5-6'/>
			<Input value='>6'/>
		</div>

		<Submission/>
	</div>
}

export default BookForm