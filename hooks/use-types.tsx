import { useQuery } from "@apollo/client";
import { GET_TYPES } from "../graphql/pokemon-queries";
const useTypes = () => {
  const { loading: loadingTypes, data } = useQuery(GET_TYPES);

  const types = data.types.results as Type;
  console.log(types);
};

export default useTypes;
