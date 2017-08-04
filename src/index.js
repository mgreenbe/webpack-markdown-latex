const md = require("./identity!html-loader!./markdown-it-katex-loader!./sample.md");
console.log(md);

document.getElementById("container");

container.innerHTML = md;
