import { createBrowserRouter } from 'react-router-dom';
import App from '@src/App.tsx';
import ErrorPage from '@pages/error-page.tsx';
import IndexPage from '@pages/index-page.tsx';
import ButtonPage from '@pages/button-page.tsx';
import ButtonGroupPage from '@pages/button-group-page.tsx';
import InputPage from '@pages/input-page.tsx';
import InputGroupPage from '@pages/input-group-page.tsx';
import SelectPage from '@pages/select-page.tsx';
import CheckboxPage from '@pages/checkbox-page.tsx';
import RadioPage from '@pages/radio-page.tsx';
import RangePage from '@pages/range-page.tsx';
import FloatingLabelPage from '@pages/floating-label-page.tsx';
import CardPage from '@pages/card-page.tsx';
import AlertPage from '@pages/alert-page.tsx';
import BadgePage from '@pages/badge-page';
import AccordionPage from '@pages/accordion-page.tsx';
import BreadcrumbPage from '@pages/breadcrumb-page.tsx';
import CarouselPage from '@pages/carousel-page.tsx';
import CloseButtonPage from '@pages/close-button-page.tsx';
import CollapsePage from '@pages/collapse-page.tsx';
import DropdownPage from '@pages/dropdown-page.tsx';

/**
 * Configure sidebar menu.
 */
export enum MenuEnum {
  Button = '/pages/button',
  ButtonGroup = '/pages/button-group',
  Input = '/pages/input',
  InputGroup = '/pages/input-group',
  Select = '/pages/select',
  Checkbox = '/pages/checkbox',
  Radio = '/pages/radio',
  Range = '/pages/range',
  FloatingLabel = '/pages/floating-label',
  Card = '/pages/card',
  Alert = '/pages/alert',
  Badge = '/pages/badge',
  Accordion = '/pages/accordion',
  Breadcrumb = '/pages/breadcrumb',
  Carousel = '/pages/carousel',
  CloseButton = '/pages/close-button',
  Collapse = '/pages/collapse',
  Dropdown = '/pages/dropdown',
}

/**
 * Configure router.
 */
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <IndexPage /> },
            {
              path: 'pages/button',
              element: <ButtonPage />,
            },
            {
              path: 'pages/button-group',
              element: <ButtonGroupPage />,
            },
            {
              path: 'pages/input',
              element: <InputPage />,
            },
            {
              path: 'pages/input-group',
              element: <InputGroupPage />,
            },
            {
              path: 'pages/select',
              element: <SelectPage />,
            },
            {
              path: 'pages/checkbox',
              element: <CheckboxPage />,
            },
            {
              path: 'pages/radio',
              element: <RadioPage />,
            },
            {
              path: 'pages/range',
              element: <RangePage />,
            },
            {
              path: 'pages/floating-label',
              element: <FloatingLabelPage />,
            },
            {
              path: 'pages/card',
              element: <CardPage />,
            },
            {
              path: 'pages/alert',
              element: <AlertPage />,
            },
            {
              path: 'pages/badge',
              element: <BadgePage />,
            },
            {
              path: 'pages/accordion',
              element: <AccordionPage />,
            },
            {
              path: 'pages/breadcrumb',
              element: <BreadcrumbPage />,
            },
            {
              path: 'pages/carousel',
              element: <CarouselPage />,
            },
            {
              path: 'pages/close-button',
              element: <CloseButtonPage />,
            },
            {
              path: 'pages/collapse',
              element: <CollapsePage />,
            },
            {
              path: 'pages/dropdown',
              element: <DropdownPage />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: __APP_PUBLIC_BASE_PATH__,
  },
);

export default router;
