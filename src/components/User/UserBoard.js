import React from "react";
import SearchUser from "../Search/SearchUser";
import UserList from "./UserList";

const UserBoard = () => {
    return (
        <div className="user__board">
            <SearchUser />
            <UserList />
        </div>
    )
}

export default UserBoard;