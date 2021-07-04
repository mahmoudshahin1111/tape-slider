# TapeSlider

make your page more interactive by let client read last notifications and news about your site
with simple tool to apply in simple way ... let's start
## Demo

In progress ... ⚙

## Installation
You can use either the npm  command-line tool to install packages.
## NPM

> npm i tap-slider

# Usage ⁉

```html
<head>
  <!-- Add Style -->
  <link
    rel="stylesheet"
    href="./node_modules/tape-slider/dist/style/_index.css"
  />
</head>

<body>
  <!-- Add Element -->
  <div class="ts-tap"></div>

  <!-- import tool -->
  <script src="./node_modules/tape-slider/dist/index.js"></script>

  <!-- Let's start 👏 -->
  <script>
    /* Generate Fake Data */
    const data = [];
    for (let index = 0; index < 100; index++) {
      const element = {
        text: "news" + index,
      };
      data.push(element);
    }
    /* */

    /* Here The Code */
    // set options
    const options = { speed: 1, data: { itemsData: data } };
    // create tool object
    const t = tapeSlider.make(".ts-tap", options);
    // run tool.
    t.boot();
    /* */
  </script>
</body>
```

# Advanced

## Events

```javascript
const options = { speed: 1, data: { itemsData: data } };
const t = tapeSlider.make(".ts-tap", options);

// Listen When Start
t.onStarted().subscribe((e) => {
  console.log("started");
});
// Listen When Stopped
t.onStopped().subscribe((e) => {
  console.log("stopped");
});
// Listen When With Every Tick
t.onTick().subscribe((tick) => {
  console.log("tick" + tick);
});

t.boot();
```

## Customize Style

```css
.ts-tapeSlider-container {
  /* You can override Style */
}
.ts-tapeSlider-container .ts-tapeSlider-item {
  /* You can override Style */
}
```

## Options

```javascript
var options = {
  speed:/* slider speed from 1 to 15 */
  data:[/* Array of objects as {text:"👌"}*/]
}
```

Simplest and Easiest 👌💖👏

## Contribution

I welcome you to fork and add more features into it. If you have any bugs or feature request, please create an issue at [github repository](https://github.com/mahmoudshahin1111/tape-slider/issues).

## License

MIT