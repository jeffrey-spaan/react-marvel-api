const BASE_URL = "https://gateway.marvel.com/v1/public";
const PUBLIC_KEY = "your_public_key";
const PRIVATE_KEY = "your_private_key";
const ts = new Date().getTime();
const md5 = require("md5");
const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);

export const getCharacters = async () => {
  // console.log(`ts=${ts}`);
  // console.log(`hash=${hash}`);

  const response = await fetch(
    `${BASE_URL}/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`, {
      method: "GET",
    }
  );
  if (response.status !== 200) {
    console.log("Define your public and private keys in MarvelApi.tsx");
  }
  // console.log(response);
  return await response.json();
};