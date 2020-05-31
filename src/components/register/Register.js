import React from 'react';
import { useHistory , Link } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap' ;
import { FormButton } from "../_common/buttons/btn";
import { FormKeepAds, Input } from "../_providers/ProviderForm/ProviderForm";

import { registerUser } from "../../services/KeepAds_API";



function Register(){

    const history = useHistory();

    const handleSubmit = async data => {

        await registerUser(data.username, data.password)
        .then((res) => {
            localStorage.setItem("user", data.username);
            localStorage.setItem("loggedIn", res.data.success);
            history.push("/ads");
        }).catch(() => {
            alert("Algo salió mal, vuelve a intentarlo. Lo Sentimos!!");
            history.push("/registro");
        })

    }

    return(

        <Container>

            <Row className="my-5">
                <Col>
                    <h3>Registro</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    
                    <FormKeepAds onSubmit = {handleSubmit} initialState= {{username:"", password:""}}>

                        <Input type="text" name="username" placeholder="username" />
                        <Input type="password" name="password" placeholder="password" /> 

                        <FormButton variant="primary" type="submit">
                            Registrarme
                        </FormButton>

                    </FormKeepAds>
                    <p>¿Ya tienes una cuenta en KeepAds? <Link to="/login">Iniciar sesión</Link></p>
                </Col>
            </Row>
        </Container>
    );

}

export default Register;