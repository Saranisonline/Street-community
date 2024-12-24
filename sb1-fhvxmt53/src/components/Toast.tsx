import React from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

function Toast({ message, type, onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg`}>
      {message}
    </div>
  );
}

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