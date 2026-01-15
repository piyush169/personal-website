import  express, {type Application} from "express";
import cors from "cors";
import blogRoutes from "./routes/blogs.js";
import projectRoutes from "./routes/projects.js";

const app: Application = express();

app.use(cors());
app.use(express.json());

//health and versionig
app.get("/health", (req, res) => {
    res.status(200).json({status: "UP"});
    }
);
app.get("/version", (req, res) => {
    res.status(200).json({version: "1.0.0"});
    }
);

//routes
app.use("/blogs", blogRoutes);
app.use("/projects", projectRoutes);


export default app;


