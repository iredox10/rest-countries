import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'
export default function Country() {

    const [country, setCountry] = useState([])

    const {id} = useParams()

    useEffect(() => {
        const fetch = async () => {
        try {
              const res = await axios(`https://restcountries.com/v3.1/name/${id}`);
              setCountry(res.data);
              console.log(res.data);
              
            } catch (error) {
                console.log(error)
            }
        };
      fetch();
    }, [country,id]);
  return (
    <div>
      <Header />
      <button className="shadow-lg py-2 px-5 m-10">Back</button>
      <div className="p-10">
        {country.map((c) => (
          <div key={c.name} className="md:grid gap-10 grid-cols-4 grid-rows-4 items-center">
            <div className='col-span-2'>
              <img src={c.flags.png} alt={c.name.common} className='w-[90%]' />
            </div>

            <div className="my-3">
              <h1 className='mb-3 font-bold text-xl'>{c.name.official}</h1>
              <p className='mb-2'>
                <span className="font-bold">Native Name :</span>{" "}
                {c.name.nativeName.ara.official}
              </p>
              <p className='mb-2'>
                <span className="font-bold">Population: </span> {c.population}
              </p>
              <p className='mb-2'>
                <span className="font-bold">Region: </span> {c.region}
              </p>
              <p className='mb-2'>
                <span className="font-bold">Sub Region: </span> {c.subregion}
              </p>
              <p className='mb-2'>
                <span className="font-bold">Capital: </span> {c.capital[0]}
              </p>
            </div>

            <div>
              <p className='mb-2'>
                <span className="font-bold">Top Level Domain: </span> {c.tld[0]}
              </p>
              <p className='mb-2'>
                <span className="font-bold">Languages: </span> {c.languages.ara}
                ,{c.languages.arc},{c.languages.ckb}
              </p>
              <p className='mb-2'>
                <span className="font-bold">Currencies: </span>{" "}
                {c.currencies.IQD.name}
              </p>
            </div>

            <div className='row-start-2 col-start-3 col-end-3'>
              <div className="flex gap-5 items-center">
                <h1>Border Countries:</h1>
              {c.borders.map((b) => (
                <div>
                <div className="shadow-lg py-2 px-4">{b}</div>
            </div>
                  ))}
            </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
