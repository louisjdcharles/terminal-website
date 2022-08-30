# Terminal Website

> an example developer portfolio website that looks like a terminal emulator

## Screenshot

![screenshot](https://i.imgur.com/k89OIBR.png)

## Lighthouse Report

![screenshot](https://i.imgur.com/1jO8j2R.png)

## Deployment

Deploying to github pages:

1. Create a branch in the repository called `gh-pages`
2. In the github repository settings, under `pages`, set `Source` to `deploy from branch`, and `Branch` to `gh-pages`
![](https://i.imgur.com/D2zZ4Bm.png)
4. set the `homepage` key in `package.json` to the url of the github pages page, this will be `<username>.github.io` or `<username>.github.io/<repository name>`
3. run `npm run deploy`