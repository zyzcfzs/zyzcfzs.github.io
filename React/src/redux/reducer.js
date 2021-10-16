import marked from 'marked';
import { combineReducers } from 'redux';
import { TEXT } from '../utils';
const defaultText = marked(TEXT, {
    breaks: true,
    gfm: true,
    xhtml: true,
});
const defaultToggle = {
    mode: 'origin',
};
function textReducer(state = defaultText, { type, data }) {
    if (type === 'TEXT') {
        return marked(data, {
            gfm: true,
            breaks: true,
            xhtml: true,
        });
    }
    return state;
}
function toggleReducer(state = defaultToggle, { type, item }) {
    if (type === 'TOGGLE') {
        return { ...state, mode: item };
    }
    return state;
}
export const rootReducer = combineReducers({
    text: textReducer,
    toggle: toggleReducer,
});
