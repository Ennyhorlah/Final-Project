import React from 'react'
import { ClipLoader} from 'react-spinner'

const Spinner = () => {
  return (
    <div style={{width:'100px', margin:'auto', display: 'block' }}>
      <ClipLoader color="#52bfd9" size={100}/>
    </div>
  )
}

export default Spinner
