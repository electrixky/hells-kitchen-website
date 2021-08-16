import wrapper from './styles/common.module.scss'
import WelcomePage from './layouts/WelcomePage/WelcomePage'
import MenuPage from './layouts/MenuPage/MenuPage'
import BookPage from './layouts/BookPage/BookPage'
import GalleryPage from './layouts/GalleryPage/GalleryPage'
import About from './layouts/AboutPage/About'
import ContactPage from './layouts/ContactPage/ContactPage'
import Footer from './layouts/Footer/Footer'
import Copyright from './layouts/Footer/Copyright/Copyright'

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
