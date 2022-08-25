import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServiceEndpointService } from "./serviceEndpoint.service";
import { ServiceEndpointControllerBase } from "./base/serviceEndpoint.controller.base";

@swagger.ApiTags("serviceEndpoints")
@common.Controller("serviceEndpoints")
export class ServiceEndpointController extends ServiceEndpointControllerBase {
  constructor(
    protected readonly service: ServiceEndpointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
