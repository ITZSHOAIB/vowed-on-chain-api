import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { WeddingContractsService } from '../services/wedding-contracts.service';

@Controller('wedding-contracts')
@ApiTags('wedding-contracts')
export class WeddingContractsController {
  constructor(
    private readonly weddingContractsService: WeddingContractsService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async create(@Req() req: any): Promise<string> {
    const { id: userId } = req?.user;
    return await this.weddingContractsService.createWeddingContract(userId);
  }
}
