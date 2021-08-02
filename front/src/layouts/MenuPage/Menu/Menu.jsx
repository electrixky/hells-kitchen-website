import styles from './Menu.module.scss'
import Tabs from '../Tabs/Tabs'
import Items from '../Items/Items'

const Menu = () => {
	return <div className = {styles.border}>
		<Tabs/>
		<Items/>
	</div>
}

export default Menu