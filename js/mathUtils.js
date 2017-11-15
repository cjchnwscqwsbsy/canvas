/**
 * Created by xrk on 17-11-1.
 */
/*
 * 已知圆心坐标,半径,弧度, 计算下一个单位时间轨迹坐标.
 * */
export const getCoordinate = (circle_x, circle_y, r, radian) => {
    const angle = radian*180/Math.PI;
    return {
        x: circle_x + r * Math.sin(angle),
        y: circle_y + r * Math.cos(angle)
    };
}