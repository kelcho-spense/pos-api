// inventory.dto.ts

import { PartialType } from '@nestjs/swagger';
import { IsInt, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateInventoryDto {
  @IsNotEmpty()
  @IsInt()
  productId: number;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsInt()
  reorderLevel?: number;
}

export class UpdateInventoryDto extends PartialType(CreateInventoryDto) {}
