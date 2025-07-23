class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.playlist = [];
        this.currentIndex = 0;
        this.isPlaying = false;
        this.isShuffled = false;
        this.isRepeating = false;
        this.isAutoplay = false;
        this.originalPlaylist = [];
        
        this.initializeElements();
        this.setupEventListeners();
        this.loadPlaylist();
        this.updateUI();
    }

    initializeElements() {
        // Audio controls
        this.playBtn = document.getElementById('play-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.shuffleBtn = document.getElementById('shuffle-btn');
        this.repeatBtn = document.getElementById('repeat-btn');
        this.autoplayBtn = document.getElementById('autoplay-btn');
        
        // Display elements
        this.songTitle = document.getElementById('song-title');
        this.songArtist = document.getElementById('song-artist');
        this.currentTimeDisplay = document.getElementById('current-time');
        this.totalTimeDisplay = document.getElementById('total-time');
        this.progressFill = document.getElementById('progress-fill');
        this.progressSlider = document.getElementById('progress-slider');
        this.volumeSlider = document.getElementById('volume-slider');
        this.artPlaceholder = document.querySelector('.art-placeholder');
        
        // Playlist elements
        this.playlistContainer = document.getElementById('playlist-container');
        this.playlistToggle = document.getElementById('playlist-toggle');
        this.playlistElement = document.getElementById('playlist');
        this.songCount = document.getElementById('song-count');
    }

    setupEventListeners() {
        // Play/Pause button
        this.playBtn.addEventListener('click', () => this.togglePlay());
        
        // Previous/Next buttons
        this.prevBtn.addEventListener('click', () => this.previous());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Shuffle, Repeat, Autoplay buttons
        this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
        this.repeatBtn.addEventListener('click', () => this.toggleRepeat());
        this.autoplayBtn.addEventListener('click', () => this.toggleAutoplay());
        
        // Progress bar
        this.progressSlider.addEventListener('input', (e) => this.seek(e.target.value));
        
        // Volume control
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        
        // Playlist toggle
        this.playlistToggle.addEventListener('click', () => this.togglePlaylist());
        
        // Audio events
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.handleSongEnd());
        this.audio.addEventListener('loadedmetadata', () => this.updateTotalTime());
        this.audio.addEventListener('play', () => this.onPlay());
        this.audio.addEventListener('pause', () => this.onPause());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    loadPlaylist() {
        // Define the playlist with the available audio files
        this.playlist = [
            {
                title: "A Soulful Bollywood Journey",
                artist: "Ambient Bliss",
                file: "music_player/a-soulful-bollywood-journey-in-68-bpm-ambient-bliss-271064.mp3",
                duration: "3:45"
            },
            {
                title: "Anjaane Raaste",
                artist: "Unknown Artist",
                file: "music_player/anjaane-raaste-274727.mp3",
                duration: "4:12"
            },
            {
                title: "Ariana Grande Type Beat",
                artist: "Producer",
                file: "music_player/ariana-grande-type-beat-262945.mp3",
                duration: "3:30"
            },
            {
                title: "Bechain Raat Ki Dhun",
                artist: "Sufi Vibes",
                file: "music_player/bechain-raat-ki-dhun-271067.mp3",
                duration: "4:05"
            },
            {
                title: "Dil Ka Safar",
                artist: "Romantic Melodies",
                file: "music_player/dil-ka-safar-1-262304.mp3",
                duration: "3:55"
            },
            {
                title: "Dil Ke Parinde",
                artist: "Sufi Journey",
                file: "music_player/dil-ke-parinde-a-sufi-inspired-journey-of-love-and-loss-271056.mp3",
                duration: "4:20"
            },
            {
                title: "Faded",
                artist: "Alan Walker",
                file: "music_player/Faded.mp3",
                duration: "3:32"
            },
            {
                title: "Falling Down",
                artist: "Unknown Artist",
                file: "music_player/fallingdown.mp3",
                duration: "3:15"
            },
            {
                title: "Forest Lullaby",
                artist: "Nature Sounds",
                file: "music_player/forest-lullaby-110624.mp3",
                duration: "2:45"
            },
            {
                title: "Jazz Background Music",
                artist: "Jazz Ensemble",
                file: "music_player/jazz-background-music-325355.mp3",
                duration: "3:50"
            },
            {
                title: "Jeevan Ki Dhun",
                artist: "Life Melodies",
                file: "music_player/jeevan-ki-dhun-267039.mp3",
                duration: "4:08"
            },
            {
                title: "Leva Eternity",
                artist: "Electronic Vibes",
                file: "music_player/leva-eternity-149473.mp3",
                duration: "3:25"
            },
            {
                title: "Midnight",
                artist: "Night Sounds",
                file: "music_player/midnight-265721.mp3",
                duration: "3:40"
            },
            {
                title: "Mohanveena Indian Guitar",
                artist: "Traditional",
                file: "music_player/mohanveena-indian-guitar-374179.mp3",
                duration: "4:15"
            },
            {
                title: "Pyar Ki Baaton Mein",
                artist: "Love Songs",
                file: "music_player/pyar-ki-baaton-mein-271066.mp3",
                duration: "3:58"
            },
            {
                title: "Rang Ulat Palat",
                artist: "Colorful Melodies",
                file: "music_player/rang-ulat-pulat-271063.mp3",
                duration: "4:02"
            },
            {
                title: "Rather Be",
                artist: "Clean Bandit",
                file: "music_player/Rather Be.mp3",
                duration: "3:47"
            },
            {
                title: "Red Flowers",
                artist: "Nature",
                file: "music_player/red-flowers-335651.mp3",
                duration: "3:20"
            },
            {
                title: "Relax Jazz Driftwood Dreams",
                artist: "Jazz Relaxation",
                file: "music_player/relax-jazz-driftwood-dreams-357555.mp3",
                duration: "4:30"
            },
            {
                title: "Royalty Free Music Party Jazz",
                artist: "Party Jazz",
                file: "music_player/royalty-free-music-party-jazz-323147.mp3",
                duration: "3:35"
            },
            {
                title: "Stay",
                artist: "Unknown Artist",
                file: "music_player/stay.mp3",
                duration: "3:28"
            },
            {
                title: "The Beat of Nature",
                artist: "Natural Sounds",
                file: "music_player/the-beat-of-nature-122841.mp3",
                duration: "3:10"
            },
            {
                title: "The Best Jazz Club in New Orleans",
                artist: "Jazz Club",
                file: "music_player/the-best-jazz-club-in-new-orleans-164472.mp3",
                duration: "4:45"
            },
            {
                title: "Tourism Outro",
                artist: "Travel Music",
                file: "music_player/tourism_outro-339553.mp3",
                duration: "2:55"
            }
        ];

        this.originalPlaylist = [...this.playlist];
        this.renderPlaylist();
        this.updateSongCount();
    }

    renderPlaylist() {
        this.playlistElement.innerHTML = '';
        
        this.playlist.forEach((song, index) => {
            const playlistItem = document.createElement('div');
            playlistItem.className = 'playlist-item';
            playlistItem.innerHTML = `
                <i class="fas fa-music"></i>
                <div class="playlist-item-info">
                    <div class="playlist-item-title">${song.title}</div>
                    <div class="playlist-item-artist">${song.artist}</div>
                </div>
                <div class="playlist-item-duration">${song.duration}</div>
            `;
            
            playlistItem.addEventListener('click', () => this.playSong(index));
            this.playlistElement.appendChild(playlistItem);
        });
    }

    playSong(index) {
        if (index >= 0 && index < this.playlist.length) {
            this.currentIndex = index;
            const song = this.playlist[index];
            
            this.audio.src = song.file;
            this.audio.load();
            
            this.updateSongInfo(song);
            this.updatePlaylistActive();
            
            // Auto-play if autoplay is enabled
            if (this.isAutoplay) {
                this.audio.play();
            }
        }
    }

    togglePlay() {
        if (this.playlist.length === 0) return;
        
        if (this.audio.src === '') {
            this.playSong(0);
        }
        
        if (this.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play();
        }
    }

    previous() {
        if (this.playlist.length === 0) return;
        
        this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
        this.playSong(this.currentIndex);
        
        if (this.isPlaying) {
            this.audio.play();
        }
    }

    next() {
        if (this.playlist.length === 0) return;
        
        this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
        this.playSong(this.currentIndex);
        
        if (this.isPlaying) {
            this.audio.play();
        }
    }

    seek(value) {
        const time = (value / 100) * this.audio.duration;
        this.audio.currentTime = time;
    }

    setVolume(value) {
        this.audio.volume = value / 100;
        this.updateVolumeIcon(value);
    }

    updateVolumeIcon(value) {
        const volumeIcon = document.querySelector('.volume-container i');
        if (value == 0) {
            volumeIcon.className = 'fas fa-volume-mute';
        } else if (value < 50) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-up';
        }
    }

    toggleShuffle() {
        this.isShuffled = !this.isShuffled;
        this.shuffleBtn.classList.toggle('active', this.isShuffled);
        
        if (this.isShuffled) {
            this.shufflePlaylist();
        } else {
            this.playlist = [...this.originalPlaylist];
            this.renderPlaylist();
        }
    }

    shufflePlaylist() {
        const shuffled = [...this.playlist];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        this.playlist = shuffled;
        this.renderPlaylist();
    }

    toggleRepeat() {
        this.isRepeating = !this.isRepeating;
        this.repeatBtn.classList.toggle('active', this.isRepeating);
    }

    toggleAutoplay() {
        this.isAutoplay = !this.isAutoplay;
        this.autoplayBtn.classList.toggle('active', this.isAutoplay);
    }

    togglePlaylist() {
        this.playlistContainer.classList.toggle('show');
    }

    updateProgress() {
        if (this.audio.duration) {
            const progress = (this.audio.currentTime / this.audio.duration) * 100;
            this.progressFill.style.width = progress + '%';
            this.progressSlider.value = progress;
            this.currentTimeDisplay.textContent = this.formatTime(this.audio.currentTime);
        }
    }

    updateTotalTime() {
        this.totalTimeDisplay.textContent = this.formatTime(this.audio.duration);
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    updateSongInfo(song) {
        this.songTitle.textContent = song.title;
        this.songArtist.textContent = song.artist;
    }

    updatePlaylistActive() {
        const items = this.playlistElement.querySelectorAll('.playlist-item');
        items.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentIndex);
        });
    }

    updateSongCount() {
        this.songCount.textContent = `${this.playlist.length} songs`;
    }

    updateUI() {
        this.updatePlaylistActive();
        this.updateSongCount();
    }

    onPlay() {
        this.isPlaying = true;
        this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        this.artPlaceholder.classList.add('playing');
    }

    onPause() {
        this.isPlaying = false;
        this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
        this.artPlaceholder.classList.remove('playing');
    }

    handleSongEnd() {
        if (this.isRepeating) {
            this.audio.currentTime = 0;
            this.audio.play();
        } else {
            this.next();
        }
    }

    handleKeyboard(e) {
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                this.togglePlay();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.previous();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.next();
                break;
            case 'KeyM':
                e.preventDefault();
                this.setVolume(0);
                this.volumeSlider.value = 0;
                break;
            case 'KeyL':
                e.preventDefault();
                this.togglePlaylist();
                break;
        }
    }
}

// Initialize the music player when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
}); 