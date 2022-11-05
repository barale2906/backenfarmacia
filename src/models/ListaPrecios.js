import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { FacturaDetalle } from './FacturaDetalle.js';


export const ListaPrecio = sequelize.define("listaPrecios", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    precio:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    precioDescuento:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    porcImpuesto:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    precioImpuesto:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    precioTotal:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

// Activar la relación con facturadetalles
ListaPrecio.hasMany(FacturaDetalle, {
    foreignKey: 'lpId',
    sourceKey: 'id'
})

FacturaDetalle.belongsTo(ListaPrecio,{
    foreignKey: 'lpId',
    targetId: 'id'
})