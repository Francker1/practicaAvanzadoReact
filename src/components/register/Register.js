import React, { Component } from 'react';
import  { Container, Form } from 'react-bootstrap' ;
import { withRouter } from "react-router-dom";
import { FormButton } from "../_common/buttons/btn";

import { registerUser } from "../../services/KeepAds_API";

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: "", 
            password: ""   
        }
    }
    
    handleUsernameChange = ev => {
        this.setState({
            username: ev.target.value
        })
    }

    handlePassChange = ev =>{
        this.setState({
            password: ev.target.value
        })
    }
    
    handleSubmit = async ev => {
        ev.preventDefault();
        const {history} = this.props;
        const {username, password} = this.state;

        await registerUser(username, password)
        .then((res) => {
            localStorage.setItem("user", username);
            localStorage.setItem("loggedIn", res.data.success);
            history.push("/ads");
        }).catch(() => {
            alert("Algo salió mal, vuelve a intentarlo. Lo Sentimos!!");
            history.push("/registro");
        })

    }


    render(){
        const { username, password } = this.state;
        return(
            <Container className="mt-5">
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <h2>Registro</h2>
                    </div>  
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="usuario" 
                            value={username} 
                            onChange={this.handleUsernameChange}   
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            required
                            type="password" 
                            placeholder="contraseña" 
                            value={password}
                            onChange={this.handlePassChange}
                        />
                    </Form.Group>
                    <FormButton type="submit">
                        Registrarse
                    </FormButton>
                </Form>
            </Container>
        );
    }
}

export default withRouter(Register);