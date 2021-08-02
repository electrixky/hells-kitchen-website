import styles from './Tab.module.scss'

const Tab = ({children, onClick}) => {
	return <button onClick={onClick} className={styles.tab}>{children}</button>
}

export default Tab