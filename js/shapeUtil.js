/**
 * Created by xrk on 17-11-1.
 */
/*
 *   绘制一个圆形(false)/实心圆(true)
 * */
export const createCircle = (context, x, y, r, flag) => {
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