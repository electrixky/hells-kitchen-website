import styles from './BookPage.module.scss'
import Title from '../../components/Title/Title'
import photo from '../../assets/booking-img.jfif'
import BookForm from './BookForm/BookForm'

const BookPage = () => {
	return <div id='reserve'>
		<Title style = 'titleBlue'>BOOK A TABLE</Title>
		<div className = {styles.bookArea}>
			<img className = {styles.image} src={photo} alt="" />
			<BookForm/>
		</div>
	</div>
}

export default BookPage