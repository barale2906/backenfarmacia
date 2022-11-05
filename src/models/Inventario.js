import {DataTypes} from 'sequelize'
import { sequelize } from '../database/bd.js'
import { FacturaDetalle } from './FacturaDetalle.js';


export const Inventario = sequelize.define("inventarios", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: true
    },
    expiration: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cantidad:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    costo:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    idTecnicalDetalle: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    encabId: {
        type: DataTypes.BIGINT,
        allowNull: true
    },
    status:{
        type: DataTypes.INTEGER,
        defaultValue: 1 // 1 Proceso, 2 Activo, 3 Encabezado desaprobado, 4 Finalizado (La cantidad esta en ceros)
    }

});

// Activar la relación con facturadetalles
Inventario.hasMany(FacturaDetalle, {
    foreignKey: 'invId',
    sourceKey: 'id'
})

FacturaDetalle.belongsTo(Inventario,{
    foreignKey: 'invId',
    targetId: 'id'
})