import styles from './ItemImage.module.scss'

const ItemImage = ({source}) => {
	return <img className = {styles.image} src={source} alt="" />
}

export default ItemImage