import { useQuery } from "@apollo/client";
import { type } from "os";
import { GET_TYPES } from "../graphql/pokemon-queries";
const useTypes = (currentType: [Type]) => {
  const { loading: loadingTypes, data } = useQuery(GET_TYPES);

  const types = data?.types?.results as [Type];
  //   const newTypes = currentType?.map((fetched) =>
  //     types?.filter((prev) => fetched.type?.name !== prev?.name)
  //   );
  //   return Array.from(new Set(newTypes?.flat()));
};

export default useTypes;
