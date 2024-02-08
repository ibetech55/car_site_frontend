/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";


interface IProps<T> {
  errorString?: string[];
  errorObject?:  T;
  action: () => void;
  time?: number;
}
const useClearError = <T>({
  errorString,
  errorObject,
  action,
  time = 5000,
}: IProps<T>) => {
  useEffect(() => {
    if (errorObject && Object.keys(errorObject).length > 0 || (errorString && errorString?.length > 0)) {
      setTimeout(() => {
        action();
      }, time);
    }
  }, [errorObject, errorString]);
};

export default useClearError;
