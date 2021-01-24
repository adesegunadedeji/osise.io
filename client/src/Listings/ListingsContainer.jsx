import React, { Component } from 'react';
import HomesList from './HomesList';
import NewHome from './NewHomes';
const url = process.env.REACT_APP_LISTINGURL;

class ListingsContainer extends Component {
    constructor(props){
        super(props) ;
            this.state={
            home: [],
        }
    }
    componentDidMount(){ 
        console.log("Component Mounted");
        this.getHomes();
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    getHomes = async() => {
        try {
            const homes = await fetch(`${url}`);
            const parsedResponse = await homes.json();
            if(parsedResponse.status === 200 ) {
                this.setState({
                    home: parsedResponse.data
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    createHome = async(formData) => {
        try {
            
            const newHome = await fetch(`${url}/new`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                }
            });
            let parseResponse = await newHome.json();
            this.setState({
                home: [...this.state.home, parseResponse.data]
            })
        } catch (error) {
            console.log(error);
        }
    }

    deleteHome = async(id)=> {
        try {
            await fetch(`${url}/${id}`,{
                method: "DELETE",
            });
            this.setState({
                homes: this.state.home.filter(home => home.id !== id )
            })
        } catch (error) {
            console.log(error);
        }
    }

    updateHome = async(id, formData) => {
        try {
            const updatedHome = await fetch(`${url}/${id}`, {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            const parseResponse = await updatedHome.json();
            if(parseResponse.status === 200 ) {
                this.setState({
                homes: this.state.home.map( home => home.id === id? parseResponse.data: home)
            })
        }
        } catch (error) {
            console.log(error);
            
        }

    }
    render() {
        console.log(this.state.homes)
        return (
            <div>
                <NewHome/>
           <HomesList homes={this.state.home}/>
            </div>
        )
    }
}
export default ListingsContainer;