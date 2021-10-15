import marked from 'marked';
import { combineReducers } from 'redux';
const defaultText = {
    text: '',
};
const defaultToggle = {
    mode: 'origin',
};
function textReducer(state = defaultText, { type, data }) {
    if (type === 'TEXT' && /[^\s\n\t]+/.test(data)) {
        const convertedText = data.split(/\n/).reduce((pre, now, index) => {
            if (index === 0) return (pre += marked(now));
            return (pre += '<br />' + marked(now));
        }, '');
        return { text: convertedText };
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
