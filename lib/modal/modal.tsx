import { type ElementType, useCallback, useEffect, useState, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

import type { ModalProps } from './types.ts';

import { convertBsKeyToVar, filterOptions, isValueValid, clsxUnique, clsxStyle } from '../tools';
import ModalBackdrop from './modal-backdrop.tsx';
import ModalContent from './modal-content.tsx';
import ModalDialog from './modal-dialog.tsx';
import ModalFooter from './modal-footer.tsx';
import ModalHeader from './modal-header.tsx';
import ModalTitle from './modal-title.tsx';
import ModalBody from './modal-body.tsx';

const Modal = function Modal<T extends ElementType = 'div'>(props: ModalProps<T>) {
  const {
    visible: visibleByDefault = false,
    container: containerByDefault,
    static: staticByDefault,
    as: Component = 'div',
    onVisibleChange,
    backdropProps,
    contentProps,
    dropOldClass,
    dialogProps,
    fade = true,
    footerProps,
    headerProps,
    fullscreen,
    scrollable,
    titleProps,
    bodyProps,
    className,
    variables,
    centered,
    footer,
    header,
    toggle,
    style,
    title,
    body,
    size,
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
    if (typeof containerByDefault === 'string') {
      const selector: HTMLElement | null = containerByDefault.startsWith('#')
        ? document.getElementById(containerByDefault.slice(1))
        : document.querySelector(containerByDefault);

      setContainer(selector);
    } else {
      setContainer(containerByDefault);
    }
  }, [containerByDefault]);

  return (
    <>
      {document !== undefined && (
        <>
          {createPortal(
            <Component {...rest} {...renderOptions} onClick={onClickModal} ref={element}>
              <ModalDialog
                {...dialogProps}
                fullscreen={fullscreen}
                scrollable={scrollable}
                centered={centered}
                size={size}
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
              visible={visibleModalBackdrop}
              toggle={toggle}
              fade={fade}
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
