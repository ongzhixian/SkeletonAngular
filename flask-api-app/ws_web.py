import asyncio
from datetime import datetime
import random
import websockets
import json

async def time(websocket, path):
    while True:
        now = datetime.utcnow().isoformat() + "Z"
        json_message = json.dumps({
            "time": now
        })
        print("Send json message")
        await websocket.send(json_message)
        # await asyncio.sleep(random.random() * 3)
        await asyncio.sleep(1)


start_server = websockets.serve(time, "127.0.0.1", 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()