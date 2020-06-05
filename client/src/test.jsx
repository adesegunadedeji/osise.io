import React,{Component} from 'react';

class Articles extends Component {
    constructor(){
    super();
    this.state = {
      author: [],
      search: ""
    }
  }


  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Fetch Button Submitted");
    this.getAPI(this.state);
  }
  getAPI = async(search)=>{
    const term = this.state.search;
    console.log(term);
    const getAuthor = await fetch(`https://jsonmock.hackerrank.com/api/articles?author=${term}&page=1`);
    const parsedResponse = await getAuthor.json();
    console.log(parsedResponse.data);
    this.setState({
      author: parsedResponse.data
    })
  }

   componentDidMount(){
     this.getAPI();
   }
  render() {
    let valid = this.state.author;
    let authorList = this.state.author.map(author => {
      console.log(author);
      return (
        <ul key = {author.id}>
          <li>{author.title}</li>
        </ul>
      )
    })
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>author:</span>
            <input name="search" type="text" className="text-input" data-testid="text-input"  onChange={this.handleChange}/>
            <button className="fetch-button" data-testid="fetch-button" onClick={this.handleSubmit}>Fetch</button>
          </div>
        </div>
        <div>
          {valid ?  
          <div className="results">
    <li data-testid="result-row">{authorList}</li>
        </div>:  <div data-testid="no-results">No results</div> }
        </div>
      </React.Fragment>
    );
  }
}

export default Articles;
