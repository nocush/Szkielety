const faq = (state = [], action) => {
    let faq
    switch (action.type) {
        case 'ADD_FAQ_ELEMENT':
            return [
                ...state,
                {
                    question: action.question,
                    answer: action.answer
                }
            ]
        case 'DELETE_FAQ_ELEMENT':
            faq = [...state];
            faq[action.index] = {
                qustion:action.question,
                answer:action.answer
            }
            return faq;
        case 'EDIT_FAQ_ELEMENT':
            faq = [...state];
            faq.splice(action.index,1);
            return faq;
        default:
            return state
    }
}

export default faq