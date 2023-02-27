import React from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Input(props) {
  return (
    <div className='input-div'>
        <button className="search-button" onClick={props.onClick}>
            <FiSearch size={25} color="#0f0f0f"/>
        </button>
        <input  type="text" placeholder="Buscar por Produtos..."
        value={props.value} onChange={props.onChange} />
    </div>
  )
}
