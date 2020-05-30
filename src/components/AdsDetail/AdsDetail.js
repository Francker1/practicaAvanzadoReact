import React, { useState, useEffect  } from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import { useParams} from "react-router-dom";

import { getAdByID } from "../../services/KeepAds_API";

function AdDetail(){

    const [ ad, setAd ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAdByID(id);
            setAd(res.data.result)
        }
       
        fetchData(id);
    });

    return(
        <div>
            {ad._id}
        </div>
    )
}

export default AdDetail;