export interface IProducts {
  id?: string;
  productid: string;
  productname: string;
  productprice: number;
  productimage: string;
  productsize: string;
  productcondition: string;
  productcategory: string;
}

export interface ICategories {
  categoryid: number;
  category: string;
}

// CHANGE THIS MAYBE:
export interface ICartProps {
  cartItems: string[];
  addToCart: (productId: string) => void;
}
