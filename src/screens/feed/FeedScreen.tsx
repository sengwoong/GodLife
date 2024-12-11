import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ListRenderItemInfo } from 'react-native';

interface Post {
  id: string;
  userName: string;
  profileImage: string;
  postContent: string;
  postImage: string;
}

const data: Post[] = [
  {
    id: '1',
    userName: '홍길동',
    profileImage: 'https://placekitten.com/100/100', // 예시 이미지 URL
    postContent: '오늘은 좋은 날이에요! 😊',
    postImage: 'https://placekitten.com/600/400', // 예시 게시물 이미지 URL
  },
  {
    id: '2',
    userName: '김철수',
    profileImage: 'https://placekitten.com/101/101',
    postContent: 'React Native 피드 디자인 테스트중!',
    postImage: 'https://placekitten.com/600/401',
  },
  {
    id: '3',
    userName: '김철수',
    profileImage: 'https://placekitten.com/101/101',
    postContent: 'React Native 피드 디자인 테스트중!',
    postImage: 'https://placekitten.com/600/401',
  },
  {
    id: '4',
    userName: '김철수',
    profileImage: 'https://placekitten.com/101/101',
    postContent: 'React Native 피드 디자인 테스트중!',
    postImage: 'https://placekitten.com/600/401',
  },
  {
    id: '5',
    userName: '김철수',
    profileImage: 'https://placekitten.com/101/101',
    postContent: 'React Native 피드 디자인 테스트중!',
    postImage: 'https://placekitten.com/600/401',
  },
];

const FeedScreen: React.FC = () => {
  return (
    <View>
   

    <FlatList
      data={data}
      renderItem={({ item }: ListRenderItemInfo<Post>) => (
        <View style={styles.postCard}>
          <View style={styles.header}>
            <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
            <Text style={styles.userName}>{item.userName}</Text>
          </View>
          <Text style={styles.postContent}>{item.postContent}</Text>
          <Image source={{ uri: item.postImage }} style={styles.postImage} />
          <View style={styles.footer}>
            <TouchableOpacity style={styles.likeButton}>
              <Text style={styles.likeText}>👍 좋아요</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentButton}>
              <Text style={styles.commentText}>💬 댓글</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.feed}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    padding: 10,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postContent: {
    fontSize: 14,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 16,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    fontSize: 16,
  },
});

export default FeedScreen;
