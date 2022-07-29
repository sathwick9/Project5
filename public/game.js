var coords = new Array;
var iter = 0;
var intervalId;
var shapeAtPoint = [];
var intervalValue = 0;
var sizeIncrease = true;
var started = false;
function showCoords(canvas, event) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect();
    var x = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;     // Get the horizontal coordinate
    var y = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height; // Get the vertical coordinate
    if (iter < 4) {
        coords[iter++] = [x, y];
    }
}

function myStartFunction() {
    var error_message = document.getElementById("error_game");
    error_message.style.padding = "10px";
    error_message.style.display = "block";
    error_message.style.background = "#fe8b8e";

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect();

    let totalShapes = [1, 2, 3, 4];
    for (var i = 0; i < iter; i++) {
        var random = Math.floor(Math.random() * totalShapes.length - 1) + 1;
        let current = totalShapes.splice(random, 1)[0];
        shapeAtPoint.push(current);
    }

    if (iter == 4) {
        error_game.style.display = "none";
        intervalId = setInterval(function () {
            createshape(ctx, canvas, coords, rect);
            if (sizeIncrease) {
                intervalValue += 4;
            } else {
                intervalValue -= 4;
            }
        }, 400);
    }
    else {
        text = "Please click on more " + (4 - iter) + " spots";
        error_message.innerHTML = text;

    }
}

function myStopFunction() {
    var error_message = document.getElementById("error_game");
    error_game.style.display = "none";
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    clearInterval(intervalId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    iter = 0;
    coordinates = [];
    intervalValue = 0;
    sizeIncrease = true;
    started = false;
}

function createshape(ctx, canvas, coords, rect) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    l = 20 + intervalValue;
    w = 25 + intervalValue;
    if (l >= 100) {
        sizeIncrease = false;
    }
    if (l <= 20) {
        sizeIncrease = true;
    }

    for (i = 0; i < 4; i++) {
        x = coords[i][0];
        y = coords[i][1];
        var c1 = rainbow((Math.random() * 255) + 1);
        var c2 = rainbow((Math.random() * 255) + 1);
        var c3 = rainbow((Math.random() * 255) + 1);
        var c4 = rainbow((Math.random() * 255) + 1);


        switch (shapeAtPoint[i]) {
            case 1: drawtriangle(ctx, canvas, l, w, x, y, c1); break;
            case 2: drawcircle(ctx, canvas, l, w, x, y, c2); break;
            case 3: drawOval(ctx, canvas, l, w, x, y, c3); break;
            case 4: drawArc(ctx, canvas, l, w, x, y, c4); break;

            default: drawrect(ctx, canvas, l, w, x, y, c4); break;
        }
    }

}

function rainbow(p) {
    var rgb = HSVtoRGB(p / 100.0 * 0.85, 1.0, 1.0);
    return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
}

function colorSelect() {

    var caseNo = Math.floor(Math.random() * 7) + 1;
    switch (caseNo % 7) {
        case 1: return "red"; break;
        case 2: return "orange"; break;
        case 3: return "green"; break;
        case 4: return "cyan"; break;
        case 5: return "blue"; break;
        case 6: return "purple"; break;
        case 7: return "yellow"; break;
        default: return "white"; break;
    }

}

function drawrect(ctx, canvas, l, w, x, y, colourOfRect) {
    ctx.rect(x, y, l, w);
    ctx.fillStyle = colourOfRect;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawcircle(ctx, canvas, l, w, x, y, colourOfRect) {
    ctx.beginPath();
    ctx.arc(x, y, l, 0, 2 * Math.PI);
    ctx.fillStyle = colourOfRect;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawtriangle(ctx, canvas, l, w, x, y, colourOfRect) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + l, y);
    ctx.lineTo(x + l, y + w);
    ctx.closePath();
    ctx.fillStyle = colourOfRect;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


function drawArc(ctx, canvas, l, w, x, y, colourOfRect) {
    ctx.beginPath();
    ctx.arc(x, y, l, 0, Math.PI, false);
    ctx.closePath();
    ctx.fillStyle = colourOfRect;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function drawOval(ctx, canvas, l, w, x, y, colourOfRect) {
    ctx.beginPath();
    ctx.ellipse(x, y, l, w, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = colourOfRect;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
