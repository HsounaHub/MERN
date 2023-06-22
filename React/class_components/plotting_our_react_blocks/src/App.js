import './components/style.css'
import Header from './components/Header';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation';
import Subcontent from './components/Subcontent';
function App() {
  return (
    <div className="App">
      <div class="container">
      <Header />
        <div class="row">
            <Navigation/>
            <main>
            <div class="main">
                <div class="row">
                    <Subcontent/>
                    <Subcontent/>
                    <Subcontent/>
                </div>
                <Advertisement/>
            </div>
            </main>
        </div>
    </div>
    </div>
  );
}

export default App;
