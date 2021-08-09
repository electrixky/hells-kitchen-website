import styles from './AddButton.module.scss'
import React, {FC} from 'react'

interface IAddButton {
	class: string
}

const AddButton: FC<IAddButton> = () => {
	return (
		<a className = {styles.button}>
			<i class='fas fa-plus'></i>
		</a>
	)
}

export default AddButton