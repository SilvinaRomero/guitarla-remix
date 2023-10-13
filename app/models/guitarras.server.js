export async function getGuitarras() {
    const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    const json = await response.json();
    return json;
}