import styles from './FormButton.module.scss'
import React, {FC} from "react"

interface IButton {
	value: string
}

const FormButton: FC<IButton> = ({value}) => {
	return <div className={styles.input}>{value}</div>
}

export default FormButton