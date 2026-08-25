import sandbox from "@deno/sandbox"
// import { Server } from "node:http";

export default {
    fetch(request) {
        const userAgent = request.headers.get("user-agent") || "Unknown";
        return new Response(`User Agent: ${userAgent}`)
    },
} satisfies Deno.ServeDefaultExport;

export async function sendWebhook(payload: string) {
    fetch('https://hooks.slack.com/services/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', {
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

const proxyUrl = await sandbox.exposeHttp({ port: 8000 });
console.log(`url available at ${proxyUrl}`)

// Deno.serve({port: 8000}, (request: Request) => { const url = `https://hooks.slack.com/services/`; });The
