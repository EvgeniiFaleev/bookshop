import { CommonTemplate } from '@templates';
import { userActions, WishList } from '@user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { useEffect } from 'react';

export const WishListPage = () => {
  const wishList = useSelector((state: RootState) => state.user.wishList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getWishList());
  }, []);
  return (

    <CommonTemplate>
      <WishList books={wishList} />
    </CommonTemplate>
  );
};
