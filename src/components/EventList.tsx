import React from 'react';
import { ScrollView, StyleSheet, View, Pressable, Text, TextStyle, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, getFontStyle } from '../constants/index';

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
    }as ViewStyle,
    innerContainer: {
      gap: 20,
    }as ViewStyle,
    itemContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    }as ViewStyle,
    infoContainer: {
      borderTopWidth: 1,
      borderColor: colors.GRAY,
      padding: 20,
      width: '100%',
    } as ViewStyle,
    infoText: {
      color: colors.GRAY, 
      backgroundColor: colors.BLACK, 
      font : getFontStyle('body', 'medium', 'regular'),
      padding:5,
      borderRadius: 20,
      alignSelf: 'flex-start',
      overflow: 'hidden',
    } as TextStyle,
    titleText: {
      color: colors.BLACK,
      font : getFontStyle('body', 'medium', 'bold'),
    } as TextStyle, 
    contentText: {
      color: colors.BLACK,
      fontSize: 16,
      marginTop: 5,
    } as ViewStyle,
  });

export default EventList;
