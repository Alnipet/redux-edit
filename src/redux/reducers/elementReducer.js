import {ADD_ELEMENT, EDIT_ELEMENT, REMOVE_ELEMENT, ADD_EDITED_ELEMENT, CLEAR_EDITING_ELEMENT} from '../actions/actions'

const initialState = {
	elements: [],
	editingElement: {
		id: null,
		name: '',
		price: null,
	},
}

export const elementReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ELEMENT:
			const elements = [...state.elements]
			elements.push(action.payload)
			return {
				...state,
				elements,
			}

		case EDIT_ELEMENT:
			return {
				...state,
				editingElement: action.payload,
			}

		case REMOVE_ELEMENT:
			const elementsWithoutDeleted = state.elements.filter((el) => el.id !== action.payload)
			return {
				elements: elementsWithoutDeleted,
				editingElement: {
					id: null,
					name: '',
					price: null,
				},
			}

		case ADD_EDITED_ELEMENT:
			const elementsWithoutEdited = state.elements.filter((el) => el.id !== action.payload.id)
			elementsWithoutEdited.push(action.payload)
			return {
				elements: elementsWithoutEdited,
				editingElement: {
					id: null,
					name: '',
					price: null,
				},
			}

		case CLEAR_EDITING_ELEMENT:
			return {
				...state,
				editingElement: {
					id: null,
					name: '',
					price: null,
				},
			}

		default:
			return state
	}
}
