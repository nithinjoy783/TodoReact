import axios from 'axios';
import React from 'react';


export default class PersonList extends React.Component {
    state={
        persons:[],
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
            console.log(res);
            this.setState({persons:res.data});
        });
        
    }
    render(){
        return <u1>{this.state.persons.map(person =><li>{person.name}</li>)}
        </u1>;
    }
}

