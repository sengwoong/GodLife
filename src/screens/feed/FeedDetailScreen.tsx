import React, { useMemo, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TextStyle, SafeAreaView, FlatList } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Margin from '../../components/Margin';
import BulletinBoard from '../../components/BulletinBoard';
import { colors, getFontStyle, spacing } from '../../constants';
import FeedMenu from '../../components/FeedMenu';

export const FeedDetailScreen = () => {
  const CategoryButtons = [
    { label: '상품정보', id: 'product-info' }, 
    { label: '구매평', id: 'reviews' },         
    { label: '반품교환', id: 'returns' },     
    { label: 'QA', id: 'questions' },          
  ];

  const [activeButton, setActiveButton] = useState('상품정보'); 

  const product_content = useMemo(
    () => [
      { id: 20, title: 'apple', content: '사과' },
      { id: 31, title: 'banana', content: '바나나'},
      { id: 10, title: 'taxi', content: '택시' },
    ],
    []
  );

  const navigateToContent = (Index: number) => {
    console.log(Index);
  };

  return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <SafeAreaView style={styles.container}>
          <View style={styles.productContainer}>
            {/* Product Image and Name */}
            <View style={styles.productSection}>
              <Image
                source={{ uri: 'https://via.placeholder.com/150' }} 
                style={styles.productImage}
              />
              <View style={styles.product}>
                <Text style={styles.productTitle}>아름다운 삶을 위한 패키지</Text>
                <Text style={styles.productSubtitle}>고민해결사</Text>
                <Text style={styles.price}>32000point</Text>
                <View style={styles.inlineBlock}>
                  <CustomButton color="BLACK" shape="rounded" size="text_size" label="좋아요" />
                  <CustomButton color="BLACK" shape="rounded" size="text_size" label="장바구니" />
                </View>
              </View>
            </View>
            <Margin size={'M12'} />
            <CustomButton color="BLACK" size="large" label="구매하기" />
          </View>

          <View style={styles.itemMenu}>
            {CategoryButtons.map((button) => (
              <FeedMenu
                key={button.id}
                label={button.label}
                color={"상품정보" === button.label ? 'BLACK' : 'WHITE'}
              />
            ))}
          </View>

          {/* Product Information */}
          <View style={styles.infoSection}>
            <Text style={styles.purchaseTitle}>상품 정보</Text>
            <Margin size={'M4'} />
            <BulletinBoard data={product_content} onItemPress={navigateToContent} />
          </View>

          {/* Purchase Section */}
          <View style={styles.purchaseSection}>
            <Text style={styles.purchaseTitle}>구매평</Text>
            <Margin size={'M4'} />
            <BulletinBoard data={product_content} onItemPress={navigateToContent} />
            <Margin size={'M4'} />
            <TextInput placeholder="구매평을 남기기 위해 댓글을 작성 하세요" style={styles.input} />
            <Margin size={'M4'} />
            <CustomButton size="large" label="구매평 남기기" />
          </View>

          {/* Refund and QA Section */}
          <View style={styles.refundSection}>
            <Text style={styles.purchaseTitle}>반품/교환</Text>
            <Margin size={'M4'} />
            <Text style={styles.sectionText}>
              다운로드 전에는 반품이 가능합니다.
            </Text>
            <Text style={styles.sectionText}>
              결재후 20일 이후에는 반품이 불가능 합니다.
            </Text>
            <Text style={styles.sectionText}>
              반품한 모든 금액은 당사의 포인트로 반환 됩니다.
            </Text>
          </View>

          <View style={styles.qaSection}>
            <Text style={styles.sectionTitle}>Q&A</Text>
            <BulletinBoard data={product_content} onItemPress={navigateToContent} />
            <Margin size={'M4'} />
            <TextInput placeholder="qa 를 입력 혹은 클릭하여 수정하세요" style={styles.input} />
            <Margin size={'M4'} />
            <CustomButton color='BLACK' size="large" label="질문하기" />
          </View>
        </SafeAreaView>
      }
      keyExtractor={() => 'header'}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  productContainer: {
    margin: spacing.M32,
  },
  productSection: {
    flexDirection: 'row',
  },
  productImage: {
    width: 164,
    height: 262,
    borderRadius: 10,
    marginRight: spacing.M12,
  },
  product: {
    flex: 1,
  },
  productTitle: {
    ...getFontStyle('title', 'large', 'bold'),
    marginTop: spacing.M12,
  }as TextStyle,
  productSubtitle: {
    ...getFontStyle('title', 'medium', 'medium'),
    marginTop: spacing.M12,
  }as TextStyle,
  price: {
    ...getFontStyle('body', 'medium', 'medium'),
    color: colors.BLACK,
    marginTop: spacing.M12,
  }as TextStyle,
  inlineBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.M12, // 버튼 간의 간격
    marginTop: spacing.M12,
  },
  itemMenu: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: 160,
  },
  infoSection: {
    padding: spacing.M20,
  },
  purchaseTitle: {
    ...getFontStyle('title', 'large', 'bold'),
    color: colors.BLACK,
  }as TextStyle,
  input: {
    borderWidth: 1,
    borderColor: colors.GRAY,
    borderRadius: 5,
    padding: spacing.M12,
  },
  purchaseSection: {
    padding: spacing.M20,
  },
  refundSection: {
    padding: spacing.M20,
  },
  sectionTitle: {
    ...getFontStyle('title', 'large', 'bold'),
    color: colors.BLACK,
  }as TextStyle,
  sectionText: {
    ...getFontStyle('body', 'medium', 'medium'),
  }as TextStyle,
  qaSection: {
    padding: spacing.M20,
  },
});