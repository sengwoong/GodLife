const authNavigations = {
  HOME: 'Home',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  } as const;

const drawerNavigations = {
    PlayList: 'PlayList',
    CALENDAR: 'Calendar',
    SETTING:'Setting',
    VOCA: 'Voca',
    MAIN: 'Main',
  } as const;

const VocaNavigations = {
    VOCAMAIN: 'VocaMainMain',
    VOCACONTENT: 'VocaContent',
    VOCACONTENTEDIT: 'VocaContentEdit',
    } as const;
  
const CalendarNavigations = {
    CALENDAR: 'CalendarMain',
    CALENDAREDIT: 'CalendarEdit',
    } as const;

const PlayListNavigations = {
    PLAYLIST: 'PlayListMain',
    PLAYLISTCONTENT: 'PlayListContent',
    PLAYLISTEDIT: 'PlayListEdit',
    } as const;
    
const MainNavigations = {
  MAIN: 'MainPage',
  FEED: 'MarketFeed',
  } as const;
    
  export { VocaNavigations,authNavigations,drawerNavigations,CalendarNavigations,PlayListNavigations,MainNavigations };