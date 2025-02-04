import type { MouseEvent } from 'react';

import { type ElementType, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import type { ModalProps } from './types.ts';

import { classx, convertBsKeyToVar, stylex } from '../tools';
import ModalBackdrop from './modal-backdrop.tsx';
import ModalBody from './modal-body.tsx';
import ModalContent from './modal-content.tsx';
import ModalDialog from './modal-dialog.tsx';
import ModalFooter from './modal-footer.tsx';
import ModalHeader from './modal-header.tsx';
import ModalTitle from './modal-title.tsx';

const Modal = function Modal<T extends ElementType = 'div'>(props: ModalProps<T>) {
  const {
    as: Component = 'div' as ElementType,
    backdrop: backdropByDefault = true,
    backdropProps,
    body,
    bodyProps,
    centered,
    className,
    container: containerByDefault,
    contentProps,
    dialogProps,
    dropOldClass,
    footer,
    footerProps,
    fullscreen,
    header,
    headerProps,
    onVisibleChange,
    scrollable,
    size,
    static: staticByDefault,
    style,
    title,
    titleProps,
    toggle,
    variables,
    visible: visibleByDefault = false,
    ...rest
  } = props;

  const [fade] = useState(true);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalStatic, setModalStatic] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const modalContentElement = useRef<HTMLDivElement>(null);

  const renderOptions = useMemo(() => {
    const finalClass = classx(
      !dropOldClass && 'modal d-block',
      fade && !container && 'fade',
      show && 'show',
      modalStatic && 'modal-static',
      className,
    );
    const finalStyle = stylex((_, key) => ({ tKey: convertBsKeyToVar(key) }), variables, style);

    return {
      className: finalClass,
      style: finalStyle,
    };
  }, [className, container, dropOldClass, fade, modalStatic, show, style, variables]);

  const onClickModal = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const modalContent = modalContentElement.current;
      if (modalContent && modalContent.contains(e.target as Node)) {
        return;
      }

      if (staticByDefault) {
        setModalStatic(true);
        return;
      }

      setShow(false);
      onVisibleChange?.(false);
    },
    [onVisibleChange, staticByDefault],
  );

  const onTransitionEnd = useCallback(() => {
    if (!visibleByDefault) {
      setVisible(false);
    }

    if (staticByDefault) {
      setModalStatic(false);
    }
  }, [staticByDefault, visibleByDefault]);

  useEffect(() => {
    if (visibleByDefault && !visible) {
      setVisible(true);
    }

    if (visible) {
      setShow(visibleByDefault);
    }
  }, [visible, visibleByDefault]);

  useEffect(() => {
    if (typeof containerByDefault === 'string') {
      const selector: HTMLElement | null = containerByDefault.startsWith('#')
        ? document.getElementById(containerByDefault.slice(1))
        : document.querySelector(containerByDefault);

      setContainer(selector);
    } else {
      setContainer(containerByDefault || null);
    }
  }, [containerByDefault]);

  return (
    visible && (
      <>
        {createPortal(
          <Component {...rest} {...renderOptions} onClick={onClickModal} onTransitionEnd={onTransitionEnd}>
            <ModalDialog
              {...dialogProps}
              centered={centered}
              fullscreen={fullscreen}
              scrollable={scrollable}
              size={size}
            >
              <ModalContent
                {...contentProps}
                onRef={(instance: HTMLDivElement | null) => {
                  modalContentElement.current = instance;
                }}
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

        <>
          {backdropByDefault &&
            createPortal(
              <ModalBackdrop {...backdropProps} toggle={toggle} visible={visible} />,
              container ? container : document.body,
            )}
        </>
      </>
    )
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
