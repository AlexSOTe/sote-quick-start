import { State } from "vue";

const mainStore = {
  state: () => ({
    projectName: 'a-quick-start',
    documentTitle: '',
  }),
  mutations: {
    SetProjectName(state: State, projectName: string) {
      state.projectName = projectName;
    },
    SetDocumentTitle(state: State, documentTitle: string) {
      state.documentTitle = documentTitle;
    },
  },
  actions: {
  },
  getters: {
    getProjectName(state: State) {
      return state.projectName;
    },
    getDocumentTitle(state: State) {
      return state.documentTitle;
    },
  },
}
export default mainStore;
