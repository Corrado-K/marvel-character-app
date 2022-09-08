import MD5 from 'crypto-js/md5';

// hash the url
const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts+secretKey+publicKey).toString();

}


const API_URL = process.env.REACT_APP_BASE_URL;

const fetchHeroes = async (value) => {
    let heroUrl = `${API_URL}/v1/public/characters`;

    // time stamp
    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey =  process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);

    let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

    try{
        let response = await fetch(url);
        let data =  await response.json();
        console.log(data);
        // console.log(data.data.results[0].description);
        return data;
    } catch (error) {
        console.error(error);
        return
    }

}

const fetchHero = async (id) => {
    let heroUrl = `${API_URL}/v1/public/characters/${id}`;

    // time stamp
    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey =  process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);

    let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

    try{
        let response = await fetch(url);
        let data =  await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return
    }

}

export {fetchHeroes, fetchHero}