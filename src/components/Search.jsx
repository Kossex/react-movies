import React from "react";

class Search extends React.Component{
    state={
        search:'',
        type:'all'
    }
    handleSearch=(e)=>{
        if (e.key==='Enter'){
            this.props.searchMovie(this.state.search,this.state.type);
        }
    }
    handleChange=(e)=>{
        this.setState(()=>({type:e.target.dataset.type}),()=>{
            this.props.searchMovie(this.state.search,this.state.type);
        })
    }
    render(){
        return <div className="input-field col s12">
       <input  className="validate"  placeholder="Search"
              value={this.state.search}
              onChange={(event)=>{
                this.setState({search:event.target.value})
              }}
              onKeyDown={this.handleSearch}/>
                  <button className="btn"
                  onClick={()=>this.props.searchMovie(this.state.search,this.state.type)}>Search</button>
    <div className="radiobtn">
    <label>
        <input name="all"
         type="radio"
         data-type="all"
         onChange={this.handleChange}
         checked={this.state.type==='all'}
         />
        <span>All</span>
      </label>
      <label>
        <input name="group1"
         type="radio"
         data-type="movie"
         onChange={this.handleChange}
         checked={this.state.type==='movie'}
         />
        <span>Only movies</span>
      </label>
      <label>
        <input name="group1"
         type="radio"
         data-type="series"
        onChange={this.handleChange}
        checked={this.state.type==='series'}
         />
        <span>Only series</span>
      </label>
    </div>
    </div>

    }
}
export {Search};