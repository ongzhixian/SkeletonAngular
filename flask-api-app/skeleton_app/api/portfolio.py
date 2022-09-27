import json
import logging
from skeleton_app import app
from flask import make_response, stream_with_context, Response, request
from time import sleep
import os
from uuid import uuid4

@app.route('/api/portfolio/list', methods=['GET'])
def api_portfolio_list():
    portfolio_collection_path = os.path.join(os.getcwd(), "data", "portfolio")
    files = os.listdir(portfolio_collection_path)
    portfolio = {
        "id": "someId",
        "name": "some portfolio name",
        "description": "some portfolio description"
    }

    portfolio_file_path = os.path.join(portfolio_collection_path, "sample-portfolio.json")

    with open(portfolio_file_path, "w", encoding='utf-8') as out_file:
        out_file.write(json.dumps(portfolio, indent=4))

    response = make_response("OKO")
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

@app.route('/api/portfolio/<id>', methods=['GET'])
def api_portfolio(id):
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

@app.route('/api/portfolio', methods=['POST'])
def api_portfolio_post():
    if not request.is_json:
        return "Bad request", 400

    json_data = request.json

    portfolio_collection_path = os.path.join(os.getcwd(), "data", "portfolio")
    portfolio_uuid = str(uuid4())
    portfolio = {
        "file_type": "portfolio",
        "id": portfolio_uuid,
        "name": json_data['name'] if 'name' in json_data else '',
        "description": json_data['description'] if 'description' in json_data else ''
    }

    portfolio_file_path = os.path.join(portfolio_collection_path, f"portfolio-{portfolio_uuid}.json")

    with open(portfolio_file_path, "w", encoding='utf-8') as out_file:
        out_file.write(json.dumps(portfolio, indent=4))

    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response, 201


@app.route('/api/portfolio', methods=['PUT'])
def api_portfolio_put():
    """Update/Replace"""
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


@app.route('/api/portfolio', methods=['PATCH'])
def api_portfolio_patch():
    """Update/Modify"""
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


@app.route('/api/portfolio/id', methods=['DELETE'])
def api_portfolio_delete(id):
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response
