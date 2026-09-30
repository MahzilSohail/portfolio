'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Search,
  X,
  Sparkles,
  Volume2,
  VolumeX,
  FileText,
  Mail,
  FolderGit2,
  Cpu,
  Send,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import confetti from 'canvas-confetti';
import { cyberAudio } from '../../lib/cyberAudio';

export default function CommandCenter({
  isOpen,
  onClose,
  soundEnabled,
  onToggleSound
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [terminalOutput, setTerminalOutput] = useState('');
  const inputRef = useRef(null);

  const commands = [
    {
      id: 'sec-home',
      label: 'Navigate: Hero Command Core',
      icon: Terminal,
      category: 'Navigation',
      action: () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-about',
      label: 'Navigate: Bio & Academic Credentials',
      icon: Cpu,
      category: 'Navigation',
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-projects',
      label: 'Navigate: 3D Featured Projects',
      icon: FolderGit2,
      category: 'Navigation',
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-skills',
      label: 'Navigate: Skills 3D Galaxy & Stack',
      icon: Sparkles,
      category: 'Navigation',
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-experience',
      label: 'Navigate: Professional Experience Timeline',
      icon: FileText,
      category: 'Navigation',
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'sec-contact',
      label: 'Navigate: Direct Terminal / Contact',
      icon: Send,
      category: 'Navigation',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'toggle-sound',
      label: `Toggle Cyber Audio (${soundEnabled ? 'Mute' : 'Enable'})`,
      icon: soundEnabled ? VolumeX : Volume2,
      category: 'System',
      action: () => {
        onToggleSound();
        cyberAudio?.playClick();
      }
    },
    {
      id: 'resume',
      label: 'Download Verified Engineering Resume (PDF)',
      icon: FileText,
      category: 'Actions',
      action: () => {
        window.open('/resume/Resume.pdf', '_blank');
        cyberAudio?.playSuccess();
        onClose();
      }
    },
    {
      id: 'github',
      label: 'Visit GitHub Profile (@MahzilSohail)',
      icon: GithubIcon,
      category: 'Social',
      action: () => {
        window.open('https://github.com/MahzilSohail', '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      label: 'Connect on LinkedIn (/in/mahzil-sohail)',
      icon: LinkedinIcon,
      category: 'Social',
      action: () => {
        window.open('https://www.linkedin.com/in/mahzil-sohail-02412b371/', '_blank');
        onClose();
      }
    },
    {
      id: 'easter-hire',
      label: 'Execute Protocol: sudo hire-mahzil',
      icon: Sparkles,
      category: 'Easter Egg',
      action: () => {
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
        cyberAudio?.playSuccess();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }
  ];

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      cyberAudio?.playWarp();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
        cyberAudio?.playHover();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
        cyberAudio?.playHover();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="command-palette-backdrop" onClick={onClose}>
      <div
        className="command-palette-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="cmd-header">
          <div className="cmd-header-left">
            <span className="cmd-dot red"></span>
            <span className="cmd-dot yellow"></span>
            <span className="cmd-dot green"></span>
            <span className="cmd-title">
              <Terminal className="w-4 h-4 inline-block mr-1 text-cyan-400" />
              HUD Core v2.6 • Developer Terminal
            </span>
          </div>
          <button onClick={onClose} className="cmd-close-btn" aria-label="Close HUD">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="cmd-input-wrapper">
          <Search className="w-5 h-5 cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Type a command, navigate, or search stack (e.g. 'Flutter', 'Projects', 'hire')..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <span className="cmd-kbd-hint">ESC to close</span>
        </div>

        {/* Command Items List */}
        <div className="cmd-list">
          {filtered.length > 0 ? (
            filtered.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  className={`cmd-item ${isSelected ? 'selected' : ''}`}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => cmd.action()}
                >
                  <div className="cmd-item-icon">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="cmd-item-info">
                    <span className="cmd-item-label">{cmd.label}</span>
                    <span className="cmd-item-cat">{cmd.category}</span>
                  </div>
                  {isSelected && <span className="cmd-enter-badge">↵ Enter</span>}
                </div>
              );
            })
          ) : (
            <div className="cmd-empty">
              <span>No direct command matches found for "{query}". Try "Projects" or "sudo hire"</span>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="cmd-footer">
          <div className="cmd-shortcuts">
            <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>Ctrl</kbd> + <kbd>K</kbd> Toggle HUD</span>
          </div>
          <span className="cmd-status-indicator">
            <span className="status-dot"></span> System Online
          </span>
        </div>
      </div>
    </div>
  );
}
