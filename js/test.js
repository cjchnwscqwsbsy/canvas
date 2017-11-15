/**
 * Created by xrk on 17-11-15.
 */
import { get2DContext } from './contextSizeXD';

export const draw = () => {
    if (get2DContext) {
        const ctx = get2DContext().context;
        ctx.save();
        ctx.translate(75, 75);
        for (let i = 1; i < 6; i ++) {
            ctx.save();
            ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
            for (var j=0;j<i*6;j++){
                ctx.rotate(Math.PI*2/(i*6));
                ctx.beginPath();
                ctx.arc(0,i*12.5,5,0,Math.PI*2,true);
                ctx.fill();
            }
            ctx.restore();
        }
        ctx.restore();
    }
}