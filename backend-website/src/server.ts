import app from "./app.js";
import prisma from "./db/index.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        //test database connection
        await prisma.$connect();
        console.log("Connected to the database successfully.");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }   catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1);
    }
}   

startServer();
