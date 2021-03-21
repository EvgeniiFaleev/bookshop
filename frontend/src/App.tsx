import React, { Component, Suspense } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.module.scss';
import { DispatchType, RootState } from '@store/root-reducer';
import { userAuthActions } from '@authentication';
import { Preloader } from '@ui/atoms/Preloader';
import { Routes } from './Routes';

const MapStateToProps = (state: RootState) => (
  {
    isAuth: state.auth.user.isAuth,
  });

const mapDispatchToProps = (dispatch: DispatchType) => ({
  me: () => dispatch(userAuthActions.me()),
});
const connector = connect(MapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

class App extends Component<AppProps> {
  constructor(props: AppProps, public me:AppProps['me']) {
    super(props);
    this.me = props.me;
  }

  componentDidMount(): void {
    this.me();
  }

  componentDidUpdate(): void {
    this.me();
  }

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    );
  }
}
export const ConnectedApp = connector(App);
