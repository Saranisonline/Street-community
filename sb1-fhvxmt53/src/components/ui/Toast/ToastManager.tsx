import React from 'react';
import { createRoot } from 'react-dom/client';
import Toast from './Toast';

type ToastFunction = (message: string) => void;

interface ToastManager {
  success: ToastFunction;
  error: ToastFunction;
}

class ToastManagerImpl implements ToastManager {
  private container: HTMLDivElement | null = null;

  constructor() {
    if (typeof document !== 'undefined') {
      this.container = document.createElement('div');
      document.body.appendChild(this.container);
    }
  }

  private show(message: string, type: 'success' | 'error') {
    if (!this.container) return;

    const wrapper = document.createElement('div');
    this.container.appendChild(wrapper);

    const root = createRoot(wrapper);
    root.render(
      <Toast
        message={message}
        type={type}
        onClose={() => {
          root.unmount();
          wrapper.remove();
        }}
      />
    );
  }

  success: ToastFunction = (message) => {
    this.show(message, 'success');
  };

  error: ToastFunction = (message) => {
    this.show(message, 'error');
  };
}

export const toast = new ToastManagerImpl();