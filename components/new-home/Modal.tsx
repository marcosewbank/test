import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface ModalProps {
  modalImage?: {
    /** @description Image for big screens */
    desktop?: LiveImage;
    /** @description Image for small screens */
    mobile?: LiveImage;
    /** @description image alt text */
    alt?: string;
  };
  content?: HTML;
  badge?: string;
}

function Modal(props: ModalProps) {
  console.log("🚀 ~ file: Card.tsx:49 ~ Card ~ props:", props);

  return <>oiioi</>;
}

export default Modal;
