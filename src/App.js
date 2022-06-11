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

  const handleSelectChange=(e)=>{
    if(e.target.value!=='- Select a timezone -') {
      setSelectedTZName(e.target.value);
      setSelectedTZTime(moment().tz(e.target.value).format('hh:mm:ss A'));
      selectedTZId(uuidv4())
    }
  }
  const handleAddClock=()=> {
    const selectedTZIndex=listOfSelectedTZ.findIndex((tz)=>tz.zoneName===selectedTZName);

    if (selectedTZIndex < 0 && selectedTZName !=='') {
      const newList = listOfSelectedTZ.map((tz)=>({...tz}));
      const newTZ= {
        id: selectedTZId,
        zoneName: selectedTZName,
        zoneTime: selectedTZTime
      }
      newList.push(newTZ);
      setListOfSelectedTZ(newList)
    }
  };

  const handleTZRemove = (id) => {
    const newList= listOfSelectedTZ.filter((tz)=>tz.id !== id);
    setListOfSelectedTZ(newList);
  }

  return (
    <div className="App">
    <Header />
    <Main handleTZRemove={handleTZRemove} handleAddClock={handleAddClock} timeZones={timeZones} listOfSelectedTZ={listOfSelectedTZ} handleSelectedChange={handleSelectedChange} />
    </div>
  );
}

export default App;
