import { CommonTemplate } from '@templates/CommonTemplate/CommonTemplate';
import { IBook } from '@api/API';
import { FC, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { booksActions } from '@books/modules';
import { RootState } from '@store/root-reducer';
import { useParams } from 'react-router-dom';

export const BookPage:FC = () => {
  const book = useSelector((state:RootState) => state.books.book, shallowEqual);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    dispatch(booksActions.getBook('1'));
  });

  return (
    <CommonTemplate>
      {/* <Book */}
      {/*  bookInfo={book} */}
      {/* /> */}
    </CommonTemplate>
  );
};
