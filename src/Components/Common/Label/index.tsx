import React from 'react'

interface IProps {
    label:string;
    id?:string;
    required?:boolean;
    displayBlock?: boolean;
}

const Label:React.FC<IProps> = ({id, required, label, displayBlock}) => {
  return (
    <label htmlFor={id} style={{display: displayBlock ? "block" : "inline"}}>{label}{required && <span style={{color: 'red' }}> *</span>}</label>
  )
}

export default Label
