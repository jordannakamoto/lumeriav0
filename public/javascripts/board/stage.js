// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application(768, 448);

// The application will create a canvas element for you that you
// can then insert into the DOM
$('#stage').append(app.view);

app.renderer.backgroundColor = 0xf2e2b5;

var mouse = app.renderer.plugins.interaction.mouse.global;

var pawnsLayer = new PIXI.display.Group(0, true);
pawnsLayer.on('sort', function (sprite) {
    sprite.zOrder = -sprite.y;
    
})
var pawnsAuraB = new PIXI.display.Group(-1, false);

var dragLayer = new PIXI.display.Group(1, false);

app.stage = new PIXI.display.Stage();
app.stage.group.enableSort = true;

app.stage.addChild(new PIXI.display.Layer(pawnsLayer));
app.stage.addChild(new PIXI.display.Layer(pawnsAuraB));
app.stage.addChild(new PIXI.display.Layer(dragLayer));