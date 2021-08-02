import styles from './Title.module.scss'

const Title = ({ children, style }) => {
	return (
	<h2 className={`${styles.title} ${styles[style]}`}>{children}</h2>
	);
}

export default Title