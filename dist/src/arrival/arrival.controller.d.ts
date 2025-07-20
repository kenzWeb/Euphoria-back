import { ArrivalService } from './arrival.service';
import { ArrivalDto } from './dto/arrival.dto';
export declare class ArrivalController {
    private readonly arrivalService;
    constructor(arrivalService: ArrivalService);
    create(createArrivalDto: ArrivalDto): import(".prisma/client").Prisma.Prisma__ArrivalClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        img: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        img: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ArrivalClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        img: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateArrivalDto: ArrivalDto): import(".prisma/client").Prisma.Prisma__ArrivalClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        img: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ArrivalClient<{
        title: string;
        img: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
