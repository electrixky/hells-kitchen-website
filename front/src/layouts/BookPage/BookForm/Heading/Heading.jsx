import styles from './Heading.module.scss'

const Heading = ({children}) => {
	return <p className = {styles.heading}>{children}</p>
}

export default Heading