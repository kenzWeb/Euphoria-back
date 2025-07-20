"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const product_data_1 = require("./product.data");
const prisma = new client_1.PrismaClient();
async function seedProducts() {
    console.log('Начинается загрузка данных продуктов...');
    try {
        for (const productData of product_data_1.PRODUCTS) {
            await prisma.product.create({
                data: productData
            });
        }
        console.log('Данные продуктов успешно загружены');
    }
    catch (error) {
        console.error('Ошибка при загрузке данных продуктов:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
seedProducts();
//# sourceMappingURL=seed.js.map