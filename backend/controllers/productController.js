import path from "path";
import { randomUUID } from "crypto";
import supabase from "../config/supabase.js";
import productModel from "../models/productModels.js";
const bucketName = process.env.SUPABASE_BUCKET || "product-images";

const uploadImage = async (file) => {
    const extension = path.extname(file.originalname) || ".jpg";
    const filePath = `products/${Date.now()}-${randomUUID()}${extension}`;

    const { error } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file.buffer, {
            contentType: file.mimetype,
            upsert: false,
        });

    if (error) {
        throw error;
    }

    const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
    return data.publicUrl;
};

// function for Add Product
const addProduct = async (req, res) => {
    try {

        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(uploadImage)
        )

       const productData = {
        name,
        description,
        category,
        price: Number(price),
        subCategory,
        bestSeller: bestSeller === "true" ? true : false,
        sizes: JSON.parse(sizes),
        image: imagesUrl,
        date: Date.now()
       }

       console.log(productData);

       const product = new productModel(productData);
       await product.save();

    res.json({ success: true, message: "Product Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
// function for Total Product List
const listProduct = async (req, res) => {
    try{
        const products = await productModel.find({});
        res.json({success: true, products});
    }catch(error){
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
// function for Remove Product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
// Getting the single product details
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId)
        res.json({success:true, product})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


export {addProduct, listProduct, removeProduct, singleProduct};