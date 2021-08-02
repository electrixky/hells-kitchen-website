import styles from './About.module.scss'
import Title from '../../components/Title/Title'

const About = () => {
	return <div id='about' className={styles.about}>
		<Title style='titleGreen'>ABOUT US</Title>
	</div>
}

export default About