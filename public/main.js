document.addEventListener('DOMContentLoaded', apiRequest)
async function apiRequest(){
    try{
        const res = await fetch(`https://personal-lifting-api.onrender.com/api`)
        const data = await res.json()

        console.log(data)
        document.querySelector('.SIDBP-Max').innerText = data['slight-incline-db-press'].Max
        document.querySelector('.SCCF-Max').innerText = data['seated-cable-chest-flyes'].Max
        document.querySelector('.DM-Max').innerText = data['dip-machine'].Max
        document.querySelector('.HIDBP-Max').innerText = data['high-incline-db-press'].Max
        document.querySelector('.TP-Max').innerText = data['tricep-pushdown'].Max
        document.querySelector('.LRDB-Max').innerText = data['lateral-raises-(db)'].Max
        document.querySelector('.ATWSH-Max').innerText = data['around-the-world-superman-hold'].Max
    }catch(error){
        console.log(error)
    }
}
