import styles from './Heading.module.scss'
import React from 'react'

interface IHeadingProps {
	children: React.ReactChild | React.ReactNode,
}

const Heading: React.FC<IHeadingProps> = ({children}) => {
	return <p className = {styles.heading}>{children}</p>
}

export default Heading