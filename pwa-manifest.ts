import { type ManifestOptions } from 'vite-plugin-pwa'

export const manifest: Partial<ManifestOptions> = {
  short_name: 'ykvlv',
  name: 'ykvlv',
  description: 'personal website',
  theme_color: '#232323',
  background_color: '#ffffff',
  orientation: 'any',
  display: 'standalone',
  icons: [
    {
      purpose: 'maskable',
      sizes: '512x512',
      src: 'icon512_maskable.png',
      type: 'image/png',
    },
    {
      purpose: 'any',
      sizes: '512x512',
      src: 'icon512_rounded.png',
      type: 'image/png',
    },
  ],
  // TODO add screenshots
}
