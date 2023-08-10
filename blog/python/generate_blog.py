
import os
from jinja2 import Environment, BaseLoader
from bs4 import BeautifulSoup

from article_data import article_dict
from functions import header_to_id

""" GENERATING ARTICLES IN THE BLOG.HMTL FILE """

# Read in template string containing the HTML code
template_path = "blog_template.html"
with open(template_path, "r", encoding="utf8") as f:
    template_string = f.read()

# Create a custom Jinja2 loader from the template string
env = Environment(loader=BaseLoader())
template = env.from_string(template_string)

# Render the template with the product data
blog_content = template.render(article_dict=article_dict, header_to_id=header_to_id)

# Specify the output file path two folders up
output_file_path = os.path.join('..', '..', 'blog.html')

# Save the rendered output to a file
with open(output_file_path, 'w', encoding='utf-8') as file:
    file.write(blog_content)

""" CONTINUE TO CREATE THE BLOG SECTION IN THE INDEX.HTML FILE """

# Parse the blog.html content using BeautifulSoup
soup = BeautifulSoup(blog_content, "html.parser")

# Find the first three elements with class "blog-article-box"
article_boxes = soup.find_all("a", class_="blog-article-box")[:3]

# Generate HTML string for the extracted article boxes
article_boxes_html = "\n".join(str(box) for box in article_boxes)

# Read the content of index.html
index_path = "../../index.html"
with open(index_path, "r", encoding="utf8") as f:
    index_content = f.read()

# Parse the index.html content using BeautifulSoup
index_soup = BeautifulSoup(index_content, "html.parser")

# Find the <div class="section centered-section" id="blogSection"> element
blog_section = index_soup.find("div",id="blogSection")

# Clear the existing content inside the <div> element
blog_section.clear()

# Insert the article boxes HTML inside the <div> element
blog_section.insert(0, BeautifulSoup(article_boxes_html, "html.parser"))

# Get the updated HTML content of index.html
updated_index_content = str(index_soup)

# Specify the output file path for index.html
output_file_path = os.path.join('..', '..', 'index.html')

# Save the updated content to index.html
with open(output_file_path, "w", encoding="utf-8") as file:
    file.write(updated_index_content)
