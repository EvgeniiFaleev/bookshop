import { CommonTemplate } from '@templates/CommonTemplate';
import { Checkout } from '@cart';
import { useForm } from 'react-hook-form';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/root-reducer';
import { cartActions } from '@cart';
import { IOrderInfo } from '@cart/modules/actions';
import { FC, useEffect } from 'react';
import { OrderInfo } from '@cart/ui/molecules/OrderSuccess';

export const CheckoutPage:FC = () => {
  const {
    register, handleSubmit, errors,
  } = useForm();
  const cartBooks = useSelector((state: RootState) => state.cart.books);
 const  totalPrice = cartBooks?.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const dispatch = useDispatch();

  const { orderId, orderError } = useSelector((state: RootState) => ({
    orderId: state.cart.orderId,
    orderError: state.cart.orderError,
  }), shallowEqual);

  const onSubmit = (data:IOrderInfo) => {
    dispatch(cartActions.makeOrder(data));
  };
  useEffect(() => () => {
    dispatch(cartActions.setOrderError(false));
    dispatch(cartActions.setOrderId(null));
  }, []);

  if (orderError) {
    return (
      <CommonTemplate>
        <OrderInfo orderId={null} />
      </CommonTemplate>
    );
  }
  return (
    <CommonTemplate>
      {orderId ? (
        <OrderInfo orderId={orderId} />
      ) : <Checkout totalPrice={totalPrice} register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} />}
    </CommonTemplate>
  );
};
