import React from 'react';
import { ScrollView, StyleSheet, View, Pressable, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../constants/index';

function EventList({ posts }: { posts: any[] }) {
  const styles = styling();
  const insets = useSafeAreaInsets();

  const handlePressItem = (id: number) => {
    console.log(`Item pressed: ${id}`);
  };

  return (
    <ScrollView style={styles.container} scrollIndicatorInsets={{ right: 1 }}>
      <View style={[styles.innerContainer, { paddingBottom: insets.bottom + 30 }]}>
        {posts?.map((post) => (
          <Pressable key={post.id} style={styles.itemContainer} onPress={() => handlePressItem(post.id)}>
            <View style={styles.infoContainer}>
            <Text style={styles.infoText} numberOfLines={1} ellipsizeMode="tail">
                {post.time}
              </Text>
              <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
                {post.title}
              </Text>
              <Text style={styles.contentText} numberOfLines={3} ellipsizeMode="tail">
                {post.content}
              </Text>
          
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styling = () =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.WHITE,
    },
    innerContainer: {
      gap: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoContainer: {
      borderTopWidth: 1,
      borderColor: colors.GRAY,
      padding: 20,
      width: '100%',
    },
    infoText: {
      color: colors.GRAY, 
      backgroundColor: colors.BLACK, 
      fontSize: 12, 
      padding:5,
      borderRadius: 20,
      alignSelf: 'flex-start',
      overflow: 'hidden',
    },
    titleText: {
      color: colors.BLACK,
      fontSize: 24,
      fontWeight: '600',
     
    },
    contentText: {
      color: colors.BLACK,
      fontSize: 16,
      marginTop: 5,
    },
  });

export default EventList;
