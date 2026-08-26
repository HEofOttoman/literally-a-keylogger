<!-- <div align="center">
    <h1>Literally A Keylogger</h1>
    <img src="safety.png"/>
    <h3>Nothing else to it.</h3>
</div> -->

# literally-a-keylogger
![flock camera for your safety](safety.png)
> [!CAUTION]
> GENUINELY, *please* don't enter personal information into this! Absolutely **nothing** will be gained. This is a proof of concept.

A notes app, type whatever, and ~~I~~ we will know. So probably don't. Genuinely, why would you do this?
- This app forwards the logged keys on the fronted site to a slack channel via a 'proxy' server.

## Deployment
1. Run the server with necessary permissions
```
deno run --allow-env --allow-net src/server.ts
```
2. Point the fetch request in `src/keylogger.js` to your server

### References
Which were useful to my development. Making this small project has made me realise that I should learn more about web admin and such :pf:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog
- https://docs.deno.com/sandbox/expose_http/
- https://dev.to/giftysoftdev/build-a-simple-notes-app-with-html-css-javascript-35g1
- [OHHH](https://docs.deno.com/examples/http_proxy/)
- [sus.3kh0.net](https://sus.3kh0.net)

![cricut](<assets/Circuit_dance 2.gif>)
