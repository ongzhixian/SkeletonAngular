from flask import Flask, current_app

app = Flask(__name__, static_url_path='/', static_folder='wwwroot', template_folder='templates')

from skeleton_app.lifecycle_handlers import *
from skeleton_app.pages import *
from skeleton_app.api import *

