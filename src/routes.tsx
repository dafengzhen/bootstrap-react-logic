import AccordionPage from '@pages/accordion-page.tsx';
import AlertPage from '@pages/alert-page.tsx';
import BadgePage from '@pages/badge-page';
import BreadcrumbPage from '@pages/breadcrumb-page.tsx';
import ButtonGroupPage from '@pages/button-group-page.tsx';
import ButtonPage from '@pages/button-page.tsx';
import CardPage from '@pages/card-page.tsx';
import CarouselPage from '@pages/carousel-page.tsx';
import CheckboxPage from '@pages/checkbox-page.tsx';
import CloseButtonPage from '@pages/close-button-page.tsx';
import CollapsePage from '@pages/collapse-page.tsx';
import DropdownPage from '@pages/dropdown-page.tsx';
import ErrorPage from '@pages/error-page.tsx';
import FloatingLabelPage from '@pages/floating-label-page.tsx';
import IndexPage from '@pages/index-page.tsx';
import InputGroupPage from '@pages/input-group-page.tsx';
import InputPage from '@pages/input-page.tsx';
import ListGroupPage from '@pages/list-group-page.tsx';
import ModalPage from '@pages/modal-page.tsx';
import NavPage from '@pages/nav-page.tsx';
import NavbarPage from '@pages/navbar-page.tsx';
import OffcanvasPage from '@pages/offcanvas-page.tsx';
import PaginationPage from '@pages/pagination-page.tsx';
import PlaceholderPage from '@pages/placeholder-page.tsx';
import PopoverPage from '@pages/popover-page.tsx';
import ProgressPage from '@pages/progress-page.tsx';
import RadioPage from '@pages/radio-page.tsx';
import RangePage from '@pages/range-page.tsx';
import ScrollspyPage from '@pages/scrollspy-page.tsx';
import SelectPage from '@pages/select-page.tsx';
import SpinnerPage from '@pages/spinner-page.tsx';
import TablePage from '@pages/table-page.tsx';
import ToastPage from '@pages/toast-page.tsx';
import TooltipPage from '@pages/tooltip-page.tsx';
import App from '@src/App.tsx';
import { createBrowserRouter } from 'react-router-dom';

/**
 * Configure sidebar menu.
 */
export enum MenuEnum {
  Accordion = '/pages/accordion',
  Alert = '/pages/alert',
  Badge = '/pages/badge',
  Breadcrumb = '/pages/breadcrumb',
  Button = '/pages/button',
  ButtonGroup = '/pages/button-group',
  Card = '/pages/card',
  Carousel = '/pages/carousel',
  Checkbox = '/pages/checkbox',
  CloseButton = '/pages/close-button',
  Collapse = '/pages/collapse',
  Dropdown = '/pages/dropdown',
  FloatingLabel = '/pages/floating-label',
  Input = '/pages/input',
  InputGroup = '/pages/input-group',
  ListGroup = '/pages/list-group',
  Modal = '/pages/modal',
  Nav = '/pages/nav',
  Navbar = '/pages/navbar',
  Offcanvas = '/pages/offcanvas',
  Pagination = '/pages/pagination',
  Placeholder = '/pages/placeholder',
  Popover = '/pages/popover',
  Progress = '/pages/progress',
  Radio = '/pages/radio',
  Range = '/pages/range',
  Scrollspy = '/pages/scrollspy',
  Select = '/pages/select',
  Spinner = '/pages/spinner',
  Table = '/pages/table',
  Toast = '/pages/toast',
  Tooltip = '/pages/tooltip',
}

/**
 * Configure router.
 */
const router = createBrowserRouter(
  [
    {
      children: [
        {
          children: [
            { element: <IndexPage />, index: true },
            {
              element: <ButtonPage />,
              path: 'pages/button',
            },
            {
              element: <ButtonGroupPage />,
              path: 'pages/button-group',
            },
            {
              element: <InputPage />,
              path: 'pages/input',
            },
            {
              element: <InputGroupPage />,
              path: 'pages/input-group',
            },
            {
              element: <SelectPage />,
              path: 'pages/select',
            },
            {
              element: <CheckboxPage />,
              path: 'pages/checkbox',
            },
            {
              element: <RadioPage />,
              path: 'pages/radio',
            },
            {
              element: <RangePage />,
              path: 'pages/range',
            },
            {
              element: <FloatingLabelPage />,
              path: 'pages/floating-label',
            },
            {
              element: <CardPage />,
              path: 'pages/card',
            },
            {
              element: <AlertPage />,
              path: 'pages/alert',
            },
            {
              element: <BadgePage />,
              path: 'pages/badge',
            },
            {
              element: <AccordionPage />,
              path: 'pages/accordion',
            },
            {
              element: <BreadcrumbPage />,
              path: 'pages/breadcrumb',
            },
            {
              element: <CarouselPage />,
              path: 'pages/carousel',
            },
            {
              element: <CloseButtonPage />,
              path: 'pages/close-button',
            },
            {
              element: <CollapsePage />,
              path: 'pages/collapse',
            },
            {
              element: <DropdownPage />,
              path: 'pages/dropdown',
            },
            {
              element: <ListGroupPage />,
              path: 'pages/list-group',
            },
            {
              element: <ModalPage />,
              path: 'pages/modal',
            },
            {
              element: <NavbarPage />,
              path: 'pages/navbar',
            },
            {
              element: <NavPage />,
              path: 'pages/nav',
            },
            {
              element: <OffcanvasPage />,
              path: 'pages/offcanvas',
            },
            {
              element: <PaginationPage />,
              path: 'pages/pagination',
            },
            {
              element: <PlaceholderPage />,
              path: 'pages/placeholder',
            },
            {
              element: <PopoverPage />,
              path: 'pages/popover',
            },
            {
              element: <ProgressPage />,
              path: 'pages/progress',
            },
            {
              element: <SpinnerPage />,
              path: 'pages/spinner',
            },
            {
              element: <ScrollspyPage />,
              path: 'pages/scrollspy',
            },
            {
              element: <ToastPage />,
              path: 'pages/toast',
            },
            {
              element: <TooltipPage />,
              path: 'pages/tooltip',
            },
            {
              element: <TablePage />,
              path: 'pages/table',
            },
          ],
          errorElement: <ErrorPage />,
        },
      ],
      element: <App />,
      errorElement: <ErrorPage />,
      path: '/',
    },
  ],
  {
    basename: __APP_PUBLIC_BASE_PATH__,
  },
);

export default router;
