import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { FacturaDetalle } from './FacturaDetalle.js';


export const FacturaEncabezado = sequelize.define("facturaEncabezados", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    documento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipoDocumento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adress: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true
    },
    totalFactura:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    impuestos:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    descuentos:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    formaPago: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Efectivo"
    }
});

// Activar la relación con el detalle de la factura
FacturaEncabezado.hasMany(FacturaDetalle, {
    foreignKey: 'factId',
    sourceKey: 'id'
})


FacturaDetalle.belongsTo(FacturaEncabezado,{
    foreignKey: 'factId',
    targetId: 'id'
})