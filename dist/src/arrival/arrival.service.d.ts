import { PrismaService } from 'src/prisma.service';
import { ArrivalDto } from './dto/arrival.dto';
export declare class ArrivalService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        img: string;
    }[]>;
    getById(id: string): import(".prisma/client").Prisma.Prisma__ArrivalClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        img: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(ArrivalDto: ArrivalDto): import(".prisma/client").Prisma.Prisma__ArrivalClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        img: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, ArrivalDto: ArrivalDto): import(".prisma/client").Prisma.Prisma__ArrivalClient<{
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
