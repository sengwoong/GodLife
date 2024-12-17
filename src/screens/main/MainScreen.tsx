import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image, TextStyle } from 'react-native';
import { colors, getFontStyle, spacing } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import ItemCard from '../../components/ItemCard';
import CustomButton from '../../components/CustomButton';
import SpeechBubble from '../../components/SpeechBubble';
import Line from '../../components/Line';
import GoldenIcon from '../../components/GoldenIcont';
import Pagination from '../../components/Pagination';
import Margin from '../../components/Margin';
import DraggableCard from '../../components/CardSlider';
import CardSlider from '../../components/CardSlider';


const GRADIENT_SIZE = 54; // Gradient 크기
const AVATAR_SIZE = 50; // Avatar 크기
const MUSIC_PLAYER_WIDTH = "80%"; // Music Player 섹션 크기
function MainScreen() {
  const [activeButton, setActiveButton] = useState('전체보기'); // 기본 활성 버튼
  const CategoryButtons = [
    { label: '전체보기', id: 'all' },
    { label: '단어장', id: 'vocabulary' },
    { label: '재생목록', id: 'playlist' },
    { label: '일정표', id: 'schedule' },
  ];

  const popularAvatars = [
    { id: 1, image: 'https://example.com/avatar1.png', name: 'Avatar 1' ,flower:23},
    { id: 2, image: 'https://example.com/avatar2.png', name: 'Avatar 2',flower:33 },
    { id: 3, image: 'https://example.com/avatar3.png', name: 'Avatar 3' ,flower:53},
  ];


const [currentPage, setCurrentPage] = useState(1);
const handlePageChange = (page: number) => {
  setCurrentPage(page);
};
const itemsPerPage = 10; // 한 페이지에 보여줄 항목 수
const totalItems = 99; // 전체 항목 수 (예시)

const totalPages = Math.ceil(totalItems / itemsPerPage);



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
              {/* 상단 제목 */}
              <View style={styles.titleContainer}>
         
          </View>
          <CardSlider  />
        </View>
        <View style={styles.scrollContent}>
        
          <Margin size={'M16'} ></Margin>

          {/* 음악 플레이어 섹션 */}
          <View style={styles.musicPlayer}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: 'https://example.com/avatar.png' }} style={styles.avatar} />
              <LinearGradient
                style={[styles.gradient, styles.gradientPosition]}
                colors={[colors.BLUE, colors.GREEN]}
              />
            </View>
            
            <View style={styles.musicPlayerText}>
              <Text style={styles.musicPlayerTitle}>저번주 들던 명상 곡</Text>
              <Text style={styles.musicPlayerSubtitle}>마음을 달래주는 선율</Text>
            </View>
          </View>
          <Margin size={'M16'} ></Margin>
          <Text style={styles.titleText}>다양한 컨텐츠를 즐겨 보아요</Text>
          <Margin size={'M4'} ></Margin>
          {/* 추천 상품 섹션 */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={{ uri: 'https://example.com/product1.png' }} style={styles.productImage} />
            <Image source={{ uri: 'https://example.com/product2.png' }} style={styles.productImage} />
            <Image source={{ uri: 'https://example.com/product3.png' }} style={styles.productImage} />
          </ScrollView>
          </View>
          <Margin size={'M60'} ></Margin>
          <Line/>
          <Margin size={'M60'} ></Margin>
          {/* Item 판매 및 버튼 섹션 */}
          <SpeechBubble title={null} subtitle="다양한 컨텐츠가 있어요  😀" />
          
          <View style={styles.itemMenu}>
          {CategoryButtons.map((button) => (
            <CustomButton
              key={button.id}
              label={button.label}
              color={activeButton === button.label ? 'BLACK' : 'WHITE'}
              onPress={() => setActiveButton(button.label)} // 버튼 클릭 시 상태 업데이트
            />
          ))}
          </View>
          <Margin size={'M16'} ></Margin>
          {/* 추천 상품 목록 */}

          <LinearGradient   colors={[colors.BLACK, colors.GREEN]} style={styles.itemSection}>
   

            <Text style={styles.sectionTitle}>추천 상품</Text>
            <View style={styles.itemContent}>
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </View>
            <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
                <View style={styles.height40}>
            <SpeechBubble title={null} subtitle="다양한 컨텐츠가 있어요  😀" />
            <GoldenIcon />
            </View>
            <Margin size={'M16'} ></Margin>

            <Text  style={styles.popularityText}>TOP3 재생목록</Text>
            <Margin size={'M16'} ></Margin>





            <View style={styles.popularityCircleContainer}>


            {popularAvatars.map((avatar) => (
              
                <View style={styles.avatarContainer}>
                <View>
                  <Image source={{ uri: avatar.image }} style={styles.popularAvatar} />
                  <LinearGradient
                    style={[styles.popularityGradient, styles.popularGradientPosition]}
                    colors={[colors.BLUE, colors.RED]}
                  />
                </View>
                <View style={styles.popularityFllow}>
                  <Text style={styles.popularityFllowText}>{avatar.flower}</Text> 
                </View>
                <View >
                  <Text style={styles.popularityFllowNickName}>{avatar.name}</Text> 
                </View>
                <CustomButton size='text_size' label='follow' shape='rounded' variant='outlined'></CustomButton>
              </View>
            ))}



  </View>


</LinearGradient>


<View style={styles.promotionalPost}>
  <View style={styles.promotionalPostTextContainer}>
<Text style={styles.promotionalPostText}>다양한 기능은 왼쪽 상단 </Text>
<Text  style={styles.promotionalPostText}> 메뉴에서 확인가능 합니다!</Text> 

</View>
  </View>




      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  scrollContent: {
    paddingHorizontal: spacing.M16,
  },
  titleContainer: {
    marginBottom: spacing.M16,
  },
  titleText: {
    ...getFontStyle('title', 'large', 'bold'),
    textAlign: 'center',
    color: colors.BLACK,
  } as TextStyle,
  alignRight: {
    textAlign: 'right',
  },
  height40:{
    height:320,
      },

  // 카드 스타일
  card: {
    backgroundColor: colors.BLACK,
    padding: spacing.M20,
    height: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardDescriptionContainer: {
    marginBottom: spacing.M8,
  },
  cardDescription: {
    ...getFontStyle('titleBody', 'large', 'regular'),
    color: colors.LIGHT_GRAY,
    marginBottom: spacing.M16,
  } as TextStyle,
  cardContent: {
    flexGrow: 1,
  },
  cardTitle: {
    ...getFontStyle('display', 'small', 'bold'),
    color: colors.GREEN,
    marginBottom: spacing.M8,
  } as TextStyle,
  cardSubtitle: {
    ...getFontStyle('titleBody', 'large', 'bold'),
    color: colors.WHITE,
    marginBottom: spacing.M8,
  } as TextStyle,
  cardIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.M8,
  },
  cardIcon: {
    ...getFontStyle('display', 'small', 'bold'),
    color: colors.GREEN,
  } as TextStyle,

  // 음악 플레이어 스타일
  musicPlayer: {
    flexDirection: 'row',
    backgroundColor: colors.BLACK,
    borderRadius: 100,
    width: MUSIC_PLAYER_WIDTH,
    padding: spacing.M8,
    alignSelf: 'center',
  },
  avatarContainer: {
  },
  avatar: {
    backgroundColor: colors.BLACK,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  gradient: {
    width: GRADIENT_SIZE,
    height: GRADIENT_SIZE,
    borderRadius: GRADIENT_SIZE / 2,
  },
  gradientPosition: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -GRADIENT_SIZE / 2 }, { translateY: -GRADIENT_SIZE / 2 }],
    zIndex: -1,
  },
  musicPlayerText: {
    flex: 1,
    marginLeft: spacing.M8,
    justifyContent: 'center',
  },
  musicPlayerTitle: {
    ...getFontStyle('titleBody', 'medium', 'bold'),
    color: colors.WHITE,
  } as TextStyle,
  musicPlayerSubtitle: {
    ...getFontStyle('body', 'small', 'regular'),
    color: colors.WHITE,
  } as TextStyle,

  // 상품 이미지 섹션
  productImage: {
    display: 'flex',
    width: 164,
    height: 262,
    borderRadius: 15,
    backgroundColor: colors.GRAY,
    marginRight: spacing.M4,
  },

  // 버튼 메뉴
  itemMenu: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 160,
  },

  // 추천 상품 섹션
  itemSection: {
    flex: 1,
    backgroundColor: colors.BLACK,
    height: 1240,
    borderRadius:15,
    paddingHorizontal: spacing.M16,
    paddingVertical: spacing.M32,
    overflow: 'visible', 
  },
  sectionTitle: {
    ...getFontStyle('title', 'medium', 'bold'),
    color: colors.WHITE,
    marginBottom: spacing.M12,
  } as TextStyle,
  itemContent: {
    width: "100%",
  },

  popularityCircleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex:1,
  },
  popularityCircle: {
    width: 80,
    height: 80,
    backgroundColor: '#4682b4',
    borderRadius: 100,
    marginHorizontal: 10,
  },

  popularityGradient: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
  },
  popularGradientPosition: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -90 / 2 }, { translateY: -90 / 2 }],
    zIndex: -1,
  },


  popularAvatar: {
    backgroundColor: colors.BLACK,
    width: 85,
    height: 85,
    borderRadius: 85 / 2,
  },
  popularityText:{
    color:colors.WHITE,
    textAlign:"center",
    ...getFontStyle("display","small","medium")
  } as TextStyle,
  popularityFllow:{
    borderRadius:10,
    width:30,
    height:20,
    backgroundColor:colors.BLUE,
    alignSelf:'center',
    top:-10,
  },
  popularityFllowText:{
    textAlign:"center",
    ...getFontStyle("body","large","medium")
  }as TextStyle,
  popularityFllowNickName:{
    textAlign:"center",
    color:colors.WHITE,
    ...getFontStyle("body","large","medium")
  }as TextStyle,

  promotionalPost:{
    height:300,
    zIndex:-1,
  },
  promotionalPostTextContainer: {
    position:'absolute',
    bottom: 0,           
    left: 0,              
    right: 0,             

  },
  promotionalPostText:{
    textAlign: 'center',  
    ...getFontStyle("display", "small", "bold")
  }as TextStyle,
});

export default MainScreen;
