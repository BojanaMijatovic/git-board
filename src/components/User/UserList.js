import React from "react";
import { useState, useEffect, useMemo } from "react";
import User from "./User";
import {useDispatch, useSelector} from "react-redux";
import api from "./../../api";
import {errorFound, resetRepo, searchValue} from "../../redux/userSlice";

const UserList = () => {
    const [ userList, setUsers ] = useState(null);
    const user = useSelector((state) => state.updateValue.userName);
    const error = useSelector((state) => state.updateValue.error);
    const dispatch = useDispatch();
    let usersList = [];



    useEffect(() => {
        async function fetchApi() {
            try {
                if(user){
                    const response = await api.get(`/search/users?q=${user}`);

                    const users = response.data.items;

                    setUsers(users);
                    console.log(users)

                }
            } catch (error) {
                dispatch(errorFound());
                dispatch(searchValue(''));
                dispatch(resetRepo(''));
            }
        }

        fetchApi();
    }, [user, userList]);

    console.log(userList)

    if (userList != null) {
            usersList = userList.map((user) =>
                   <User
                        key={user.id}
                        name={user.login}
                    />
                );
    }


    return (
        <div className="user__list">
            {usersList}
        </div>
    )
}

export default UserList;
