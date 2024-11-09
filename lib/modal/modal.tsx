import { type ElementType, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ModalProps } from './types.ts';
import { clsxStyle, clsxUnique, convertBsKeyToVar, filterOptions, isValueValid } from '../tools';
import ModalDialog from './modal-dialog.tsx';
import ModalContent from './modal-content.tsx';
import ModalHeader from './modal-header.tsx';
import ModalFooter from './modal-footer.tsx';
import ModalTitle from './modal-title.tsx';
import ModalBody from './modal-body.tsx';
import ModalBackdrop from './modal-backdrop.tsx';
import { createPortal } from 'react-dom';

const Modal = function Modal<T extends ElementType = 'div'>(props: ModalProps<T>) {
  const {
    as: Component = 'div',
    dropOldClass,
    variables,
    className,
    style,
    header,
    footer,
    title,
    body,
    fade = true,
    visible: visibleByDefault = false,
    container: containerByDefault,
    static: staticByDefault,
    onVisibleChange,
    titleProps,
    scrollable,
    centered,
    bodyProps,
    footerProps,
    headerProps,
    backdropProps,
    dialogProps,
    contentProps,
    toggle,
    size,
    fullscreen,
    ...rest
  } = props;

  const [block, setBlock] = useState(false);
  const [show, setShow] = useState(false);
  const [modalStatic, setModalStatic] = useState(false);
  const [visibleModal, setVisibleModal] = useState(visibleByDefault);
  const [visibleModalBackdrop, setVisibleModalBackdrop] = useState(visibleByDefault);
  const [mouseEnterModalContent, setMouseEnterModalContent] = useState(false);
  const [container, setContainer] = useState<HTMLElement | undefined | null>(
    typeof containerByDefault !== 'string' ? containerByDefault : null,
  );
  const element = useRef<HTMLDivElement | null>(null);

  const renderOptions = useMemo(() => {
    const finalClass = clsxUnique(
      !dropOldClass && 'modal',
      fade && !container && 'fade',
      show && 'show',
      block && 'd-block',
      modalStatic && 'modal-static',
      className,
    );
    const finalStyle = clsxStyle({ ...variables, ...style }, true, (_, key) => {
      return convertBsKeyToVar(key);
    });

    return filterOptions(
      {
        className: finalClass,
        style: finalStyle,
      },
      isValueValid,
    );
  }, [block, className, container, dropOldClass, fade, modalStatic, show, style, variables]);

  const onClickModal = useCallback(() => {
    if (mouseEnterModalContent) {
      return;
    }

    if (staticByDefault) {
      setModalStatic(true);
      return;
    }

    setVisibleModal(false);
    setVisibleModalBackdrop(false);
    onVisibleChange?.(false);
  }, [mouseEnterModalContent, onVisibleChange, staticByDefault]);
  const onMouseEnterModalContent = useCallback(() => {
    setMouseEnterModalContent(true);
  }, []);
  const onMouseLeaveModalContent = useCallback(() => {
    setMouseEnterModalContent(false);
  }, []);

  useEffect(() => {
    if (visibleModal && !block) {
      setBlock(true);
      return;
    }

    const currentElement = element.current;
    if (!currentElement) {
      return;
    }

    const onTransitionend = () => {
      if (!visibleModal) {
        setBlock(false);
      }

      if (staticByDefault) {
        setModalStatic(false);
      }
    };

    currentElement.addEventListener('transitionend', onTransitionend);

    let frame: number;
    if (visibleModal) {
      frame = requestAnimationFrame(() => setShow(true));
    } else {
      setShow(false);
    }

    return () => {
      currentElement.removeEventListener('transitionend', onTransitionend);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [block, staticByDefault, visibleModal]);
  useEffect(() => {
    setVisibleModal(visibleByDefault);
    setVisibleModalBackdrop(visibleByDefault);
  }, [visibleByDefault]);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      let element: HTMLElement | null = null;
      if (typeof containerByDefault === 'string') {
        if (containerByDefault.startsWith('#')) {
          element = document.getElementById(containerByDefault.slice(1));
        } else if (containerByDefault.startsWith('.')) {
          element = document.querySelector(containerByDefault.slice(1));
        } else {
          element = document.querySelector(containerByDefault);
        }
      } else if (containerByDefault) {
        element = containerByDefault;
      }

      setContainer(element);
    }
  }, [containerByDefault]);

  return (
    <>
      {document !== undefined && (
        <>
          {createPortal(
            <Component {...rest} {...renderOptions} ref={element} onClick={onClickModal}>
              <ModalDialog
                {...dialogProps}
                scrollable={scrollable}
                centered={centered}
                size={size}
                fullscreen={fullscreen}
              >
                <ModalContent
                  {...contentProps}
                  onMouseEnter={onMouseEnterModalContent}
                  onMouseLeave={onMouseLeaveModalContent}
                >
                  {header ? (
                    <ModalHeader {...headerProps}>
                      {title && <ModalTitle {...titleProps}>{title}</ModalTitle>}
                      {header}
                    </ModalHeader>
                  ) : (
                    <ModalHeader {...headerProps}>
                      {title && <ModalTitle {...titleProps}>{title}</ModalTitle>}
                    </ModalHeader>
                  )}

                  {body && <ModalBody {...bodyProps}>{body}</ModalBody>}

                  {footer && <ModalFooter {...footerProps}>{footer}</ModalFooter>}
                </ModalContent>
              </ModalDialog>
            </Component>,
            container ? container : document.body,
          )}

          {createPortal(
            <ModalBackdrop
              {...backdropProps}
              fade={fade}
              visible={visibleModalBackdrop}
              toggle={toggle}
            ></ModalBackdrop>,
            container ? container : document.body,
          )}
        </>
      )}
    </>
  );
};

Modal.Dialog = ModalDialog;

Modal.Content = ModalContent;

Modal.Header = ModalHeader;

Modal.Footer = ModalFooter;

Modal.Title = ModalTitle;

Modal.Body = ModalBody;

Modal.Backdrop = ModalBackdrop;

Modal.displayName = 'BRL.Modal';

export default Modal;
