import {Sequelize} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { ListaPrecio } from './ListaPrecios.js';


export const ListaPrecioEncabezado = sequelize.define("listaPreciosEncabezado", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    inicia: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    fin: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status:{
        type: Sequelize.INTEGER,
        defaultValue: 1 // 1 en proceso, 2 activa, 3 inactiva
    }
});

// Activar la relación con lista precios detalle
ListaPrecioEncabezado.hasMany(ListaPrecio, {
    foreignKey: 'lpencabId',
    sourceKey: 'id'
})

ListaPrecio.belongsTo(ListaPrecioEncabezado,{
    foreignKey: 'lpencabId',
    targetId: 'id'
})

