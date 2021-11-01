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
  handleChange() {

  }
  handleSubmit(event) {
  event.preventDefault()
  }
  render() {
    return (
      <form id="searc-answer" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search a question here" />
        <input type="submit" />
      </form>
    )
  }
}

export default SearchAnswer;