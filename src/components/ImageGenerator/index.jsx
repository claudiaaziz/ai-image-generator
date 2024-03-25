import './ImageGenerator.css'
import defaultImg from "../assets/default_image.svg"
import { useRef, useState } from 'react';

const ImageGenerator = () => {
  const [imgUrl, setimgUrl] = useState("/")
  const inputRef = useRef(null)

  const imgGenerator = async () => {
    if (inputRef.current.value === "") return 0
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
    console.log(res)
    console.log(data)
  }

  return (
    <div className="ai-image-generator">
      <div className="header">AI image <span>generator</span></div>
      <div className="img-loading">
        <div className="image"><img src={imgUrl === "/" ? defaultImg : imgUrl} alt="default" /></div>
      </div>
      <div className="search-box">
        <input type="search" ref={inputRef} className='search-input' placeholder='Describe What You Want To See' />
        <div className="generate-btn" onClick={imgGenerator}>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator