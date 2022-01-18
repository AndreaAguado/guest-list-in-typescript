import React from "react";
import { useState } from 'react';
import { IState as Props } from '../App';

import { 
    Input,
    NumberInput,
    Stack,
    Textarea,
    Button,
    Box,
    NumberInputField
 } from '@chakra-ui/react'

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if( 
            !input.name || 
            !input.age || 
            !input.img     
        ) {
            return 
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        });
    }


    return(
        <Box>
            <Stack as="form" spacing={3} onSubmit={(e) => e.preventDefault()} width={['auto', '30rem']} >
               <Input 
                    placeholder='Name' 
                    value={input.name}
                    onChange={handleChange}
                    name="name"
                    size='md' 
                    variant='filled'/>
               <NumberInput  size='md' variant='filled'>
                   <NumberInputField
                        placeholder='Age'
                        value={input.age}
                        onChange={handleChange}
                        name="age"
                        />
               </NumberInput>
               <Input 
                    placeholder='Image URL' 
                    value={input.img} 
                    onChange={handleChange}
                    name="img"
                    size='md' 
                    variant='filled' />
               <Textarea 
                    placeholder='Notes' 
                    value={input.note}  
                    onChange={handleChange}
                    name="note"
                    variant='filled' 
                    />
                <Button
                    onClick={handleClick}
                    size='md'
                    color='white'
                    bg='#0b5468'
                    >
                Add to list
                </Button>
            </Stack>
        </Box>
        
    )
}
export default AddToList;