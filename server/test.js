import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

try {
  const result = await cloudinary.uploader.upload(
    "D:/SD 2 Project (Home Harvest)/client/src/assets/product_images/vegetables/carrot_2.jpg"
  );

  console.log(result.secure_url);

} catch (error) {
  console.dir(error, { depth: null });
}