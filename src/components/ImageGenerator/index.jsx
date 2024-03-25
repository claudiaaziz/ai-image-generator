import './ImageGenerator.css'
import defaultImg from "../assets/default_image.svg"
import { useRef, useState } from 'react';

const ImageGenerator = () => {
  const [imgUrl, setImgUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  const imgGenerator = async () => {
    if (inputRef.current.value === "") return
    
    setLoading(true)
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY

    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "User-Agent": "Chrome"
      }, 
      body: JSON.stringify({
        prompt: inputRef.current.value,
        n: 1,
        size: "512x512"
      })
    })

    const data = await res.json()
    setImgUrl(data.data[0].url)
    setLoading(false)
  }

  return (
    <div className="ai-image-generator">
      <div className="header">AI image <span>generator</span></div>
      <div className="img-loading">
        <div className="image"><img src={imgUrl === "" ? defaultImg : imgUrl} alt="default" /></div>
        <div className="loading">
          <div className={loading ? "loading-bar-full loading-bar" : "loading-bar"}></div>
          <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
        </div>
      </div>
      <div className="search-box">
        <input type="search" ref={inputRef} className='search-input' placeholder='Describe What You Want To See' />
        <div className="generate-btn" onClick={imgGenerator}>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator