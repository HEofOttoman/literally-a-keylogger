// import { Server } from "node:http";

const UPSTREAM = `https://hooks.slack.com/services/${process.env.webhook}`;

async function webHookHandler(req: Request): Promise<Response {
    const url = new URL(req.url);
    const target = new URL(url.pathname + url.search, UPSTREAM);

    const headers = new Headers(req.headers);
    headers.delete("host");
    
    const response = await fetch(target, {
        method: req.method,
        headers,
        body: req.body,
        redirect: "manual",
    });

    return response;
}

Deno.serve(webHookHandler);

export async function sendWebhook(payload: string) {
    fetch(`https://hooks.slack.com/services/${process.env.sendWebhook}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify({
        text: payload
    })
});
}