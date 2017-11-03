/**
 * Created by xrk on 17-11-1.
 */
/*
 *  实现圆周运动
 *
 *  已知圆心坐标,半径,弧度,轨迹初始位置, 计算下一个单位时间轨迹坐标.
 * */
import { createCircle } from './shapeUtil';
import { getCoordinate } from './util';

export const circleMotion = () => {
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
export const circleHorizontal = () => {
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