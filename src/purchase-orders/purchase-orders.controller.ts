import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import {
  CreatePurchaseOrderItemDto,
  UpdatePurchaseOrderItemDto,
} from '../purchase-order-items/dto/purchase-order-item.dto';

@Controller('purchase-orders')
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {}

  @Post()
  create(@Body() createPurchaseOrderDto: CreatePurchaseOrderItemDto) {
    return this.purchaseOrdersService.create(createPurchaseOrderDto);
  }

  @Get()
  findAll() {
    return this.purchaseOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseOrdersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePurchaseOrderDto: UpdatePurchaseOrderItemDto,
  ) {
    return this.purchaseOrdersService.update(+id, updatePurchaseOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseOrdersService.remove(+id);
  }
}
