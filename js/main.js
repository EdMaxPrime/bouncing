var canvas;
var tree;

oCanvas.domReady(function() {
    canvas = oCanvas.create({
        canvas : "#canvas",
        background : "#ffffff",
        clearEachFrame : true,
        fps : 30
    });
    canvas.width = 600;
    canvas.height = 400;
    init();
});

function init() {
    tree = QUAD.init({
        x: 0,
        y: 0,
        w: 600,
        h: 400
    });
    createScenes();
    canvas.scenes.load("level1", true);
    canvas.setLoop(update);
    canvas.timeline.start();
}

function update(ctx) {
    if(canvas.scenes.current == "/edit") {
        var now = new Date();
    }
    if(canvas.scenes.current == "level1") {
        components.level1.floobow.update();
    }
}

function Maze(w, h) {
    this.width = w;
    this.height = h;
    this.tree = 0;
    this.walls = [];
}

function rand(min, max) {
    if(arguments[0] == true) {
        return rand(0, 2) == 0? 1 : -1;
    }
    if(arguments[0] == false) {
        return (rand(0, 2) == 0);
    }
    if(arguments.length == 1) {max = min; min = 0;}
    return min + parseInt(Math.random() * (max - min));
}

function subArray(array, start, end) {
    var r = [];
    for(var i = start; i < end; i++) {
        r.push(array[i]);
    }
    return r;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function filterInt(value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

function filterFloat(value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
        return Number(value);
    return NaN;
}

var utils = {
    isNaN : function(value) {
        var penalties = "";
        if(value.search(/[^.\d\-\+]/) != -1) penalties += "illegal;";
        if(value.split(".").length > 2) penalties += "multiDot;";
        if(value.lastIndexOf(".") == value.length - 1) penalties += "noDecimal;";
        if(value.split("+").length > 2) penalties += "multiPlus;";
        if(value.indexOf("+") > 0) penalties += "add;";
        if(value.split("-").length > 2) penalties += "multiMinus;";
        if(value.indexOf("-") > 0) penalties += "subtract;";
        if(penalties.length > 0) return true;
        return false;
    }
};