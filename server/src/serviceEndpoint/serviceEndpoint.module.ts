import { Module } from "@nestjs/common";
import { ServiceEndpointModuleBase } from "./base/serviceEndpoint.module.base";
import { ServiceEndpointService } from "./serviceEndpoint.service";
import { ServiceEndpointController } from "./serviceEndpoint.controller";
import { ServiceEndpointResolver } from "./serviceEndpoint.resolver";

@Module({
  imports: [ServiceEndpointModuleBase],
  controllers: [ServiceEndpointController],
  providers: [ServiceEndpointService, ServiceEndpointResolver],
  exports: [ServiceEndpointService],
})
export class ServiceEndpointModule {}
