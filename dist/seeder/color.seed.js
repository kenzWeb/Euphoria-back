"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const color_data_1 = require("./color.data");
const prisma = new client_1.PrismaClient();
async function zone() {
    console.log('Starting data upload...');
    try {
        const result = await prisma.color.createMany({ data: color_data_1.COLORS });
        console.log(`Successfully added ${result.count} games to the database.`);
    }
    catch (e) {
        console.error('Error during data upload:', e);
        process.exit(1);
    }
    finally {
        await prisma.$disconnect();
        console.log('Disconnected from database.');
    }
}
zone();
//# sourceMappingURL=color.seed.js.map