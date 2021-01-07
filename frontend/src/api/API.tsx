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

export const booksAPI = {
  url: 'http://localhost:5000/books/',
  async getBooksChart(): Promise<IChart> {
    try {
      const res: Response = await fetch(`${this.url}chart`);
      return res.json();
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
        credentials: 'include',
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
};
