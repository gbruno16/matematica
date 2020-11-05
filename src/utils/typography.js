import Typography from "typography"
import fairyGatesTheme from 'typography-theme-stow-lake'
fairyGatesTheme.googleFonts= [
  {
    name: "Playfair Display",
    styles: ["500"],
  },
  {
    name: "Lora",
    styles: ["400"]
  }
]
fairyGatesTheme.headerFontFamily = ['PlayFair Display', 'Helvetica']
fairyGatesTheme.bodyFontFamily = ['Lora']

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography

