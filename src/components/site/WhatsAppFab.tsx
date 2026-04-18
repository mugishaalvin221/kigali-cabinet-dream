const WHATSAPP_NUMBER = "250787240775";
const MESSAGE = encodeURIComponent(
  "Hello MDF Furniture Rwanda, I'd like to discuss a custom cabinet project.",
);

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.43c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.92 4.62 4.09.65.28 1.15.45 1.54.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.16.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 4.8c-6.18 0-11.2 5.02-11.2 11.2 0 1.97.52 3.9 1.5 5.6L4.8 27.2l5.78-1.51a11.16 11.16 0 0 0 5.43 1.41h.01c6.18 0 11.2-5.02 11.2-11.2 0-2.99-1.16-5.81-3.28-7.92A11.13 11.13 0 0 0 16.02 4.8z" />
      </svg>
    </a>
  );
}
