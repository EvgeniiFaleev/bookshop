import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import './App.module.scss';
import { DispatchType, RootState } from '@store/root-reducer';
import { userAuthActions } from '@authentication/modules/user';
import { connect, ConnectedProps } from 'react-redux';

const MapStateToProps = (state: RootState) => (
  {
    isAuth: state.user.isAuth,
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
        <Routes />
      </BrowserRouter>
    );
  }
}

export default connector(App);
