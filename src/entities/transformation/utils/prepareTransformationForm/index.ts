import { Transformations, TransformationsForm } from '../../types';

/** Util for mapping of transformations data from backend to appropriate form value type  */
export const prepareTransformationForm = (data: Transformations): TransformationsForm => {
  return data.reduce((prev, curr) => {
    return { ...prev, [curr.type]: curr.filters };
  }, {});
};
