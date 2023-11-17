import { Controller, Get, Param, ParseIntPipe, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { InvoiceService } from './invoice.service';
import { GetUser } from 'src/auth/decorator';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(JwtGuard)
@Controller('invoices')
export class InvoiceController {
    constructor(private invoiceService: InvoiceService){}

    @Get()
    getInvoices(@GetUser("id") userId: number){
        return this.invoiceService.getInvoices(userId);

    }

    @Get(':id')
    getInvoiceById(@GetUser('id') userId: number,@Param('id', ParseIntPipe) invoiceId: number){
        return this.invoiceService.getInvoiceById(userId, invoiceId);
    }
}
