import { Impuestos } from "../models/impuesto.js";


// Obtener el total de los impuestos
export async function getImpuestos(req, res) {
    try {
      const impuestos = await Impuestos.findAll({
        atributes: ["id", "name"],
      });
      res.json(impuestos);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
 
// Crear Impuestos
export async function createImpuesto(req, res) {
    const { name, description, valor} = req.body;
    try {        
        let newImpuesto = await Impuestos.create(req.body);
        return res.status(201).json(newImpuesto);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Detalles de un impuesto
export async function getImpuesto(req, res) {
    const { id } = req.params;
    try {
      const impuesto = await Impuestos.findByPk(id);

      if(!impuesto)
        return res.status(404).json({message: "Impuesto does not exists"});

      res.json(impuesto);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar impuesto
export const updateImpuesto = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, valor } = req.body;
  
      const impuesto = await Impuestos.findByPk(id);
        
        impuesto.set(req.body);

      
      await impuesto.save();
  
      res.status(200).json(impuesto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desctivar Impuesto
export const activImpuesto = async (req, res) => {
    try {
      const { id, status } = req.params;
      //const { status } = req.body;
  
      const impuesto = await Impuestos.findByPk(id);
        
        impuesto.set({"status": status});

      await impuesto.save();
  
      res.status(200).json(impuesto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
  