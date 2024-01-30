export interface GetModelsByMakeIdDto {
  id: string;
  modelName: string;
  makeId: string;
  active: boolean;
  makes: {
    makeName: string;
  };
}
