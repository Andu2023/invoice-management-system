export interface SideNavItem {
  title: string;
  link: string;
}

export enum UserType {
  ADMIN,
  USER,
}

export interface User {
  firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

export interface Book {
  id: number;
  title: string;
  category: string;
  subCategory: string;
  price: number;
  available: boolean;
  count?: number;
  author: string;
}

export interface CategoryBooks {
  category: string;
  subCategory: string;
  books: Book[];
}

export interface Order {
  id: number;
  userid: number;
  name: string;
  bookid: number;
  booktitle: string;
  orderedon: string;
  returned: boolean;
}

export interface Category {
  name: string;
  children?: Category[];
}
