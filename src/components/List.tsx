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
        return people.map( (person) => {
            return(
            <li className="List-item">
                <div className="List-header">
                    <img className="List-img" src={person.url} alt={person.name} />
                    <h2 className="List-name">{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>

            </li>)
        })
    }
    return(
        <ul className="List">
            {renderList()}
        </ul>
    )
}
export default List