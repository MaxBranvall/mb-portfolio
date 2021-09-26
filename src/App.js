import logo from './logo.svg';
import './App.css';

import ThemeChanger from "./components/themeChanger/themeChanger"
import PageSkeleton from './components/PageSkeleton/main';

function App() {
  return (
    <div className="App">
      <PageSkeleton />
    </div>
  );
}

export default App;
