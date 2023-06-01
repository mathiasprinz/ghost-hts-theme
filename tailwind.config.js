export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    backgroundImage: {
      'tiles-pattern': "url('/assets/bg_tile_32x32_raster.png')",
    },
    fontFamily: {
      'def': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      'display': ["Urby"]
    },
    colors: {
      "blue-10": "var(--color-blue)",
      "blue-20": "var(--color-blue-20)",
      "grey-10": "var(--color-grey-10)"

    },
    spacing: {
      '0': '0',
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '55': '40px',
      '6': '48px',
      '7': '56px'
    }
  },
  daisyui: {
    themes: [
      {
        "darkStudio": {
        // "primary-content":  "red",
        // "primary": "white",
        "secondary": "#E9EAEC",
        // "accent": "#225BFB",
        "neutral": "#6F7984",
        "base-100": "#2E3238",
        "neutral-content": "#24272B",
        "base-content": "#9098A1",
        // "info": "#225BFB",
        // "success": "#225BFB",
        // "warning": "#225BFB",
        // "error": "#225BFB",
        },
        "lightStudio": {
          // "primary-content":  "red",
          // "primary": "white",
          // "secondary": "#225BFB",
          // "accent": "#225BFB",
          "neutral": "#6F7984",
          "base-100": "#E9EAEC",
          "neutral-content":  "#F4F5F6",
          "base-content": "#41474E",
          // "info": "#225BFB",
          // "success": "#225BFB",
          // "warning": "#225BFB",
          // "error": "#225BFB",
          },
        "frindlyStudio": {
          // "primary-content":  "red",
          // "primary": "white",
          // "secondary": "#225BFB",
          // "accent": "#225BFB",
          "neutral": "#6F7984",
          "base-100": "#FFC1C2",
          
          "neutral-content":  "#FFD7D7",
          "base-content": "#41474E",
          // "info": "#225BFB",
          // "success": "#225BFB",
          // "warning": "#225BFB",
          // "error": "#225BFB",
          },

      },
    ],
  },
  plugins: [
      require("daisyui"),
      require('@tailwindcss/typography')
  ]
}