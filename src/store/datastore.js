import pathify, { make } from "vue-pathify"
export const plugins = [pathify.plugin]
export const state = () => ({
  dataUser: {},
})

export const mutations = {
  ...make.mutations(state),
}
