import { Injectable } from '@nestjs/common';
import { createCanvas, registerFont } from 'canvas';
import { ImageDto } from 'src/dto/image.dto';
const fs = require('fs')
registerFont('src/helpers/fonts/magic-frankie.ttf', { family: 'Magic Frankie' })

@Injectable()
export class PhrasesImagesService {

    generateImage({phrase, backgroundColor, fontColor, fontFamily, fontSize, height, width}:ImageDto): string {

        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');

        context.fillStyle = backgroundColor
        context.fillRect(0, 0, width, height)

        context.fillStyle = fontColor;
        context.font = `${fontSize}px "${fontFamily}"`;
        context.fillText(phrase, 100, 200, width);

        context.fillStyle = fontColor;
        // context.font = 'bold 30pt Menlo';
        context.fillText('La vejez debería delirar y arder cuando se acaba el día.', 520, 520, width);

        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync('./test.png', buffer);
        return 'Hello from PhrasesImagesService';
    }
}
