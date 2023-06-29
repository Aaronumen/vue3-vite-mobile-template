// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from "unocss"
import presetIcons from "@unocss/preset-icons"
export default defineConfig({
  // ...UnoCSS选项
  presets: [
    presetAttributify({}),
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle"
      },
      collections: {
        mdi: () => import("@iconify-json/mdi/icons.json").then(i => i.default)
      }
    })
  ]
})
