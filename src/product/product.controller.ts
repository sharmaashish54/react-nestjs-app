import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.findOne(Number(id));
  }
}
