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

export interface IUser {
  id?: string;
  userid?: number;
  username: string;
  useremail: string;
  userpassword: string;
  useraddress: string;
  userzipcode: string;
  usercity: string;
}

export interface ICategories {
  categoryid: number;
  category: string;
}

export interface ICartProps {
  cartItems: IProducts[];
  addToCart: (product: IProducts) => void;
}
