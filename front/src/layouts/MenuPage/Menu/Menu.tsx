import styles from './Menu.module.scss'
import Tabs from '../Tabs/Tabs'
import MenuItems from '../MenuItems/MenuItems'

const Menu = () => {
	return <div className = {styles.border}>
		<Tabs/>
		<MenuItems/>
	</div>
}

export default Menu