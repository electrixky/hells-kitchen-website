import styles from './FormButton.module.scss'
import React from "react"

interface IFormButtonProps {
	value: string
}

const FormButton: React.FC<IFormButtonProps> = ({value}) => {
	return <button className={styles.btn}>{value}</button>
}

export default FormButton