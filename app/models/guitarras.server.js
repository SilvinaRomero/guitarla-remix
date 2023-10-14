export async function getGuitarras() {
    const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const json = await response.json();
    return json;
}

export async function getGuitarra(url){
    const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const json = await response.json();
    return json;
}