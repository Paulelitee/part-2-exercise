
//this is the component in charge of filtering country by keyword search
export const Filter = ({ filter, handleChange }) => {


    return (
        <div>
            filter shown with <input value = {filter} onChange = {handleChange}></input>
        </div>
    )
}