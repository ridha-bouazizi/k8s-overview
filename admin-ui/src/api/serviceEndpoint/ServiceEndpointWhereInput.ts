import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ServiceEndpointWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  url?: StringNullableFilter;
};
