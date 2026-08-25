// import { Server } from "node:http";
import "@std/dotenv/load";
import process from "node:process";

const UPSTREAM = process.env.webhook;
// const UPSTREAM = Deno.env.get("webhook");

async function webHookHandler(req: Request): Promise<Response> {
    if (!UPSTREAM) {
        console.error("ERROR: UPSTREAM URL IS UNDEFINED");
        return new Response("ERROR: UPSTREAM URL IS UNDEFINED");
    }

    const url = new URL(req.url);
    console.log(`url ${url}`);
    const target = new URL(url.pathname + url.search, UPSTREAM);
    console.log(`target ${target}`);

    const headers = new Headers(req.headers);
    headers.delete("host");
    
    const response = await fetch(target, {
        method: req.method,
        headers: headers,
        body: req.body,
        redirect: "manual",
    });

    console.log(response);
    return response;
}

Deno.serve(webHookHandler);
