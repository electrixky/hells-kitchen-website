import styles from './ItemTitle.module.scss'

const ItemTitle = ({children}) => {
	return <h3 className = {styles.text}>{children}</h3>
}

export default ItemTitle