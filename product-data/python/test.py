categories = {
    "disposables":{
        "category_filter": "Disposables"},
    "engangsvapes":{
        "category_filter": "Disposables"}
}

for category_name, category_data in categories.items():
    print(category_name)
    print(category_data["category_filter"])