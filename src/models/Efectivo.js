import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'


export const Efectivo = sequelize.define("efectivos", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    valor:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    saldo:{
        type: DataTypes.DOUBLE,
        allowNull: false //Suma Algebraica de todos los movimientos
    },
    movimiento:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1 ingreso dinero, 2 pago facturas - salida de dinero
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: false // Detalle del movimiento registrado
    },
    factura:{
        type: DataTypes.STRING,
        allowNull: false // Se registra la factura desde donde ingreso el dinero o la que se pago.
    },
    status:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1 movimiento, 2 cierre de caja (valor después del cierre de caja), el numero del cierre cerrado, 4 transferido a bancos
    }
});