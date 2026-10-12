# Original website imagery

The user explicitly requested no AI images. The application contains only the original HUSA seal, campus photography, and leadership portraits retrieved from the user's Wix site. No synthetic image or generated concept is included in the website or project.

| Asset | Source observed in the rendered Wix homepage | Local original | Served derivative |
|---|---|---|---|
| Howard campus photograph | `https://static.wixstatic.com/media/adf81d_39e7bf62bf02493e96e572f7c7b5bc90~mv2.jpg` | `assets/originals/howard-campus.jpg` | `public/images/howard-campus.webp` |
| HUSA seal | `https://static.wixstatic.com/media/adf81d_0d7be84712f4401dbf65bc12b1c6b534~mv2.png` | `assets/originals/husa-seal.png` | `public/images/husa-seal.webp` |
| President Ware portrait | `https://static.wixstatic.com/media/adf81d_98de546a66f340cb83597d4b21615aa5~mv2.jpeg` | `assets/originals/president-ware.jpeg` | `public/images/president-ware.webp` |
| Vice President Garcia portrait | `https://static.wixstatic.com/media/adf81d_a211d0ffa8b749cb8a4e33181614cc60~mv2.jpeg` | `assets/originals/vice-president-garcia.jpeg` | `public/images/vice-president-garcia.webp` |

The original files were downloaded from the asset roots identified by the rendered Wix image URLs. Derivatives preserve the image content, normalize EXIF orientation, resize the seal, and encode WebP for lighter delivery. The photograph is 1024 × 1536; CSS crops its display responsively. No photography was generated or retouched.

Photographer and usage-rights documentation were not available in the rendered editor. Confirm rights with HUSA before public release. The site uses a local system-font stack and code-native controls/icons, without remote font dependencies.
