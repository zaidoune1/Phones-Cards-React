
    const Reducers = (state, action) => {


        switch (action.type) {

            case "REMOVE-ITEM":

            return {...state, allDatas: state.allDatas.filter((item) => item.id !== action.payload.id)}

            case "REMOVE-ALL":

            return {...state, allDatas: []}

            case "INCRISS-AMOUNT":

            return {...state, allDatas: state.allDatas.map((item) => item.id === action.payload.id  ? {...item, amount: item.amount + 1}: item)}
            
            case "INCRISS-DECRISS":

            return {...state, allDatas: state.allDatas.map((item) => item.id === action.payload.id  ? {...item, amount: item.amount - 1}: item)}

            default : return state

        }
    }

    export default Reducers