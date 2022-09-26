import logging
from skeleton_app import app


@app.route('/api/echo', methods=['GET', 'POST'])
def api_echo():
    return "OKOK"