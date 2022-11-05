import { Bodegas } from "../models/Bodega.js";


// Obtener el total de las bodegas
export async function getBodegas(req, res) {
    try {
      const bodegas = await Bodegas.findAll({
        atributes: ["id", "name"],
      });
      res.json(bodegas);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
 
// Crear Bodega
export async function createBodega(req, res) {
    const { nit, name, adress, phone, email } = req.body;
    try {        
        let newBodega = await Bodegas.create(req.body);
        return res.status(201).json(newBodega);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}
 
//Detalles de un Bodega
export async function getBodega(req, res) {
    const { id } = req.params;
    try {
      const bodega = await Bodegas.findByPk(id);

      if(!bodega)
        return res.status(404).json({message: "Bodega does not exists"});

      res.json(bodega);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar bodega
export const updateBodega = async (req, res) => {
    try {
      const { id } = req.params;
      const { adress, email, phone } = req.body;
  
      const bodega = await Bodegas.findByPk(id);
        
        bodega.set(req.body);

      
      await bodega.save();
  
      res.status(200).json(bodega);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desctivar Bodega
export const activBodega = async (req, res) => {
    try {
      const { id, status } = req.params;
      //const { status } = req.body;
  
      const bodega = await Bodegas.findByPk(id);
        
        //bodega.set(req.body);
        bodega.set({"status": status});

      await bodega.save();
  
      return res.status(200).json(bodega);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
  