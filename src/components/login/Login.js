import React, { Component } from 'react';
import  { Container, Form } from 'react-bootstrap' ;
import { Link, withRouter } from "react-router-dom";
import { FormButton } from "../common/buttons/btn";

import { loginUser } from "../../services/KeepAds_API";
class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            username: "",
            password: ""
        }
    }
    
    handleUsernameChange = ev => {
        this.setState({
            username: ev.target.value
        });
    }

    handlePassChange = ev => {
        this.setState({
            password: ev.target.value
        });
    }
    
    handleSubmit = async (ev) => {
        ev.preventDefault();
        const {history} = this.props;
        const {username, password} = this.state;

        await loginUser(username, password)
        .then((res) => {
            localStorage.setItem("user", username);
            localStorage.setItem("loggedIn", res.data.success);
            history.push("/ads");
        }).catch(err => {
            alert(`Usuario no encontrado || ${err.response.data.error}`);
            history.push("/registro");
        })
    }

    render(){
        const { username, password } = this.state;
        return(
            <Container className="mt-5">
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <h2>Login</h2>
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
                        Login
                    </FormButton>
                </Form>

                <div>
                    <p>Aún no estás registrado? 
                        <Link to="/registro">Registrarse</Link>
                    </p>                    
                </div>
            </Container>
        );
    }
}

export default withRouter(Login);