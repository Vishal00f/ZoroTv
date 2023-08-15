import React from 'react'
import "./GoodButton.css"
function GoodButton({children}) {
  return (
    <div className="box-3">
  <div className="btn btn-three">
    <span>{children}</span>
  </div>
</div>
  )
}

export default GoodButton
