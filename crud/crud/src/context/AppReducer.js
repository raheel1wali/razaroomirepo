export default (state, action) => {
    // console.log(action.type, action.payload)
    switch (action.type) {
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => {
                    return user.id !== action.payload
                })
            }
        case 'GET_ID':
           
                return {
                    
                    usersId: [action.payload,state.userId]
            }
        case 'ADD_USER':
           
            return {
                
                users: [action.payload, ...state.users]
            }
        case 'EDIT_USER':
          const updateUser = action.payload;
          console.log('>>>',updateUser)
          
          const updateUsers = state.users.map(user => {
              if(user.id == updateUser.id) {
                  return updateUser;
              }
              return user;
          })
            return{
              users: updateUsers
            }

        default:
            return state 
    }
}