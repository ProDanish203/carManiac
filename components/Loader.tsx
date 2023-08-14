import React from 'react'

const Loader = ({dark = true}) => {
  return (
    <>
    <div className={`${!dark ? "lds-ellipsis" : "lds-ellipsis dark"} `}><div></div><div></div><div></div><div></div></div>
    </>
  )
}

export default Loader;