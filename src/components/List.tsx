import { 
    Heading, 
    Stack,
    Text,
    List as ChakraList,
    ListItem,
    SimpleGrid,
    GridItem,
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
            <ListItem key={index} variant='myListItem'>
                <SimpleGrid alignItems='center'
                columns={[1, 5]} 
                >
                    <GridItem colSpan={2} bg='pink'>
                        <Stack direction={['column', 'row']} justify="flex-start" align="center">
                            <img className="List-img" src={person.url} onError={handleOnErrorEvent} alt={person.name} />
                            <Heading as="h2" size="lg" className="List-name">{person.name}</Heading>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={1} bg='purple.500'>
                        <Text w='100%' fontWeight="bold">{person.age} years old</Text>
                    </GridItem>
                    <GridItem colSpan={2} bg='green.200'>
                        <Text w='100%' fontWeight="bold">{person.note}</Text>
                    </GridItem>
                </SimpleGrid>
            </ListItem>
            )
        })
    }

    const handleOnErrorEvent = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // When img src is broken/doesn't load image correctly, this placeholder will be used instead
        e.currentTarget.src = "https://via.placeholder.com/300/9800ff/000000/?text=photo";
      };
    

    return(
        <ChakraList mx='auto' width={{base: 'auto', lg: '60rem'}}>
            {renderList()}
        </ChakraList>
    )
}
export default List;