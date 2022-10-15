import React from 'react'

export default function Header() {
  return (
    <div>
      <div className="shadow-lg p-3 md:p-10 flex justify-between">
        <h1 className="font-bold md:text-2xl">Where in the world?</h1>
        <button className="capitalize">dark mode</button>
      </div>
    </div>
  );
}
