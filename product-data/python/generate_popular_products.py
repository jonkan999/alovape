import os
from bs4 import BeautifulSoup
from jinja2 import Environment, BaseLoader

# Importing product data from product_data.py
from product_data import product_dict

# Read in template string containing the HTML code
template_path = "product_template.html"
with open(template_path, "r", encoding="utf8") as f:
    template_string = f.read()

# Create a custom Jinja2 loader from the template string
env = Environment(loader=BaseLoader())
template = env.from_string(template_string)

# Create the sorted list of products based on product_ranking
sorted_products = sorted(product_dict.items(), key=lambda x: x[1]["product_ranking"])

# Render the product cards HTML using Jinja
output_html = template.render(products=sorted_products)
print(output_html)
# Read in the index.html file
index_path = os.path.join("..", "..", "index.html")
with open(index_path, "r", encoding="utf8") as f:
    index_content = f.read()

# Parse the index.html content with BeautifulSoup
soup = BeautifulSoup(index_content, "html.parser")

# Find the <div class="popular-products section" id="productSection"> element by ID directly
product_section = soup.find("div", id="productSection")

# Replace the entire content inside the productSection with the new product cards HTML
product_section.clear()  # Remove existing content
product_section.append(BeautifulSoup(output_html, "html.parser"))  # Insert the new content

# Write the modified index.html back to the file
with open(index_path, "w", encoding="utf8") as file:
    file.write(str(soup))

# Write the modified index.html back to the file
with open(index_path, "w", encoding="utf8") as file:
    file.write(str(soup))
