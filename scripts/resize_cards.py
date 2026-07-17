from pathlib import Path
from shutil import copy2, rmtree
from tempfile import NamedTemporaryFile
from PIL import Image

root = Path(__file__).resolve().parent.parent / "docs" / "assets" / "images" / "2025-05-20" / "cards"
out_dir = root.parent / "resized_cards"
width = 593
height = 834

out_dir.mkdir(exist_ok=True)

for path in sorted(root.rglob("*.webp")):
    rel_path = path.relative_to(root)
    temp_out_path = out_dir / rel_path
    temp_out_path.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(path) as img:
        img = img.convert("RGBA")
        img = img.resize((width, height), Image.LANCZOS)

        with NamedTemporaryFile(suffix=".webp", dir=str(temp_out_path.parent), delete=False) as tmp:
            tmp_path = Path(tmp.name)

        try:
            img.save(tmp_path, format="WEBP", quality=95)
            tmp_path.replace(temp_out_path)
        finally:
            if tmp_path.exists() and tmp_path != temp_out_path:
                tmp_path.unlink(missing_ok=True)

for temp_path in sorted(out_dir.rglob("*.webp")):
    rel_path = temp_path.relative_to(out_dir)
    final_path = root / rel_path
    final_path.parent.mkdir(parents=True, exist_ok=True)
    copy2(temp_path, final_path)

if out_dir.exists():
    rmtree(out_dir)

print(f"Resized and copied WebP files into {root}.")
