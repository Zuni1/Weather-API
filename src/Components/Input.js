import react from 'react'

export default function Input({change, val, get, name}){
    return(
        <div className='input'>
            <input 
                type = "text" 
                placeholder = "Enter City" 
                onChange = {change}
                value = {val}
            />
            <button onClick = {get}> {name} </button>
        </div>
    )
}