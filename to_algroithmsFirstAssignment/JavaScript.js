function main()
{
    var canvas = document.getElementById('stuff');
    if (!canvas)
    {
        console.log("Doesn't contain element <canvas>");
        return;
    }

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgba(255,0,5,1.0)";
    ctx.fillRect(120, 10, 150, 150);
}