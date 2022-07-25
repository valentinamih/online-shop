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

export interface filterProductsRequestType {
  categoryCode: string | null
  priceFrom: number
  priceTo: number
  colorCode: string | null
  productName: string
  pageNumber: number
  pageSize: number
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

export interface PageableResponse {
  "content": [ProductType],
  "empty": boolean,
  "first": boolean,
  "last": boolean,
  "number": number,
  "numberOfElements": number,
  "pageable": {
    "offset": number,
    "pageNumber": number,
    "pageSize": number,
    "paged": boolean,
    "sort": {
      "empty": boolean,
      "sorted": boolean,
      "unsorted": boolean
    },
    "unpaged": boolean
  },
  "size": number,
  "sort": {
    "empty": boolean,
    "sorted": boolean,
    "unsorted": boolean
  },
  "totalElements": number,
  "totalPages": number
}