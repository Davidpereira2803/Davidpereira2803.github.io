const canvas = document.createElement('canvas');
canvas.id = 'bg-canvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const grid = { 
    cols: 70, 
    rows: 70 
};

const cellWidth = canvas.width / grid.cols;
const cellHeight = canvas.height / grid.rows;

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < grid.cols; i++) {
        for (let j = 0; j < grid.rows; j++) {
            const x = i * cellWidth;
            const y = j * cellHeight;
            
            const cellCenterX = x + cellWidth / 2;
            const cellCenterY = y + cellHeight / 2;
            const distance = Math.hypot(mouseX - cellCenterX, mouseY - cellCenterY);
            
            const maxDistance = 100;
            
            const opacity = Math.max(0, 1 - distance / maxDistance);
            
            ctx.fillStyle = `rgba(255, 51, 51, ${opacity * 0.3})`;
            ctx.fillRect(x, y, cellWidth - 2, cellHeight - 2);
        }
    }
    
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();