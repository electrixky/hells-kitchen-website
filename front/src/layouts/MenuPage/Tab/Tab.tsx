import React, {FC} from 'react'
import styles from './Tab.module.scss'

interface ITab {
	children: string,
	onClick?: () => void
} 

const Tab: FC<ITab> = ({children, onClick}) => {
	return <button onClick={onClick} className={styles.tab}>{children}</button>
}

export default Tab