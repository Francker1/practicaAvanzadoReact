import React from "react";
import { Button } from "react-bootstrap";

export default function ButtonToFavs({action, isInFavs}){

    return(
    
        <Button 
                variant="info" 
                onClick={action} 
//                disabled={isInFavs ? "disabled" : false}
        >
                Añadir a Favoritos
        </Button>

    );
}