import { ProductLinea } from "../models/ProductLinea.js";


// Obtener el total de los productlineas
export async function getProductlineas(req, res) {
    try {
      const productlineas = await ProductLinea.findAll({
        atributes: ["id", "name"],
      });
      res.json(productlineas);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
 
// Crear productlineas
export async function createProductlinea(req, res) {
    const { name, description} = req.body;
    try {        
        let newProductlinea = await ProductLinea.create(req.body);
        return res.status(201).json(newProductlinea);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Detalles de un productlinea
export async function getProductlinea(req, res) {
    const { id } = req.params;
    try {
      const productlinea = await ProductLinea.findByPk(id);

      if(!productlinea)
        return res.status(404).json({message: "Linea de producto does not exists"});

      res.json(productlinea);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar productlinea
export const updateProductlinea = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
  
      const productlinea = await ProductLinea.findByPk(id);
        
        productlinea.set(req.body);

      
      await productlinea.save();
  
      res.status(200).json(productlinea);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desctivar productlinea
export const activProductlinea = async (req, res) => {
    try {
      const { id, status } = req.params;
      //const { status } = req.body;
  
      const productlinea = await ProductLinea.findByPk(id);
        
        productlinea.set({"status": status});

      await productlinea.save();
  
      res.status(200).json(productlinea);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
  