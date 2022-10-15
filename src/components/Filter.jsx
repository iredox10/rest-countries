import React from 'react'

export default function Filter() {
  return (
    <div className='mx-3'>
      <select name="filter" id="filter" className='w-[40%] p-4 shadow-lg'>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Ocenia">Ocenia</option>
      </select>
    </div>
  );
}
