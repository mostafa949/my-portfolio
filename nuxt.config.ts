// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css: ["@/assets/scss/style.scss"],
    // modules: ['@types/webfontloader'],
    build: {
        transpile: ["vuetify"],
    },
    // vite: {
    //     define: {
    //         "process.env.DEBUG": false,
    //     },
    // },
});
