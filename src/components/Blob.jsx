import React from 'react'
import { Pikachu } from '../assets/Pikachu'

export const Blob = ({ genome, label, onClick }) => {
  const { r, g, b } = genome[0]
  const fill = `rgb(${r},${g},${b})`
  return (
    <div onClick={onClick}>
      <div className="blob">
        <Pikachu secondary={fill} />
        <div className="blob__label">
          <span>{label}</span>
          <span>{`(${r},${g},${b})`}</span>
        </div>
      </div>
    </div>
  )
}
