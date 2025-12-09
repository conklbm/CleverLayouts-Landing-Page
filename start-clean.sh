#!/bin/bash
# Kill any existing node processes running on ports 3000-3010
for port in {3000..3010}; do
  pid=$(lsof -ti:$port)
  if [ ! -z "$pid" ]; then
    echo "Killing process on port $port (PID: $pid)"
    kill -9 $pid 2>/dev/null
  fi
done

echo "Starting dev server..."
npm run dev
