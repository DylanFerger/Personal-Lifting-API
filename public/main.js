// document.addEventListener('DOMContentLoaded', apiRequest)
// async function apiRequest(){
//     try{
//         const res = await fetch(`https://personal-lifting-api.onrender.com/api`)
//         const data = await res.json()

//         console.log(data)
//         // Day 1
//         document.querySelector('.SIDBP-Max').innerText = data['slight-incline-db-press'].Max
//         document.querySelector('.SCCF-Max').innerText = data['seated-cable-chest-flyes'].Max
//         document.querySelectorAll('.DM-Max').forEach(lift => {
//             lift.innerText = data['dip-machine'].Max
//         })
//         document.querySelector('.HIDBP-Max').innerText = data['high-incline-db-press'].Max
//         document.querySelectorAll('.TP-Max').forEach(lift => {
//             lift.innerText = data['tricep-pushdown'].Max
//         })
//         document.querySelector('.LRDB-Max').innerText = data['lateral-raises-(db)'].Max
//         document.querySelector('.ATWSH-Max').innerText = data['around-the-world-superman-hold'].Max
//         // Day 2
//         document.querySelector('.SAPL-Max').innerText = data['single-arm-pulldown-(lats)'].Max
//         document.querySelector('.SACR-Max').innerText = data['single-arm-cable-row'].Max
//         document.querySelectorAll('.WGP-Max').forEach(lift => {
//             lift.innerText = data['wide-grip-pulldowns'].Max
//         })
//         document.querySelector('.CSUBR-Max').innerText = data['chest-supported-upper-back-rows'].Max
//         document.querySelector('.DS-Max').innerText = data['dumbbell-shrug'].Max
//         document.querySelector('.RDFM-Max').innerText = data['rear-delt-flye-machine'].Max
//         document.querySelectorAll('.DBSC-Max').forEach(lift => {
//             lift.innerText = data['db-standing-curls'].Max
//         })
//         document.querySelectorAll('.DBHC-Max').forEach(lift => {
//             lift.innerText = data['db-hammer-curls'].Max
//         })
//         // Day 3
//         document.querySelector('.SP-Max').innerText = data['squat-press'].Max
//         document.querySelector('.BRDL-Max').innerText = data['barbell-rdl'].Max
//         document.querySelector('.HT-Max').innerText = data['hip-thrust'].Max
//         document.querySelectorAll('.AdM-Max').forEach(lift => {
//             lift.innerText = data['adductor-machine'].Max
//         })
//         document.querySelectorAll('.AbM-Max').forEach(lift => {
//             lift.innerText = data['abduction-machine'].Max
//         })
//         document.querySelectorAll('.LE-Max').forEach(lift => {
//             lift.innerText = data['leg-extensions'].Max
//         })
//         document.querySelector('.SLC-Max').innerText = data['seated-leg-curls'].Max
//         // Day 4
//         document.querySelector('.PCM-Max').innerText = data['preacher-curl-machine'].Max
//         document.querySelector('.CC-Max').innerText = data['concentration-curls'].Max
//         document.querySelectorAll('.JMP-Max').forEach(lift => {
//             lift.innerText = data['jm-press-(smith)'].Max
//         })
//         document.querySelectorAll('.TOEC-Max').forEach(lift => {
//             lift.innerText = data['tricep-overhead-extensions-(cable)'].Max
//         })
//         document.querySelectorAll('.SLCRM-Max').forEach(lift => {
//             lift.innerText = data['straight-leg-calf-raise-machine'].Max
//         })
//         document.querySelectorAll('.TAR-Max').forEach(lift => {
//             lift.innerText = data['tibialis-anterior-raise'].Max
//         })
//         document.querySelectorAll('.SCR-Max').forEach(lift => {
//             lift.innerText = data['seated-calf-raise'].Max
//         })
//         // Day 5
//         document.querySelector('.IPM-Max').innerText = data['incline-press-machine'].Max
//         document.querySelector('.DPM-Max').innerText = data['decline-press-machine'].Max
//         document.querySelector('.DBSP-Max').innerText = data['db-shoulder-press'].Max
//         document.querySelector('.CFM-Max').innerText = data['chest-flye-machine'].Max
//         document.querySelector('.CLR-Max').innerText = data['cable-lateral-raises'].Max
//         // Day 6
//         document.querySelector('.PM-Max').innerText = data['pulldown-machine-(supinated-grip)'].Max
//         document.querySelector('.CSLR-Max').innerText = data['chest-supported-lat-row'].Max
//         document.querySelector('.WGP-Max').innerText = data['wide-grip-pulldowns'].Max
//         document.querySelector('.CSTBR-Max').innerText = data['chest-supported-upper-back-rows'].Max
//         document.querySelector('.SAPC-Max').innerText = data['straight-arm-pulldowns-(cable)'].Max
//         document.querySelector('.BORDF-Max').innerText = data['bent-over-rear-delt-flyes'].Max
//         document.querySelector('.WOCC-Max').innerText = data['walked-out-cable-curls'].Max
//         // Day 7
//         document.querySelector('.PS-Max').innerText = data['pulldown-machine-(supinated-grip)'].Max
//         document.querySelector('.DBRDL-Max').innerText = data['chest-supported-lat-row'].Max
//         document.querySelector('.LLC-Max').innerText = data['chest-supported-upper-back-rows'].Max
//         document.querySelector('.H-Max').innerText = data['hyperextension'].Max
//         // Day 8
//         document.querySelector('.IDBC-Max').innerText = data['incline-db-curls'].Max
//         // Superset
//         document.querySelectorAll('.RGEZBC-Max').forEach(lift => {
//             lift.innerText = data['reverse-grip-ez-bar-curls'].Max
//         })
//         document.querySelectorAll('.EZBWC-Max').forEach(lift => {
//             lift.innerText = data['ez-bar-wrist-curls'].Max
//         })
//         document.querySelectorAll('.RWC-Max').forEach(lift => {
//             lift.innerText = data['reverse-wrist-curls'].Max
//         })
//     }catch(error){
//         console.log(error)
//     }
// }


const liftsMap = {
    // Day 1
    'SIDBP-Max': 'slight-incline-db-press',
    'SCCF-Max': 'seated-cable-chest-flyes',
    'DM-Max': 'dip-machine',
    'HIDBP-Max': 'high-incline-db-press',
    'TP-Max': 'tricep-pushdown',
    'LRDB-Max': 'lateral-raises-(db)',
    'ATWSH-Max': 'around-the-world-superman-hold',

    // Day 2
    'SAPL-Max': 'single-arm-pulldown-(lats)',
    'SACR-Max': 'single-arm-cable-row',
    'WGP-Max': 'wide-grip-pulldowns',
    'CSUBR-Max': 'chest-supported-upper-back-rows',
    'DS-Max': 'dumbbell-shrug',
    'RDFM-Max': 'rear-delt-flye-machine',
    'DBSC-Max': 'db-standing-curls',
    'DBHC-Max': 'db-hammer-curls',

    // Day 3
    'SP-Max': 'squat-press',
    'BRDL-Max': 'barbell-rdl',
    'HT-Max': 'hip-thrust',
    'AdM-Max': 'adductor-machine',
    'AbM-Max': 'abduction-machine',
    'LE-Max': 'leg-extensions',
    'SLC-Max': 'seated-leg-curls',

    // Day 4
    'PCM-Max': 'preacher-curl-machine',
    'CC-Max': 'concentration-curls',
    'JMP-Max': 'jm-press-(smith)',
    'TOEC-Max': 'tricep-overhead-extensions-(cable)',
    'SLCRM-Max': 'straight-leg-calf-raise-machine',
    'TAR-Max': 'tibialis-anterior-raise',
    'SCR-Max': 'seated-calf-raise',

    // Day 5
    'IPM-Max': 'incline-press-machine',
    'DPM-Max': 'decline-press-machine',
    'DBSP-Max': 'db-shoulder-press',
    'CFM-Max': 'chest-flye-machine',
    'CLR-Max': 'cable-lateral-raises',

    // Day 6
    'PM-Max': 'pulldown-machine-(supinated-grip)',
    'CSLR-Max': 'chest-supported-lat-row',
    'CSTBR-Max': 'chest-supported-upper-back-rows',
    'SAPC-Max': 'straight-arm-pulldowns-(cable)',
    'BORDF-Max': 'bent-over-rear-delt-flyes',
    'WOCC-Max': 'walked-out-cable-curls',

    // Day 7
    'PS-Max': 'pulldown-machine-(supinated-grip)',
    'DBRDL-Max': 'chest-supported-lat-row',
    'LLC-Max': 'chest-supported-upper-back-rows',
    'H-Max': 'hyperextension',

    // Day 8
    'IDBC-Max': 'incline-db-curls',

    // Superset
    'RGEZBC-Max': 'reverse-grip-ez-bar-curls',
    'EZBWC-Max': 'ez-bar-wrist-curls',
    'RWC-Max': 'reverse-wrist-curls'
}

document.addEventListener('DOMContentLoaded', apiRequest)

async function apiRequest() {
    try {
        const res = await fetch('https://personal-lifting-api.onrender.com/api/lifts')
        const data = await res.json()

        Object.entries(liftsMap).forEach(([className, apiKey]) => {
            const elements = document.querySelectorAll(`.${className}`)

            if (elements.length > 0 && data[apiKey]) {
                elements.forEach(el => {
                    el.innerText = data[apiKey].Max
                })
            }
        })

    } catch (error) {
        console.error('API error:', error)
    }
}