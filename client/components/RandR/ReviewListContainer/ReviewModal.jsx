import React from 'react';
import axios from 'axios'
import StarGraphic from '../../GlobalComponents/StarGraphic.jsx'
import ReactFileReader from 'react-file-reader';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      review: '',
      name: '',
      email: '',
      photos: [],
      product_id: this.props.productId,
      recommend: false,
      thumbnail: '',
      rating: 0
   }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.minCharacterLength = this.minCharacterLength.bind(this);
    this.renderFactors = this.renderFactors.bind(this);
    this.handleRadioSelect = this.handleRadioSelect.bind(this);
    this.starRatingGraphic = this.starRatingGraphic.bind(this);
    this.handleRecommendSelect = this.handleRecommendSelect.bind(this);
    this.handleUploadPhotosChange = this.handleUploadPhotosChange.bind(this);
    this.characteristics = {};

  }

  handleSubmit = (e) => {
    e.preventDefault();
    let review = this.state.review
    let summary = review.substring(0, 60) + '...'

    axios.post(`/reviews`, {
        data: {
        product_id: this.state.product_id,
        rating: this.state.rating,
        body: this.state.review,
        summary: summary,
        recommend: this.state.recommend,
        name: this.state.name,
        email: this.state.email,
        photos: this.state.photos,
        characteristics: this.characteristics
      }
    })
    .then((response) => {
      this.props.handleClose()
      this.props.getProductReviews(Number(this.state.product_id))
    })
    .catch((err) => {
      console.log(err)
    })
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
  handleRadioSelect() {
    let id = event.target.id.substring(0, event.target.id.length -1);
    this.characteristics[id] = Number(event.target.value);
  }

  handleRecommendSelect() {
    if (event.target.value === 'true') {
      this.setState({recommend: true})
    } else {
      this.setState({recommend: false})
    }
  }

  starRatingGraphic() {
    return (
      <StarGraphic metaScore={this.state.rating} onClick={this.handleStarRatingGraphicClick.bind(this)} />
    )

  }

  handleStarRatingGraphicClick(starvalue) {
    this.setState({rating: starvalue})

  }

  handleUploadPhotosChange(files) {
    let urlArray = [];
    for (var key in files) {
      urlArray.push(files[key].name)
    }
    let fileData = new FileReader();
    fileData.onloadend = (e) => {
      const content = e.target.result;
      this.setState({
        thumbnail: content,
        photos:urlArray
      })
    }
    fileData.readAsDataURL(files[0])
  }

  renderFactors() {
    let characteristicsGuide = {
      'Size': ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
      'Width': ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      'Comfort': ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      'Quality': ['Poor', 'Below average', 'What i expected', 'Pretty great', 'Perfect'],
      'Length': ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      'Fit': ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
    }

    let characteristicsArray = Object.entries(this.props.metaData.characteristics)
   return characteristicsArray.map((characteristic, index) => {
      return (
      <div key={`${index}`}>
        <div className="factors" key={characteristic[1].id} id={characteristic[0]}> {characteristic[0]}: <br/>
          <label htmlFor={`${characteristic[1].id}1` }>{characteristicsGuide[characteristic[0]][0]}</label>
              <input onChange={this.handleRadioSelect} type="radio" id={`${characteristic[1].id}1`} name={characteristic[0]} value="1" />
          <label htmlFor={`${characteristic[1].id}2`}>{characteristicsGuide[characteristic[0]][1]}</label>
              <input onChange={this.handleRadioSelect} type="radio" id={`${characteristic[1].id}2`} name={characteristic[0]} value="2" />
          <label htmlFor={`${characteristic[1].id}3`}>{characteristicsGuide[characteristic[0]][2]}</label>
              <input onChange={this.handleRadioSelect} type="radio" id={`${characteristic[1].id}3`} name={characteristic[0]} value="3" />
          <label htmlFor={`${characteristic[1].id}4`}>{characteristicsGuide[characteristic[0]][3]}</label>
              <input onChange={this.handleRadioSelect}  type="radio" id={`${characteristic[1].id}4`} name={characteristic[0]} value="4" />
          <label htmlFor={`${characteristic[1].id}5`}>{characteristicsGuide[characteristic[0]][4]}</label>
              <input onChange={this.handleRadioSelect} type="radio" id={`${characteristic[1].id}5`} name={characteristic[0]} value="5" />
        </div>
      <br/>
      </div>)
    })

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
            <div>
              {this.starRatingGraphic()}
            </div>
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
                <input onChange={this.handleRecommendSelect} type="radio" id='yes' name="recommend" value={true} />
                <label htmlFor='no'>No</label>
                <input onChange={this.handleRecommendSelect} type="radio" id='no' name="recommend" value={false} />
              </div>

              <div className="factors">
                {this.renderFactors()}
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
                <ReactFileReader handleFiles={this.handleUploadPhotosChange} >
                  <button className="btn">Upload Photo</button>
                </ReactFileReader>
                <p>Preview:</p>
                <img src={this.state.thumbnail} height="10%" width="10%" />
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