import styles from './Tabs.module.scss'
import Tab from '../Tab/Tab'

const Tabs = () => {
	return (
		<div className = {styles.tabs}>
			<Tab>APPETIZERS</Tab>
			<Tab>PASTAS</Tab>
			<Tab>MAIN COURSES</Tab>
			<Tab>BURGERS</Tab>
			<Tab>SHAKES</Tab>
			<Tab>EXTRAS</Tab>
		</div>
	)
}

export default Tabs