import marked from 'marked';
import { combineReducers } from 'redux';
import { TEXT, TEXT_TYPE, TOGGLE_TYPE } from '../constant';
const defaultText = marked(TEXT, {
    breaks: true,
    gfm: true,
    xhtml: true,
});
const defaultToggle = {
    mode: 'origin',
};
function textReducer(state = defaultText, { type, data }) {
    if (type === TEXT_TYPE) {
        return marked(data, {
            gfm: true,
            breaks: true,
            xhtml: true,
        });
    }
    return state;
}
function toggleReducer(state = defaultToggle, { type, item }) {
    if (type === TOGGLE_TYPE) {
        return { ...state, mode: item };
    }
    return state;
}
export const rootReducer = combineReducers({
    text: textReducer,
    toggle: toggleReducer,
});
