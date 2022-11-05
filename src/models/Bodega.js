import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { FacturaEncabezado } from './FacturaEncabezado.js';
import { Inventario } from './Inventario.js';
import { ListaPrecioEncabezado } from './ListaPreciosEncabezado.js';
import { TecnicaDetalle } from './TecnicaDetalle.js';
import { Efectivo } from './Efectivo.js';


export const Bodegas = sequelize.define("bodegas", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    adress: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1:Activo, 2:Inactivo
    }
});

// Activar la relación con lista precios Encabezado
Bodegas.hasMany(ListaPrecioEncabezado, {
    foreignKey: 'bodegaId',
    sourceKey: 'id'
})

ListaPrecioEncabezado.belongsTo(Bodegas,{
    foreignKey: 'bodegaId',
    targetId: 'id'
})

// Activar la relación con detalle recepción técnica
Bodegas.hasMany(TecnicaDetalle, {
    foreignKey: 'bodegaId',
    sourceKey: 'id'
})

TecnicaDetalle.belongsTo(Bodegas,{
    foreignKey: 'bodegaId',
    targetId: 'id'
})

// Activar la relación con inventario
Bodegas.hasMany(Inventario, {
    foreignKey: 'bodegaId',
    sourceKey: 'id'
})

Inventario.belongsTo(Bodegas,{
    foreignKey: 'bodegaId',
    targetId: 'id'
})

// Activar la relación con facturas
Bodegas.hasMany(FacturaEncabezado, {
    foreignKey: 'bodegaId',
    sourceKey: 'id'
})

FacturaEncabezado.belongsTo(Bodegas,{
    foreignKey: 'bodegaId',
    targetId: 'id'
})

// Activar la relación con Efectivo
Bodegas.hasMany(Efectivo, {
    foreignKey: 'bodegaId',
    sourceKey: 'id'
})

Efectivo.belongsTo(Bodegas,{
    foreignKey: 'bodegaId',
    targetId: 'id'
})

