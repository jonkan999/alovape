def header_to_id(input_string):
    # Remove special characters
    cleaned_string = ''.join(e for e in input_string if e.isalnum() or e.isspace())
    
    # Convert to lowercase
    lowercase_string = cleaned_string.lower()
    
    # Replace Swedish special characters
    replaced_string = lowercase_string.replace('å', 'a').replace('ä', 'a').replace('ö', 'o')
    
    # Insert underscores between words
    final_string = '_'.join(replaced_string.split())
    
    return final_string
