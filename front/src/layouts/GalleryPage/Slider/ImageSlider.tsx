import React, {FC} from 'react'
import styles from './ImageSlider.module.scss'
import { useState } from 'react'
import { SliderData } from './SliderData'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

interface IImageSlider {
	slides: {image : string}[]
}

const ImageSlider: FC<IImageSlider> = ({slides}) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length
	
	const prevSlide = () => {
		setCurrent(current === 0 ? length-1 : current-1)
	}

	const nextSlide = () => {
		setCurrent(current === length-1 ? 0 : current+1)
	}

	if(!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<section className={styles.slider}>
			<IoIosArrowBack className={styles.arrowLeft} onClick={prevSlide}/>
			<IoIosArrowForward className={styles.arrowRight} onClick={nextSlide}/>

			{SliderData.map((slider, index) => {
				return (
					<div className={index===current ? `${styles.active}` : `${styles.slide}`} key={index}>
						{index===current && (<img src={slider.image} className={styles.image}/>)}
					</div>
					)
			})}
		</section>
	)
}

export default ImageSlider
