import {useState, createContext, useEffect, useReducer} from 'react';
import {reducer} from '../StateReducer';
import moment from 'moment-timezone';
import {v4 as uuidv4} from 'uuid'

export const TZContext = createContext();

const getList=JSON.parse(localStorage.getItem('listOfClocks'))

const defaultState={
  listOfSelectedTZ: getList ? getList : []
}

export const TZProvider = ({children})=> {
    const [timeZones]= useState(moment.tz.names());
    const [selectedTZName, setSelectedTZName] =useState('');
    const [selectedTZId, setSelectedTZId] =useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);
  
    useEffect(()=>{
      localStorage.setItem('listOfClocks', JSON.stringify(state.listOfSelectedTZ))
    })
  
    const handleSelectChange=(e)=>{
      if(e.target.value!=='- Select a timezone -') {
        setSelectedTZName(e.target.value);
        setSelectedTZId(uuidv4())
      }
    }
    const handleAddClock=()=> {
      const selectedTZIndex=state.listOfSelectedTZ.findIndex((tz)=>tz.zoneName===selectedTZName);
  
      if (selectedTZIndex < 0 && selectedTZName !=='') {
         state.listOfSelectedTZ.map((tz)=>({...tz}));
        const newTZ= {
          id: selectedTZId,
          zoneName: selectedTZName,
        }
        dispatch({ type: 'ADD_ITEM', payload: newTZ})
      }
    };
  
    const handleTZRemove = (item) => {
      dispatch({type: 'REMOVE_ITEM', payload: item.id})
  
    }
  const {listOfSelectedTZ} = state;
    return (
    <TZContext.Provider value={{handleSelectChange, handleAddClock, handleTZRemove, listOfSelectedTZ, timeZones}}>
        {children}
    </TZContext.Provider>
    )
}