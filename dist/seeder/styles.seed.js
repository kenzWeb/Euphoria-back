"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const styles_data_1 = require("./styles.data");
const prisma = new client_1.PrismaClient();
async function zone() {
    console.log('Starting data upload...');
    try {
        const result = await prisma.dressStyle.createMany({ data: styles_data_1.STYLES });
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
//# sourceMappingURL=styles.seed.js.map