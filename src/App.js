import logo from './logo.svg';
import './App.css';

import ThemeChanger from "./components/themeChanger/themeChanger"
import PageSkeleton from './components/PageSkeleton/main';
import FloatingNav from './components/FloatingNav/main';

function App() {
  return (
    <div className="App">
      <FloatingNav />
      <PageSkeleton />
    </div>
  );
}

export default App;
