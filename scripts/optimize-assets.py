"""Resize original HUSA assets for the web without synthesizing or altering content."""
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
sources = root / 'assets' / 'originals'
destination = root / 'public' / 'images'
destination.mkdir(parents=True, exist_ok=True)
for name, width, quality in [('howard-campus.jpg', 1600, 85), ('husa-seal.png', 256, 92)]:
    with Image.open(sources / name) as original:
        image = ImageOps.exif_transpose(original)
        image.thumbnail((width, width * 4), Image.Resampling.LANCZOS)
        output = destination / (Path(name).stem + '.webp')
        image.save(output, 'WEBP', quality=quality, method=6)
        print(f'{output.name}: {image.width}x{image.height}, {output.stat().st_size:,} bytes')
