import React from 'react'
import styles from './MenuItem.module.scss'
import AddButton from './AddButton/AddButton'

interface IMenuItemProps {
	name: string,
	desc: string,
	image: string
}

const MenuItem: React.FC<IMenuItemProps> = ({name, desc, image}) => {
	return (
			<div className = {styles.item}>
					<img className={styles.image} src = {image} />
					<div className = {styles.text}>
						<h3 className={styles.title}>{name}</h3>
						<p className={styles.description}>{desc}</p>
					</div>
					<AddButton />
				</div>
	)
}

export default MenuItem