import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (    
    <div className="App">
      <NavBar />
      <ItemListContainer message={'Pronto Catalogo de Productos'} />
    </div>
  );
}

export default App;
