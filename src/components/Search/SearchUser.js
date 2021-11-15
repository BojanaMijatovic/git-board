import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import {resetRepo, searchValue} from "../../redux/userSlice";

const SearchUser = () => {
    const dispatch = useDispatch();

    const [inputValue, setValue ] = useState('');

    const handleClick = () => {
        dispatch(searchValue(inputValue));
        dispatch(resetRepo(inputValue));
        setValue('');
    }

    return (
        <div className="user__search-form">
            <label htmlFor="user__search-input" className="user__search-label">
                Search for a user
                <input
                    value={inputValue}
                    type="text"
                    placeholder="Start typing..."
                    id="user__search-input"
                    className="user__search-input"
                    onChange={(e) => setValue(e.target.value)}
                />
            </label>

            <button className="user__search-button" onClick={() => handleClick()}>Search</button>
        </div>
    )
}

export default SearchUser;