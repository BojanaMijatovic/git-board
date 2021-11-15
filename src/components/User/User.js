import React, {useEffect, useState, useMemo } from "react";
import {useSelector, useDispatch} from "react-redux";
import api from "../../api";
import {selectUser, errorFound, searchValue, resetRepo} from "../../redux/userSlice";

const User = ({ name }) => {
    const [info, setInfo] = useState(null);

    const user = useSelector((state) => state.updateValue.userName);
    const error = useSelector((state) => state.updateValue.error);
    const dispatch = useDispatch();

    let avatar;
    let userName;
    let desc;
    let userCard = [];

    useEffect(() => {
        async function fetchApi() {
            try {
                if(name){
                    const response = await api.get(`/users/${name}`);

                    const users = response.data;

                    setInfo(users);
                }
            } catch (error) {
                dispatch(errorFound());
                dispatch(searchValue(''));
                dispatch(resetRepo(''));
            }
        }

        fetchApi();

    }, [user]);

    if (info != null ) {
        avatar = info.avatar_url;
        userName = info.name ? info.name : info.login;
        desc = info.bio ? <p className="user__description">{info.bio}</p> : ''
    }

    if (error == false ) {
        userCard = (
            <div className="user__wrapper" onClick={() => { dispatch(selectUser(info.login))}}>
                <div className="user__avatar"><img src={avatar}/></div>
                <div className="user__info">
                    <h3 className="user__name">{userName}</h3>
                    {desc}
                </div>
            </div>
        )
    }




    return (
        <>
            {userCard}
        </>
    )
}

export default User;