/**
 * Created by xrk on 17-10-30.
 */
draw = () => {
    const canvas = document.getElementById('root');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 55, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 55, 50);

        ctx.strokeRect(50, 100, 90, 30);
        ctx.clearRect(20, 20, 55, 50);

        ctx.beginPath();
        ctx.moveTo(175, 150);
        ctx.lineTo(200, 175);
        ctx.lineTo(200, 125);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(300, 300, 150, 200, Math.PI*2, true);
        ctx.moveTo(400, 300);
        ctx.arc(300, 300, 100, 0, Math.PI, false);
        ctx.moveTo(260, 275);
        ctx.arc(250, 275, 10, 0, Math.PI*2, true);
        ctx.moveTo(360, 275);
        ctx.arc(350, 275, 10, 0, Math.PI*2, true);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(350, 20);
        ctx.lineTo(350, 50);
        ctx.lineTo(400, 50);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(350, 18);
        ctx.lineTo(400, 18);
        ctx.lineTo(400, 48);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(450,25);
        ctx.quadraticCurveTo(440,25,440,35);
        ctx.lineTo(440, 55);
        ctx.quadraticCurveTo(440, 65, 450, 65);
        ctx.lineTo(508, 65);
        ctx.quadraticCurveTo(515, 75, 530, 78);
        ctx.quadraticCurveTo(520, 75, 520, 65);
        ctx.moveTo(520, 65);
        ctx.quadraticCurveTo(530, 65, 530, 55);
        ctx.lineTo(530, 35);
        ctx.quadraticCurveTo(530, 25, 520, 25);
        ctx.lineTo(450, 25);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(500, 100);
        ctx.bezierCurveTo(518, 76, 540, 76, 540, 103);
        ctx.bezierCurveTo(540, 150, 460, 150, 500, 100);
        ctx.stroke();
    } else {
        alert('不支持<canvas/>标签');
    }
}

/*
 * 矩形
 * */
createRectangle = () => {
    const canvas = document.getElementById('root');
    if (canvas.getContext) {
        const context = canvas.getContext('2d');
        context.fillRect(500, 500, 50, 50);
    }
}

/*
* 已知圆心坐标,半径,弧度, 计算下一个单位时间轨迹坐标.
* */
getCoordinate = (circle_x, circle_y, r, radian) => {
    const angle = radian*180/Math.PI;
    return {
        x: circle_x + r * Math.sin(angle),
        y: circle_y + r * Math.cos(angle)
    };
}


/*
*  实现圆周运动
*  
*  已知圆心坐标,半径,弧度,轨迹初始位置, 计算下一个单位时间轨迹坐标.
* */
circleMotion = () => {
    const canvas = document.getElementById('root');
    if (canvas.getContext) {
        const context = canvas.getContext('2d');
        let point_x = 650; // 定义起始横坐标
        let point_y = 200;
        let radian = 1;     // 定义小球移动速率(弧度)
        createCircle(context, point_x, point_y, 30, true); // 初始化小球位置及大小
        createCircle(context, 650, 300, 100, false);   // 初始化圆周运动轨迹
        createCircle(context, 650, 300, 40, true);
        let coordinate;
        setInterval(function () {
            context.clearRect(520, 170, 260, 260);
            createCircle(context, 650, 300, 40, true);
            createCircle(context, 650, 300, 100, false);
            coordinate = getCoordinate(650, 300, 100, radian);
            radian += 1 / 3000;
            createCircle(context, coordinate.x, coordinate.y, 30, true);
        }, 10);
    }
}

/*
 * 实心球水平移动
 * */
horizontalMove = () => {
    const canvas = document.getElementById('root');
    if (canvas.getContext) {
        const context = canvas.getContext('2d');
        let startPoint = 30; // 定义起始横坐标
        let speed = 1;     // 定义小球移动速率
        createCircle(context, startPoint, 490, 30, true); // 初始化小球位置及大小

        setInterval(function () {
            context.clearRect(0, 460, 650, 60);  // 清除画布
            startPoint += speed;    // 改变球心横坐标
            createCircle(context, startPoint, 490, 30, true);  //重绘小球
            if (startPoint === 620) {
                speed = -1;
            }
            if (startPoint === 30) {
                speed = 1;
            }
        }, 10);
    }
}

/*
*   绘制一个圆形(false)/实心圆(true)
* */
createCircle = (context, x, y, r, flag) => {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, true);
    context.closePath();
    context.fillStyle = 'red';
    if(flag) {
        context.fill();
    } else {
        context.closePath();
        context.stroke();
    }
}

addLoadEvent = (func) => {
    let oldLoad = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldLoad();
            func()
        }
    }
}
addLoadEvent(draw);
addLoadEvent(horizontalMove);
addLoadEvent(circleMotion);





