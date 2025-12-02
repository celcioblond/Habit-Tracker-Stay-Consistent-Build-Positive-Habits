import moongose from "mongoose";

export const connectDb = async() => {
  try {
    const dbURI = process.env.MONGODB_URI;
    moongose.connect(dbURI);
    console.log("MongoDB conectado correctamente");
  } catch(error) {
    console.log(`Error al conectar con MongoDB: ${error}`);
    process.exit(1);
  }
}

