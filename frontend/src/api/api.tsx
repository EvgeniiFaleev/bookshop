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

export const API = {
  url: 'http://localhost:5000/',
  async getBooksChart(): Promise<IChart> {
    try {
      const res: Response = await fetch(`${this.url}books/chart`);
      return res.json();
    } catch (e) {
      throw new Error(e);
    }
  },
};
