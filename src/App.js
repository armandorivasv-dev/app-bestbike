import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (    
    <div className='App'>
      <NavBar />
      <ItemListContainer message={'Catalogo de Productos'} />
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
