import styles from './GalleryPage.module.scss'
import Title from '../../components/Title/Title'
import ImageSlider from './Slider/ImageSlider'
import { SliderData } from './Slider/SliderData'
import Button from '../../components/Button/Button'

const GalleryPage = () => {
	return <div id='gallery' className={styles.style}>
		<Title style='titlePurple'>GALLERY</Title>
		<div className={styles.style}>
			<ImageSlider slides={SliderData} />
			<Button style='buttonPurple'>VIEW FULL GALLERY</Button>
		</div>
	</div>
}

export default GalleryPage