import React from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default function WebView({ navigation }) {
  const repository = navigation.getParam('repository');

  return <Browser source={{ uri: repository.html_url }} />;
}

WebView.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

WebView.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});
