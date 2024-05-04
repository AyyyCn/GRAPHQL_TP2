import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvResolver } from './cv.resolver';

@Module({
  providers: [CvResolver, CvService],
})
export class CvModule {}
