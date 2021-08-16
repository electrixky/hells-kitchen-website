import styles from './AddButton.module.scss'

const AddButton = () => {
	return (
		<a className = {styles.button}>
			<i className ='fas fa-plus'></i>
		</a>
	)
}

export default AddButton