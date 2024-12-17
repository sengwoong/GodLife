import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { colors, spacing } from '../../constants';
import Avatar from '../../components/common/Avatar';
import CustomButton from '../../components/CustomButton';
import ItemCard from '../../components/ItemCard';
import Pagination from '../../components/Pagination';

const MOCK_USER = {
  id: '1',
  username: '영어마스터',
  avatar: 'https://via.placeholder.com/150/92c952',
  level: '고급',
  followers: 245,
  following: 123,
  posts: 15,
  description: '매일 영어 공부중! 🌟\n함께 공부해요~',
};

const CATEGORY_BUTTONS = [
  { label: '전체보기', id: 'all' },
  { label: '단어장', id: 'vocabulary' },
  { label: '재생목록', id: 'playlist' },
  { label: '일정표', id: 'schedule' },
];

export const FeedAvatarScreen = () => {
  const [activeCategory, setActiveCategory] = useState('전체보기');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 
  const totalItems = 24;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Avatar
            uri={MOCK_USER.avatar}
            size={80}
            showBadge={true}
            username={MOCK_USER.username}
          />
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{MOCK_USER.posts}</Text>
              <Text style={styles.statLabel}>게시물</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{MOCK_USER.followers}</Text>
              <Text style={styles.statLabel}>팔로워</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{MOCK_USER.following}</Text>
              <Text style={styles.statLabel}>팔로잉</Text>
            </View>
          </View>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.username}>{MOCK_USER.username}</Text>
          <Text style={styles.level}>Level: {MOCK_USER.level}</Text>
          <Text style={styles.description}>{MOCK_USER.description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>팔로우</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageButtonText}>메시지</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          {CATEGORY_BUTTONS.map((button) => (
            <CustomButton
              key={button.id}
              label={button.label}
              color={activeCategory === button.label ? 'BLACK' : 'WHITE'}
              onPress={() => setActiveCategory(button.label)}
            />
          ))}
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>
            {activeCategory === '전체보기' ? '최근 활동' : activeCategory}
          </Text>
          
          <View style={styles.contentList}>
            <View style={styles.itemGrid}>
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </View>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              textColor={'BLACK'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    padding: spacing.M16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHT_GRAY,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: spacing.M16,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  statLabel: {
    fontSize: 12,
    color: colors.GRAY,
  },
  profileInfo: {
    padding: spacing.M16,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginBottom: spacing.M4,
  },
  level: {
    fontSize: 14,
    color: colors.GREEN,
    marginBottom: spacing.M8,
  },
  description: {
    fontSize: 14,
    color: colors.BLACK,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: spacing.M16,
    justifyContent: 'space-between',
  },
  followButton: {
    flex: 1,
    backgroundColor: colors.GREEN,
    padding: spacing.M12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: spacing.M8,
  },
  followButtonText: {
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  messageButton: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: spacing.M12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: spacing.M8,
    borderWidth: 1,
    borderColor: colors.GREEN,
  },
  messageButtonText: {
    color: colors.GREEN,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '24%',
    paddingVertical: spacing.M16,
    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHT_GRAY,
  },
  contentContainer: {
    padding: spacing.M16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginBottom: spacing.M16,
  },
  itemGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: spacing.M16,
  },
  contentList: {
    marginTop: spacing.M16,
  },
}); 