import styles from './App.module.scss'
import wrapper from './styles/common.module.scss'
import WelcomePage from './layouts/WelcomePage/WelcomePage'
import MenuPage from './layouts/MenuPage/MenuPage'
import BookPage from './layouts/BookPage/BookPage'

function App() {
  return (
    <div>
      <WelcomePage />
		<div className={wrapper.container}>
			<MenuPage />
			<BookPage />
		</div>
    </div>
  );
}

export default App;
