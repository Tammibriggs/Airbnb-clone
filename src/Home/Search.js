import './search.css'
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useState } from 'react'
import { Button } from '@mui/material'
import { People } from '@mui/icons-material'

function Search() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate : endDate,
    key: 'selection'
  }

  function handleSelect(ranges){
    setStartDate(ranges.seletin.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div className='search'>
      <DateRangePicker ranges={
        [selectionRange]} onChange={handleSelect} />
        <h2>
          Number of guests
          <People />
        </h2>
        <input min={0} defaultValue={2} type='number' />
        <Button>Search Airbnb</Button>
    </div>
  )
}

export default Search
