"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const indexData_1 = require("./scripts/indexData");
const config_1 = require("../config");
const app = (0, express_1.default)();
const port = config_1.DefaultPort || 3000;
const corsOptions = {
    origin: config_1.ClientUrl,
    methods: ["GET", "POST"],
};
app.use((0, cors_1.default)(corsOptions));
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, indexData_1.deleteAllIndexes)();
        yield (0, indexData_1.createIndexes)();
        yield (0, indexData_1.indexData)();
    });
})();
app.use("/api/v1", routes_1.default);
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
