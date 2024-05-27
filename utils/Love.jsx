import React from 'react'

const Love = ({color}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="201" height="203" viewBox="0 0 201 203" fill="none">
  <path d="M83.8462 120.505C62.8624 109.585 52.7684 147.699 48.501 151.339C44.2336 154.98 31.8649 110.786 7.85739 125.603C-16.1501 140.419 46.4451 196.486 52.3703 195.235C59.7769 193.671 104.83 131.426 83.8462 120.505Z" stroke={color} strokeOpacity="0.7" strokeWidth="4.12283" strokeLinecap="round"/>
  <path d="M86.5784 17.0619C115.208 2.16251 128.98 54.1639 134.802 59.1305C140.624 64.097 157.499 3.801 190.254 24.0161C223.009 44.2312 137.607 120.727 129.523 119.02C119.418 116.886 57.949 31.9612 86.5784 17.0619Z" stroke={color} strokeWidth="5.625" strokeLinecap="round"/>
</svg>
  )
}
const Love2 = ({color, className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="61" height="55" viewBox="0 0 61 55" fill="none">
  <path d="M54.7765 4.0261C41.3089 -2.98273 34.8305 21.4793 32.0917 23.8156C29.3528 26.152 21.4145 -2.21197 6.00625 7.29745C-9.40197 16.8069 30.7721 52.7913 34.575 51.9883C39.3286 50.9845 68.2441 11.0349 54.7765 4.0261Z" stroke={color} strokeOpacity="0.7" strokeWidth="4.12283" strokeLinecap="round"/>
</svg>
  )
}
const Love3 = ({color, className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="82" height="74" viewBox="0 0 82 74" fill="none">
  <path d="M7.85631 4.79517C26.2309 -4.76735 35.0697 28.6076 38.8065 31.7952C42.5433 34.9827 53.374 -3.71576 74.3963 9.25846C95.4186 22.2327 40.6068 71.3283 35.4183 70.2326C28.9328 68.8631 -10.5182 14.3577 7.85631 4.79517Z" stroke={color} strokeWidth="5.625" strokeLinecap="round"/>
</svg>
  )
}

export { Love, Love2, Love3 }