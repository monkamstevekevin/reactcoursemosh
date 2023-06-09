import React from 'react'
import {BsSuitHeartFill} from 'react-icons/bs'
interface like {
  clicked: () => void
}
const Like = ({clicked}: like) => {
  return (
    <BsSuitHeartFill onClick={clicked}></BsSuitHeartFill>
  )
}

export default Like