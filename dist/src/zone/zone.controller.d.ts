import { ZoneDto } from './dto/zone.dto';
import { ZoneService } from './zone.service';
export declare class ZoneController {
    private readonly zoneService;
    constructor(zoneService: ZoneService);
    create(createZoneDto: ZoneDto): import(".prisma/client").Prisma.Prisma__ZoneClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: string;
        description: string;
        title: string;
        img: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: string;
        description: string;
        title: string;
        img: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ZoneClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: string;
        description: string;
        title: string;
        img: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateZoneDto: ZoneDto): import(".prisma/client").Prisma.Prisma__ZoneClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: string;
        description: string;
        title: string;
        img: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ZoneClient<{
        price: string;
        description: string;
        title: string;
        img: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
