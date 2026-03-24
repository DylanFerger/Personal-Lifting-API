document.addEventListener('DOMContentLoaded', apiRequest)
async function apiRequest(){
    try{
        const res = await fetch(`https://personal-lifting-api.onrender.com/api/slight-incline-db-press`)
        const data = await res.json()

        console.log(data)
        document.getElementsByClassName('SIDBP-Max').innerText = data.Max
    }catch(error){
        console.log(error)
    }
}
