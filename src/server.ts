// import { Server } from "node:http";
import "@std/dotenv/load";
import process from "node:process";

const UPSTREAM = process.env.webhook;
// const UPSTREAM = Deno.env.get("webhook");

async function webHookHandler(req: Request, info: Deno.ServeHandlerInfo): Promise<Response> {
    const clientIp =
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        req.headers.get("x-real-ip") ??
        ("hostname" in info.remoteAddr ? info.remoteAddr.hostname : "");

    if (!UPSTREAM) {
        console.error("ERROR: UPSTREAM URL IS UNDEFINED");
        return new Response("ERROR: UPSTREAM URL IS UNDEFINED");
    }

    const url = new URL(req.url);
    // const target = new URL(url.pathname + url.search, UPSTREAM);
    const target = new URL(UPSTREAM);

    // const corsHeaders = new Headers(req.headers);
    // headers.delete("host");

    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    };

    if (req.method === "OPTIONS") {
        console.error("ERROR: OPTIONS REQUEST");
        return new Response("ERROR: OPTIONS REQUEST", { 
            status: 204,
            headers: corsHeaders 
        });
    }
    
    try {
        const body = await req.text();
        console.log(`url ${url}`);
        console.log(`target ${target}`);
        const response = await fetch(target, {
            method: req.method,
            // headers: headers,
            headers: corsHeaders,
            body: JSON.stringify({ text: `${body} from ${clientIp}` }),
            redirect: "manual",
        });

        console.log(response);
        return response;

    } catch (error) {
        console.log(error);
        return new Response(`ERROR: ${error}`);
    }
}

Deno.serve(webHookHandler);
