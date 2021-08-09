import styles from './Item.module.scss'
import AddButton from './AddButton/AddButton'

const Item = ({name, desc, source}) => {
	return (
			<div className = {styles.item}>
					<img className={styles.image} src = {source} />
					<div className = {styles.text}>
						<h3 className={styles.title}>{name}</h3>
						<p className={styles.description}>{desc}</p>
					</div>
					<AddButton />
				</div>
	)
}

export default Item