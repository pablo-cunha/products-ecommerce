import React from 'react'
import Input from './Input'
import { ImMug } from 'react-icons/im'

export default function Header(props) {
  return (
    <div className='header'>
        <div className='logo-div'>
            <ImMug size={30} color="#ffffff"/>
        </div>
        <div className='search-div'>
            <h2>Produtos</h2>
            <Input value={props.value} onChange={props.onChange}/>
        </div>
        <div className='buttons-div'>
            <button className='filter-button'>Todos</button>
            <button className='filter-button'>Favoritos</button>
        </div>
    </div>
  )
}
