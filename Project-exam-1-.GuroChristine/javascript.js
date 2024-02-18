const url = "gurochristine.local/wp-json/wp/v2/data";
async function getData(url){
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
}