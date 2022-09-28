import asyncio
import websockets
from datetime import datetime
import json


async def echo(websocket):
    async for message in websocket:
        await websocket.send(message)


async def handler(websocket):
    while True:
        message = await websocket.recv()
        print(message)

async def time(websocket):
    while True:
        now = datetime.utcnow().isoformat() + "Z"
        json_message = json.dumps({
            "time": now
        })
        print("Send json message")
        await websocket.send(json_message)
        # await asyncio.sleep(random.random() * 3)
        await asyncio.sleep(1)


async def main():
    # async with websockets.serve(echo, "localhost", 8765):
    async with websockets.serve(handler, "127.0.0.1", 5678):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())