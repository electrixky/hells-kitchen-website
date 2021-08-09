import styles from './Items.module.scss'
import Item from '../Item/Item'
import onionRings from '../../../assets/food-images/onion-rings.jpeg'
import chickenLegs from '../../../assets/food-images/chicken-legs.jfif'
import frenchFries from '../../../assets/food-images/french-fries.jpg'
import nachos from '../../../assets/food-images/nachos.jpg'
import sweetPotato from '../../../assets/food-images/sweet-potato.jfif'
import potatoWedges from '../../../assets/food-images/potato-wedges.jpg'

const Items = () => {
	return (
		<div className={styles.items}>
			<Item name="Onion Rings" desc="10 pcs, with BBQ sauce" source={onionRings} />
			<Item name="Chicken Wings" desc="6 pcs, with Ranch sauce" source={chickenLegs} />
			<Item name="Nachos" desc="with cheese and salsa" source={nachos} />
			<Item name="French fries 300g." desc="10 pcs, with BBQ sauce" source={onionRings} />
			<Item name="French fries 200g." desc="with crushed chilli flakes & spring onion" source={frenchFries} />
			<Item name="Sweet potato fries" desc="200 g." source={sweetPotato} />
			<Item name="Garlic potato wedges" desc="300 g., with Ranch sauce" source={potatoWedges} />
			<Item name="French fries 300g." desc="with sauce" source={frenchFries} />
			<Item name="French fries 200g." desc="with crushed chilli flakes & spring onion" source={frenchFries} />
			<Item name="Sweet potato fries" desc="200 g." source={sweetPotato} />
			<Item name="Onion Rings" desc="10 pcs, with BBQ sauce" source={onionRings} />
			<Item name="Garlic potato wedges" desc="300 g., with Ranch sauce" source={potatoWedges} />
			<Item name="Chicken Wings" desc="6 pcs, with Ranch sauce" source={chickenLegs} />
			<Item name="Nachos" desc="with cheese and salsa" source={nachos} />
		</div>

	)
}

export default Items
