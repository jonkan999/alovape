import os
from jinja2 import Environment, BaseLoader

from article_data import article_dict
from functions import header_to_id

# Read in template string containing the HTML code
template_path = "article_template.html"
with open(template_path, "r", encoding="utf8") as f:
    template_string = f.read()

# Create a custom Jinja2 loader from the template string
env = Environment(loader=BaseLoader())
template = env.from_string(template_string)

# Iterate through the article_dict and generate HTML files
for article_id, article in article_dict.items():
    file_name=header_to_id(article["main_title"])
    output_filename = os.path.join( '..', f"{file_name}.html")  # Output file path
    rendered_article = template.render(article=article)

    with open(output_filename, "w", encoding="utf-8") as f:
        f.write(rendered_article)