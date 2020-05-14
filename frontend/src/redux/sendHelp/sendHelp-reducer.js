const INITIAL_STATE =  {
    location: null,
    phoneNo: '',
    userId: ''
  };


const sendHelpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USER_LOCATION':
            return {
                ...state,
                location: action.payload
            }

        default:
            return state;
    }
}


export default sendHelpReducer;