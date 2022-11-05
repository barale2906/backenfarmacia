import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { Productos } from './Producto.js';


export const ProductLinea = sequelize.define("productLineas", {
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
    status:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1 activo 2 Inactivo
    }
});


// Activar la relación con producto
ProductLinea.hasMany(Productos, {
    foreignKey: 'lineaId',
    sourceKey: 'id'
})

Productos.belongsTo(ProductLinea,{
    foreignKey: 'lineaId',
    targetId: 'id'
})