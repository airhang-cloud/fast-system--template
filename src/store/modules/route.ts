export default {
    state: {
        select_arr: ["/dashboard"],
        percent: 0,
    },
    mutations: {
        SET_SELECT_ARR: (state: any, val: any) => {
            state.select_arr = val;
        },
        SET_PERCENT: (state: any, val: any) => {
            state.percent = 100;
        },
    },
    actions: {},
    namespaced: true,
};
