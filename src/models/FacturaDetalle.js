import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'


export const FacturaDetalle = sequelize.define("facturaDetalles", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    comercial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    precio: {
        type: DataTypes.DOUBLE, 
        allowNull: true
    },
    preciobase: {
        type: DataTypes.DOUBLE, 
        allowNull: true
    },
    descuento: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    descuentobase: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    impuesto: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    impuestoporc: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    impuestobase: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    totalbase: {
        type: DataTypes.DOUBLE,
        allowNull: true
    }
});