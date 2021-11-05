import React from 'react'

class SearchAnswer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.search(event.target.value)
  }

  handleSubmit(event) {
  event.preventDefault()
  }

  render() {
    return (
      <form id="search-answer">
        <input type="text" placeholder="Search a question here" onChange={()=>this.handleChange(event)}/>
      </form>
    )
  }
}

export default SearchAnswer;