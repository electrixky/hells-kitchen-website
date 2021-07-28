import styles from './MenuPage.module.scss'
import Title from '../../components/Title'
import Menu from './Menu/Menu'


const MenuPage = () => {
	return (
	<div className={styles.menu} id='menu'>
		<Title style='titleYellow'>MENU</Title>
		<Menu/>
	</div>
	);
}

export default MenuPage