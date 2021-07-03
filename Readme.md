# TapeSlider

make your page more interactive by let client read last notifications and news about your site
with simple tool to confirm in only 2 steps

## HTML

`<div class="ts-tap"></div>`

## Javascript


```javascript
const options = { speed: 1, data: { itemsData: data } };
const t = tapeSlider.make(".ts-tap", options);
t.boot();
```

# Events

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

Simplest and Easiest 👌💖👏
