import os
from bs4 import BeautifulSoup
from jinja2 import Environment, BaseLoader

# Importing product data from product_data.py
from product_data import product_dict

categories = {
    "disposables": {
        "category_filter": "Disposables"
    },
    "engangsvapes": {
        "category_filter": "Disposables"
    }
}

for category_name, category_data in categories.items():
    # Filter product_data based on "product_category"
    filtered_product_data = {
        product_id: product_data for product_id, product_data in product_dict.items() if
        product_data.get("product_category") == category_data["category_filter"]
    }

    # Read in template string containing the HTML code
    template_path = "category_template.html"
    with open(template_path, "r", encoding="utf8") as f:
        template_string = f.read()

    # Create a custom Jinja2 loader from the template string
    env = Environment(loader=BaseLoader())
    template = env.from_string(template_string)

    # Create the sorted list of products based on product_ranking
    sorted_products = sorted(filtered_product_data.items(), key=lambda x: x[1]["product_ranking"])

    # Render the product cards HTML using Jinja
    output_html = template.render(products=sorted_products)
    print(output_html)
    # Read in the engangsvapes.html file
    path = os.path.join("..", "..", f"{category_name}.html")
    print(path)
    with open(path, "r", encoding="utf8") as file:
        index_content = file.read()

    # Parse the index.html content with BeautifulSoup
    soup = BeautifulSoup(index_content, "html.parser")
    print(soup)
    # Find the <div class="category-products section" id="categorySection"> element
    category_section = soup.find("div", id="categorySection")

    # Replace the entire content inside the productSection with the new product cards HTML
    category_section.clear()  # Remove existing content
    category_section.append(BeautifulSoup(output_html, "html.parser"))  # Insert the new content

    # Write the modified engangsvapes.html file back to the file
    with open(path, "w", encoding="utf8") as file:
        file.write(str(soup))
