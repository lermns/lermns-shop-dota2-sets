import cloudinary
import cloudinary.api

cloudinary.config(
  cloud_name = "dxte0oxyq",
  api_key = "378831928594672",
  api_secret = "YOQ03wIy4eSJWNfEa0IrrET68-o"
)

# Primero veamos qué carpetas existen
print("Carpetas en tu Cloudinary:")
try:
    folders = cloudinary.api.root_folders()
    for f in folders["folders"]:
        print(f" - {f['name']}")
except:
    print("Sin carpetas detectadas")

# Buscar TODOS los recursos sin filtro
print("\nBuscando todas las imágenes...")
resources = cloudinary.api.resources(
    type="upload",
    max_results=500
)

print(f"Total encontradas: {len(resources['resources'])}")

with open("cloudinary_urls.txt", "w") as f:
    for r in resources["resources"]:
        line = f"{r['public_id']} | {r['secure_url']}"
        print(line)
        f.write(line + "\n")

print(f"\n✅ URLs guardadas en cloudinary_urls.txt")