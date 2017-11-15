/**
 * Created by xrk on 17-11-1.
 */
import { circleMotion, circleHorizontal } from './move';
import { draw } from './test';
const addLoadEvent = (func) => {
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
addLoadEvent(circleMotion);
addLoadEvent(circleHorizontal);