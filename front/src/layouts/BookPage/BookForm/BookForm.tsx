import React, {FC} from 'react'
import styles from './BookForm.module.scss'
import Heading from './Heading/Heading'
import ButtonDate from './ButtonDate/ButtonDate'
import FormButton from './FormButton/FormButton'
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
			<FormButton value='18pm'/>
			<FormButton value='19pm'/>
			<FormButton value='20pm'/>
			<FormButton value='21pm'/>
			<FormButton value='22pm'/>
		</div>

		<Heading>People</Heading>
		<div className={styles.inputsPeople}>
			<FormButton value='1-2'/>
			<FormButton value='3-4'/>
			<FormButton value='5-6'/>
			<FormButton value='>6'/>
		</div>

		<Submission/>
	</div>
}

export default BookForm