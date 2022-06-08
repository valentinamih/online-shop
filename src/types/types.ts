export type CategoryType = {
  name: string;
  code: string;
};
export type ImagesType = {
  content: string;
  destination: string;
  type: string;
};
export type ProductType = {
  categoryCode: string;
  categoryName: string;
  colorCode: string;
  description: string;
  id: number;
  listImages: Array<ImagesType>;
  cardImages: Array<ImagesType>;
  name: string;
  price: 0;
  propertiesValue: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
};
export type ColorType = {
  id: number;
  name: string;
  code: string;
};

export type CartItem = {
  product: ProductType;
  count: number;
};
