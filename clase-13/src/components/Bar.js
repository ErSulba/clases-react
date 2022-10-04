import React from 'react'
import { getBarWidth, getStatColorRank } from '../utils'

const Bar = ({ baseStat }) => {
  const color = getStatColorRank(baseStat)
  const width = getBarWidth(baseStat)
  return (
    <div style={{
      height: "0.75rem",
      borderRadius: "5px",
      border: "1px solid #737373",
      backgroundColor: color,
      width
    }}></div>
  )
}

export default Bar