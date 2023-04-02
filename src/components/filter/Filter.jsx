import PropTypes from 'prop-types';


export function Filter  ({onFilterChange, filter}) {

    return (
        <>  
            <label htmlFor="search"> Find contacts by name </label>
            <input onChange={onFilterChange} defaultValue={filter} type="text" id="search" />
        </>
    )

}

Filter.prototypev = {
    onFilterChange: PropTypes.func.isRequired,
}