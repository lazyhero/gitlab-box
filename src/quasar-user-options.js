import "./styles/quasar.scss";
import "@quasar/extras/material-icons/material-icons.css";
import {
  Dialog,
  LoadingBar,
  QLayout,
  QHeader,
  QAvatar,
  QToolbarTitle,
  QToolbar,
  QTab,
  QTabs,
  QPageContainer,
  QForm,
  QInput,
  QBtn,
  QStep,
  QStepper,
  QStepperNavigation,
  QIcon,
  QSeparator,
  QList,
  QItem,
  QItemSection,
  QMenu,
  ClosePopup,
  Ripple,
  QDrawer,
  QScrollArea,
  QExpansionItem,
  QCard,
  QCardSection,
  QTable,
  QTd,
  QTr,
  QInnerLoading,
  QDialog,
  QBadge,
  QTree,
  QChip,
  QItemLabel,
  QSpace,
  QPage,
  QSlider,
  QSlideItem,
  QSlideTransition,
  QSpinner,
  QDate,
  QPopupProxy,
  QSplitter,
  QSelect,
  QMarkupTable,
} from "quasar";

import iconSet from "quasar/icon-set/material-icons";

// To be used on app.use(Quasar, { ... })
export default {
  components: {
    QSplitter,
    QPopupProxy,
    QDate,
    QSpinner,
    QSlider,
    QSlideItem,
    QSlideTransition,
    QPage,
    QSpace,
    QItemLabel,
    QChip,
    QTree,
    QTable,
    QTd,
    QTr,
    QInnerLoading,
    QDialog,
    QBadge,
    QCard,
    QCardSection,
    QExpansionItem,
    QScrollArea,
    QDrawer,
    QLayout,
    QHeader,
    QAvatar,
    QToolbarTitle,
    QToolbar,
    QTab,
    QTabs,
    QPageContainer,
    QForm,
    QInput,
    QBtn,
    QStep,
    QStepper,
    QStepperNavigation,
    QIcon,
    QSeparator,
    QList,
    QItem,
    QItemSection,
    QMenu,
    QSelect,
    QMarkupTable,
  },
  directives: {
    ClosePopup,
    Ripple,
  },
  config: {},
  plugins: {
    Dialog,
    LoadingBar,
  },
  iconSet,
};