/**
 * Login Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import Authenticate from './AuthenticateView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({

});

// Any actions to map to the component?
const mapDispatchToProps = {
  submit: UserActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
