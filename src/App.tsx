import { useRef, useState } from 'react'

import './App.css'
import pinyin from 'pinyin'

function App() {
  const inputRef = useRef()
  const [data, setData] = useState([])
  const handlePy = () => {
    console.log()
    const py = pinyin(inputRef.current.value, { style: pinyin.STYLE_NORMAL }).map(word => word[0].toUpperCase());
    console.log(py);
    setData(py)
  }
  return (
    <>
      <div>
        <input type="text" ref={inputRef}/>
        <br />
        <button onClick={handlePy}>英文</button>
        <br />
        {data?.length && data.map(item => {
          return <div>
            {item}
          </div>
        })}
      </div>
    </>
  )
}

export default App
