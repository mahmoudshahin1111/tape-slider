# TapeSlider

make your page more interactive by let client read last notifications and news about your site
with simple tool to confirm in only 2 steps

#events

```javascript
const t = tapeSlider.make(".ts-tap", { speed: 1, data: { itemsData: data } });
t.boot();
t.onStarted().subscribe((e) => {
  console.log("started");
});
t.onStopped().subscribe((e) => {
  console.log("stopped");
});
t.onTick().subscribe((tick) => {
  console.log("tick"+tick);
});
```

Simplest and Easiest 👌💖👏
