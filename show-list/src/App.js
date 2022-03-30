import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Stack } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ShowList from './components/ShowList/showList';
import PaginationNav from './components/PaginationNav/paginationNav';

function App() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8888/movies').then(x=>x.json()).then(x=>setData(x));
  },[]);

  return (
    <div className="App">
    <Container>
      <PaginationNav/>
      <ShowList showData={data}/>
    </Container>
    </div>
  );
}

export default App;
