import { Controller, Get, Res, VERSION_NEUTRAL } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller({
  version: VERSION_NEUTRAL,
})
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/')
  @ApiExcludeEndpoint()
  redirect(@Res() res) {
    return res.redirect('/v0');
  }
}
