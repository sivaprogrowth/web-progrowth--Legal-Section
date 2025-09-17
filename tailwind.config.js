/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "foundation-bluedark": "var(--foundation-bluedark)",
        "foundation-bluedark-active": "var(--foundation-bluedark-active)",
        "foundation-bluedark-hover": "var(--foundation-bluedark-hover)",
        "foundation-bluedarker": "var(--foundation-bluedarker)",
        "foundation-bluelight": "var(--foundation-bluelight)",
        "foundation-bluelight-active": "var(--foundation-bluelight-active)",
        "foundation-bluelight-hover": "var(--foundation-bluelight-hover)",
        "foundation-bluenormal": "var(--foundation-bluenormal)",
        "foundation-bluenormal-active": "var(--foundation-bluenormal-active)",
        "foundation-bluenormal-hover": "var(--foundation-bluenormal-hover)",
        "foundation-greendark": "var(--foundation-greendark)",
        "foundation-greendark-active": "var(--foundation-greendark-active)",
        "foundation-greendark-hover": "var(--foundation-greendark-hover)",
        "foundation-greendarker": "var(--foundation-greendarker)",
        "foundation-greenlight": "var(--foundation-greenlight)",
        "foundation-greenlight-active": "var(--foundation-greenlight-active)",
        "foundation-greenlight-hover": "var(--foundation-greenlight-hover)",
        "foundation-greennormal": "var(--foundation-greennormal)",
        "foundation-greennormal-active": "var(--foundation-greennormal-active)",
        "foundation-greennormal-hover": "var(--foundation-greennormal-hover)",
      },
    },
  },
  plugins: [],
};
