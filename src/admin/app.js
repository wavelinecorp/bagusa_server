const config = {
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Bagusa Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Bagusa",

      "Auth.form.welcome.title": "Welcom to Bagusa Store",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  }, 
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
