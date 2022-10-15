import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Countries from '../components/Countries'
import Search from '../components/Search'
import Filter from '../components/Filter'
export default function Home() {
  return (
    <div>
      <Header />
      <div className='md:flex items-center justify-between'>
        <Search />
        <Filter />
      </div>
      <Countries />
    </div>
  );
}
