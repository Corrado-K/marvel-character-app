import React from "react";

export default function Button({ text, handleClick }) {
  return <button className='bg-red-700 p-2 text-lg text-white ml-3 rounded-md' onClick={handleClick}>{text}</button>;
}
