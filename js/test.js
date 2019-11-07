/**
 * Created by xrk on 17-11-15.
 */
import { get2DContext } from './contextSizeXD';

const draw = (sun, moon, earth) => {
    if (get2DContext) {
        const ctx = get2DContext().context;

        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 300, 300);

        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.strokeStyle = 'rgba(0,153,255,0.4)';
        ctx.save();
        ctx.translate(150, 150);

        let time = new Date();
        ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        ctx.translate(105, 0);
        ctx.fillRect(0, -12, 30, 24); // Shadow
        ctx.drawImage(earth, -12, -12);

        ctx.save();
        ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
        ctx.translate(0,28.5);
        ctx.drawImage(moon,-3.5,-3.5);
        ctx.restore();

        ctx.restore();

        ctx.beginPath();
        ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
        ctx.stroke();

        ctx.drawImage(sun,0,0,300,300);

        window.requestAnimationFrame(() => draw(sun, moon, earth));
    }
}

export const init = () => {
    const sun = new Image();



    const moon = new Image();
    const earth = new Image();
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(() => draw(sun, moon, earth));
}
