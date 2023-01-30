export const SET_FLOATING = 'SET_FLOATING'
export const SET_USERDATA = 'SET_USERDATA'
export const SET_USERIMAGE = 'SET_USERIMAGE'
export const SET_API = 'SET_API'
export const SET_SONGAUDIO = 'SET_SONGAUDIO'
export const SET_ISPLAYING = 'SET_ISPLAYING'
export const SET_PLAYEDDETAIL = 'SET_PLAYEDDETAIL'
export const SET_COVERCOLORS = 'SET_COVERCOLORS'
export const SET_PLAYDURATION = 'SET_PLAYDURATION'
export const SET_NAVDETAILS = 'SET_NAVDETAILS'

export const setFloating = floating => dispatch => {
    dispatch({
        type: SET_FLOATING,
        payload: floating,
    })
}
export const setUserData = userData => dispatch => {
    dispatch({
        type: SET_USERDATA,
        payload: userData,
    })
}
export const setUserImage = userImage => dispatch => {
    dispatch({
        type: SET_USERIMAGE,
        payload: userImage,
    })
}
export const setApi = api => dispatch => {
    dispatch({
        type: SET_API,
        payload: api,
    })
}
export const setSongAudio = songAudio => dispatch => {
    dispatch({
        type: SET_SONGAUDIO,
        payload: songAudio,
    })
}
export const setIsPlaying = isPlaying => dispatch => {
    dispatch({
        type: SET_ISPLAYING,
        payload: isPlaying,
    })
}
export const setPlayedDetail = playedDetail => dispatch => {
    dispatch({
        type: SET_PLAYEDDETAIL,
        payload: playedDetail,
    })
}
export const setCoverColors = coverColors => dispatch => {
    dispatch({
        type: SET_COVERCOLORS,
        payload: coverColors,
    })
}
export const setPlayDuration = playDuration => dispatch => {
    dispatch({
        type: SET_PLAYDURATION,
        payload: playDuration,
    })
}
export const setNavDetails = navDetails => dispatch => {
    dispatch({
        type: SET_NAVDETAILS,
        payload: navDetails,
    })
}