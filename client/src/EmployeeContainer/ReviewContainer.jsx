import React, { Component } from 'react';
import Chart from '../Chart/Chart'
import Home from '../HomeContainer/Home';
import ReviewList from './ReviewList/ReviewList';
const url = "http://localhost:8000/employeereviews"

class ReviewContainer extends Component {
constructor(){
    super();
    this.state = {
        reviews: []
    }
}

componentDidMount(){
    console.log("Component is Mounting")
    this.getReviews();
};


getReviews = async()=> {
    try {
        const reviews = await fetch (`${url}`);
        const fetchedData = await reviews.json();
        this.setState({
            reviews: fetchedData
        })
        console.log(fetchedData);
    } catch (error) {
        console.log(error);
        
    }
}


render(){
    return(
        <div>
           <Home/>
           <ReviewList reviews={this.state.reviews}/>
           <Chart reviews={this.state.reviews}/>
        </div>
    )
}

}

export default ReviewContainer;