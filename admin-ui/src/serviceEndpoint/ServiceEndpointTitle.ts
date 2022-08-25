import { ServiceEndpoint as TServiceEndpoint } from "../api/serviceEndpoint/ServiceEndpoint";

export const SERVICEENDPOINT_TITLE_FIELD = "name";

export const ServiceEndpointTitle = (record: TServiceEndpoint): string => {
  return record.name || record.id;
};
