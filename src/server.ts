export default {
    fetch(request) {
        const userAgent = request.headers.get("user-agent") || "Unknown";
        return new Response(`User Agent: ${userAgent}`)
    },
} satisfies Deno.ServeDefaultExport;

// Deno.serve({port: 8000}, (request: Request) => { const url = `https://hooks.slack.com/services/`; });The