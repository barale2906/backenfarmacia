//import { Inventario } from "../models/Inventario.js";
import { Impuestos } from "../models/Impuesto.js";
import { ListaPrecio } from "../models/ListaPrecios.js";
import { ListaPrecioEncabezado } from "../models/ListaPreciosEncabezado.js";
import { Productos } from "../models/Producto.js";



// Obtener el total de los productos
export async function getProductos(req, res) {
    try {
      const productos = await Productos.findAll({
        atributes: ["id", "code", "name"],
      });
      res.json(productos);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
 
// Crear producto
export async function createProducto(req, res) {
    const { code, name, description, unit, imagen } = req.body;
    try {        
        let newProducto = await Productos.create(req.body);
        return res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}
 
//Detalles de un producto
export async function getProducto(req, res) {
    const { id } = req.params;
    try {
      const producto = await Productos.findByPk(id, {
        include: [{model:Impuestos}]
      });

      if(!producto)
        return res.status(404).json({message: "Producto does not exists"});

      res.json(producto);


    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar producto
export const updateProducto = async (req, res) => {
    try {
      const { id } = req.params;
      const { code, description, unit, imagen } = req.body;
  
      const producto = await Productos.findByPk(id);
        
        producto.set(req.body);

      
      await producto.save();
  
      res.json(producto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//Activar-desctivar producto
export const activProducto = async (req, res) => {
    try {
      const { id, status } = req.params;
  
      const producto = await Productos.findByPk(id);
        
        producto.set({"status": status});

      await producto.save();
  
      res.status(200).json(producto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// TRaer precios del producto activos según lista
export async function getListaPrecios(req, res) {
  try { 
    const { bodega } = req.params; 
    const precios = await ListaPrecio.findAll({
      include: [
        {
          model:ListaPrecioEncabezado,
          where:{
            status:2
          }
        },{model:Productos}
      ],
      //attributes: ["id", "variable", "valor", "createdAt"],
          
    });
   
    res.status(200).json(precios);
    
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }    
}

// Cargar productos de inventario para crear la lista de precios
export async function getInventarioLP(req, res) {
  try {
      
    const { encab } = req.params;
    const productos = await Productos.findAll({
      include:[
        /*
        {
          model:Inventario,  
          where:{status:2, encabId:bodega}, 
          separate:true, 
          order:[['costo', 'DESC']]
        }, */
        {
          model:ListaPrecio,
          where:{
            lpencabId: encab
          }
        },

        {model:Impuestos}
      ],
      order:[['comercial', 'ASC']],
      where:{
        status:1
      }
    });
    res.status(201).json(productos);
    
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }    
} 