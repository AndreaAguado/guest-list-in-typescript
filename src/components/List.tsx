import React from "react";
interface IProps {
    people: {
      name: string
      age: number
      url: string
      note?: string
    }[]
  }
const List: React.FC<IProps> = () => {
    return(
        <div>
            I am list
        </div>
    )
}
export default List