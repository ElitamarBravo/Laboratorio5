import { Body, Controller, Delete, Get, Param, Patch, Post, ParseIntPipe } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/CrearProductoDto';
import { ActualizarProductoDto } from './dto/ActualizarProductoDto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  getAllProductos() {
    return this.productosService.findAll();
  }

  @Get(':id')
  getProductosById(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.findById(id);
  }

  @Post()
  crearProducto(@Body() crearDto: CrearProductoDto) {
    return this.productosService.create(crearDto);
  }

  @Patch(':id')
  actualizarProducto(@Param('id', ParseIntPipe) id: number, @Body() updateDto: ActualizarProductoDto) {
    return this.productosService.update(id, updateDto);
  }

  @Delete(':id')
  eliminarProducto(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.delete(id);
  }
}