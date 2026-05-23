import { ref, onMounted, onUnmounted, type Ref } from "vue";

/**
 * Terminal composable for console-like text effects
 * Provides typewriter, ASCII art, boot sequence, cursor blink, and cargo-cult prompts
 */

// ──────────────────────────────────────────────
// ASCII Banner — "SIPLHES" in big block letters
// ──────────────────────────────────────────────
export const ASCII_BANNER = `
███████╗██╗██████╗ ██╗     ██╗  ██╗███████╗███████╗
██╔════╝██║██╔══██╗██║     ██║  ██║██╔════╝██╔════╝
███████╗██║██████╔╝██║     ███████║█████╗  ███████╗
╚════██║██║██╔═══╝ ██║     ██╔══██║██╔══╝  ╚════██║
███████║██║██║     ███████╗██║  ██║███████╗███████║
╚══════╝╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝
                                                   
`;

export const ASCII_SEPARATOR = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

// ──────────────────────────────────────────────
// Boot messages shown during the loading sequence
// ──────────────────────────────────────────────
export const BOOT_MESSAGES = [
  { text: 'Initializing SIPLHES kernel...', delay: 200 },
  { text: 'Loading system modules...', delay: 150 },
  { text: 'Mounting file systems...', delay: 180 },
  { text: 'Starting display server...', delay: 220 },
  { text: 'Establishing neural interface...', delay: 160 },
  { text: 'System ready. Welcome, Joseph.', delay: 300 },
];

// ──────────────────────────────────────────────
// useBootSequence — manages the boot-up animation
// ──────────────────────────────────────────────
export function useBootSequence() {
  const isBooting = ref(true);
  const bootProgress = ref(0);
  const currentMessage = ref('');
  const isComplete = ref(false);

  let cancelled = false;

  async function start() {
    isBooting.value = true;
    isComplete.value = false;
    bootProgress.value = 0;

    for (let i = 0; i < BOOT_MESSAGES.length; i++) {
      if (cancelled) break;
      const msg = BOOT_MESSAGES[i];
      currentMessage.value = msg.text;
      bootProgress.value = Math.round(((i + 1) / BOOT_MESSAGES.length) * 100);

      // Type out the message character by character
      if (typeof window !== 'undefined') {
        await sleep(msg.delay + Math.random() * 100);
      }
    }

    if (!cancelled) {
      currentMessage.value = '';
      isComplete.value = true;
      // Brief pause before transitioning
      await sleep(800);
      isBooting.value = false;
    }
  }

  function cancel() {
    cancelled = true;
    isBooting.value = false;
    isComplete.value = false;
  }

  return { isBooting, bootProgress, currentMessage, isComplete, start, cancel };
}

// ──────────────────────────────────────────────
// useTypewriter — reactive character-by-character reveal
// ──────────────────────────────────────────────
export function useTypewriter() {
  const displayedText = ref('');
  const isTyping = ref(false);
  const isDone = ref(false);

  let timer: ReturnType<typeof setInterval> | null = null;

  function start(text: string, speed = 30, onChar?: () => void) {
    stop();
    displayedText.value = '';
    isTyping.value = true;
    isDone.value = false;
    let index = 0;

    // Handle HTML content by parsing it carefully
    // For simple text, just reveal character by character
    timer = setInterval(() => {
      if (index < text.length) {
        displayedText.value += text[index];
        index++;
        onChar?.();
      } else {
        isTyping.value = false;
        isDone.value = true;
        if (timer) clearInterval(timer);
        timer = null;
      }
    }, speed);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    isTyping.value = false;
  }

  function reset() {
    stop();
    displayedText.value = '';
    isDone.value = false;
  }

  onUnmounted(() => stop());

  return { displayedText, isTyping, isDone, start, stop, reset };
}

// ──────────────────────────────────────────────
// useCursorBlink — reactive blinking cursor
// ──────────────────────────────────────────────
export function useCursorBlink(initialVisible = true) {
  const visible = ref(initialVisible);

  let timer: ReturnType<typeof setInterval> | null = null;

  function start(interval = 530) {
    stop();
    visible.value = true;
    timer = setInterval(() => {
      visible.value = !visible.value;
    }, interval);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    visible.value = true;
  }

  onMounted(() => start());
  onUnmounted(() => stop());

  return { visible, start, stop };
}

// ──────────────────────────────────────────────
// useCommandHistory — simple shell history simulation
// ──────────────────────────────────────────────
export function useCommandHistory() {
  const history = ref<string[]>([]);
  const currentIndex = ref(-1);

  function push(cmd: string) {
    history.value.push(cmd);
    currentIndex.value = history.value.length;
  }

  function up(): string | null {
    if (history.value.length === 0) return null;
    currentIndex.value = Math.max(0, currentIndex.value - 1);
    return history.value[currentIndex.value] ?? null;
  }

  function down(): string | null {
    if (history.value.length === 0) return null;
    currentIndex.value = Math.min(history.value.length - 1, currentIndex.value + 1);
    return history.value[currentIndex.value] ?? null;
  }

  return { history, push, up, down, currentIndex };
}

// ──────────────────────────────────────────────
// useMatrixRain — falling code rain for full-screen effect
// ──────────────────────────────────────────────
export function useMatrixRain(canvasRef: Ref<HTMLCanvasElement | null>) {
  let animationId: number | null = null;
  let drops: number[] = [];
  let columns = 0;

  function start() {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / 20);
    drops = Array(columns).fill(1);

    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillStyle = Math.random() > 0.98 ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)';
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    }

    draw();
  }

  function stop() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    const canvas = canvasRef.value;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }

  function resize() {
    const canvas = canvasRef.value;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / 20);
    drops = Array(columns).fill(1);
  }

  onMounted(() => {
    window.addEventListener('resize', resize);
  });

  onUnmounted(() => {
    stop();
    window.removeEventListener('resize', resize);
  });

  return { start, stop };
}

// ──────────────────────────────────────────────
// Utility
// ──────────────────────────────────────────────
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
