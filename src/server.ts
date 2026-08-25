// import { Server } from "node:http";

const UPSTREAM = process.env.webhook;

async function webHookHandler(req: Request): Promise<Response> {
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
