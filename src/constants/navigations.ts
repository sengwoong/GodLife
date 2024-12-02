const authNavigations = {
  HOME: 'Home',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  } as const;

const mainNavigations = {
    PlayList: 'PlayList',
    CALENDAR: 'Calendar',
    SETTING:'Setting',
    VOCA: 'Voca',
    MAIN: 'Main',
    FEED: 'Feed',
  } as const;

const vocaNavigations = {
    VOCAMAIN: 'VocaMain',
    VOCACONTENT: 'VocaContent',
    VOCACONTENTEDIT: 'VocaContentEdit',
    } as const;
  
const calendarNavigations = {
    CALENDAR: 'Calendar',
    CALENDAREDIT: 'CalendarEdit',
    } as const;

const PlayListNavigations = {
    PLAYLIST: 'PlayList',
    PLAYLISTCONTENT: 'PlayListContent',
    PLAYLISTEDIT: 'PlayListEdit',
    } as const;
    
    
  export { vocaNavigations,authNavigations,mainNavigations,calendarNavigations,PlayListNavigations };