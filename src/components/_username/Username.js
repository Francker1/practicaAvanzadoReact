import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { Row } from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { fetchUser, registerUser } from "../../store/actions";

export default function Username({user}){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(registerUser(user));
        dispatch(fetchUser());
    }, [dispatch]);

    return(
        <Row className="my-3">
            <h4><AccountCircleIcon color="secondary"/> Howdy, {user.username}</h4>
        </Row>
    )
}