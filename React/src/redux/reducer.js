import marked from 'marked';
const defaultState = {
    text: '',
    load: false,
};
export function textReducer(state = defaultState, { type, data }) {
    if (type === 'TEXT' && /[^\s\n\t]+/.test(data)) {
        const convertedText = data.split(/\n/).reduce((pre, now,index) => {
            if(index === 0) return pre += marked(now);
            return pre += "<br />" + marked(now);
        },"");
        return { load: true, text: convertedText};
    } else if (type === 'TEXT') {
        return { load: false, text: data };
    }
    return state;
}
