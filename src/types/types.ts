export interface CategoryType {
  name: string
  code: string
}

export interface ProductType {
  categoryCode: string
  categoryName: string
  colorCode: string
  description: string
  id: number
  listImages: Array<ImageType>
  cardImages: Array<ImageType>
  name: string
  price: 0
  propertiesValue: {
    additionalProp1: string
    additionalProp2: string
    additionalProp3: string
  }
}

export interface ImageType {
  type: string
  name: string
}
export interface ColorType {
  name: string
  code: string
}

export interface CartItem {
  product: ProductType
  count: number
};

export interface Filter {
  filter: (product: ProductType) => {}
  condition?: string
}
