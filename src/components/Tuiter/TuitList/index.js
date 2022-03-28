import React from "react";
import {useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);

    return (
        <ul className={`list-group`}>
            {tuits.map && tuits.map(tuit =>
            <TuitListItem key={tuit._id}
                          post={tuit}/>)}
        </ul>
    )
};
export default TuitList;