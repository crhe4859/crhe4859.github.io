document.addEventListener("DOMContentLoaded", function () {
    let startedMaze = false;
    let mazeWalls = [];
    let startZone, endZone;
    let canvas, ctx;
  
    const cursorDot = document.getElementById("cursorDot");
    const mazeCanvas = document.getElementById("mazeCanvas");
    const instructions = document.getElementById("instructions");
  
    function startMaze() {
        document.getElementById("formDiv").style.display = "none";
  
        instructions.style.display = "block";
  
        instructions.addEventListener("click", function handleClick() {
        instructions.removeEventListener("click", handleClick);
        instructions.style.display = "none";
        mazeCanvas.style.display = "block";
        cursorDot.style.display = "block";
        document.body.style.cursor = "none";
  
        resizeCanvas();
        drawMaze();
      });
    }
  
    function resizeCanvas() {
        canvas = mazeCanvas;
        ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
  
    function drawMaze() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        mazeWalls = [];
  
        startZone = { x: 50, y: 50, w: 100, h: 100 };
        endZone = { x: canvas.width - 150, y: canvas.height - 150, w: 100, h: 100 };
  
        ctx.fillStyle = "green";
        ctx.fillRect(startZone.x, startZone.y, startZone.w, startZone.h);

        ctx.fillStyle = "blue";
        ctx.fillRect(endZone.x, endZone.y, endZone.w, endZone.h);
  
        const wallCount = 75;

        for (let i = 0; i < wallCount; i++) {
        let horizontal = Math.random() > 0.5;
        let wall = {
            x: Math.random() * (canvas.width - 150) + 50,
            y: Math.random() * (canvas.height - 150) + 50,
            w: horizontal ? Math.random() * 300 + 100 : 20,
            h: horizontal ? 20 : Math.random() * 300 + 100,
            dx: Math.random() > 0.5 ? 1 : -1,
            dy: Math.random() > 0.5 ? 1 : -1,
        };
        mazeWalls.push(wall);
      }
  
      function drawWalls() {
        ctx.fillStyle = "black";
        mazeWalls.forEach((w) => {
            ctx.fillRect(w.x, w.y, w.w, w.h);
        });
      }
  
        function moveWalls() {
            if (!startedMaze) return;
            mazeWalls.forEach((w) => {
                w.x += w.dx;
                w.y += w.dy;
                if (w.x < 0 || w.x + w.w > canvas.width) w.dx *= -1;
                if (w.y < 0 || w.y + w.h > canvas.height) w.dy *= -1;
            });
        }
  
        function animateMaze() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
    
            ctx.fillStyle = "green";
            ctx.fillRect(startZone.x, startZone.y, startZone.w, startZone.h);
    
            ctx.fillStyle = "blue";
            ctx.fillRect(endZone.x, endZone.y, endZone.w, endZone.h);
    
            moveWalls();
            drawWalls();
            requestAnimationFrame(animateMaze);
        }
        
        animateMaze();
    }
  
    function pointInRect(px, py, rect) {
        return px > rect.x && px < rect.x + rect.w && py > rect.y && py < rect.y + rect.h;
    }
  
    mazeCanvas.addEventListener("mousemove", (e) => {
        const rect = mazeCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cursorDot.style.left = `${e.clientX - 5}px`;
        cursorDot.style.top = `${e.clientY - 5}px`;

        if (!startedMaze && pointInRect(x, y, startZone)) {
            startedMaze = true;
            console.log("Maze started!");
        }
  
        if (!startedMaze) return;
    
        for (let wall of mazeWalls) {
            if (pointInRect(x, y, wall)) {
                alert("cringe");
                location.reload();
                return;
            }
        }
    
        if (pointInRect(x, y, endZone)) {
            alert("yippee");
            location.reload();
        }
    });
  
    document.getElementById("startButton").addEventListener("click", startMaze);
});
  