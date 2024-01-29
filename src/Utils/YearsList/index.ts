interface IData {
  value: string;
  label: string;
}
export const yearsList = (): IData[] => {
  const yrs: IData[] = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1950; i--) {
    yrs.push({ value: i.toString(), label: i.toString() });
  }
  return yrs;
};
