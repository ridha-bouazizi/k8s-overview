import { ServiceEndpointWhereInput } from "./ServiceEndpointWhereInput";
import { ServiceEndpointOrderByInput } from "./ServiceEndpointOrderByInput";

export type ServiceEndpointFindManyArgs = {
  where?: ServiceEndpointWhereInput;
  orderBy?: Array<ServiceEndpointOrderByInput>;
  skip?: number;
  take?: number;
};
