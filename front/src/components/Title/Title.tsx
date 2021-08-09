//import styles from './Title.module.scss'
import React, {FC} from "react"

const styles = require("./Title.module.scss")

interface ITitle {
	children: React.ReactChild | React.ReactNode,
	style: string
}

const Title: FC<ITitle> = ({ children, style }) => {
	return (
	<h2 className={`${styles.title} ${styles[style]}`}>{children}</h2>
	);
}

export default Title