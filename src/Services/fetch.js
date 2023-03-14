export default async function fetchData(){
    let api = await fetch('https://api.adviceslip.com/advice');
    let data = await api.json();
    console.log(data.slip.advice + " " + data.slip.id);
    return {advice: data.slip.advice, id: data.slip.id};
}