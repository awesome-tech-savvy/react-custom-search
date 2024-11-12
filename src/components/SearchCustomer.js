import React, {useState} from 'react'
import CustomerList from './CustomerList'
import List from '../List';

function SearchCustomer() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredCustomers = List.filter(({name, location}) => {
    return (
      name.startsWith(searchTerm) ||
      location.startsWith(searchTerm)
    )
  })
    
  return (
    <>
      <div className='layout-row align-items-center justify-content-center mt-30'>
          <input className='large mx-20 w-20' data-testid='search-input' value={searchTerm} placeholder='Enter search term (Eg: Phil)'
            onChange={handleSearch}
            type='text'/>
      </div>
      <CustomerList customers={filteredCustomers}/>
    </>
  )
}

export default SearchCustomer