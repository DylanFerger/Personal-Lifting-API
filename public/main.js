document.addEventListener('DOMContentLoaded', apiRequest)
async function apiRequest(){
    try{
        const res = await fetch(`https://personal-lifting-api.onrender.com/api`)
        const data = await res.json()

        console.log(data)
        // Day 1
        document.querySelector('.SIDBP-Max').innerText = data['slight-incline-db-press'].Max
        document.querySelector('.SCCF-Max').innerText = data['seated-cable-chest-flyes'].Max
        document.querySelectorAll('.DM-Max').innerText = data['dip-machine'].Max
        document.querySelector('.HIDBP-Max').innerText = data['high-incline-db-press'].Max
        document.querySelectorAll('.TP-Max').innerText = data['tricep-pushdown'].Max
        document.querySelector('.LRDB-Max').innerText = data['lateral-raises-(db)'].Max
        document.querySelector('.ATWSH-Max').innerText = data['around-the-world-superman-hold'].Max
        // Day 2
        document.querySelector('.SAPL-Max').innerText = data['single-arm-pulldown-(lats)'].Max
        document.querySelector('.SACR-Max').innerText = data['single-arm-cable-row'].Max
        document.querySelectorAll('.WGP-Max').innerText = data['wide-grip-pulldowns'].Max
        document.querySelector('.CSUBR-Max').innerText = data['chest-supported-upper-back-rows'].Max
        document.querySelector('.DS-Max').innerText = data['dumbbell-shrug'].Max
        document.querySelector('.RDFM-Max').innerText = data['rear-delt-flye-machine'].Max
        document.querySelectorAll('.DBSC-Max').innerText = data['db-standing-curls'].Max
        document.querySelectorAll('.DBHC-Max').innerText = data['db-hammer-curls'].Max
        // Day 3
        document.querySelector('.SP-Max').innerText = data['squat-press'].Max
        document.querySelector('.BRDL-Max').innerText = data['barbell-rdl'].Max
        document.querySelector('.HT-Max').innerText = data['hip-thrust'].Max
        document.querySelectorAll('.AdM-Max').innerText = data['adductor-machine'].Max
        document.querySelectorAll('.AbM-Max').innerText = data['abduction-machine'].Max
        document.querySelectorAll('.LE-Max').innerText = data['leg-extensions'].Max
        document.querySelector('.SLC-Max').innerText = data['seated-leg-curls'].Max
        // Day 4
        document.querySelector('.PCM-Max').innerText = data['preacher-curl-machine'].Max
        document.querySelector('.CC-Max').innerText = data['concentration-curls'].Max
        document.querySelectorAll('.JMP-Max').innerText = data['jm-press-(smith)'].Max
        document.querySelector('.DBHC-Max').innerText = data['db-hammer-curls'].Max
        document.querySelectorAll('.TOEC-Max').innerText = data['tricep-overhead-extensions-(cable)'].Max
        document.querySelectorAll('.SLCRM-Max').innerText = data['straight-leg-calf-raise-machine'].Max
        document.querySelectorAll('.TAR-Max').innerText = data['tibialis-anterior-raise'].Max
        document.querySelectorAll('.SCR-Max').innerText = data['seated-calf-raise'].Max
        // Day 5
        document.querySelector('.IPM-Max').innerText = data['incline-press-machine'].Max
        document.querySelector('.DPM-Max').innerText = data['decline-press-machine'].Max
        document.querySelector('.DBSP-Max').innerText = data['db-shoulder-press'].Max
        document.querySelector('.CFM-Max').innerText = data['chest-flye-machine'].Max
        document.querySelector('.CLR-Max').innerText = data['cable-lateral-raises'].Max
        // Day 6
        document.querySelector('.PM-Max').innerText = data['pulldown-machine-(supinated-grip)'].Max
        document.querySelector('.CSLR-Max').innerText = data['chest-supported-lat-row'].Max
        document.querySelector('.WGP-Max').innerText = data['wide-grip-pulldowns'].Max
        document.querySelector('.CSTBR-Max').innerText = data['chest-supported-upper-back-rows'].Max
        document.querySelector('.SAPC-Max').innerText = data['straight-arm-pulldowns-(cable)'].Max
        document.querySelector('.BORDF-Max').innerText = data['bent-over-rear-delt-flyes'].Max
        document.querySelector('.WOCC-Max').innerText = data['walked-out-cable-curls'].Max
        // Day 7
        document.querySelector('.PS-Max').innerText = data['pulldown-machine-(supinated-grip)'].Max
        document.querySelector('.DBRDL-Max').innerText = data['chest-supported-lat-row'].Max
        document.querySelector('.LLC-Max').innerText = data['chest-supported-upper-back-rows'].Max
        document.querySelector('.H-Max').innerText = data['hyperextension'].Max
        // Day 8
        document.querySelector('.IDBC-Max').innerText = data['incline-db-curls'].Max
        // Superset
        document.querySelectorAll('.RGEZBC-Max').innerText = data['reverse-grip-ez-bar-curls'].Max
        document.querySelectorAll('.EZBWC-Max').innerText = data['ez-bar-wrist-curls'].Max
        document.querySelectorAll('.RWC-Max').innerText = data['reverse-wrist-curls'].Max
    }catch(error){
        console.log(error)
    }
}
