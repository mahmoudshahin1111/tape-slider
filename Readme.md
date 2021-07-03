# TapeSlider

make your page more interactive by let client read last notifications and news about your site
with simple tool to apply in only 2 steps

## npm

> npm i tap-slider

# How To Use ⁉

```html
<head>
  <link rel="stylesheet" href="./node_modules/tape-slider/dist/style/_index.css"
  />
</head>

<body>


  <div class="ts-tap"></div>

  <script src="./node_modules/tape-slider/dist/index.js"></script>

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
    const options = { speed: 1, data: { itemsData: data } };
    const t = tapeSlider.make(".ts-tap", options);
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
