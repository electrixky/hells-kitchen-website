import styles from './ContactPage.module.scss'
import Title from '../../components/Title/Title'
import ContactForm from './ContactForm/ContactForm'

const ContactPage = () => {
	return (
		<div id='contacts' className={styles.contact}>
			<Title style='titleOrange' className={styles.title}>CONTACT US</Title>
			<p className={styles.subtitle}>Any questions or suggestions - feel free</p>
			<ContactForm />
		</div>
	)
}

export default ContactPage
