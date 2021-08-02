import styles from './Items.module.scss'
import Item from '../Item/Item'
import ItemImage from '../Item/ItemImage/ItemImage'
import ItemTitle from '../Item/ItemTitle/ItemTitle'
import ItemDescription from '../Item/ItemDescription/ItemDescription'
import AddButton from '../Item/AddButton/AddButton'
import onionRings from '../../../assets/food-images/onion-rings.jpeg'
import chickenLegs from '../../../assets/food-images/chicken-legs.jfif'
import frenchFries from '../../../assets/food-images/french-fries.jpg'
import nachos from '../../../assets/food-images/nachos.jpg'
import sweetPotato from '../../../assets/food-images/sweet-potato.jfif'
import potatoWedges from '../../../assets/food-images/potato-wedges.jpg'

const Items = () => {
	return (
			<div className = {styles.items}>

				<div className = {styles.item}>
					<ItemImage source = {onionRings} />
					<div className = {styles.text}>
						<ItemTitle>Onion Rings</ItemTitle>
						<ItemDescription>10 pcs, with BBQ sauce</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {chickenLegs} />
					<div className = {styles.text}>
						<ItemTitle>Chicken Wings</ItemTitle>
						<ItemDescription>6 pcs, with Ranch sauce</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {nachos} />
					<div className = {styles.text}>
						<ItemTitle>Nachos</ItemTitle>
						<ItemDescription>with cheese and salsa</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {onionRings} />
					<div className = {styles.text}>
						<ItemTitle>French fries 300g.</ItemTitle>
						<ItemDescription>with sauce</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {frenchFries} />
					<div className = {styles.text}>
						<ItemTitle>French fries 200g.</ItemTitle>
						<ItemDescription>with crushed chilli flakes & spring onion</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {sweetPotato} />
					<div className = {styles.text}>
						<ItemTitle>Sweet potato fries</ItemTitle>
						<ItemDescription>200 g.</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {potatoWedges} />
					<div className = {styles.text}>
						<ItemTitle>Garlic potato wedges</ItemTitle>
						<ItemDescription>300 g., with Ranch sauce</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {frenchFries} />
					<div className = {styles.text}>
						<ItemTitle>French fries 300g.</ItemTitle>
						<ItemDescription>with sauce</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {onionRings} />
					<div className = {styles.text}>
						<ItemTitle>French fries 200g.</ItemTitle>
						<ItemDescription>with crushed chilli flakes & spring onion</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {sweetPotato} />
					<div className = {styles.text}>
						<ItemTitle>Sweet potato fries</ItemTitle>
						<ItemDescription>200 g.</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {potatoWedges} />
					<div className = {styles.text}>
						<ItemTitle>Garlic potato wedges</ItemTitle>
						<ItemDescription>300 g., with Ranch sauce</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {onionRings} />
					<div className = {styles.text}>
						<ItemTitle>Onion Rings</ItemTitle>
						<ItemDescription>10 pcs, with BBQ sauce</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {chickenLegs} />
					<div className = {styles.text}>
						<ItemTitle>Chicken Wings</ItemTitle>
						<ItemDescription>6 pcs, with Ranch sauce</ItemDescription>
					</div>
					<AddButton />
				</div>

				<div className = {styles.item}>
					<ItemImage source = {nachos} />
					<div className = {styles.text}>
						<ItemTitle>Nachos</ItemTitle>
						<ItemDescription>with cheese and salsa</ItemDescription>
					</div>
					<AddButton />
				</div>

			</div>

	)
}

export default Items
