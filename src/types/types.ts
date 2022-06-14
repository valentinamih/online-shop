export type CategoryType = {
  name: string;
  code: string;
};

export type ProductType = {
  categoryCode: string;
  categoryName: string;
  colorCode: string;
  description: string;
  id: number;
  listImages: Array<ImageType>;
  cardImages: Array<ImageType>;
  name: string;
  price: 0;
  propertiesValue: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
};

export type ImageType = {
  type: string
  name: string
}
export type ColorType = {
  id: number;
  name: string;
  code: string;
};

export type CartItem = {
  product: ProductType;
  count: number;
};

export type Filter = {
  filter: (product: ProductType) => {}
  condition?: string
}
