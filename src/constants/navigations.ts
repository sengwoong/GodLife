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

const vocaNavigations = {
    VOCAMAIN: 'VocaMainMain',
    VOCACONTENT: 'VocaContent',
    VOCACONTENTEDIT: 'VocaContentEdit',
    } as const;
  
const calendarNavigations = {
    CALENDAR: 'CalendarMain',
    CALENDAREDIT: 'CalendarEdit',
    } as const;

const PlayListNavigations = {
    PLAYLIST: 'PlayListMain',
    PLAYLISTCONTENT: 'PlayListContent',
    PLAYLISTEDIT: 'PlayListEdit',
    } as const;
    
const mainNavigations = {
  MAIN: 'MainPage',
  FEED: 'MarketFeed',
  } as const;
    
  export { vocaNavigations,authNavigations,drawerNavigations,calendarNavigations,PlayListNavigations,mainNavigations };