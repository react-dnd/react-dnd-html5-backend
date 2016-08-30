# React DnD HTML5 Backend [![npm package](https://img.shields.io/npm/v/react-dnd-html5-backend.svg?style=flat-square)](https://www.npmjs.org/package/react-dnd-html5-backend)

The officially supported HTML5 backend for [React DnD](http://gaearon.github.io/react-dnd/).  
See [the docs](http://gaearon.github.io/react-dnd/docs-html5-backend.html) for usage information.

## Asana Updating Steps

In order to update the version of ReactDndHTML5Backend used by the asana app we must
make the update in this repository and then upload the output js file as a static asset
following the usual protocol for [adding static assets](https://github.com/Asana/codez/blob/asana2-master/asana2/docs/luna-ui/adding_static_assets.md).

1. Clone the repo
2. Add a PR for your change
3. Run `npm install`
4. Run `npm run build:umd`
5. `s3cp dist/ReactDnDHTML5Backend.min.js b:/tmp/`
6. `r b`
7. `$CODEZ/admin/production/static_assets.py /tmp/ReactDnDHTML5Backend.min.js`
8. Update BUILD file in asana2/third_party/workspace/ts_repositories.bzl to point to the CF url printed by the last command.
9. Update same file with sha obtained by running `shasum -a 256 /tmp/ReactDnDHTML5Backend.min.js`


## Installation

If you use [npm](http://npmjs.com):

```
npm install --save react-dnd-html5-backend
```

The npm package defaults to the CommonJS build.

However it also includes a pre-minified UMD build in the `dist` folder.
The UMD build exports a global `window.ReactDnDHTML5Backend` when imported as a `<script>` tag.

If you’d rather not use npm, you can use [npmcdn](http://npmcdn.com/) to access the UMD build directly: [ReactDnDHTML5Backend.min.js](https://npmcdn.com/react-dnd-html5-backend@latest/dist/ReactDnDHTML5Backend.min.js).  
You may point your Bower config to it.

## Browser Support

We strive to support the evergreen browsers, Safari 7+, as well as IE11+. IE10 should also work, but `DragLayer` is fairly useless because IE10 doesn’t support `pointer-events: none`. We don’t officialy support IE9 and less.

Unfortunately the browser bugs, inconsistencies, and regressions come up from time to time, so please make sure you test your app on the browsers you’re interested in, and report any bugs to us.

## License

MIT
