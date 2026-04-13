
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
    'CSTBR-Max': 'chest-supported-t-bar-rows-(upper-back)',
    'SAPC-Max': 'straight-arm-pulldowns-(cable)',
    'BORDF-Max': 'bent-over-rear-delt-flyes',
    'WOCC-Max': 'walked-out-cable-curls',

    // Day 7
    'PS-Max': 'pendulum-squat-(quad-version)',
    'DBRDL-Max': 'db-rdl',
    'LLC-Max': 'laying-leg-curl',
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
        const res = await fetch('https://personal-lifting-api.onrender.com/api')
        const data = await res.json()

        const dataObj = data[0]

        Object.entries(liftsMap).forEach(([className, apiKey]) => {
            const elements = document.querySelectorAll(`.${className}`)

            if (!elements.length) return 
                
            elements.forEach(el => {
                    el.innerText = dataObj[apiKey]?.Max ?? '--'
                })
        })

    } catch (error) {
        console.error('API error:', error)
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('workout-form');

    if (!form) return;

    form.addEventListener('submit', handleSubmit);

    async function handleSubmit(e) {
        e.preventDefault();

        const lifts = document.querySelectorAll('#workout-form .workoutWrap');

        const payload = {};

        lifts.forEach(lift => {
            const name = lift.dataset.lift;
            if (!name) return;

            const sets = [...lift.querySelectorAll('input')]
                .map(i => Number(i.value))
                .filter(n => !isNaN(n));

            const newMax = sets.length ? Math.max(...sets) : 0;

            payload[name] = {
                sets,
                newMax
            };
        });

        if (!Object.keys(payload).length) {
            console.log('No workout data entered');
            return;
        }

        try {
            const res = await fetch('https://personal-lifting-api.onrender.com/api/workout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            console.log('Workout saved:', data);

        } catch (err) {
            console.error('Save error:', err);
        }
    }

});

document.getElementById("workout-form").onsubmit = function() {

    
    location.reload(); 
};