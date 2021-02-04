import {IUserInfo} from '@authentication/modules/user/actions';

export interface IBook {
  categories: Array<string>,
  _id: string,
  author: string,
  title: string,
  price: number,
  picture: string,
  description: string,

}

export interface IBooksList {
  [index: string]: Array<IBook>
}

export interface IChart {
  categories : IBooksList,
  topLists : IBooksList
}

export interface IAPIResponse {
  resultCode: number,
}
export interface IResponseMe extends IAPIResponse{

  userInfo: IUserInfo
}

export interface IResponseWishList extends IAPIResponse{

  wishList:Array<IBook>
}
// [
//   {
//     "_id": "6016d17f8a6563282c694c2d",
//     "orderList": [
//       {
//         "_id": "6016d17f8a6563282c694c2e",
//         "bookId": "5ff06635ac3bb94a001420a9",
//         "author": "Jack London",
//         "title": "White Fang",
//         "price": 500,
//         "count": 1
//       },

export interface IUserOrderItem {
  bookId: string,
  author: string,
  picture:string,
  title: string,
  price: number,
  quantity: number
}
export interface IUserOrder {
  _id: string,
  orderList: Array<IUserOrderItem>
}
export interface IUserOrdersResponse extends IAPIResponse{
  orders: Array<IUserOrder>
}
export const booksAPI = {
  url: 'http://localhost:5000/books/',
  async getBook(id:string):Promise<IBook | never> {
    try {
      const res: Response = await fetch(`${this.url}item/?id=${id}`);
      const { book } = await res.json() as {book: IBook};
      return book;
    } catch (e) {
      throw new Error(e);
    }
  },
  async getBooksChart(): Promise<IChart> {
    try {
      const res: Response = await fetch(`${this.url}chart`);
      return res.json();
    } catch (e) {
      throw new Error(e);
    }
  },
  async addBook(data:FormData): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}add`, {
        method: 'POST',
        credentials: 'include',
        body: data,
      });
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
  async getBooksByCategory(category: string): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}category/?cat=${category}`);
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
  async updateCart(cart: string): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}update_cart`, {
        method: 'POST',
        credentials: 'include',
        body: cart,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
  async order(orderInfo: string): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}buy`, {
        method: 'POST',
        credentials: 'include',
        body: orderInfo,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },

};

export const userAPI = {
  url: 'http://localhost:5000/user/',
  async getWishList(): Promise<IResponseWishList | void> {
    try {
      const res: Response = await fetch(`${this.url}wishlist`, {
        method: 'GET',
        credentials: 'include',
      });
      if (res.status !== 200) return undefined;
      return await res.json();
    } catch (e) {
      throw new Error(e);
    }
  },
  async getOrders(): Promise<IUserOrdersResponse | void> {
    try {
      const res: Response = await fetch(`${this.url}orders`, {
        method: 'GET',
        credentials: 'include',
      });
      if (res.status !== 200) return undefined;
      return await res.json();
    } catch (e) {
      throw new Error(e);
    }
  },
  async deleteItemWishList(bookId: string): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}wishlist`, {
        method: 'DELETE',
        credentials: 'include',
        body: JSON.stringify({
          bookId,
        }),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
  async addItemWishList(bookId: string): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}wishlist`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          bookId,
        }),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
};

export const authAPI = {
  url: 'http://localhost:5000/',
  async adminLogin(data: FormData): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}admin/login`, {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
        body: data,
      });
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
  async adminLogout(): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}admin/logout`, {
        method: 'DELETE',
        credentials: 'include',
      });
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
  async userLogin(data: FormData): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },
  async signUp(data: FormData): Promise<Response> {
    try {
      const res: Response = await fetch(`${this.url}auth/register`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      return res;
    } catch (e) {
      throw new Error(e);
    }
  },

  async me(): Promise<IResponseMe | void> {
    try {
      const res: Response = await fetch(`${this.url}auth/me`, {
        method: 'POST',
        credentials: 'include',
      });
      return await res.json();
    } catch (e) {
      return console.log(e);
    }
  },
};
