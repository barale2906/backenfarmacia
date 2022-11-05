import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { TecnicaEncabezado } from './TecnicaEncabezado.js';


export const Proveedores = sequelize.define("proveedores", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
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
    contact:{
        type: DataTypes.STRING,
        allowNull: false
    },
    reorden:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER,
        defaultValue: 1 //1. Creación, 2. Aprobado, 3. Inactivo
    }
});

// Activar la relación con tecnica Encabezado
Proveedores.hasMany(TecnicaEncabezado, {
    foreignKey: 'proveeId',
    sourceKey: 'id'
})

TecnicaEncabezado.belongsTo(Proveedores,{
    foreignKey: 'proveeId',
    targetId: 'id'
})