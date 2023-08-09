import './style.css'

export const TextInput = ({searchValue, handleChange}) => {
    return (
        <input 
            className='textInput'
            type="search" 
            placeholder='Type your search'
            value={searchValue} 
            onChange={handleChange} 
        />
    )
}