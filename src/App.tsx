import React from 'react';
import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

 const [people, setPeople] = useState<IState["people"]>([
   {
     name: "Mikasa Ackerman",
     age: 19,
     url: "https://64.media.tumblr.com/01a3b0150ca6a02edc46eede298fd12c/a5ffc76656af69e6-57/s640x960/f3d8df3ad8b63a868211a4eabd389ba8c4bd912b.png",
     note: "She's really cool"
   }
 ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList/>
    </div>
  );
}

export default App;
