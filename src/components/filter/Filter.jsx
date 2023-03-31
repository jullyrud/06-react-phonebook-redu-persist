import PropTypes from 'prop-types';

export function Filter  ({onFilterChange}) {

    return (
        <>  
            <label htmlFor="search"> Find contacts by name </label>
            <input onChange={onFilterChange}  type="text" id="search" />
        </>
    )

}

Filter.prototypev = {
    onFilterChange: PropTypes.func.isRequired,
}