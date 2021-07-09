# TapeSlider

make your page more interactive by let client read last notifications and news about your site
with simple tool to apply in simple way ... let's start
## Demo


![preview](https://lh3.googleusercontent.com/pw/AM-JKLWzH3QAYzS6weNmCcn9nVuS1oAuOukxPFAeCdpTP5rJMqH0CGDU0Cg6RUrqs4fUd4sukOjoDp8e8kj17KGN2l4UPs6a9eF63q8OjY8jEzNLOfYUiiqtJ_k50aiquvoCIVkRdppWbaaW_1T677et48-Y=w1920-h582-no?authuser=0)

![preview](https://lh3.googleusercontent.com/pw/AM-JKLXiXMJOgMqylp7NBDBgAV9bNgu6YeYjGtii42S9MkhS7KYyqXyRqIB2HrFrIO3H7RLkYIpExb8onjX8wxpND6JYzBmBykSEcssM6EqJExf1vAuUPyvoqID-4CJyyOEokrcuKUV28G93RtyqCohjSd7t=w1280-h720-no?authuser=0)
## Installation
You can use either the npm  command-line tool to install packages.
## NPM

> npm i tap-slider

# Usage ⁉

![install](https://lh3.googleusercontent.com/pw/AM-JKLW2NO_NoEBkYJ9iTLM4ciKnyR0vyoVxFpho_y_kFE5MuEiknsCN6dfTsoTkYKGOc4fnapemJl_d0KtqtlmQhExLQMKb_46-cQ11KXfzutfkyrx1laVn5VrOLV_5VHKXY9uKQ7gseP8KUS-wANeCcNw8=w944-h866-no?authuser=0)

![preview](https://lh3.googleusercontent.com/pw/AM-JKLUsTK1L0GGnWwQVFOO8oy2OFCWElc8GSEzf150h_YHiOAPzkKv7eNRZIgzamwrmf1c3X8ln_sbE_P6u14CXSYCDbozXtTlhxNELr8pEJIK3EPpfmw2B_XayjW3LHGsVtqavVB5JxHrwsy-6l-vMYR59=w1920-h582-no?authuser=0)
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

![customize css](https://lh3.googleusercontent.com/pw/AM-JKLUgyA_iovZO41YxWG2a-m93SB6IbBICxm2THqyoqhxdpmG_5ufXgZg6wB2WNDgKPH18UXhZy7rhNnKUPZrUUmbAlE1cPw9fWxR4to4KlB64QVtsYhYAOfryFbGC8lfQtG-lKJWCvNu91zzaSG4e6LMV=w952-h864-no?authuser=0)

![preview](https://lh3.googleusercontent.com/pw/AM-JKLUsTK1L0GGnWwQVFOO8oy2OFCWElc8GSEzf150h_YHiOAPzkKv7eNRZIgzamwrmf1c3X8ln_sbE_P6u14CXSYCDbozXtTlhxNELr8pEJIK3EPpfmw2B_XayjW3LHGsVtqavVB5JxHrwsy-6l-vMYR59=w1920-h582-no?authuser=0)


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