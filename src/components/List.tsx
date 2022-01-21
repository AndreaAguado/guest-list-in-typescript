import { 
    Heading, 
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { IState as IProps } from '../App';

// interface IProps {
//     people: {
//       name: string
//       age: number
//       url: string
//       note?: string
//     }[]
//   }

const List: React.FC<IProps> = ({people}) => {

    // JSX.Element[] is used to define the type the function returns
    // that would trigger an error if the function didn't had  a "return"  
    const renderList = (): JSX.Element[] => {
        return people.map( (person, index) => {
            return(
            <li key={index} className="List-item">
                <Stack direction={['column', 'row']} justify="center" align="center">
                    <img className="List-img" src={person.url} onError={handleOnErrorEvent} alt={person.name} />
                    <Heading as="h2" size="lg" className="List-name">{person.name}</Heading>
                </Stack>
                <Text fontWeight="bold">{person.age} years old</Text>
                <Text fontWeight="bold" className="List-note">{person.note}</Text>
            </li>
            )
        })
    }

    const handleOnErrorEvent = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // When img src is broken/doesn't load image correctly, this placeholder will be used instead
        e.currentTarget.src = "https://via.placeholder.com/300/9800ff/000000/?text=photo";
      };
    

    return(
        <ul className="List">
            {renderList()}
        </ul>
    )
}
export default List;