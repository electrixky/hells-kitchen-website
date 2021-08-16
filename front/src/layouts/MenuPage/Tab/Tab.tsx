import React from 'react'
import styles from './Tab.module.scss'

interface ITabProps {
	onClick?: () => void
} 

const Tab: React.FC<ITabProps> = ({children, onClick}) => {
	return <button onClick={onClick} className={styles.tab}>{children}</button>
}

export default Tab