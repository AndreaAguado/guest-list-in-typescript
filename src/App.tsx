import { 
  Box,
  useColorModeValue,
 } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import List from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const bg = useColorModeValue('teal.50', 'gray.800');
 const [people, setPeople] = useState<IState["people"]>([
   {
     name: "Mikasa Ackerman",
     age: 19,
     url: "https://64.media.tumblr.com/01a3b0150ca6a02edc46eede298fd12c/a5ffc76656af69e6-57/s640x960/f3d8df3ad8b63a868211a4eabd389ba8c4bd912b.png",
     note: "She's really cool"
   }
 ])

  return (
    <Box className="App" textAlign="center" p="30px" h="100vh" bg={bg}
    backgroundImage="url('https://www.pngall.com/wp-content/uploads/2016/07/Confetti-Free-Download-PNG.png')"
    backgroundPosition="center"
    bgSize="contain">
      <ColorModeSwitcher/>
      <h1 className="title">People invited to my party
        <span>
           <img className="title_icon" src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/party-popper_1f389.png" alt="party popper icon" />
        </span>
      </h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </Box>
  );
}

export default App;
