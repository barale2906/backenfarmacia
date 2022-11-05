import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { Ambientalreg } from './AmbientalRegistro.js';
import { Efectivo } from './Efectivo.js';
import { FacturaEncabezado } from './FacturaEncabezado.js';
import { ListaPrecioEncabezado } from './ListaPreciosEncabezado.js';
import { TecnicaEncabezado } from './TecnicaEncabezado.js';

export const Users = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{ 
        type: Sequelize.STRING,
        allowNull: false
    },
    imagen:{
        type: Sequelize.STRING,
        allowNull: true
    },
    rol:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    bodega:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 activo, 2 inactivo
    }
});

Users.hasMany(Ambientalreg, {
    foreignKey: 'userId',
    sourceKey: 'id'
})

Ambientalreg.belongsTo(Users,{
    foreignKey: 'userId',
    targetId: 'id'
})

// Activar la relación con tecnica Encabezado
Users.hasMany(TecnicaEncabezado, {
    foreignKey: 'userId',
    sourceKey: 'id'
})

TecnicaEncabezado.belongsTo(Users,{
    foreignKey: 'userId',
    targetId: 'id'
})



// Activar la relación con lista precios Encabezado
Users.hasMany(ListaPrecioEncabezado, {
    foreignKey: 'userId',
    sourceKey: 'id'
})


ListaPrecioEncabezado.belongsTo(Users,{
    foreignKey: 'userId',
    targetId: 'id'
})

// Activar la relación con facturas
Users.hasMany(FacturaEncabezado, {
    foreignKey: 'userId',
    sourceKey: 'id'
})


FacturaEncabezado.belongsTo(Users,{
    foreignKey: 'userId',
    targetId: 'id'
})

// Activar la relación con efectivo
Users.hasMany(Efectivo, {
    foreignKey: 'userId',
    sourceKey: 'id'
})


Efectivo.belongsTo(Users,{
    foreignKey: 'userId',
    targetId: 'id'
})

