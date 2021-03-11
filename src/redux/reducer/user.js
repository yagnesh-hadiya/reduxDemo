const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, { name: action.name }];
    }
}
export default userReducer;