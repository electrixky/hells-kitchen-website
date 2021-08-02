import styles from './ContactPage.module.scss'
import Title from '../../components/Title/Title'

const ContactPage = () => {
	return (
		<div id='contact' className={styles.contact}>
			<Title style='titleOrange'>CONTACT US</Title>
		</div>
	)
}

export default ContactPage
