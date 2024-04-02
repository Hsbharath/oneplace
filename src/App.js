import './App.css';

import Main from './components/Main';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className='App'>
      <div className='w-full min-h-[100vh] flex items-start justify-start'>
        <div className='hidden lg:flex'>
          <SideNav />
        </div>
        <Main />
      </div>
    </div>
  );
}

export default App;
