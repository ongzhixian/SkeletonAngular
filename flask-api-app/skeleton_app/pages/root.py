import logging

from flask import render_template
from skeleton_app import app

@app.route('/')
def root_get():
    return render_template('index.html')
