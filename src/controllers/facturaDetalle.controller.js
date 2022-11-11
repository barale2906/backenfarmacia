import { FacturaDetalle } from "../models/FacturaDetalle.js";

// Obtener el total de los FacturaDetalles
export async function getFacturaDetalles(req, res) {
    try {
      const facturaDetalles = await FacturaDetalle.findAll({
        //atributes: ["id", "precioTotal", "observations"],
      });
      res.json(facturaDetalles);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
 
// Crear FacturaDetalle
export async function createFacturaDetalle(req, res) {
    //const { code, name, description, unit, imagen } = req.body;
    try {        
        let newFacturaDetalle = await FacturaDetalle.create(req.body);
        return res.status(201).json(newFacturaDetalle);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Detalles de un FacturaDetalle
export async function getFacturaDetalle(req, res) {
    const { id } = req.params;
    try {
      const facturaDetalle = await FacturaDetalle.findAll({
        where:{
          factId:id
        }
      });

      if(!facturaDetalle)
        return res.status(404).json({message: "does not exists"});

      res.status(200).json(facturaDetalle);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar FacturaDetalle
export const updateFacturaDetalle = async (req, res) => {
    try {
      const { id } = req.params;
      //const { code, description, unit, imagen } = req.body;  
      const facturaDetalle = await FacturaDetalle.findByPk(id);        
        facturaDetalle.set(req.body);      
      await facturaDetalle.save();
  
      res.json(facturaDetalle);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Eliminar encabezado
  
export async function deleteFacturaDetalle(req, res) {
    const { id } = req.params;
    try {
      await FacturaDetalle.destroy({
        where: {
          id,
        },
      });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
