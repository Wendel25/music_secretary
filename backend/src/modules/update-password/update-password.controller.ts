import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Body, Patch, Query } from '@nestjs/common';
import { UpdatePasswordService } from './update-password.service';
import { UpdateUpdatePasswordDto } from './dto/update-update-password.dto';

@Controller('update-password')
  @ApiTags('Update Password')
export class UpdatePasswordController {
  constructor(private readonly updatePasswordService: UpdatePasswordService) {}

  @Patch()
  @ApiBearerAuth()
  async update(@Query('email') email: string, @Body() password: UpdateUpdatePasswordDto) {
    return await this.updatePasswordService.update(email, password);
  }
}
