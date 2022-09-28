import asyncio
import websockets
from datetime import datetime
import json


async def consumer_handler(websocket):
    async for message in websocket:
        # await consumer(message)
        print(message)

async def producer_handler(websocket):
    while True:
        # message = await producer()
        now = datetime.utcnow().isoformat() + "Z"
        json_message = json.dumps({
            "time": now
        })
        await websocket.send(json_message)
        await asyncio.sleep(1)


connected_websocket_set = set()

async def handler2(websocket):
    # Register.
    connected_websocket_set.add(websocket)
    try:
        await asyncio.gather(
            consumer_handler(websocket),
            producer_handler(websocket),
        )
        # Broadcast a message to all connected clients.
        # while True:
        #     now = datetime.utcnow().isoformat() + "Z"
        #     json_message = json.dumps({
        #         "time": now
        #     })
        #     websockets.broadcast(connected_websocket_set, json_message)
        #     await asyncio.sleep(1)
    finally:
        # Unregister.
        connected_websocket_set.remove(websocket)


async def main():
    # async with websockets.serve(echo, "localhost", 8765):
    async with websockets.serve(handler2, "127.0.0.1", 5678):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())