import './App.css';

//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //it is used for the endpoints

//Components
import TopMenu from './components/TopMenu';
import Header from './components/Header';

//Screens
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import ArticleCreateScreen from './screens/ArticleCreateScreen';
import ArticleByCategoryScreen from './screens/ArticleByCategoryScreen';

function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <Header />
        <Routes>

          <Route path='/' element={<HomeScreen/>} exact/>
          <Route path='article/:id' element={<ArticleScreen/>} />
          <Route path='article/category/:category' element={<ArticleByCategoryScreen/>} />
          <Route path='article/create' element={<ArticleCreateScreen/>} />

        </Routes>
      </div>
      
    </Router>
      
  );
}

export default App;
