import { createI18n } from "vue-i18n";

export default createI18n({
    locale: "en",
    messages: {
        ch: require("./ch/index"),
        en: require("./en/index"),
    },
});
