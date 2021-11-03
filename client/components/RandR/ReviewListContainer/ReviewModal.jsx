import React from 'react';
import axios from 'axios'

class ReviewModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review: '',
      name: '',
      email: '',
      photos: [],
      product_id: this.props.productID,
      recommend: false,
      characteristics: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.minCharacterLength = this.minCharacterLength.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // axios.post(`/reviews`, {
    //   params: this.state.product_id,
    //   data: {
    //     body: this.state.review,
    //     recommend: this.state.recommend,
    //     name: this.state.name,
    //     email: this.state.email,
    //     photos: []
    //   }
    // })
    // .then((response) => {
    //   console.log('Review posted')
    //   this.props.handleClose()
    //   // need to get product reviews after submitting will handle that later;
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  minCharacterLength = () => {
    if (this.state.review.length <= 50) {
      return (
      <div id='characters-until-50' style={{color: 'red'}}>
        {`Mininum required characters left: ${50 - this.state.review.length}`}
      </div>
      )
    } else {
      return (
        <div id='characters-until-50'>
          Minimum achieved
        </div>
        );
    }

  }

  render () {
    if (!this.props.show) {
      return null
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="model-header">
            <h4 className="modal-title">ADD Review HERE</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-review">
              <label> REVIEW:* <br />
                <textarea  name="review" placeholder="Why did you like the product or not?" rows="5" cols="30" maxLength="1000" minLength="50" onChange={this.handleChange} required/>
              </label>
              {this.minCharacterLength()}
              </div>
              <div className="modal-recommended">Would you recommend this product?<br />
                <label htmlFor='yes'>Yes</label>
                <input type="radio" id='yes' name="recommend" value="Yes" />
                <label htmlFor='no'>No</label>
                <input type="radio" id='no' name="recommend" value="NO" />
              </div>

              <div className="factors">
                <input type="radio" id="1" name="factor" value="1" />
                <input type="radio" id="2" name="factor" value="2" />
                <input type="radio" id="3" name="factor" value="3" />
                <input type="radio" id="1" name="factor" value="4" />
                <input type="radio" id="4" name="factor" value="5" />
              </div>

              <div className="modal-name">
              <label> NAME:* <br />
                <input type="text" name="name" placeholder="Example: jack543!" maxLength="60" onChange={this.handleChange} required/>
                <span>For privacy reasons, do not use your full name or email address</span>
              </label>
              </div>
              <div className="modal-email">
              <label> EMAIL:* <br />
                <input type="email" name="email" maxLength="60" placeholder="Example: jack@email.com" onChange={this.handleChange} required/>
                <span>For authentication reasons, you will not be emailed</span>
              </label>
              </div>
              <br/>
              <div className="modal-submit">
              <label>
                <input type="submit" name="submit answer"/>
              </label>
              </div>
              <br/>
              <div className="modal-upload-pics">
                <label>
                  <button>Upload pictures</button>
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="modal-close-button" onClick={this.props.handleClose}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewModal;