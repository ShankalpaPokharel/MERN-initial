const Products = require("../models/product");
const User = require("../models/User");

const { uploadOnCloudinary } = require("../utils/cloudinary");
const fs = require("fs");

const path = require("path");
const Joi = require("joi");

const handleServerError = require("../middleware/handleServerError");
const { joiValidationUtils } = require("../utils/validationUtils");

const productSchema = Joi.object({
    title: Joi.string().max(30).required(),
    price: Joi.number().min(0).max(1000000).required(),
    inStock: Joi.number().min(0).max(10000).required(),
    image: Joi.object({
        size: Joi.number()
            .max(2 * 1024 * 1024)
            .message({ "number.max": "file must be less than 2mb" }),
        mimetype: Joi.string().valid(
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/svg",
            "image/webp"
        ),
    }),
});

// get all product
exports.fetchProduct = async (req, res, next) => {
    try {
        let sort = req.query.sort || "dateDesc";
        let priceFrom = parseFloat(req.query.priceFrom) || 0;
        let priceTo = parseFloat(req.query.priceTo || 9999999)

        let sortBy = {createdAt:-1};

        if (sort =="priceAsc"){
            sortBy = {price:1};
        } else if(sort=="priceDesc"){
            sortBy = {price:-1}
        } else if(sort =="titleAsc"){
            sortBy={title:1}
        }else if(sort=="titleDesc"){
            sortBy ={title:-1}
        }



        const product = await Products.find({
            title: new RegExp(req.query.search, "i"),
            $and:[{price:{$gte:priceFrom}},{price:{$lte:priceTo}}]
        }).sort(sortBy);

        // .populate('createdBy');
        if (product.length == 0) {
            return res.status(200).send({ message: "No Product" });
        }
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
};

// insert new product
exports.storeProduct = async (req, res, next) => {
    // joi validation input
    try {
        await productSchema.validateAsync(
            { ...req.body, ...req.files },
            { allowUnknown: true, abortEarly: false }
        );
    } catch (err) {
        console.log("joi validation catch");
        return joiValidationUtils(res, err);
    }

    try {
        let imagePath = null;
        // Check if an image file is included
        if (req.files?.image) {
            let rootPath = path.resolve(); // Get root path
            let fileName =
                Date.now() + Math.random().toString(36).substring(2, 10); // Generate unique filename
            imagePath = path.join(
                "/",
                "uploads",
                `${fileName}-${req.files.image.name}`
            ); // Create image path
            console.log(imagePath);

            const filePath = path.join(rootPath, imagePath); // Create file path
            await req.files.image.mv(filePath); // Move uploaded image to file path

            // Upload image to Cloudinary
            const cloudinary_response = await uploadOnCloudinary(filePath);

            fs.unlinkSync(filePath); // Delete temporary file
            imagePath = cloudinary_response.secure_url; // Set image path to Cloudinary URL

            console.log(cloudinary_response);
        }

        console.log(2);

        const product = await Products.create({
            ...req.body,
            createdBy: req.user._id,
            image: imagePath,
        });
        console.log(3);

        return res.status(200).send(product);
    } catch (error) {
        console.log("insert catch");
        next(error);
    }
};

// update product
exports.updateProduct = async (req, res, next) => {
    console.log(req.params._id);
    let matched = await Products.findById(req.params._id);
    if (!matched) {
        return res.status(404).send({ message: "Product Not found" });
    }

    try {
        const value = await productSchema.validateAsync(req.body, {
            abortEarly: false,
        });
    } catch (err) {
        console.log("entered in update product joi validation catch");
        return joiValidationUtils(res, err);
    }

    try {
        const product_id = req.params._id;
        console.log(await Products.findById(product_id));
        const update_data = await Products.findByIdAndUpdate(
            product_id,
            req.body,
            { new: true }
        );
        console.log(update_data);
        if (!update_data) {
            return res.status(400).send({ message: "invalid product" });
        }
        return res.send(update_data);
    } catch (err) {
        next(err);
    }
};

// delete product
exports.deleteProduct = async (req, res, next) => {
    const product_id = req.params.id;
    try {
        const deleted_product = await Products.findByIdAndDelete(product_id);
        if (!deleted_product) {
            return res.status(400).send({ message: "Prodcut Not Found" });
        }
        // return res.status(204).send({message:"Successfully deleted. Deleted product:"})
        return res
            .status(200)
            .send({ message: "Successfully deleted.", deleted_product });
    } catch (error) {
        console.log("delete error", error);
        res.status(500).send({ message: "internal server error" });
    }
};
