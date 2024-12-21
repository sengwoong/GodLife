import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextStyle, TouchableOpacity, FlatList, View, TextInput } from 'react-native'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { colors, getFontStyle, PlayListNavigations, spacing } from '../../constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '../../navigations/drawer/MainDrawerNavigator';
import { PlayListStackParamList } from '../../navigations/stack/PlayListStackNavigator';
import SearchBar from '../../components/searchbar/SearchBar';
import Margin from '../../components/Margin';
import FAB from '../../components/common/FAB';
import { CompoundOption } from '../../components/Modal';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<PlayListStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

function PlayListScreen() {
  const navigation = useNavigation<Navigation>();

  const navigateToPlayListContent = (playListIndex: number) => {
    navigation.navigate(PlayListNavigations.PLAYLISTCONTENT, { playListIndex });
  };

  const playListList = [
    { id: 1, title: 'asmr' },
    { id: 2, title: '힙합' },
    { id: 3, title: '고등금지곡' },
    { id: 4, title: '일렉트로닉' },

  ];

  const [searchText, setSearchText] = useState<string>(''); // 검색어 상태
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const handleAddPlaylist = () => {
    // TODO: 실제 플레이리스트 추가 로직 구현
    setIsModalVisible(false);
    setNewPlaylistName('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Margin size={'M24'} />
      <View style={styles.header}>
        <Text style={styles.title}>플레이리스트</Text>
        <Text style={styles.subtitle}>플레이리스트를 선택하세요</Text>
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
        data={playListList}
        renderItem={({ item }: { item: { id: number; title: string } }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigateToPlayListContent(item.id)}>
            <View style={styles.listContent}>
              <Text style={styles.listTitle}>{item.title}</Text>
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
            <CompoundOption.Title>새 플레이리스트 만들기</CompoundOption.Title>
            <Margin size={'M12'} />
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="플레이리스트 이름을 입력하세요"
                value={newPlaylistName}
                onChangeText={setNewPlaylistName}
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
                onPress={handleAddPlaylist}>
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
    paddingTop: spacing.M24,
    paddingBottom: spacing.M16,
    backgroundColor: colors.WHITE,

  },
  title: {
    color: colors.BLACK,
    ...getFontStyle('title', 'large', 'bold'),
    marginBottom: spacing.M4,
  }as TextStyle,
  subtitle: {
    color: colors.BLACK,
    ...getFontStyle('body', 'medium', 'regular'),
  }as TextStyle,
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
  }as TextStyle,
  listCount: {  
    color: colors.GRAY,
    ...getFontStyle('body', 'small', 'regular'),
  }as TextStyle,
  searchContainer: {
    paddingHorizontal: spacing.M20,
    width: '100%',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.WHITE,
  },
  inputContainer: {
    paddingHorizontal: spacing.M16,
    paddingBottom: spacing.M16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.GRAY,
    borderRadius: 8,
    color: colors.BLACK,
    ...getFontStyle('body', 'medium', 'regular'),
  }as TextStyle,
  buttonContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.GRAY,
  },
});

export default PlayListScreen;