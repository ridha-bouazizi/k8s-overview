import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ServiceEndpointResolverBase } from "./base/serviceEndpoint.resolver.base";
import { ServiceEndpoint } from "./base/ServiceEndpoint";
import { ServiceEndpointService } from "./serviceEndpoint.service";

@graphql.Resolver(() => ServiceEndpoint)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ServiceEndpointResolver extends ServiceEndpointResolverBase {
  constructor(
    protected readonly service: ServiceEndpointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
