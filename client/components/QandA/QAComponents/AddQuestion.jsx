import React from 'react';

class AddQuestion extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      entry: ''
    }
  }
  handleChange () {

  }
  handleSubmit () {

  }
  render() {
    return (
      <form id="AddQuestion">
        <input type="text" placeholder="ADD QUESTION HERE"/>
        <input type="submit" />
      </form>
    )
  }
}
// checking
export default AddQuestion;