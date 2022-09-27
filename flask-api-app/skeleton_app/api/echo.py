import logging
from skeleton_app import app
from flask import make_response

@app.route('/api/echo', methods=['GET', 'POST'])
def api_echo():
    response = make_response("OKOK")
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response, 200

@app.route('/api/preflight', methods=['OPTIONS'])
def api_preflight():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response