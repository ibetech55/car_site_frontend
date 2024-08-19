import React from 'react'
import "./index.scss";

interface IProps {
    text:string;
}

const SectionText:React.FC<IProps> = ({text}) => {
  return (
    <h1 className='section-text'>{text}</h1>
  )
}

export default SectionText
