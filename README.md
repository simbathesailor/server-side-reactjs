Procees Followed;

1. Went to babel website, because i know that to parse the jsx to js. I needed babel somehow.
2. The default suggestion is adding babel.config.json file having babel preset `@babel/env` which is same as `@babel/babel-reset-env` due to how these guys put up things in babel.

You can create preset using these kind of function :

```
module.exports = () => ({
  presets: [
    require("@babel/preset-env"),
  ],
  plugins: [
    [require("@babel/plugin-proposal-class-properties"), { loose: true }],
    require("@babel/plugin-proposal-object-rest-spread"),
  ],
});
```

The these preset can contain another preset and also another plugin.

These plugins run from last to first.

But what plugins do ? Plugin are the way to modify the code in desired format using babel APIS, more on this later. babel  gives you lot of utility to analyze the code and transform into someother formats.


Babel preset are the meat of logic where transformations happen. babel has alrady readymade preset made for common conversions

like @preset/react, @preset/typescript

WHat they do ? Go inside them and undesrtand it. SOmetime later i will see them on case to case basis.


// https://webpack.js.org/api/node/


// https://github.com/nodejs/node-eps/blob/master/002-es-modules.md#451-environment-variables


// https://2ality.com/2019/10/hybrid-npm-packages.html


https://www.digitalocean.com/community/tutorials/react-server-side-rendering#:~:text=Server%2Dside%20rendering%20(SSR),served%20as%20static%20HTML%20markup.

https://www.brettjankord.com/2020/09/21/how-to-inject-server-rendered-html-into-create-react-app-with-express/













