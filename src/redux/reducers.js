import { SET_COVERCOLORS, SET_FLOATING, SET_ISPLAYING, SET_NAVDETAILS, SET_PLAYDURATION, SET_PLAYEDDETAIL } from "./actions";
import { SET_USERDATA } from "./actions";
import { SET_USERIMAGE } from "./actions";
import { SET_API } from "./actions";
import { SET_SONGAUDIO } from "./actions";
import { Audio } from "expo-av";

const initialState = {
    floating: false,
    userData: [],
    userImage: null,
    api: 'https://fdbe-49-149-71-59.ap.ngrok.io',
    songAudio: new Audio.Sound(),
    isPlaying: false,
    playedDetail: [],
    coverColors: [],
    playDuration: 0,
    navDetails: false
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLOATING:
            return { ...state, floating: action.payload }
        case SET_USERDATA:
            return { ...state, userData: action.payload }
        case SET_USERIMAGE:
            return { ...state, userImage: action.payload }
        case SET_API:
            return { ...state, api: action.payload }
        case SET_SONGAUDIO:
            return { ...state, songAudio: action.payload }
        case SET_ISPLAYING:
            return { ...state, isPlaying: action.payload }
        case SET_PLAYEDDETAIL:
            return { ...state, playedDetail: action.payload }
        case SET_COVERCOLORS:
            return { ...state, coverColors: action.payload }
        case SET_PLAYDURATION:
            return { ...state, playDuration: action.payload }
        case SET_NAVDETAILS:
            return { ...state, navDetails: action.payload }
        default:
            return state
    }
}


export default userReducer