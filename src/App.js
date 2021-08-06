import logo from './logo.svg';
import './App.css';

import ThemeChanger from "./components/themeChanger/themeChanger"
import PageHeader from './components/PageHeader/main';


function App() {
  return (
    <div className="App">
      <PageHeader />
      <ThemeChanger />
    </div>
  );
}

export default App;
