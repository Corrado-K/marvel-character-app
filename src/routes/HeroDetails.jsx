import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchHero } from "../utils/utils";

export default function HeroDetails() {
  let { id } = useParams();

  const [hero, setHero] = useState();

  let name, description,thumbnailPath,thumbnailExtension, thumbnailUrl,series,isSeriesAvailable;

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data))
      .catch((err) => console.error(err));
  }, []);

  if (hero) {
    name = hero.data.results[0].name;
    description = hero.data.results[0].description;
    thumbnailPath = hero.data.results[0].thumbnail.path;
    thumbnailExtension = hero.data.results[0].thumbnail.extension;
    thumbnailUrl = `${thumbnailPath}.${thumbnailExtension}`;
    series = hero.data.results[0].series.items;
    isSeriesAvailable = hero.data.results[0].series.available;

  }

  if (!hero) return;

  return (
    <div className="container p-2">
      <h1 className="text-center text-xl font-semibold my-4">Character Details</h1>
      <div className="">
        <div>
          <img className="p-3 border-2 rounded-md md:mx-auto md:w-96" src={thumbnailUrl} alt="hero image full size" />
        </div>
        <div className="hero__details">
          {/* <h4 >Name</h4> */}
          <p className="text-center text-xl font-semibold my-2">{name}</p>
          {description ? (
            <>
              <h4 className="text-xl font-semibold mb-1">Description</h4>
              <p className="text-md font-medium text-justify">{description}</p>
            </>
          ) : null}
          <div className="mt-5">
            <h4 className="text-xl font-semibold mb-1">Series</h4>
            <ul>
              {isSeriesAvailable > 0
                ? series.map((title) => (
                    <li className="font-medium" key={Math.random() * 1000}>{title.name}</li>
                  ))
                : <p>No series available</p> }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
