'use client'

import { useEffect } from 'react';

// Singleton for audio context
let audioCtx: AudioContext | null = null;
let clickBuffer: AudioBuffer | null = null;
let isUnlocked = false;
let isLoadingClick = false;
let preloadedAudioData: ArrayBuffer | null = null;

// Preload the audio file immediately (doesn't require AudioContext)
if (typeof window !== 'undefined') {
  fetch('/futuristic-ui-digital-click-davies-aguirre-1-00-00.mp3')
    .then(res => res.arrayBuffer())
    .then(data => {
      preloadedAudioData = data;
      // If audio context is already initialized, decode it now
      if (audioCtx && !clickBuffer && !isLoadingClick) {
        decodeAudioData(data);
      }
    })
    .catch(err => console.warn('Failed to fetch click sound', err));
}

async function decodeAudioData(data: ArrayBuffer) {
  if (!audioCtx || clickBuffer || isLoadingClick) return;
  isLoadingClick = true;
  try {
    clickBuffer = await audioCtx.decodeAudioData(data.slice(0));
  } catch (err) {
    console.warn('Failed to decode audio data', err);
  } finally {
    isLoadingClick = false;
  }
}

function initAudio() {
  if (typeof window === 'undefined') return;

  if (!audioCtx) {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }

  if (audioCtx) {
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    // If we have the prefetched data but haven't decoded it yet
    if (preloadedAudioData && !clickBuffer) {
      decodeAudioData(preloadedAudioData);
    }
  }
  
  isUnlocked = true;
}

function playSound(buffer: AudioBuffer | null, volume = 0.5, playbackRate = 1.0) {
  if (!audioCtx || !buffer) return;
  try {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.playbackRate.value = playbackRate;
    
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = volume;
    
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    source.start(0);
  } catch (err) {
    console.warn('Audio playback failed', err);
  }
}

export function playClickSound() {
  playSound(clickBuffer, 0.5, 1.0);
}

export function playHoverSound() {
  // Use the same click sound for hover, but faster and quieter
  // This creates a cohesive UI sound experience
  if (clickBuffer) {
    playSound(clickBuffer, 0.1, 2.0);
  }
}

export function useGlobalClickSound() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastHoveredElement: HTMLElement | null = null;

    const handleInteraction = () => {
      if (!isUnlocked) {
        initAudio();
      }
    };

    const isInteractable = (target: HTMLElement) => {
      return target.closest('button') || 
             target.closest('a') || 
             target.closest('[role="button"]') || 
             target.closest('.sound-click') ||
             target.closest('.sound-hover');
    };

    const handlePointerDown = (e: PointerEvent | MouseEvent | TouchEvent) => {
      handleInteraction();
      
      const target = e.target as HTMLElement;
      if (isInteractable(target)) {
        playClickSound();
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverTarget = isInteractable(target);
      
      if (hoverTarget && hoverTarget !== lastHoveredElement) {
        // Only play hover if it's not a touch device (prevent hover sound on tap)
        if (window.matchMedia('(hover: hover)').matches) {
          playHoverSound();
        }
        lastHoveredElement = hoverTarget as HTMLElement;
      } else if (!hoverTarget) {
        lastHoveredElement = null;
      }
    };

    // Use pointerdown for faster response than click
    document.addEventListener('pointerdown', handlePointerDown as EventListener, { capture: true, passive: true });
    // Keep touchstart to ensure audio context unlocking on iOS
    document.addEventListener('touchstart', handleInteraction, { capture: true, passive: true });
    document.addEventListener('mouseover', handleMouseOver, { capture: true, passive: true });

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown as EventListener, { capture: true });
      document.removeEventListener('touchstart', handleInteraction, { capture: true });
      document.removeEventListener('mouseover', handleMouseOver, { capture: true });
    };
  }, []);
}

// Keep this exported for legacy/manual usage
export function useHoverSound() {
  return playHoverSound;
}
