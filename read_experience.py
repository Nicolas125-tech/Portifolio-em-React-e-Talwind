import re

with open("portfolio-nicolas/src/data/personalData.js", "r") as f:
    content = f.read()

match = re.search(r"export const experience = \[(.*?)\];", content, re.DOTALL)
if match:
    print(match.group(1))
else:
    print("Experience array not found.")
