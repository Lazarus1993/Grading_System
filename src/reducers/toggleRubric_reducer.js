const toggleRubric = (state = { rubricId:"", rubricData:"", rubricOperation:"" }, action ) => {
	switch(action.type) {
		case 'ADDRUBRIC':
			state = 
			{
				...state,
				rubricId:action.rubricId,
				rubricData:action.rubricData,
				rubricOperation:1
			}
			break;
		case 'REMOVERUBRIC':
			state = 
			{
				...state,
				rubricId:action.rubricId,
				rubricOperation:0
			}
			break;

        case 'RESETRUBRIC':
            state =
            {
                ...state,
                rubricOperation:2,
                rubricId:"",
                rubricData:""
            }
            break;
	}
	return state;
}

export default toggleRubric;