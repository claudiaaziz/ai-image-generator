import './ImageGenerator.css'
import defaultImg from "../assets/default_image.svg"

const ImageGenerator = () => {
  return (
    <div className="ai-image-generator">
      <div className="header">AI image <span>generator</span></div>
      <div className="img-loading">
        <div className="image"><img src={defaultImg} alt="default" /></div>
      </div>
      <div className="search-box">
        <input type="search" className='search-input' placeholder='Describe What You Want To See' />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator