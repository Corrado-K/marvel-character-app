import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, id, thumbnail }) {
  return (
    <Link to={`/${id}`}>
      <div className="border-1 border rounded-md w-48 h-80 text-center max-h-fit col-span-1 flex-col mx-2 p-3 mb-3">
        <img src={thumbnail} alt="thumbnail" />
        <h1 className="flex flex-wrap">{name}</h1>
      </div>
    </Link>
  );
}
