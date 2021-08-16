import styles from './BookForm.module.scss'
import Heading from './Heading/Heading'
import ButtonDate from './ButtonDate/ButtonDate'
import FormButton from './FormButton/FormButton'
import Button from 'components/Button/Button'

const bookingTime = ["18pm", "19pm", "20pm", "21pm", "22pm"]
const bookingPeople = ["1-2", "3-4", "5-6", ">6"]
const buttonsTime = bookingTime.map((time) => {
	<FormButton key={time} value={time} />
})
const buttonsPeople = bookingPeople.map((people) => {
	<FormButton key={people} value={people} />
})

const BookForm = () => {
	return <div className={styles.form}>
		<Heading>Date</Heading>
		<div className={styles.buttons}>
			<ButtonDate day='Mo' date='16' />
			<ButtonDate day='Tu' date='17' />
			<ButtonDate day='We' date='18' />
			<ButtonDate day='Th' date='19' />
			<ButtonDate day='Fr' date='20' />
			<ButtonDate day='Sa' date='21' />
			<ButtonDate day='Su' date='22' />
		</div>

		<Heading>Time</Heading>
		<div className={styles.buttons}>
			{buttonsTime}
		</div>

		<Heading>People</Heading>
		<div className={styles.buttonsPeople}>
			{buttonsPeople}
		</div>

		<div className={styles.inputName}>
			<label htmlFor="name" className={styles.label}>Name
				<input type="text" className={styles.input} placeholder='Your name' required />
			</label>
		</div>

		<Button style='buttonBlue'>BOOK</Button>
	</div>
}

export default BookForm