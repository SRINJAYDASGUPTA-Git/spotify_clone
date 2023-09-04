import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": ,
    "X-RapidAPI-Host": "shazam-core7.p.rapidapi.com",
  },
};

fetch(
  "https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com/",
    prepareHeaders: () => {
      header.set("X-RapidAPI-Key");
    },
  }),
});
