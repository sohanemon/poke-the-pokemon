import { useQuery } from "@apollo/client";
import { GET_TYPES } from "../graphql/pokemon-queries";
const useTypes = (currentType: [Type]) => {
  const { loading, data } = useQuery(GET_TYPES);
  if (!loading) {
    const types = data?.types?.results as [Type];
    return performIntersection(currentType, types);
  }
};

export default useTypes;

function performIntersection(arr1: [Type], arr2: [Type]) {
  const newArr1 = arr1?.map((_) => _.type.name);
  const newArr2 = arr2?.map((_) => _.name);
  let result: string[] = [];
  newArr2?.map((_) => {
    if (newArr1?.indexOf(_) === -1) {
      result.push(_ as string);
    }
  });
  return result;
}
