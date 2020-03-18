import React, { useContext } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SearchResultList from './searchResultList';
import { SearchContext } from '../../modules/context/SearchContext';
import CustomizedSearchBar from './CustomizedSearchBar';
import { ksStyle } from '../../styles/basic/ksBasic';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    maxHeight: '35%',
    width: '100%',
    flexDirection: 'row-reverse',
  },
  content: {
    width: '80%',
    marginRight: 10,
    marginTop: 10,
    borderRadius: 3,

    backgroundColor: ksStyle.colors.primaryColorMediumLight,
    ...ksStyle.shadow,
  },
});
function CustomizedSearchBarOverlay() {
  const { isSearchActive, setSearchActive } = useContext(SearchContext);

  return (
    <Modal animationType="fade" transparent visible={isSearchActive}>
      <TouchableOpacity
        onPress={() => setSearchActive(false)}
        activeOpacity={1}
        style={styles.background}
      >
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.content}>
              <CustomizedSearchBar />
              <SearchResultList />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default CustomizedSearchBarOverlay;
