import { Proveedores } from "../models/proveedor.js";


// Obtener el total de los proveedores
export async function getProveedores(req, res) {
    try {
      const proveedors = await Proveedores.findAll({
        atributes: ["id", "nit", "name"],
      });
      res.json(proveedors);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
 
// Crear Proveedor
export async function createProvee(req, res) {
    const { nit, name, adress, phone, email, contact, reorden } = req.body;
    try {
        /*let newProvee = await Proveedores.create(
        {
            nit, name, adress, phone, email, contact, reorden
        }
        );*/
        let newProvee = await Proveedores.create(req.body);
        return res.status(201).json(newProvee);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
    res.json("received");
}
 
//Detalles de un proveedor
export async function getProveedor(req, res) {
    const { id } = req.params;
    try {
      const proveedor = await Proveedores.findOne({
        where: {
          id
        },
      });

      if(!proveedor)
        return res.status(404).json({message: "Proveedor does not exists"});

      res.json(proveedor);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar proveedor
export const updateProveedor = async (req, res) => {
    try {
      const { id } = req.params;
      const { adress, email, phone, contact } = req.body;
  
      const proveedor = await Proveedores.findByPk(id);
        
        //proveedor.name = name;

        proveedor.set(req.body);

      
      await proveedor.save();
  
      res.status(200).json(proveedor);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desctivar Proveedor
export const activProveedor = async (req, res) => {
    try {
      const { id, status } = req.params;     
  
      const proveedor = await Proveedores.findByPk(id);
        
        proveedor.set({"status": status});

      await proveedor.save();
  
      res.status(200).json(proveedor);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
  
/*
export async function deleteProvee(req, res) {
    const { id } = req.params;
    try {
      await Proveedores.destroy({
        where: {
          id,
        },
      });
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
*/
  