import logo from './logo.svg';
import './App.css';

import ThemeChanger from "./components/themeChanger/themeChanger"
import PageSkeleton from './components/PageSkeleton/main';
import FloatingNav from './components/FloatingNav/main';

function App(fullPageApi) {
  return (
    <div className="App">
      <PageSkeleton fullPageApi={fullPageApi} />
    </div>
  );
}

export default App;
