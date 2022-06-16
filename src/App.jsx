
import React from 'react';
import {firebase} from './firebase'


function App() {
  
  React.useEffect(()=>{
  
  const obtenerDatos= async ()=> {
    try{

      const db = firebase.firestore()
      const data = await db.collection('tareas').get()
      console.log(data.docs)
    }catch (error){
      console.log(error)}
  }
//sadsadadasd
  obtenerDatos();

},[])

  return (
    <div className="container">
     sadadsd
    </div>
  );
}

export default App;
