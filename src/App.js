// import logo from './logo.svg';
import './App.scss';
import FooterMain from './Components/footer/footerMain';
import HeaderMain from './Components/header/headerMain';
import SearchBar from './Components/main/searchBar/searchBar';

function App() {
  return (
    <div className='App'>
      <HeaderMain></HeaderMain>
      <SearchBar appName='Universities'></SearchBar>
      <FooterMain></FooterMain>
    </div>
  );
}

export default App;
