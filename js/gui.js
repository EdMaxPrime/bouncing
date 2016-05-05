var components = {
    home : {},
    edit : {}
};

var cloneables;

function createGenerics() {
    cloneables = {
        button : {
            body : canvas.display.rectangle({
                x : 0,
                y : 0,
                width : canvas.width / 5,
                height : canvas.height / 10,
                origin : {x: "center", y: "top"},
                fill : "#EBA938"
            }),
            text : canvas.display.text({
                x : 0,
                y : 0,
                origin : {x: "center", y: "center"},
                font: "20px sans-serif",
                text : "",
                fill : "#ffffff"
            })
        },
        text : {
            title : canvas.display.text({
                x : canvas.width / 2,
                y : canvas.height / 10,
                origin : {x : "center", y : "top"},
                font : "bold 30px sans-serif",
                text : "Text",
                fill: "#000000"
            })
        }
    };
}

function createScenes() {
    var w = canvas.width;
    var h = canvas.height;
    createGenerics();
    canvas.scenes.create("/", function() {
        components.home.title = createTitle("Editor", w/2, h/10);
        components.home.play = createButton("New File", w/2, h/2, function() {
            canvas.scenes.load("/edit", true);
        });
        this.add(components.home.title);
        this.add(components.home.play);
    });
    canvas.scenes.create("quadtest", function() {
        for(var i = 0; i < 16; i++) {
            this.add(canvas.display.rectangle({
                x : (i % 4) * 150 + 25,
                y : Math.floor(i / 4) * 100 + 25,
                width : 100,
                height : 50,
                fill : "#d22",
                origin : {x: "left", y: "top"}
            }));
            tree.insert({
                x : this.objects[i].x,
                y : this.objects[i].y,
                w : this.objects[i].width,
                h : this.objects[i].height,
                elem : this.objects[i]
            });
        }
        var c = {x: 128, y: 60, w: 275, h: 400};
        tree.select(c, function(t) {
            //console.log(t);
            t.elem.fill = "#dd2";
        });
        this.add(canvas.display.rectangle({
            x : c.x,
            y : c.y,
            width : c.w,
            height : c.h,
            fill : "rgba(32, 240, 32, 0.25)"
        }))
        var n = tree.root.getNodes();
        console.log("------");
        for(var i = 0; i < n.length; i++) {
            var c = n[i].getItems();
            this.add(canvas.display.rectangle({
                x : n[i].x,
                y : n[i].y,
                width : n[i].w,
                height : n[i].h,
                stroke : "5px #000"
            }))
        }
    });
    canvas.scenes.create("motiontest", function() {
        this.add(canvas.display.rectangle({
            x: 120,
            y: 120,
            width: 10,
            height: 60,
            fill: "#000090",
            origin: {x:'center',y:'bottom'},
            anchor: {x: 120, y: 120}
        }));
        this.objects[0].dragAndDrop({
            move: function() {
                this.rotateTo(90 + 2 * (180 / Math.PI) * Math.asin((canvas.mouse.y - this.anchor.y) / Math.sqrt(Math.pow(canvas.mouse.x - this.anchor.x, 2) + Math.pow(canvas.mouse.y - this.anchor.y, 2))));
                this.x = this.anchor.x;
                this.y = this.anchor.y;
            }
        });
    });
    canvas.scenes.create("maze", function() {
        var m = canvas.display.rectangle({
            x: 50,
            y: 50,
            width: w - 100,
            height: h - 100,
            fill: "#000",
            tree: QUAD.init({x:0, y:0, w:w - 100, h:h - 100})
        });
        unsuccessful = 0;
        var o = canvas.display.rectangle({
            x: m.width / 2,
            y: m.height * 9 / 10
        })
        var a = [];
        while(unsuccessful < 20) {
            var x1 = rand(0, 10);
            var y1 = rand(0, 10);
            var x2 = x1 + rand(true), y2 = y1 + rand(true);

        }
    });
}

function createButton(_text, _x, _y, callback, options) {
    options = options || {};
    options.width = options.width || cloneables.button.body.width;
    options.height = options.height || cloneables.button.body.height;
    options.fill = options.fill || [cloneables.button.body.fill, "#F0B859", "#CC9433"];
    var button = cloneables.button.body.clone({
        x : _x,
        y : _y,
        width : options.width,
        height : options.height,
        fill : options.fill[0]
    });
    var text = cloneables.button.text.clone({
        text : _text,
        x : 0,
        y : button.height / 2
    });
    button.bind("click tap", callback);
    button.bind("mouseenter touchenter", function() {
        this.fill = options.fill[1];
        canvas.redraw();
        console.log(this.fill);
    });
    button.bind("mousedown touchstart", function() {
        this.fill = options.fill[2];
        canvas.redraw();
        console.log(this.fill);
    });
    button.bind("mouseleave touchleave mouseup touchend", function() {
        this.fill = options.fill[0];
        canvas.redraw();
        console.log(this.fill);
    });
    button.addChild(text);
    return button;
}

function createTitle(_text, _x, _y, options) {
    options = options || {};
    options.fill = options.fill || "#000000";
    options.origin = options.origin || {x: "center", y: "top"};
    options.font = options.font || "bold 30px sans-serif";
    return cloneables.text.title.clone({
        x : _x,
        y : _y,
        text : _text,
        font : options.font,
        origin : options.origin,
        fill : options.fill
    });
}