import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Import Routes
import ambientalUbi from './routes/ambientalubi.routes.js';
import ambientereg from './routes/ambientalreg.routes.js';
import user from './routes/user.routes.js';
import proveedor from './routes/proveedor.routes.js';
import bodega from './routes/bodega.routes.js';
import impuesto from './routes/impuesto.routes.js';
import productlinea from './routes/productlinea.routes.js';
import producto from './routes/producto.routes.js';
import listaprecio from './routes/listaPrecios.routes.js';
import listaPreciosEncabezado from './routes/listaPreciosEncabezado.routes.js';
import inventario from './routes/inventario.routes.js';
import tecnicaencabezado from './routes/tecnicaEncabezado.routes.js';
import tecnicadetalle from './routes/tecnicaDetalle.routes.js';
import efectivo from './routes/efectivo.routers.js';
import facturaEncabezado from './routes/facturaEncabezado.routes.js';
import facturaDetalle from './routes/facturaDetalle.routes.js';
import basicos from './routes/basicos.routes.js';










//Routes
app.use('/api/user', user);
app.use('/api/ambientalubi', ambientalUbi);
app.use('/api/ambientereg', ambientereg);
app.use('/api/proveedor', proveedor);
app.use('/api/bodega', bodega);
app.use('/api/impuesto', impuesto);
app.use('/api/productlinea', productlinea);
app.use('/api/producto', producto);
app.use('/api/listaprecio', listaprecio);
app.use('/api/listaprencab', listaPreciosEncabezado);
app.use('/api/inventario', inventario);
app.use('/api/tecnicaencabezado', tecnicaencabezado);
app.use('/api/tecnicadetalle', tecnicadetalle);
app.use('/api/efectivo', efectivo);
app.use('/api/facturaEncabezado', facturaEncabezado);
app.use('/api/facturaDetalle',facturaDetalle);
app.use('/api/basicos',basicos);


export default app;