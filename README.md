# React DnD HTML5 Backend [![npm package](https://img.shields.io/npm/v/react-dnd-html5-backend.svg?style=flat-square)](https://www.npmjs.org/package/react-dnd-html5-backend)

The officially supported HTML5 backend for [React DnD](http://gaearon.github.io/react-dnd/).  
See [the docs](http://gaearon.github.io/react-dnd/docs-html5-backend.html) for usage information.

## Installation

```
npm install --save react-dnd-html5-backend
```

While we suggest you to use NPM, you can find the precompiled UMD build in the `dist` folder available on the [`latest` branch](https://github.com/gaearon/react-dnd-html5-backend/tree/latest/dist) as well as in every [tagged release](https://github.com/gaearon/react-dnd-html5-backend/releases). This is where you can point Bower if that’s what you use.

There is no `dist` folder on the master branch.

## Browser Support

We strive to support the evergreen browsers, Safari 7+, as well as IE11+. IE10 should also work, but `DragLayer` is fairly useless because IE10 doesn’t support `pointer-events: none`. We don’t officialy support IE9 and less.

Unfortunately the browser bugs, inconsistencies, and regressions come up from time to time, so please make sure you test your app on the browsers you’re interested in, and report any bugs to us.

## License

MIT
