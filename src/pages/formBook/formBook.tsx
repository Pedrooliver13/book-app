// Packages
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

// Components
import { Header, Input, Button } from 'components/core';

// services
import { createNewBook } from 'services/books';

// Styles
import * as Styled from './styles';

const formBookValidationSchema = zod.object({
  title: zod.string(),
  author: zod.string(),
  image: zod.string()
});

interface FormValues {
  title: string;
  author: string;
  image: string;
}

export const FormBook = (): ReactElement => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formBookValidationSchema),
    defaultValues: {
      title: '',
      author: '',
      image: ''
    }
  });

  const handleCreateNewBook = async (data: FormValues): Promise<void> => {
    await createNewBook(data);
    navigate('/');
  };

  return (
    <>
      <Header isHiddenCreateButton />

      <Styled.FormBookContainer onSubmit={handleSubmit(handleCreateNewBook)} action="/">
        <Input
          {...register('title')}
          label='Título do livro'
          name='title'
          placeholder="Insira um título"
          required
        />
        <Input
          {...register('author')}
          id='author'
          label='Nome do autor(a)'
          name='author'
          placeholder="Insira o nome do autor(a)"
          required
        />
        <Input
          {...register('image')}
          id='image'
          name='image'
          label='URL da imagem'
          placeholder="Insira a URL de uma imagem"
        />

        <div className="footer">
          <Button type='submit'>Salvar</Button>
        </div>
      </Styled.FormBookContainer>
    </>
  );
};
