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
        // headers: {
        //   'Content-Type': 'multipart/form-data; boundary=---------------------------974767299852498929531610575',
        // },
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
};
