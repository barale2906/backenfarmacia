import { TecnicaDetalle } from "../models/TecnicaDetalle.js";
import { TecnicaEncabezado } from "../models/TecnicaEncabezado.js";
import { Productos } from "../models/Producto.js";
import { Inventario } from "../models/Inventario.js";

// Obtener el total de los TecnicaDetalles
export async function getTecnicaDetalles(req, res) {
    try {
      const tecnicaDetalles = await TecnicaDetalle.findAll({
        include: [{model:TecnicaEncabezado}, {model:Productos}]
      });
      res.json(tecnicaDetalles);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
 
// Crear TecnicaDetalle
export async function createTecnicaDetalle(req, res) {
    //const { code, name, description, unit, imagen } = req.body;
    try {        
        let newTecnicaDetalle = await TecnicaDetalle.create(req.body);
        return res.status(201).json(newTecnicaDetalle);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Detalles de un TecnicaDetalle
export async function getTecnicaDetalle(req, res) {
    const { id } = req.params;
    try {
      const tecnicaDetalle = await TecnicaDetalle.findAll({
        include: [{model:Productos}],
        where: {
          encabId: id
        }
      });

      res.status(200).json(tecnicaDetalle);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar TecnicaDetalle
export const updateTecnicaDetalle = async (req, res) => {
    try {
      const { id } = req.params;
      //const { code, description, unit, imagen } = req.body;  
      const tecnicaDetalle = await TecnicaDetalle.findByPk(id);        
        tecnicaDetalle.set(req.body);      
      await tecnicaDetalle.save();
  
      res.json(tecnicaDetalle);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Eliminar detalle
  
export async function deleteTecnicaDetalle(req, res) {
    const { id } = req.params;
    try {
      await TecnicaDetalle.destroy({
        where: {
          id,
        },
      });
      await Inventario.destroy({
        where: {
          idTecnicalDetalle: id
        }
      })
      return res.sendStatus(204).id;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
