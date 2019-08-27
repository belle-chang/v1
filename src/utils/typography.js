import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Karla',
      styles: [
        '400',
        '400i',
        '700',
        '700i'
      ],
    },
    {
      name: 'Inconsolata',
      styles: [
        '400',
        '700',
      ],
    },
    {
      name: 'Overpass Mono',
      styles: [
        '300',
        '400',
        '600',
        '700',
      ]
    }
  ],
  headerFontFamily: [
    'Karla', 'sans-serif',
    'Inconsolata', 'sans-serif'
  ],
  bodyFontFamily: ["Karla", "sans-serif"],
})
export default typography