import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { FacturaDetalle } from './FacturaDetalle.js';
import { Inventario } from './Inventario.js';
import { ListaPrecio } from './ListaPrecios.js';
import { TecnicaDetalle } from './TecnicaDetalle.js';


export const Productos = sequelize.define("productos", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    code: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    cum: {
        type: DataTypes.STRING,
        allowNull: false
    },
    generico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comercial: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    relativa: {
        type: DataTypes.STRING,
        allowNull: true
    },
    temperatura: {
        type: DataTypes.STRING,
        allowNull: true
    },
    maximo: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    minimo: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    imagen: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1 activo, 2 inactivo
    }
});

// Activar la relación con lista de precios
Productos.hasMany(ListaPrecio, {
    foreignKey: 'prodId',
    sourceKey: 'id'
})

ListaPrecio.belongsTo(Productos,{
    foreignKey: 'prodId',
    targetId: 'id'
})


// Activar la relación con tecnica Detalle
Productos.hasMany(TecnicaDetalle, {
    foreignKey: 'prodId',
    sourceKey: 'id'
})

TecnicaDetalle.belongsTo(Productos,{
    foreignKey: 'prodId',
    targetId: 'id'
})


// Activar la relación con inventario
Productos.hasMany(Inventario, {
    foreignKey: 'prodId',
    sourceKey: 'id'
})

Inventario.belongsTo(Productos,{
    foreignKey: 'prodId',
    targetId: 'id'
})

// Activar la relación con facturadetalles
Productos.hasMany(FacturaDetalle, {
    foreignKey: 'prodId',
    sourceKey: 'id'
})

FacturaDetalle.belongsTo(Productos,{
    foreignKey: 'prodId',
    targetId: 'id'
})



