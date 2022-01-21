import { 
    Heading, 
    Stack,
    Text,
    List as ChakraList,
    ListItem,
    SimpleGrid,
    GridItem,
    Image,
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
            <ListItem key={index} variant='myListItem' bg='#00ffffbd' p='1.1rem' borderColor='rgba(0, 0, 0, 0.233)' borderWidth='0.1rem'>
                <SimpleGrid alignItems='center' 
                columns={[1, 9]} 
                >
                    <GridItem colSpan={4}>
                        <Stack direction={['column', 'row']} justify="flex-start" align="center">
                            <Image 
                            src={person.url} 
                            onError={handleOnErrorEvent} 
                            alt={person.name} 
                            w='4rem'
                            h='4rem'
                            borderRadius='100%'
                            mr='0.5.5rem'/>
                            <Heading as="h2" size="lg">{person.name}</Heading>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Text w='100%' fontWeight="bold">{person.age} years old</Text>
                    </GridItem>
                    <GridItem colSpan={3}>
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