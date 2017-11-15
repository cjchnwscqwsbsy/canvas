/**
 * Created by xrk on 17-11-15.
 */
export const get2DContext = () => {
    const canvas = document.getElementById('root');
    const size = canvas.getBoundingClientRect();
    if (canvas.getContext) {
        return {
            context: canvas.getContext('2d'),
            width: size.width,
            height: size.height
        }
    }
    return null;
}