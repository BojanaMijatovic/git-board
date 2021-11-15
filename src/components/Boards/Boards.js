import React, {useEffect} from "react";
import UserBoard from "../User/UserBoard";
import RepoBoard from "../Repos/RepoBoard";
import ErrorModal from "../ErrorModal/ErrorModal";
import {useSelector} from "react-redux";

const Boards = () => {
    const error = useSelector((state) => state.updateValue.error)
    let modal;

    useEffect(() => {

    }, [error])

    if (error === true) {
        modal = <ErrorModal />;
    }

    return (
        <div className="boards">
            <RepoBoard />
            <UserBoard />
            {modal}
        </div>
    )
}

export default Boards;