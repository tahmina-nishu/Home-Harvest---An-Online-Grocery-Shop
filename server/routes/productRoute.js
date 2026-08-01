import express from 'express';
import { upload } from '../configs/multer.js';
import authSeller from '../middleWares/authSeller.js';
import { 
    addProduct, 
    updateProductStock, 
    productById, 
    productList,
    deleteProduct
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/add', upload.array("images", 4), authSeller, addProduct) 
productRouter.get('/list', productList) 
productRouter.get('/:id', productById)  
productRouter.post("/update-stock", authSeller, updateProductStock);
productRouter.delete('/delete/:id', authSeller, deleteProduct);

export default productRouter;