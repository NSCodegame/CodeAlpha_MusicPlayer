# Music Player

A modern, feature-rich music player built with HTML, CSS, and JavaScript. This player includes all the requested features and more!

## Features

### Core Features ✅
- **Play/Pause Control**: Main play button with visual feedback
- **Next/Previous**: Navigate through the playlist
- **Progress Bar**: Visual progress indicator with seek functionality
- **Volume Control**: Adjustable volume with visual feedback
- **Song Information**: Displays current song title and artist
- **Time Display**: Shows current time and total duration

### Advanced Features ✅
- **Playlist Management**: Full playlist with 25 songs from your music collection
- **Shuffle Mode**: Randomize playlist order
- **Repeat Mode**: Loop current song
- **Autoplay**: Automatically play next song when current ends
- **Keyboard Shortcuts**: Control player with keyboard
- **Responsive Design**: Works on desktop and mobile devices

### UI/UX Features ✅
- **Modern Design**: Beautiful gradient background and glass-morphism effects
- **Animated Album Art**: Rotating animation when playing
- **Hover Effects**: Interactive buttons with smooth transitions
- **Visual Feedback**: Active states for buttons and playlist items
- **Smooth Animations**: CSS transitions and keyframe animations

## How to Use

### Basic Controls
- **Play/Pause**: Click the large play button or press `Spacebar`
- **Next Song**: Click the forward button or press `Right Arrow`
- **Previous Song**: Click the backward button or press `Left Arrow`
- **Volume**: Use the volume slider to adjust audio level
- **Seek**: Click or drag on the progress bar to jump to specific time

### Advanced Controls
- **Shuffle**: Click the shuffle button to randomize playlist order
- **Repeat**: Click the repeat button to loop current song
- **Autoplay**: Click the autoplay button to automatically play next song
- **Playlist**: Click "Playlist" button to show/hide song list

### Keyboard Shortcuts
- `Spacebar` - Play/Pause
- `Left Arrow` - Previous song
- `Right Arrow` - Next song
- `M` - Mute/Unmute
- `L` - Toggle playlist

## Included Songs

The player comes with 25 diverse songs including:
- Bollywood and Sufi music
- Jazz and electronic tracks
- Nature sounds and ambient music
- Popular songs like "Faded" and "Rather Be"
- Traditional Indian music

## Technical Details

### File Structure
```
MusicPlayer/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and animations
├── script.js           # JavaScript functionality
├── music_player/       # Audio files directory
│   ├── *.mp3          # 25 audio files
└── README.md          # This documentation
```

### Technologies Used
- **HTML5**: Semantic structure and audio element
- **CSS3**: Modern styling, animations, and responsive design
- **JavaScript ES6+**: Class-based architecture with modern features
- **Font Awesome**: Icons for better user experience

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Features in Detail

### 1. Audio Controls
- Full HTML5 Audio API integration
- Real-time progress tracking
- Accurate time display
- Smooth seeking functionality

### 2. Playlist Management
- Dynamic playlist rendering
- Click-to-play functionality
- Active song highlighting
- Song count display

### 3. Visual Design
- Gradient backgrounds
- Glass-morphism effects
- Smooth hover animations
- Responsive layout
- Modern typography

### 4. User Experience
- Intuitive controls
- Visual feedback for all actions
- Keyboard accessibility
- Mobile-friendly interface

## Getting Started

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Click** on any song in the playlist to start playing
4. **Use** the controls to navigate and customize your experience

## Customization

### Adding New Songs
1. Place your `.mp3` files in the `music_player/` directory
2. Update the `loadPlaylist()` method in `script.js`
3. Add song information following the existing format

### Styling Changes
- Modify `style.css` to change colors, fonts, or layout
- Update CSS variables for consistent theming
- Adjust responsive breakpoints as needed

### Functionality Extensions
- Add more keyboard shortcuts
- Implement playlist import/export
- Add audio visualization
- Include equalizer functionality

## Performance Notes

- Audio files are loaded on-demand
- Smooth animations use CSS transforms
- Efficient event handling with proper cleanup
- Responsive design optimized for all screen sizes

## License

This project is open source and available under the MIT License.

---

**Enjoy your music! 🎵** 