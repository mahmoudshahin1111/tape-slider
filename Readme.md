# TapeSlider

make your page more interactive by let client read last notifications and news about your site
with simple tool to apply in only 2 steps

## npm

> npm i tap-slider

# versions

| ------- | --: |
| V 0.1.0 | ✅ |

# How To Use ⁉

## style

```html
<link rel="stylesheet" href="./dist/style/_index.css" />
```

## HTML

```html
<div class="ts-tap"></div>
```

## Javascript

```javascript
/*data must be in that form*/
const data = [
  {
    text: "test",
  },
];
const options = { speed: 1, data: { itemsData: data } };
const t = tapeSlider.make(".ts-tap", options);
t.boot();
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
