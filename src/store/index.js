import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
      state: {
            kids: [],
            person: {},
      },

      mutations: {
            ADD_KID(state, payload) {
                  state.kids.push({
                        ...payload,
                        key: uuidv4(),
                  });
            },

            REMOVE_KID(state, key) {
                  state.kids = state.kids.filter((kid) => kid.key != key);
            },

            SET_KIDS(state, kids) {
                  state.kids = kids;
            },

            SET_PERSON(state, person) {
                  state.person = person;
            },
      },

      getters: {
            kids_preview(state) {
                  return state.kids.map((kid) => `${kid.name}, ${kid.age} лет`);
            },

            person_preview(state) {
                  return `${state.person.name}, ${state.person.age} лет`;
            },
      },

      actions: {
            add_kid({ commit }, kid) {
                  commit("ADD_KID", kid);
            },

            remove_kid({ commit }, key) {
                  commit("REMOVE_KID", key);
            },

            save_kids({ state }) {
                  localStorage.setItem("app_kids", JSON.stringify(state.kids));
            },

            pullup_kids({ commit }) {
                  commit(
                        "SET_KIDS",
                        JSON.parse(localStorage.getItem("app_kids")) || []
                  );
            },

            save_person({ state }) {
                  localStorage.setItem(
                        "app_person",
                        JSON.stringify(state.person)
                  );
            },

            pullup_person({ commit }) {
                  commit(
                        "SET_PERSON",
                        JSON.parse(localStorage.getItem("app_person")) || {}
                  );
            },
      },
});
