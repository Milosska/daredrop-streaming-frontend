import { io } from 'socket.io-client';

export const socket = io.connect(
  'https://daredrop-streaming-backend.onrender.com'
);
