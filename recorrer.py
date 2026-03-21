import os

output = []

for hero in os.listdir("images"):
    hero_path = os.path.join("images", hero)
    if os.path.isdir(hero_path):
        for file in os.listdir(hero_path):
            set_name = os.path.splitext(file)[0]  # quita la extensión
            output.append(f"Héroe: {hero} | Set: {set_name}")

with open("sets.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(output))

print(f"✅ {len(output)} sets encontrados. Guardados en sets.txt")