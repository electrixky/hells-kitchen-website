import styles from './Title.module.scss'
import React from "react"

interface ITitleProps {
	style: string
}

const Title: React.FC<ITitleProps> = ({ children, style }) => {
	return (
	<h2 className={`${styles.title} ${styles[style]}`}>{children}</h2>
	);
}

export default Title