import {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import moment from 'moment-timezone';
import {v4 as uuidv4} from 'uuid'
import './App.css';

function App() {
  const [timeZones, setTimeZones]=useState(moment.tz.names());
  const [selectedTZName, setSelectedTZName] =useState('');
  const [selectedTZTime, setSelectedTZTime] =useState('');
  const [selectedTZId, setSelectedTZId] =useState('');
  const [listOfSelectedTZ, setListOfSelectedTZ]= useState([]);
  return (
    <div className="App">
    <Header />
    <Main handleTZRemove={handleTZRemove} handleAddClock={handleAddClock} timeZones={timeZones} listOfSelectedTZ={listOfSelectedTZ} handleSelectedChange={handleSelectedChange} />
    </div>
  );
}

export default App;