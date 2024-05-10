import React from 'react'

const Star = ({color, className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="43" height="41" viewBox="0 0 43 41" fill="none">
  <path d="M21.5 0L26.5516 15.5471H42.8988L29.6736 25.1558L34.7252 40.7029L21.5 31.0942L8.27483 40.7029L13.3264 25.1558L0.101229 15.5471H16.4484L21.5 0Z" fill={color}/>
</svg>
  )
}

export default Star