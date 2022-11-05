import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { Productos } from './Producto.js';


export const Impuestos = sequelize.define("impuestos", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    valor:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1 Activo, 2 Inactivo
    }
});

// Activar la relación con producto
Impuestos.hasMany(Productos, {
    foreignKey: 'impId',
    sourceKey: 'id'
})

Productos.belongsTo(Impuestos,{
    foreignKey: 'impId',
    targetId: 'id'
})