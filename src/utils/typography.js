import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  scaleRatio: 3.2,
  googleFonts: [{
   name: "Source Sans Pro",
   styles: [
      300,
      400,
      700
   ] 
  }],
  headerFontFamily: [
    "Source Sans Pro",
    "Open Sans",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  blockmarginBottom: '16px',
  headerGrayHue: 120,
  bodyFontFamily: ["Source Sans Pro", "sans-serif"]
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
