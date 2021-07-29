import styles from './App.module.scss'
import wrapper from './styles/common.module.scss'
import WelcomePage from './layouts/WelcomePage/WelcomePage'
import MenuPage from './layouts/MenuPage/MenuPage'
import BookPage from './layouts/BookPage/BookPage'
import GalleryPage from './layouts/GalleryPage/GalleryPage'
import About from './layouts/AboutPage/About'
import ContactPage from './layouts/ContactPage/ContactPage'
import Footer from './layouts/Footer/Footer'
import Copyright from './layouts/Footer/Copyright/Copyright'

const neonColors = ['#FFFF00', '#E6FB04', '#FF0000', '#FF6600', '#00FF00', '#00FF66', '#00FFFF', '#099FFF', '#0033FF', '#FF00FF', '#FF0099', '#d400ff']

function App() {
	return (
		<div>
			<WelcomePage />
			<div className={wrapper.container}>
				<MenuPage />
				<BookPage />
				<GalleryPage />
				<About />
				<ContactPage />
			</div>
			<Footer />
			<Copyright/>
		</div>
	);
}

export default App;
