import styles from './App.module.scss'
import wrapper from './styles/common.module.scss'
import WelcomePage from './layouts/WelcomePage/WelcomePage'
import MenuPage from './layouts/MenuPage/MenuPage'
import BookPage from './layouts/BookPage/BookPage'
import GalleryPage from './layouts/GalleryPage/GalleryPage'

function App() {
	return (
		<div>
			<WelcomePage />
			<div className={wrapper.container}>
				<MenuPage />
				<BookPage />
				<GalleryPage />
			</div>
		</div>
	);
}

export default App;
