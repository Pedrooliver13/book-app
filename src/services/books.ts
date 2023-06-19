export interface BookType {
  id: string;
  title: string;
  author: string;
  image: string | undefined;
  description: string;
}

export interface CreateNewBookParams {
  title: string;
  author: string;
  image?: string;
}

export const getBooksList = async (): Promise<BookType[]> => {
  const response = await fetch('http://localhost:3000/books');
  return response.json();
};

export const getBookById = async (id: string): Promise<BookType> => {
  const response = await fetch(`http://localhost:3000/books/${id}`);
  return response.json();
};

export const createNewBook = async (params: CreateNewBookParams): Promise<void> => {
  await fetch(`http://localhost:3000/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
};

export const deleteBookById = async (id: string): Promise<void> => {
  await fetch(`http://localhost:3000/books/${id}`, {
    method: 'DELETE',
  });
};
