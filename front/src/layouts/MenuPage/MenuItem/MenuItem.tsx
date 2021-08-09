import React, {FC} from 'react'
import styles from './MenuItem.module.scss'
import AddButton from './AddButton/AddButton'

interface IMenuItem {
	name: string,
	desc: string,
	source: string
}

const MenuItem:FC<IMenuItem> = ({name, desc, source}) => {
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

export default MenuItem