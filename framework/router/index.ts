import { DataRoutes } from "./data";

const express = require('express');
const router = express();

router.use(express.json())
DataRoutes(router)

export default router