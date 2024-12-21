import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity, View, TextStyle, TextInput } from 'react-native';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { VocaStackParamList } from '../../navigations/stack/VocaStackNavigator';
import { MainDrawerParamList } from '../../navigations/drawer/MainDrawerNavigator';
import { colors, getFontStyle, spacing, VocaNavigations } from '../../constants';
import SearchBar from '../../components/searchbar/SearchBar';
import FAB from '../../components/common/FAB';
import { CompoundOption } from '../../components/Modal';
import Margin from '../../components/Margin';


type Navigation = CompositeNavigationProp<
  StackNavigationProp<VocaStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

function VocaScreen() {
  const navigation = useNavigation<Navigation>();
  const [searchText, setSearchText] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newVocaName, setNewVocaName] = useState('');

  const [vocaList, setVocaList] = useState([
    { id: 1, title: '초등단어' },
    { id: 2, title: '중등단어' },
    { id: 3, title: '고등단어' },
    { id: 4, title: '중등단어' },
  ]);

  const navigateToVocaContent = (vocaIndex: number) => {
    navigation.navigate(VocaNavigations.VOCACONTENT, { vocaIndex });
  };

  const handleAddVoca = () => {
    if (!newVocaName.trim()) return;
    
    const newVoca = {
      id: vocaList.length + 1,
      title: newVocaName.trim(),
    };
    
    setVocaList([...vocaList, newVoca]);
    setIsModalVisible(false);
    setNewVocaName('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Margin size={'M24'} />
      <View style={styles.header}>
        <Text style={styles.title}>단어장</Text>
        <Text style={styles.subtitle}>학습할 단어장을 선택하세요</Text>
      </View>
      <Margin size={'M16'} />
      <View style={styles.searchContainer}>
        <SearchBar 
          setSearchText={setSearchText} 
          searchText={searchText} 
          initialSuggestions={['React', 'React Native', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Django', 'Spring']} 
        />
      </View>
      
      <FlatList
        data={vocaList}
        renderItem={({ item }: { item: { id: number; title: string } }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigateToVocaContent(item.id)}>
            <View style={styles.listContent}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listCount}>32개의 단어</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      
      <FAB onPress={() => setIsModalVisible(true)} />

      <CompoundOption
        isVisible={isModalVisible}
        hideOption={() => setIsModalVisible(false)}
        animationType="slide">
        <CompoundOption.Background>
          <CompoundOption.Container style={styles.modalContainer}>
            <CompoundOption.Title>새 단어장 만들기</CompoundOption.Title>
            <Margin size={'M12'} />
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="단어장 이름을 입력하세요"
                value={newVocaName}
                onChangeText={setNewVocaName}
                autoFocus
                style={styles.input}
              />
            </View>
            <Margin size={'M12'} />
            <CompoundOption.Divider />
            
            <View style={styles.buttonContainer}>
              <CompoundOption.Button 
                onPress={() => setIsModalVisible(false)}>
                취소
              </CompoundOption.Button>
              <CompoundOption.Button 
                onPress={handleAddVoca}>
                추가
              </CompoundOption.Button>
            </View>
          </CompoundOption.Container>
        </CompoundOption.Background>
      </CompoundOption>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    paddingHorizontal: spacing.M20,
    backgroundColor: colors.WHITE,

  },
  title: {
    color: colors.BLACK,
    ...getFontStyle('title', 'large', 'bold'),
    marginBottom: spacing.M4,
  } as TextStyle,
  subtitle: {
    color: colors.BLACK,
    ...getFontStyle('body', 'medium', 'regular'),
  } as TextStyle,
  searchContainer: {
    paddingHorizontal: spacing.M20,
    width: '100%',
    alignItems: 'center',
    marginBottom: spacing.M16,
  },
  listContainer: {
    paddingHorizontal: spacing.M20,
  },
  listItem: {
    paddingVertical: spacing.M16,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY,
  },
  listContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listTitle: {
    color: colors.BLACK,
    ...getFontStyle('body', 'medium', 'bold'),
  } as TextStyle,
  listCount: {
    color: colors.GRAY,
    ...getFontStyle('body', 'small', 'regular'),
  } as TextStyle,
  modalContainer: {
    backgroundColor: colors.WHITE,
    paddingTop: spacing.M16,
  },
  inputContainer: {
    paddingHorizontal: spacing.M16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.GRAY,
    borderRadius: 8,
    padding: spacing.M12,
    fontSize: 16,
    color: colors.BLACK,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.M16,
  },
});

export default VocaScreen;
