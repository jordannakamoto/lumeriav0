// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application(768, 448);

// The application will create a canvas element for you that you
// can then insert into the DOM
$('#stage').append(app.view);

app.renderer.backgroundColor = 0xB6DD87;