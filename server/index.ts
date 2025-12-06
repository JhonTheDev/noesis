import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/status', (req: Request, res: Response) => {
  res.json({ message: 'API is running successfully!' });
});

const rootDir = path.resolve(__dirname, '..'); 
const frontendDir = path.join(rootDir, 'dist', 'public');

app.use(express.static(frontendDir));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Serving files from: ${frontendDir}`);
});
