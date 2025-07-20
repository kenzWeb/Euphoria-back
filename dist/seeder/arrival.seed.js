"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const ARRIVAL_data_1 = require("./ARRIVAL.data");
const prisma = new client_1.PrismaClient();
async function arrival() {
    console.log('Starting data upload...');
    try {
        const result = await prisma.arrival.createMany({ data: ARRIVAL_data_1.ARRIVAL });
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
arrival();
//# sourceMappingURL=arrival.seed.js.map