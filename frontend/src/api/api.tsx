export interface IBook {

  categories: Array<string>,
  _id: string,
  author: string,
  title: string,
  price: number,
  picture: string,
  description: string,

}

export interface IChart {
  [index: string]: Array<IBook>
}

export const API = {
  url: 'http://localhost:5000/',
  async getBooksChart(): Promise<IChart> {
    const res: Response = await fetch(`${this.url}books/chart`);
    return res.json();
  },
};
