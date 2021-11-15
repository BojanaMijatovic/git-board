import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetState} from "../../redux/userSlice";

const ErrorModal = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.updateValue.userName);
    const error = useSelector((state) => state.updateValue.error);

    useEffect(() => {
    }, [error])

    const resetValues = () => {
        dispatch(resetState());
    }

    return (
        <div className="modal">
            <div className="modal__wrapper">
                <button className="modal__button modal__close" onClick={() => resetValues()}>x</button>
                <div className="modal__content">
                    <h3>Ooops...</h3>
                    <p>Looks like something went wrong with your search.</p>
                    <p>Please be patient and try again in a while.</p>
                </div>
                <button className="modal__button modal__button-close" onClick={() => resetValues()}>Close</button>
            </div>
        </div>
    )
}

export default ErrorModal;