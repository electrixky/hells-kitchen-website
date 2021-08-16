import styles from './MenuItems.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import onionRings from '../../../assets/food-images/onion-rings.jpeg'
import chickenLegs from '../../../assets/food-images/chicken-legs.jfif'
import frenchFries from '../../../assets/food-images/french-fries.jpg'
import nachos from '../../../assets/food-images/nachos.jpg'
import sweetPotato from '../../../assets/food-images/sweet-potato.jfif'
import potatoWedges from '../../../assets/food-images/potato-wedges.jpg'

const MenuItems = () => {
	return (
		<div className={styles.items}>
			<MenuItem name="Onion Rings" desc="10 pcs, with BBQ sauce" source={onionRings} />
			<MenuItem name="Chicken Wings" desc="6 pcs, with Ranch sauce" source={chickenLegs} />
			<MenuItem name="Nachos" desc="with cheese and salsa" source={nachos} />
			<MenuItem name="French fries 300g." desc="10 pcs, with BBQ sauce" source={onionRings} />
			<MenuItem name="French fries 200g." desc="with crushed chilli flakes & spring onion" source={frenchFries} />
			<MenuItem name="Sweet potato fries" desc="200 g." source={sweetPotato} />
			<MenuItem name="Garlic potato wedges" desc="300 g., with Ranch sauce" source={potatoWedges} />
			<MenuItem name="French fries 300g." desc="with sauce" source={frenchFries} />
			<MenuItem name="French fries 200g." desc="with crushed chilli flakes & spring onion" source={frenchFries} />
			<MenuItem name="Sweet potato fries" desc="200 g." source={sweetPotato} />
			<MenuItem name="Onion Rings" desc="10 pcs, with BBQ sauce" source={onionRings} />
			<MenuItem name="Garlic potato wedges" desc="300 g., with Ranch sauce" source={potatoWedges} />
			<MenuItem name="Chicken Wings" desc="6 pcs, with Ranch sauce" source={chickenLegs} />
			<MenuItem name="Nachos" desc="with cheese and salsa" source={nachos} />
		</div>

	)
}

export default MenuItems
