import json
import logging
from skeleton_app import app
from flask import make_response, stream_with_context, Response
from time import sleep

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


@app.route('/api/data-stream')
def api_data_stream():
    def generate():
        message_id = 0
        while True:
            sleep(1)
            message_id = message_id + 1
            yield json.dumps({
                'id': f'{message_id}'
            })
    # return app.response_class(stream_with_context(generate()), mimetype='application/json')
    response = app.response_class(stream_with_context(generate()), mimetype='application/json')
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


@app.route('/api/sse', methods=['GET'])
def api_sse():

    def stream():
        message_id = 0
        while True:
            sleep(1)
            message_id = message_id + 1
            yield json.dumps({
                'id': f'{message_id}'
            })
    return Response(stream(), mimetype='text/event-stream')