import update from 'react-addons-update';


function getId(state){
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);
	}, -1) + 1
}

export default function reducer(state, action) {
	switch(action.type){
		case "LOADING":
			return Object.assign({}, state, ...state.list, {
				loading:!state.loading
				});
		case "ADD_LIST":
			return Object.assign({
					list:[...state.list,action.tweet],
					loading:false
				});
		case "HOVER_TWEET":
			// state.list.findIndex(m => m.get('id') === markerId);
			// console.log("state",state);
			// console.log("id",action.id)
			const index = state.list.findIndex(m => m.id == action.id);
			// console.log("index",index);
			state.list[index].hover = action.hover;
			return Object.assign({
					list:[...state.list],
					loading:false
				});

		// case "Toggle_Groupon":
		// 	state.grouponList.map(toggle=>{
		// 		toggle.active = false;
		// 	});
		// 	state.grouponList[action.id].active = !state.grouponList[action.id].active;
		// 	return Object.assign({}, state, ...state.grouponList, {
		// 		grouponList:[...state.grouponList]
		// 		});
		default:
			return state;
	}

}
