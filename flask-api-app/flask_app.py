import logging

from skeleton_app import app
from skeleton_app.logger import Logger

def setup_logging():
    logging.getLogger('pika').setLevel(logging.WARNING)
    logging.getLogger('geventwebsocket').setLevel(logging.INFO)
    log = Logger()
    return log


if __name__ == "__main__":
    log = setup_logging()
    log.info("Program start", source="program", event="start")
    app.run(host='0.0.0.0', port=31000, debug=True)
    log.info("Program complete", source="program", event="complete")
