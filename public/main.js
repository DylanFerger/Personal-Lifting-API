document.addEventListener('DOMContentLoaded', apiRequest)
async function apiRequest(){
    try{
        const res = await fetch(`https://personal-lifting-api.onrender.com/api`)
        const data = await res.json()

        console.log(data)
        document.querySelector('.SIDBP-Max').innerText = data['slight-incline-db-press'].Max
    }catch(error){
        console.log(error)
    }
}
