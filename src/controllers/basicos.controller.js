import { Basicos } from "../models/Basicos.js";


// Obtener el total de las bodegas
export async function getBasicos(req, res) {
    try {
      const basicos = await Basicos.findAll({
        atributes: ["id", "name"],
      });
      res.json(basicos);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  
 
// Crear Bodega
export async function createBasico(req, res) {
    
    try {        
        let newBasico = await Basicos.create(req.body);
        return res.status(201).json(newBasico);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received"); 
}
 
//Detalles de un Bodega
export async function getBasico(req, res) {
    const { id } = req.params;
    try {
      const basico = await Basicos.findByPk(id);

      if(!basico)
        return res.status(404).json({message: "Bodega does not exists"});

      res.json(basico);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar bodega
export const updateBasico = async (req, res) => {
    try {
      const { id } = req.params;      
  
      const basico = await Basicos.findByPk(id);
        
        basico.set(req.body);

      
      await basico.save();
  
      res.status(200).json(basico);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};