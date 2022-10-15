import axios from 'axios';
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
export default function Countries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
      const fetch = async () => {
        const res = await axios("https://restcountries.com/v3.1/all");
        setCountries(res.data);
        console.log(res.data);
      };
      fetch();
    }, [countries]);
  return (
    <div className="my-5">
      <div className="md:grid grid-cols-4">
        {countries.map((c) => (
          <Link to={c.name.common}>
            <div
              key={c.id}
              className="shadow-lg  bg-white w-[90%] mx-auto mb-10 p-5"
            >
              <img src={c.flags.png} alt="" className="w-[100%]" />
              <div className="p-6">
                <h2 className="font-bold capitalize text-2xl">
                  {c.altSpellings[1]}
                </h2>
                <p className="mb-1">
                  <span className="font-bold capitalize">population: </span>
                  {c.population}
                </p>
                <p className="mb-1">
                  <span className="font-bold capitalize">region: </span>
                  {c.continents[0]}
                </p>
                <p>
                  <span className="font-bold capitalize">capital: </span>
                  {c.capital}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
