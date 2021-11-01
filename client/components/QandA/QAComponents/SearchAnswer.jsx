import React from 'react'

class SearchAnswer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }
  handleChange() {

  }
  handleSubmit() {

  }
  render() {
    return (
      <form id="searc-answer">
        <input type="text" placeholder="Search a question here" />
        <input type="submit" />
      </form>
    )
  }
}

export default SearchAnswer;