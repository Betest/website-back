import { ApiProperty } from "@nestjs/swagger";

export class ImageDto {
    @ApiProperty()
    phrase: string;
    @ApiProperty()
    width: number;
    @ApiProperty()
    height: number;
    @ApiProperty()
    fontSize: number;
    @ApiProperty()
    fontFamily: string;
    @ApiProperty()
    fontColor: string;
    @ApiProperty()
    backgroundColor: string;
}

module.exports = ImageDto;