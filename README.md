# Drawing Board

A Vite-powered drawing application with multiple modes for testing, collaboration, and real-time interaction. Built with React Router for seamless navigation and powered by Supabase for real-time collaboration and data persistence.

## 🚀 Live Demo

The application is deployed on Vercel. Visit the live demo to explore all features.
https://drawing-board-azure.vercel.app

## 📋 Features

- **Interactive Drawing Canvas**: Full-featured drawing board with multiple tools and brushes
- **Test Mode**: Default landing page for testing drawing functionality offline
- **Collaboration Mode**: Real-time collaborative drawing with room-based sessions
- **Real-Time Mode**: Live drawing sessions with instant synchronization across users
- **Room Management**: Create and join drawing rooms for collaborative sessions
- **Cloud Synchronization**: Powered by Supabase for seamless data persistence and real-time updates
- **Real-time Updates**: Supabase Realtime for instant drawing synchronization across all connected users
- **Data Persistence**: All drawings and room data stored securely in Supabase database

## 🛣️ Routing Guide

The application uses React Router for navigation. Here are the available routes:

### Routes Overview

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | TestMode | Default drawing board - Offline testing mode |
| `/realtime-mode` | JoinRoom | Join or create a real-time drawing room |
| `/realtime-mode/:roomId` | RealTimeMode | Live collaborative drawing session |
| `/collab-mode/:roomId` | CollabMode | Collaborative drawing mode with room ID |

### Navigation Examples

#### 🧪 Test Mode (Default)
```
https://drawing-board-azure.vercel.app/
```
- Opens directly when visiting the root URL
- Offline drawing board for testing and practice
- No real-time features - perfect for individual use

#### ⚡ Real-Time Mode
```
https://drawing-board-azure.vercel.app/realtime-mode
```
- Opens the room joining interface
- Create or join live drawing sessions
- Real-time collaboration with other users

#### 🤝 Collaboration Mode
```
https://drawing-board-azure.vercel.app/collab-mode
```
- Opens the room joining interface
- Create or join live drawing sessions
- collaboration with other users



## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <your-project-name>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📁 Project Structure

```
src/
├── App.jsx             # Main routing configuration
├── pages/
│   ├── TestMode.jsx    # Offline drawing board component
│   ├── CollabMode.jsx  # Collaborative drawing mode component
│   ├── RealTimeMode.jsx # Real-time drawing session component
│   └── JoinRoom.jsx    # Room joining interface
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks for drawing and real-time features
├── utils/              # Utility functions and Supabase configurations
│   └── supabase.js     # Supabase client configuration
└── ...
```

## 🔧 Technologies Used

- **Vite**: Fast build tool and development server
- **React**: Frontend framework for interactive UI
- **React Router**: Client-side routing for seamless navigation
- **Canvas API**: HTML5 Canvas for drawing functionality
- **Supabase**: Backend as a Service (BaaS) for database, and collab features

- **PostgreSQL**: Robust database backend via Supabase
- **Vercel**: Deployment and hosting platform

## 📖 Usage Tips

1. **Solo Drawing**: Start at the root URL (`/`) to access offline drawing mode
2. **Quick Collaboration**: Use `/collab-mode/[room-name]` to jump directly into a drawing room
3. **Real-time Sessions**: 
   - Go to `/realtime-mode` to see available rooms or create new ones
   - Share `/realtime-mode/[room-name]` links with others for instant collaboration
4. **Room IDs**: Can be any string - use descriptive names like `team-meeting-2024` or `art-class-101`
5. **Drawing Tools**: Each mode supports full drawing capabilities with brushes, colors, and shapes

7. **Real-time Sync**: All drawing actions are instantly synchronized via Supabase Realtime

## 🎨 Drawing Features

- **Multiple Brush Types**: Pencil, marker, highlighter, and more
- **Color Palette**: Full color picker with custom colors
- **Shape Tools**: Rectangle, circle, line, and freehand drawing
- **Undo/Redo**: Full history management for all drawing actions
- **Real-time Cursors**: See other users' mouse positions in collaborative modes via Supabase Realtime
- **Export Options**: Save your drawings as images

## 🗄️ Supabase Integration

This application leverages Supabase for its backend infrastructure:

- **Database**: PostgreSQL database for storing drawing data, room information, and user sessions
- **Storage**: Secure storage for exported drawings and assets

### Environment Variables

To run this project locally, you'll need to set up your Supabase credentials:

```bash
VITE_SUPABASE_API_KEY=your_supabase_project_API

```

## 🚀 Deployment

This project is configured for Vercel deployment. The routing is handled client-side, so make sure your deployment platform supports SPA (Single Page Application) routing.


---

**Quick Start Links:**
- 🏠 [Home (Test Mode)](https://drawing-board-azure.vercel.app/)
- ⚡ [Join Real-Time Room](https://drawing-board-azure.vercel.app/realtime-mode)
- 🤝 [Collaboration Example](https://drawing-board-azure.vercel.app/collab-mode)
