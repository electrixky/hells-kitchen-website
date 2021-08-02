import styles from './ItemDesciption.module.scss'

const ItemDesciption = ({children}) => {
	return <p className = {styles.text}>{children}</p>
}

export default ItemDesciption