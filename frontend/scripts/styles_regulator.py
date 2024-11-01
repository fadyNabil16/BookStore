import os
import argparse
import re

def open_tsx_files(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".tsx" or ".jsx"):
                file_path = os.path.join(root, file)
                write_styles(file_path)

def write_styles(file_path):
    className_pattern = re.compile(r'className="[^"]*"]')
    with open(file_path, "r") as f:
        content = f.read()
        if 'className' in content:
            start_index = content.find('className')


        
            

    

parser = argparse.ArgumentParser()
parser.add_argument('--root', action='store', dest='root', default='')
args = parser.parse_args()


open_tsx_files(args.root)