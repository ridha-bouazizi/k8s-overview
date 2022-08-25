import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ServiceEndpointServiceBase } from "./base/serviceEndpoint.service.base";

@Injectable()
export class ServiceEndpointService extends ServiceEndpointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
