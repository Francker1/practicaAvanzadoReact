import React, {Component} from 'react';
import axios from "axios";

export default class AdDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            ad: []
        }
    }

    componentDidMount = () => {
        this.getAdvertismentData();
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.getAdvertismentData();
        }
    }

    getAdvertismentData = () => {
        axios.defaults.withCredentials = true;
        axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${this.props.match.params.id}`
        ).then(res => {
        const ad = res.data.result;
        this.setState({ad:ad})
        }).catch(err => {console.log(err)})
    }
    
    render(){
        const { ad } = this.state;
        const tags = ad.tags;
        let tagsJoined;

        if(tags){
            tagsJoined = tags.join(", ");
        }
        
        return(
            <ul>
                <h3>{ad.name}</h3>
                <p>Precio: {ad.price}</p>
                <p>desc: {ad.description}</p>
                <p>tipo: {ad.type}</p>
                <p>img: {ad.photo}</p>
                <p>fecha anuncio: {ad.createdAt}</p>
                <p>tags: {tagsJoined}</p>
            </ul>
        );
    }
}
