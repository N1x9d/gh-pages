"use strict";



define('books-demo/app', ['exports', 'books-demo/resolver', 'ember-load-initializers', 'books-demo/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('books-demo/components/application-footer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books-demo/components/books-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books-demo/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('books-demo/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books-demo/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('books-demo/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('books-demo/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('books-demo/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('books-demo/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('books-demo/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('books-demo/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('books-demo/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('books-demo/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('books-demo/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('books-demo/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('books-demo/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('books-demo/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('books-demo/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books-demo/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books-demo/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('books-demo/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('books-demo/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books-demo/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('books-demo/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-demo/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('books-demo/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('books-demo/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('books-demo/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('books-demo/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('books-demo/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('books-demo/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-demo/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('books-demo/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('books-demo/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('books-demo/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('books-demo/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('books-demo/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('books-demo/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('books-demo/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('books-demo/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('books-demo/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('books-demo/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books-demo/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books-demo/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('books-demo/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('books-demo/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books-demo/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('books-demo/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('books-demo/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('books-demo/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books-demo/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('books-demo/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('books-demo/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('books-demo/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('books-demo/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('books-demo/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books-demo/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('books-demo/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('books-demo/components/input-stars', ['exports', '@abcum/ember-helpers/components/input-stars'], function (exports, _inputStars) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inputStars.default;
    }
  });
});
define('books-demo/components/remember-scroll', ['exports', '@abcum/ember-helpers/components/remember-scroll'], function (exports, _rememberScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rememberScroll.default;
    }
  });
});
define('books-demo/components/scroll-block', ['exports', '@abcum/ember-helpers/components/scroll-block'], function (exports, _scrollBlock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollBlock.default;
    }
  });
});
define('books-demo/components/speackers-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books-demo/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('books-demo/helpers/-link-to-params', ['exports', 'ember-angle-bracket-invocation-polyfill/helpers/-link-to-params'], function (exports, _linkToParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToParams.default;
    }
  });
});
define('books-demo/helpers/abs', ['exports', '@abcum/ember-helpers/helpers/abs'], function (exports, _abs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
});
define('books-demo/helpers/add', ['exports', '@abcum/ember-helpers/helpers/add'], function (exports, _add) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  Object.defineProperty(exports, 'add', {
    enumerable: true,
    get: function () {
      return _add.add;
    }
  });
});
define('books-demo/helpers/alert', ['exports', '@abcum/ember-helpers/helpers/alert'], function (exports, _alert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alert.default;
    }
  });
  Object.defineProperty(exports, 'alert', {
    enumerable: true,
    get: function () {
      return _alert.alert;
    }
  });
});
define('books-demo/helpers/and', ['exports', '@abcum/ember-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('books-demo/helpers/any-by', ['exports', '@abcum/ember-helpers/helpers/any-by'], function (exports, _anyBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _anyBy.default;
    }
  });
  Object.defineProperty(exports, 'anyBy', {
    enumerable: true,
    get: function () {
      return _anyBy.anyBy;
    }
  });
});
define('books-demo/helpers/app-version', ['exports', 'books-demo/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('books-demo/helpers/append', ['exports', '@abcum/ember-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define('books-demo/helpers/array', ['exports', '@abcum/ember-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('books-demo/helpers/await', ['exports', '@abcum/ember-helpers/helpers/await'], function (exports, _await) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _await.default;
    }
  });
});
define('books-demo/helpers/begs-with', ['exports', '@abcum/ember-helpers/helpers/begs-with'], function (exports, _begsWith) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _begsWith.default;
    }
  });
  Object.defineProperty(exports, 'begsWith', {
    enumerable: true,
    get: function () {
      return _begsWith.begsWith;
    }
  });
});
define('books-demo/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('books-demo/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('books-demo/helpers/bytes', ['exports', '@abcum/ember-helpers/helpers/bytes'], function (exports, _bytes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bytes.default;
    }
  });
  Object.defineProperty(exports, 'bytes', {
    enumerable: true,
    get: function () {
      return _bytes.bytes;
    }
  });
});
define('books-demo/helpers/call', ['exports', '@abcum/ember-helpers/helpers/call'], function (exports, _call) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  Object.defineProperty(exports, 'call', {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
});
define('books-demo/helpers/camelize', ['exports', '@abcum/ember-helpers/helpers/camelize'], function (exports, _camelize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
define('books-demo/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('books-demo/helpers/capitalize', ['exports', '@abcum/ember-helpers/helpers/capitalize'], function (exports, _capitalize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
define('books-demo/helpers/ceil', ['exports', '@abcum/ember-helpers/helpers/ceil'], function (exports, _ceil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  Object.defineProperty(exports, 'ceil', {
    enumerable: true,
    get: function () {
      return _ceil.ceil;
    }
  });
});
define('books-demo/helpers/chain', ['exports', '@abcum/ember-helpers/helpers/chain'], function (exports, _chain) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chain.default;
    }
  });
  Object.defineProperty(exports, 'chain', {
    enumerable: true,
    get: function () {
      return _chain.chain;
    }
  });
});
define('books-demo/helpers/check', ['exports', '@abcum/ember-helpers/helpers/check'], function (exports, _check) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _check.default;
    }
  });
  Object.defineProperty(exports, 'check', {
    enumerable: true,
    get: function () {
      return _check.check;
    }
  });
});
define('books-demo/helpers/classify', ['exports', '@abcum/ember-helpers/helpers/classify'], function (exports, _classify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
define('books-demo/helpers/compact', ['exports', '@abcum/ember-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
define('books-demo/helpers/confirm', ['exports', '@abcum/ember-helpers/helpers/confirm'], function (exports, _confirm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirm.default;
    }
  });
  Object.defineProperty(exports, 'confirm', {
    enumerable: true,
    get: function () {
      return _confirm.confirm;
    }
  });
});
define('books-demo/helpers/console', ['exports', '@abcum/ember-helpers/helpers/console'], function (exports, _console) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _console.default;
    }
  });
  Object.defineProperty(exports, 'console', {
    enumerable: true,
    get: function () {
      return _console.console;
    }
  });
});
define('books-demo/helpers/contains', ['exports', '@abcum/ember-helpers/helpers/includes'], function (exports, _includes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(exports, 'includes', {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
});
define('books-demo/helpers/convert', ['exports', '@abcum/ember-helpers/helpers/convert'], function (exports, _convert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _convert.default;
    }
  });
  Object.defineProperty(exports, 'convert', {
    enumerable: true,
    get: function () {
      return _convert.convert;
    }
  });
});
define('books-demo/helpers/country', ['exports', '@abcum/ember-helpers/helpers/country'], function (exports, _country) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _country.default;
    }
  });
  Object.defineProperty(exports, 'country', {
    enumerable: true,
    get: function () {
      return _country.country;
    }
  });
});
define('books-demo/helpers/currency', ['exports', '@abcum/ember-helpers/helpers/currency'], function (exports, _currency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _currency.default;
    }
  });
  Object.defineProperty(exports, 'currency', {
    enumerable: true,
    get: function () {
      return _currency.currency;
    }
  });
});
define('books-demo/helpers/dasherize', ['exports', '@abcum/ember-helpers/helpers/dasherize'], function (exports, _dasherize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
define('books-demo/helpers/debounce', ['exports', '@abcum/ember-helpers/helpers/debounce'], function (exports, _debounce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _debounce.default;
    }
  });
  Object.defineProperty(exports, 'debounce', {
    enumerable: true,
    get: function () {
      return _debounce.debounce;
    }
  });
});
define('books-demo/helpers/dec', ['exports', '@abcum/ember-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define('books-demo/helpers/define', ['exports', '@abcum/ember-helpers/helpers/define'], function (exports, _define) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _define.default;
    }
  });
  Object.defineProperty(exports, 'define', {
    enumerable: true,
    get: function () {
      return _define.define;
    }
  });
});
define('books-demo/helpers/div', ['exports', '@abcum/ember-helpers/helpers/div'], function (exports, _div) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  Object.defineProperty(exports, 'div', {
    enumerable: true,
    get: function () {
      return _div.div;
    }
  });
});
define('books-demo/helpers/drag-get', ['exports', '@abcum/ember-helpers/helpers/drag-get'], function (exports, _dragGet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dragGet.default;
    }
  });
  Object.defineProperty(exports, 'dragGet', {
    enumerable: true,
    get: function () {
      return _dragGet.dragGet;
    }
  });
});
define('books-demo/helpers/drag-set', ['exports', '@abcum/ember-helpers/helpers/drag-set'], function (exports, _dragSet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dragSet.default;
    }
  });
  Object.defineProperty(exports, 'dragSet', {
    enumerable: true,
    get: function () {
      return _dragSet.dragSet;
    }
  });
});
define('books-demo/helpers/drop-effect', ['exports', '@abcum/ember-helpers/helpers/drop-effect'], function (exports, _dropEffect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dropEffect.default;
    }
  });
  Object.defineProperty(exports, 'dropEffect', {
    enumerable: true,
    get: function () {
      return _dropEffect.dropEffect;
    }
  });
});
define('books-demo/helpers/duration', ['exports', '@abcum/ember-helpers/helpers/duration'], function (exports, _duration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _duration.default;
    }
  });
  Object.defineProperty(exports, 'duration', {
    enumerable: true,
    get: function () {
      return _duration.duration;
    }
  });
});
define('books-demo/helpers/effect-allowed', ['exports', '@abcum/ember-helpers/helpers/effect-allowed'], function (exports, _effectAllowed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _effectAllowed.default;
    }
  });
  Object.defineProperty(exports, 'effectAllowed', {
    enumerable: true,
    get: function () {
      return _effectAllowed.effectAllowed;
    }
  });
});
define('books-demo/helpers/email', ['exports', '@abcum/ember-helpers/helpers/email'], function (exports, _email) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _email.default;
    }
  });
  Object.defineProperty(exports, 'email', {
    enumerable: true,
    get: function () {
      return _email.email;
    }
  });
});
define('books-demo/helpers/empty', ['exports', '@abcum/ember-helpers/helpers/empty'], function (exports, _empty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _empty.default;
    }
  });
  Object.defineProperty(exports, 'empty', {
    enumerable: true,
    get: function () {
      return _empty.empty;
    }
  });
});
define('books-demo/helpers/ends-with', ['exports', '@abcum/ember-helpers/helpers/ends-with'], function (exports, _endsWith) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _endsWith.default;
    }
  });
  Object.defineProperty(exports, 'endsWith', {
    enumerable: true,
    get: function () {
      return _endsWith.endsWith;
    }
  });
});
define('books-demo/helpers/env', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.env = env;

  //import  ENV  from './config/environment';


  function env(params /*, hash*/) {
    return params;
  }

  exports.default = Ember.Helper.helper(env);
});
define('books-demo/helpers/eq', ['exports', '@abcum/ember-helpers/helpers/eq'], function (exports, _eq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _eq.eq;
    }
  });
});
define('books-demo/helpers/every-by', ['exports', '@abcum/ember-helpers/helpers/every-by'], function (exports, _everyBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _everyBy.default;
    }
  });
  Object.defineProperty(exports, 'everyBy', {
    enumerable: true,
    get: function () {
      return _everyBy.everyBy;
    }
  });
});
define('books-demo/helpers/filter-by', ['exports', '@abcum/ember-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
define('books-demo/helpers/filter', ['exports', '@abcum/ember-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
define('books-demo/helpers/find-by', ['exports', '@abcum/ember-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
define('books-demo/helpers/find', ['exports', '@abcum/ember-helpers/helpers/find'], function (exports, _find) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _find.default;
    }
  });
  Object.defineProperty(exports, 'find', {
    enumerable: true,
    get: function () {
      return _find.find;
    }
  });
});
define('books-demo/helpers/first', ['exports', '@abcum/ember-helpers/helpers/first'], function (exports, _first) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _first.default;
    }
  });
  Object.defineProperty(exports, 'first', {
    enumerable: true,
    get: function () {
      return _first.first;
    }
  });
});
define('books-demo/helpers/flatten', ['exports', '@abcum/ember-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define('books-demo/helpers/floor', ['exports', '@abcum/ember-helpers/helpers/floor'], function (exports, _floor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  Object.defineProperty(exports, 'floor', {
    enumerable: true,
    get: function () {
      return _floor.floor;
    }
  });
});
define('books-demo/helpers/get-fio', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getFio = getFio;
  function getFio(params /*, hash*/) {
    let [firstName, lastName, patronymic] = params;
    return `${lastName} ${firstName} ${patronymic}`;
  }

  exports.default = Ember.Helper.helper(getFio);
});
define('books-demo/helpers/group-by', ['exports', '@abcum/ember-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
define('books-demo/helpers/gt', ['exports', '@abcum/ember-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('books-demo/helpers/gte', ['exports', '@abcum/ember-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('books-demo/helpers/history-back', ['exports', '@abcum/ember-helpers/helpers/history-back'], function (exports, _historyBack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _historyBack.default;
    }
  });
  Object.defineProperty(exports, 'historyBack', {
    enumerable: true,
    get: function () {
      return _historyBack.historyBack;
    }
  });
});
define('books-demo/helpers/history-forward', ['exports', '@abcum/ember-helpers/helpers/history-forward'], function (exports, _historyForward) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _historyForward.default;
    }
  });
  Object.defineProperty(exports, 'historyForward', {
    enumerable: true,
    get: function () {
      return _historyForward.historyForward;
    }
  });
});
define('books-demo/helpers/ignore', ['exports', '@abcum/ember-helpers/helpers/ignore'], function (exports, _ignore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignore.default;
    }
  });
  Object.defineProperty(exports, 'ignore', {
    enumerable: true,
    get: function () {
      return _ignore.ignore;
    }
  });
});
define('books-demo/helpers/inc', ['exports', '@abcum/ember-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define('books-demo/helpers/includes', ['exports', '@abcum/ember-helpers/helpers/includes'], function (exports, _includes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(exports, 'includes', {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
});
define('books-demo/helpers/inside', ['exports', '@abcum/ember-helpers/helpers/inside'], function (exports, _inside) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inside.default;
    }
  });
  Object.defineProperty(exports, 'inside', {
    enumerable: true,
    get: function () {
      return _inside.inside;
    }
  });
});
define('books-demo/helpers/intersect', ['exports', '@abcum/ember-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
define('books-demo/helpers/invoke', ['exports', '@abcum/ember-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define('books-demo/helpers/is-active', ['exports', '@abcum/ember-helpers/helpers/is-active'], function (exports, _isActive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isActive.default;
    }
  });
  Object.defineProperty(exports, 'isActive', {
    enumerable: true,
    get: function () {
      return _isActive.isActive;
    }
  });
});
define('books-demo/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('books-demo/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define('books-demo/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('books-demo/helpers/is-fulfilled', ['exports', '@abcum/ember-helpers/helpers/is-fulfilled'], function (exports, _isFulfilled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
  Object.defineProperty(exports, 'isFulfilled', {
    enumerable: true,
    get: function () {
      return _isFulfilled.isFulfilled;
    }
  });
});
define('books-demo/helpers/is-loaded', ['exports', '@abcum/ember-helpers/helpers/is-loaded'], function (exports, _isLoaded) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isLoaded.default;
    }
  });
  Object.defineProperty(exports, 'isLoaded', {
    enumerable: true,
    get: function () {
      return _isLoaded.isLoaded;
    }
  });
});
define('books-demo/helpers/is-pending', ['exports', '@abcum/ember-helpers/helpers/is-pending'], function (exports, _isPending) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isPending.default;
    }
  });
  Object.defineProperty(exports, 'isPending', {
    enumerable: true,
    get: function () {
      return _isPending.isPending;
    }
  });
});
define('books-demo/helpers/is-rejected', ['exports', '@abcum/ember-helpers/helpers/is-rejected'], function (exports, _isRejected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isRejected.default;
    }
  });
  Object.defineProperty(exports, 'isRejected', {
    enumerable: true,
    get: function () {
      return _isRejected.isRejected;
    }
  });
});
define('books-demo/helpers/is-updating', ['exports', '@abcum/ember-helpers/helpers/is-updating'], function (exports, _isUpdating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isUpdating.default;
    }
  });
  Object.defineProperty(exports, 'isUpdating', {
    enumerable: true,
    get: function () {
      return _isUpdating.isUpdating;
    }
  });
});
define('books-demo/helpers/is', ['exports', '@abcum/ember-helpers/helpers/is'], function (exports, _is) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _is.default;
    }
  });
  Object.defineProperty(exports, 'is', {
    enumerable: true,
    get: function () {
      return _is.is;
    }
  });
});
define('books-demo/helpers/isnt', ['exports', '@abcum/ember-helpers/helpers/isnt'], function (exports, _isnt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isnt.default;
    }
  });
  Object.defineProperty(exports, 'isnt', {
    enumerable: true,
    get: function () {
      return _isnt.isnt;
    }
  });
});
define('books-demo/helpers/ix', ['exports', '@abcum/ember-helpers/helpers/ix'], function (exports, _ix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ix.default;
    }
  });
  Object.defineProperty(exports, 'ix', {
    enumerable: true,
    get: function () {
      return _ix.ix;
    }
  });
});
define('books-demo/helpers/join', ['exports', '@abcum/ember-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
define('books-demo/helpers/last', ['exports', '@abcum/ember-helpers/helpers/last'], function (exports, _last) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _last.default;
    }
  });
  Object.defineProperty(exports, 'last', {
    enumerable: true,
    get: function () {
      return _last.last;
    }
  });
});
define('books-demo/helpers/lcwords', ['exports', '@abcum/ember-helpers/helpers/lcwords'], function (exports, _lcwords) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lcwords.default;
    }
  });
  Object.defineProperty(exports, 'lcwords', {
    enumerable: true,
    get: function () {
      return _lcwords.lcwords;
    }
  });
});
define('books-demo/helpers/length', ['exports', '@abcum/ember-helpers/helpers/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
  Object.defineProperty(exports, 'length', {
    enumerable: true,
    get: function () {
      return _length.length;
    }
  });
});
define('books-demo/helpers/linkify', ['exports', '@abcum/ember-helpers/helpers/linkify'], function (exports, _linkify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkify.default;
    }
  });
  Object.defineProperty(exports, 'linkify', {
    enumerable: true,
    get: function () {
      return _linkify.linkify;
    }
  });
});
define('books-demo/helpers/lowercase', ['exports', '@abcum/ember-helpers/helpers/lowercase'], function (exports, _lowercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(exports, 'lowercase', {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
define('books-demo/helpers/lt', ['exports', '@abcum/ember-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('books-demo/helpers/lte', ['exports', '@abcum/ember-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('books-demo/helpers/map-by', ['exports', '@abcum/ember-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
define('books-demo/helpers/map', ['exports', '@abcum/ember-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
define('books-demo/helpers/match-by', ['exports', '@abcum/ember-helpers/helpers/match-by'], function (exports, _matchBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _matchBy.default;
    }
  });
  Object.defineProperty(exports, 'matchBy', {
    enumerable: true,
    get: function () {
      return _matchBy.matchBy;
    }
  });
});
define('books-demo/helpers/max', ['exports', '@abcum/ember-helpers/helpers/max'], function (exports, _max) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function () {
      return _max.max;
    }
  });
});
define('books-demo/helpers/md5', ['exports', '@abcum/ember-helpers/helpers/md5'], function (exports, _md) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _md.default;
    }
  });
  Object.defineProperty(exports, 'md5', {
    enumerable: true,
    get: function () {
      return _md.md5;
    }
  });
});
define('books-demo/helpers/min', ['exports', '@abcum/ember-helpers/helpers/min'], function (exports, _min) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  Object.defineProperty(exports, 'min', {
    enumerable: true,
    get: function () {
      return _min.min;
    }
  });
});
define('books-demo/helpers/mod', ['exports', '@abcum/ember-helpers/helpers/mod'], function (exports, _mod) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  Object.defineProperty(exports, 'mod', {
    enumerable: true,
    get: function () {
      return _mod.mod;
    }
  });
});
define('books-demo/helpers/money', ['exports', '@abcum/ember-helpers/helpers/money'], function (exports, _money) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _money.default;
    }
  });
  Object.defineProperty(exports, 'money', {
    enumerable: true,
    get: function () {
      return _money.money;
    }
  });
});
define('books-demo/helpers/mult', ['exports', '@abcum/ember-helpers/helpers/mult'], function (exports, _mult) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  Object.defineProperty(exports, 'mult', {
    enumerable: true,
    get: function () {
      return _mult.mult;
    }
  });
});
define('books-demo/helpers/natural-sort', ['exports', '@abcum/ember-helpers/helpers/natural-sort'], function (exports, _naturalSort) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _naturalSort.default;
    }
  });
  Object.defineProperty(exports, 'naturalSort', {
    enumerable: true,
    get: function () {
      return _naturalSort.naturalSort;
    }
  });
});
define('books-demo/helpers/ne', ['exports', '@abcum/ember-helpers/helpers/ne'], function (exports, _ne) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ne.default;
    }
  });
  Object.defineProperty(exports, 'ne', {
    enumerable: true,
    get: function () {
      return _ne.ne;
    }
  });
});
define('books-demo/helpers/nl2br', ['exports', '@abcum/ember-helpers/helpers/nl2br'], function (exports, _nl2br) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nl2br.default;
    }
  });
  Object.defineProperty(exports, 'nl2br', {
    enumerable: true,
    get: function () {
      return _nl2br.nl2br;
    }
  });
});
define('books-demo/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEqualHelper', {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
define('books-demo/helpers/not', ['exports', '@abcum/ember-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('books-demo/helpers/notify', ['exports', '@abcum/ember-helpers/helpers/notify'], function (exports, _notify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notify.default;
    }
  });
  Object.defineProperty(exports, 'notify', {
    enumerable: true,
    get: function () {
      return _notify.notify;
    }
  });
});
define('books-demo/helpers/number', ['exports', '@abcum/ember-helpers/helpers/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
  Object.defineProperty(exports, 'number', {
    enumerable: true,
    get: function () {
      return _number.number;
    }
  });
});
define('books-demo/helpers/object-at', ['exports', '@abcum/ember-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define('books-demo/helpers/object-fetch', ['exports', '@abcum/ember-helpers/helpers/object-fetch'], function (exports, _objectFetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectFetch.default;
    }
  });
  Object.defineProperty(exports, 'objectFetch', {
    enumerable: true,
    get: function () {
      return _objectFetch.objectFetch;
    }
  });
});
define('books-demo/helpers/object-key', ['exports', '@abcum/ember-helpers/helpers/object-key'], function (exports, _objectKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectKey.default;
    }
  });
  Object.defineProperty(exports, 'objectKey', {
    enumerable: true,
    get: function () {
      return _objectKey.objectKey;
    }
  });
});
define('books-demo/helpers/objects-at', ['exports', '@abcum/ember-helpers/helpers/objects-at'], function (exports, _objectsAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectsAt.default;
    }
  });
  Object.defineProperty(exports, 'objectsAt', {
    enumerable: true,
    get: function () {
      return _objectsAt.objectsAt;
    }
  });
});
define('books-demo/helpers/omit', ['exports', '@abcum/ember-helpers/helpers/omit'], function (exports, _omit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _omit.default;
    }
  });
  Object.defineProperty(exports, 'omit', {
    enumerable: true,
    get: function () {
      return _omit.omit;
    }
  });
});
define('books-demo/helpers/on-document', ['exports', 'ember-on-helper/helpers/on-document'], function (exports, _onDocument) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
define('books-demo/helpers/on-window', ['exports', 'ember-on-helper/helpers/on-window'], function (exports, _onWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
define('books-demo/helpers/on', ['exports', 'ember-on-helper/helpers/on'], function (exports, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
define('books-demo/helpers/open', ['exports', '@abcum/ember-helpers/helpers/open'], function (exports, _open) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _open.default;
    }
  });
  Object.defineProperty(exports, 'open', {
    enumerable: true,
    get: function () {
      return _open.open;
    }
  });
});
define('books-demo/helpers/or', ['exports', '@abcum/ember-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('books-demo/helpers/pattern-alphanum', ['exports', '@abcum/ember-helpers/helpers/pattern-alphanum'], function (exports, _patternAlphanum) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternAlphanum.default;
    }
  });
  Object.defineProperty(exports, 'patternAlphanum', {
    enumerable: true,
    get: function () {
      return _patternAlphanum.patternAlphanum;
    }
  });
});
define('books-demo/helpers/pattern-country', ['exports', '@abcum/ember-helpers/helpers/pattern-country'], function (exports, _patternCountry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternCountry.default;
    }
  });
  Object.defineProperty(exports, 'patternCountry', {
    enumerable: true,
    get: function () {
      return _patternCountry.patternCountry;
    }
  });
});
define('books-demo/helpers/pattern-currency', ['exports', '@abcum/ember-helpers/helpers/pattern-currency'], function (exports, _patternCurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternCurrency.default;
    }
  });
  Object.defineProperty(exports, 'patternCurrency', {
    enumerable: true,
    get: function () {
      return _patternCurrency.patternCurrency;
    }
  });
});
define('books-demo/helpers/pattern-decimal', ['exports', '@abcum/ember-helpers/helpers/pattern-decimal'], function (exports, _patternDecimal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternDecimal.default;
    }
  });
  Object.defineProperty(exports, 'patternDecimal', {
    enumerable: true,
    get: function () {
      return _patternDecimal.patternDecimal;
    }
  });
});
define('books-demo/helpers/pattern-email', ['exports', '@abcum/ember-helpers/helpers/pattern-email'], function (exports, _patternEmail) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternEmail.default;
    }
  });
  Object.defineProperty(exports, 'patternEmail', {
    enumerable: true,
    get: function () {
      return _patternEmail.patternEmail;
    }
  });
});
define('books-demo/helpers/pattern-facebook', ['exports', '@abcum/ember-helpers/helpers/pattern-facebook'], function (exports, _patternFacebook) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternFacebook.default;
    }
  });
  Object.defineProperty(exports, 'patternFacebook', {
    enumerable: true,
    get: function () {
      return _patternFacebook.patternFacebook;
    }
  });
});
define('books-demo/helpers/pattern-integer', ['exports', '@abcum/ember-helpers/helpers/pattern-integer'], function (exports, _patternInteger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternInteger.default;
    }
  });
  Object.defineProperty(exports, 'patternInteger', {
    enumerable: true,
    get: function () {
      return _patternInteger.patternInteger;
    }
  });
});
define('books-demo/helpers/pattern-letters', ['exports', '@abcum/ember-helpers/helpers/pattern-letters'], function (exports, _patternLetters) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternLetters.default;
    }
  });
  Object.defineProperty(exports, 'patternLetters', {
    enumerable: true,
    get: function () {
      return _patternLetters.patternLetters;
    }
  });
});
define('books-demo/helpers/pattern-numbers', ['exports', '@abcum/ember-helpers/helpers/pattern-numbers'], function (exports, _patternNumbers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternNumbers.default;
    }
  });
  Object.defineProperty(exports, 'patternNumbers', {
    enumerable: true,
    get: function () {
      return _patternNumbers.patternNumbers;
    }
  });
});
define('books-demo/helpers/pattern-phone', ['exports', '@abcum/ember-helpers/helpers/pattern-phone'], function (exports, _patternPhone) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternPhone.default;
    }
  });
  Object.defineProperty(exports, 'patternPhone', {
    enumerable: true,
    get: function () {
      return _patternPhone.patternPhone;
    }
  });
});
define('books-demo/helpers/pattern-twitter', ['exports', '@abcum/ember-helpers/helpers/pattern-twitter'], function (exports, _patternTwitter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternTwitter.default;
    }
  });
  Object.defineProperty(exports, 'patternTwitter', {
    enumerable: true,
    get: function () {
      return _patternTwitter.patternTwitter;
    }
  });
});
define('books-demo/helpers/pattern-url', ['exports', '@abcum/ember-helpers/helpers/pattern-url'], function (exports, _patternUrl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _patternUrl.default;
    }
  });
  Object.defineProperty(exports, 'patternUrl', {
    enumerable: true,
    get: function () {
      return _patternUrl.patternUrl;
    }
  });
});
define('books-demo/helpers/percent', ['exports', '@abcum/ember-helpers/helpers/percent'], function (exports, _percent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _percent.default;
    }
  });
  Object.defineProperty(exports, 'percent', {
    enumerable: true,
    get: function () {
      return _percent.percent;
    }
  });
});
define('books-demo/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('books-demo/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('books-demo/helpers/prepend', ['exports', '@abcum/ember-helpers/helpers/prepend'], function (exports, _prepend) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _prepend.default;
    }
  });
  Object.defineProperty(exports, 'prepend', {
    enumerable: true,
    get: function () {
      return _prepend.prepend;
    }
  });
});
define('books-demo/helpers/present', ['exports', '@abcum/ember-helpers/helpers/present'], function (exports, _present) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _present.default;
    }
  });
  Object.defineProperty(exports, 'present', {
    enumerable: true,
    get: function () {
      return _present.present;
    }
  });
});
define('books-demo/helpers/prevent-default', ['exports', '@abcum/ember-helpers/helpers/prevent-default'], function (exports, _preventDefault) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preventDefault.default;
    }
  });
  Object.defineProperty(exports, 'preventDefault', {
    enumerable: true,
    get: function () {
      return _preventDefault.preventDefault;
    }
  });
});
define('books-demo/helpers/prompt', ['exports', '@abcum/ember-helpers/helpers/prompt'], function (exports, _prompt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _prompt.default;
    }
  });
  Object.defineProperty(exports, 'prompt', {
    enumerable: true,
    get: function () {
      return _prompt.prompt;
    }
  });
});
define('books-demo/helpers/queue', ['exports', '@abcum/ember-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define('books-demo/helpers/random', ['exports', '@abcum/ember-helpers/helpers/random'], function (exports, _random) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  Object.defineProperty(exports, 'random', {
    enumerable: true,
    get: function () {
      return _random.random;
    }
  });
});
define('books-demo/helpers/range', ['exports', '@abcum/ember-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define('books-demo/helpers/regexp', ['exports', '@abcum/ember-helpers/helpers/regexp'], function (exports, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _regexp.default;
    }
  });
  Object.defineProperty(exports, 'regexp', {
    enumerable: true,
    get: function () {
      return _regexp.regexp;
    }
  });
});
define('books-demo/helpers/reject-by', ['exports', '@abcum/ember-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
define('books-demo/helpers/reject', ['exports', '@abcum/ember-helpers/helpers/reject'], function (exports, _reject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reject.default;
    }
  });
  Object.defineProperty(exports, 'reject', {
    enumerable: true,
    get: function () {
      return _reject.reject;
    }
  });
});
define('books-demo/helpers/reload', ['exports', '@abcum/ember-helpers/helpers/reload'], function (exports, _reload) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reload.default;
    }
  });
  Object.defineProperty(exports, 'reload', {
    enumerable: true,
    get: function () {
      return _reload.reload;
    }
  });
});
define('books-demo/helpers/replace', ['exports', '@abcum/ember-helpers/helpers/replace'], function (exports, _replace) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _replace.default;
    }
  });
  Object.defineProperty(exports, 'replace', {
    enumerable: true,
    get: function () {
      return _replace.replace;
    }
  });
});
define('books-demo/helpers/reverse', ['exports', '@abcum/ember-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
define('books-demo/helpers/round', ['exports', '@abcum/ember-helpers/helpers/round'], function (exports, _round) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  Object.defineProperty(exports, 'round', {
    enumerable: true,
    get: function () {
      return _round.round;
    }
  });
});
define('books-demo/helpers/rsvp-all', ['exports', '@abcum/ember-helpers/helpers/rsvp-all'], function (exports, _rsvpAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rsvpAll.default;
    }
  });
  Object.defineProperty(exports, 'rsvpAll', {
    enumerable: true,
    get: function () {
      return _rsvpAll.rsvpAll;
    }
  });
});
define('books-demo/helpers/rsvp-hash', ['exports', '@abcum/ember-helpers/helpers/rsvp-hash'], function (exports, _rsvpHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rsvpHash.default;
    }
  });
  Object.defineProperty(exports, 'rsvpHash', {
    enumerable: true,
    get: function () {
      return _rsvpHash.rsvpHash;
    }
  });
});
define('books-demo/helpers/rsvp-race', ['exports', '@abcum/ember-helpers/helpers/rsvp-race'], function (exports, _rsvpRace) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rsvpRace.default;
    }
  });
  Object.defineProperty(exports, 'rsvpRace', {
    enumerable: true,
    get: function () {
      return _rsvpRace.rsvpRace;
    }
  });
});
define('books-demo/helpers/run', ['exports', '@abcum/ember-helpers/helpers/run'], function (exports, _run) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _run.default;
    }
  });
  Object.defineProperty(exports, 'run', {
    enumerable: true,
    get: function () {
      return _run.run;
    }
  });
});
define('books-demo/helpers/sanitize', ['exports', '@abcum/ember-helpers/helpers/sanitize'], function (exports, _sanitize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sanitize.default;
    }
  });
  Object.defineProperty(exports, 'sanitize', {
    enumerable: true,
    get: function () {
      return _sanitize.sanitize;
    }
  });
});
define('books-demo/helpers/scroll-to', ['exports', '@abcum/ember-helpers/helpers/scroll-to'], function (exports, _scrollTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollTo.default;
    }
  });
  Object.defineProperty(exports, 'scrollTo', {
    enumerable: true,
    get: function () {
      return _scrollTo.scrollTo;
    }
  });
});
define('books-demo/helpers/search-by', ['exports', '@abcum/ember-helpers/helpers/search-by'], function (exports, _searchBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchBy.default;
    }
  });
  Object.defineProperty(exports, 'searchBy', {
    enumerable: true,
    get: function () {
      return _searchBy.searchBy;
    }
  });
});
define('books-demo/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('books-demo/helpers/slice', ['exports', '@abcum/ember-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
define('books-demo/helpers/slug', ['exports', '@abcum/ember-helpers/helpers/slug'], function (exports, _slug) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slug.default;
    }
  });
  Object.defineProperty(exports, 'slug', {
    enumerable: true,
    get: function () {
      return _slug.slug;
    }
  });
});
define('books-demo/helpers/sort-by', ['exports', '@abcum/ember-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
define('books-demo/helpers/sort-locale-by', ['exports', '@abcum/ember-helpers/helpers/sort-locale-by'], function (exports, _sortLocaleBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortLocaleBy.default;
    }
  });
  Object.defineProperty(exports, 'sortLocaleBy', {
    enumerable: true,
    get: function () {
      return _sortLocaleBy.sortLocaleBy;
    }
  });
});
define('books-demo/helpers/split', ['exports', '@abcum/ember-helpers/helpers/split'], function (exports, _split) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _split.default;
    }
  });
  Object.defineProperty(exports, 'split', {
    enumerable: true,
    get: function () {
      return _split.split;
    }
  });
});
define('books-demo/helpers/sqrt', ['exports', '@abcum/ember-helpers/helpers/sqrt'], function (exports, _sqrt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  Object.defineProperty(exports, 'sqrt', {
    enumerable: true,
    get: function () {
      return _sqrt.sqrt;
    }
  });
});
define('books-demo/helpers/stop-propagation', ['exports', '@abcum/ember-helpers/helpers/stop-propagation'], function (exports, _stopPropagation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stopPropagation.default;
    }
  });
  Object.defineProperty(exports, 'stopPropagation', {
    enumerable: true,
    get: function () {
      return _stopPropagation.stopPropagation;
    }
  });
});
define('books-demo/helpers/sub', ['exports', '@abcum/ember-helpers/helpers/sub'], function (exports, _sub) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  Object.defineProperty(exports, 'sub', {
    enumerable: true,
    get: function () {
      return _sub.sub;
    }
  });
});
define('books-demo/helpers/swapcase', ['exports', '@abcum/ember-helpers/helpers/swapcase'], function (exports, _swapcase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _swapcase.default;
    }
  });
  Object.defineProperty(exports, 'swapcase', {
    enumerable: true,
    get: function () {
      return _swapcase.swapcase;
    }
  });
});
define('books-demo/helpers/take', ['exports', '@abcum/ember-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
define('books-demo/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('books-demo/helpers/throttle', ['exports', '@abcum/ember-helpers/helpers/throttle'], function (exports, _throttle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _throttle.default;
    }
  });
  Object.defineProperty(exports, 'throttle', {
    enumerable: true,
    get: function () {
      return _throttle.throttle;
    }
  });
});
define('books-demo/helpers/titleize', ['exports', '@abcum/ember-helpers/helpers/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
define('books-demo/helpers/toggle', ['exports', '@abcum/ember-helpers/helpers/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define('books-demo/helpers/transition-to', ['exports', '@abcum/ember-helpers/helpers/transition-to'], function (exports, _transitionTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionTo.default;
    }
  });
  Object.defineProperty(exports, 'transitionTo', {
    enumerable: true,
    get: function () {
      return _transitionTo.transitionTo;
    }
  });
});
define('books-demo/helpers/truncate', ['exports', '@abcum/ember-helpers/helpers/truncate'], function (exports, _truncate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
define('books-demo/helpers/ucwords', ['exports', '@abcum/ember-helpers/helpers/ucwords'], function (exports, _ucwords) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ucwords.default;
    }
  });
  Object.defineProperty(exports, 'ucwords', {
    enumerable: true,
    get: function () {
      return _ucwords.ucwords;
    }
  });
});
define('books-demo/helpers/uncurry', ['exports', '@abcum/ember-helpers/helpers/uncurry'], function (exports, _uncurry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uncurry.default;
    }
  });
  Object.defineProperty(exports, 'uncurry', {
    enumerable: true,
    get: function () {
      return _uncurry.uncurry;
    }
  });
});
define('books-demo/helpers/underscore', ['exports', '@abcum/ember-helpers/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define('books-demo/helpers/union', ['exports', '@abcum/ember-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
define('books-demo/helpers/uniq-by', ['exports', '@abcum/ember-helpers/helpers/uniq-by'], function (exports, _uniqBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uniqBy.default;
    }
  });
  Object.defineProperty(exports, 'uniqBy', {
    enumerable: true,
    get: function () {
      return _uniqBy.uniqBy;
    }
  });
});
define('books-demo/helpers/uniq', ['exports', '@abcum/ember-helpers/helpers/uniq'], function (exports, _uniq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uniq.default;
    }
  });
  Object.defineProperty(exports, 'uniq', {
    enumerable: true,
    get: function () {
      return _uniq.uniq;
    }
  });
});
define('books-demo/helpers/uppercase', ['exports', '@abcum/ember-helpers/helpers/uppercase'], function (exports, _uppercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(exports, 'uppercase', {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
define('books-demo/helpers/uuid', ['exports', '@abcum/ember-helpers/helpers/uuid'], function (exports, _uuid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uuid.default;
    }
  });
  Object.defineProperty(exports, 'uuid', {
    enumerable: true,
    get: function () {
      return _uuid.uuid;
    }
  });
});
define('books-demo/helpers/w', ['exports', '@abcum/ember-helpers/helpers/w'], function (exports, _w) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
define('books-demo/helpers/without', ['exports', '@abcum/ember-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define('books-demo/helpers/xor', ['exports', '@abcum/ember-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('books-demo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'books-demo/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('books-demo/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('books-demo/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('books-demo/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('books-demo/initializers/export-application-global', ['exports', 'books-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('books-demo/initializers/helpers', ['exports', '@abcum/ember-helpers/initializers/helpers'], function (exports, _helpers) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'ember-helpers',
		initialize: _helpers.default
	};
});
define('books-demo/initializers/load-bootstrap-config', ['exports', 'books-demo/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
define("books-demo/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('books-demo/modifiers/focus-trap', ['exports', 'ember-focus-trap/modifiers/focus-trap'], function (exports, _focusTrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
define('books-demo/modifiers/ref', ['exports', 'ember-ref-modifier/modifiers/ref'], function (exports, _ref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
define('books-demo/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('books-demo/router', ['exports', 'books-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('speackers');
    this.route('404', { path: '*path' });
    this.route('books');
  });

  exports.default = Router;
});
define('books-demo/routes/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({});
});
define('books-demo/routes/books', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        dataService: Ember.inject.service('data'),

        model() {
            return new Ember.RSVP.Promise((resolve, reject) => {
                Ember.run.later(async () => {
                    try {
                        let book = await this.get("dataService").getDataBooks();
                        resolve(book);
                    } catch (e) {
                        reject("Conn faild");
                    }
                }, 3000);
            });
        }
    });
});
define('books-demo/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model() {
            return true;
        }
    });
});
define('books-demo/routes/speackers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        dataService: Ember.inject.service('data'),

        model() {
            return new Ember.RSVP.Promise((resolve, reject) => {
                Ember.run.later(async () => {
                    try {
                        let spk = await this.get("dataService").getDataSpeackers();
                        resolve(spk);
                    } catch (e) {
                        reject("Conn faild");
                    }
                }, 3000);
            });
        }
    });
});
define('books-demo/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("books-demo/services/data", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        getDataSpeackers() {
            return fetch("http://localhost:3000/speackers").then(response => response.json());
        },
        getDataBooks() {
            return fetch("http://localhost:3000/books").then(response => response.json());
        }
    });
});
define('books-demo/services/scroller', ['exports', '@abcum/ember-helpers/services/scroller'], function (exports, _scroller) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _scroller.default;
});
define("books-demo/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yVjqEgXl", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"sp\"],[8],[0,\"\\n    \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[0,\"Error 404\"],[9],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"images/404.gif\"],[10,\"class\",\"images\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/404.hbs" } });
});
define("books-demo/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RytCqs7U", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n \"],[6,\"nav\"],[10,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"class\",\"navbar-brand\"],[10,\"href\",\"index\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"img\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"width\",\"30\"],[10,\"height\",\"30\"],[10,\"class\",\"d-inline-block align-top\"],[10,\"alt\",\"\"],[10,\"loading\",\"lazy\"],[8],[9],[0,\"\\n    \\t\\tКнижный клуб\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"button\"],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Открыть меню\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"span\"],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarContent\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navigation-main\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item active\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"index\"],[8],[0,\"Рабочий стол \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"(текущий)\"],[9],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"meetings.html\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"books\"],[8],[0,\"Книги\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"speackers\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-success\"],[10,\"href\",\"#\"],[8],[0,\"Оставить заявку\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-primary\"],[10,\"href\",\"#\"],[8],[0,\"Запланировать\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-info\"],[10,\"href\",\"register.html\"],[8],[0,\"Регистрация\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"login.html\"],[8],[0,\"Войти\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\\n\\t\\t\"],[1,[20,\"outlet\"],false],[0,\"\\n\\t\\n\\t\\n\\t\"],[6,\"footer\"],[10,\"class\",\"footer\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n\\t\\t  \\t\"],[6,\"span\"],[8],[0,\"© New Platform Ltd., 2022\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\"],[6,\"script\"],[10,\"src\",\"js/popper.min.js\"],[8],[9],[0,\"\\n\\t\"],[6,\"script\"],[10,\"src\",\"bootstrap/js/bootstrap.bundle.min.js\"],[8],[9],[0,\"\\n\\t\"],[6,\"script\"],[10,\"src\",\"js/tagsinput.js\"],[8],[9],[0,\"\\n\\t\"],[6,\"script\"],[10,\"src\",\"js/bootstrap-file.js\"],[8],[9],[0,\"\\n\\t\"],[6,\"script\"],[10,\"src\",\"js/bootstrap-datepicker.min.js\"],[8],[9],[0,\"\\n\\t\"],[6,\"script\"],[10,\"src\",\"js/bootstrap-datepicker.ru.min.js\"],[8],[9],[0,\"\\n\\t\"],[6,\"script\"],[10,\"type\",\"text/javascript\"],[8],[0,\"\\n\\t\\t$(function () {\\n\\t\\t\\t$('.datepicker').datepicker({\\n\\t\\t\\t\\tclearBtn: true,\\n\\t\\t\\t\\tformat: \\\"dd.mm.yyyy\\\",\\n\\t\\t\\t\\tlanguage: \\\"ru\\\",\\n    \\t\\t\\tautoclose: true\\n\\t\\t\\t});\\n\\t\\t});\\n\\t\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/application.hbs" } });
});
define("books-demo/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eZrJ1xWU", "block": "{\"symbols\":[\"book\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n      \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Книги\"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить книгу\"],[10,\"type\",\"button\"],[8],[0,\"\\n            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n          \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n            \"],[6,\"input\"],[10,\"class\",\"form-control mr-2 search-long\"],[10,\"placeholder\",\"Найти по полям\"],[10,\"aria-label\",\"Найти по полям\"],[10,\"type\",\"search\"],[8],[9],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Найти\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n          \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n            \"],[6,\"input\"],[10,\"class\",\"form-control mr-2\"],[10,\"placeholder\",\"Поиск по тегам\"],[10,\"aria-label\",\"Найти по тегам\"],[10,\"type\",\"search\"],[8],[9],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Поиск\"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3 fix-margin\"],[8],[0,\"\\n       \\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\"],[1,[26,\"books-item\",null,[[\"name\",\"author\",\"pc\",\"IMGurl\",\"DiscrUrl\",\"tags\",\"Rate\"],[[21,1,[\"name\"]],[21,1,[\"Author\"]],[21,1,[\"PCount\"]],[21,1,[\"IMGurl\"]],[21,1,[\"DiscrUrl\"]],[21,1,[\"tags\"]],[21,1,[\"Rate\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"       \\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/books.hbs" } });
});
define("books-demo/templates/components/books-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cIpWGVdx", "block": "{\"symbols\":[\"tag\",\"index\"],\"statements\":[[0,\" \"],[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n            \"],[6,\"img\"],[11,\"src\",[27,[[26,\"concat\",[[22,[\"IMGurl\"]]],null]]]],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Обложка книги\"],[8],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card-header\"],[8],[0,\"\\n                \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[26,\"concat\",[[22,[\"name\"]]],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"ul\"],[10,\"class\",\"list-group list-group-flush\"],[8],[0,\"\\n              \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Автор\"],[9],[0,\":\"],[1,[26,\"concat\",[[22,[\"author\"]]],null],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Количество страниц\"],[9],[0,\": \"],[1,[26,\"concat\",[[22,[\"pc\"]]],null],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Теги\"],[9],[0,\": \\n\"],[4,\"each\",[[22,[\"tags\"]]],null,{\"statements\":[[0,\"               \\n                \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"tag-link\"],[8],[6,\"span\"],[10,\"class\",\"small\"],[8],[0,\"#\"],[1,[26,\"concat\",[[21,1,[]],\" \"],null],false],[9],[9],[0,\"\\n                \\n\"]],\"parameters\":[1,2]},null],[0,\"                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                    Рейтинг:\\n                  \"],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                      \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[27,[\"width: \",[26,\"concat\",[[22,[\"Rate\"]]],null],\"%;\"]]],[11,\"aria-valuenow\",[27,[[26,\"concat\",[[22,[\"Rate\"]]],null]]]],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[1,[26,\"concat\",[[22,[\"Rate\"]]],null],false],[0,\"%\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                  \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"card-link line-offset\"],[8],[0,\"Описание\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n                  \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"onclick\",\"javascript:location='edit-book.html'\"],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                      \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                      \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                      \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/books-item.hbs" } });
});
define('books-demo/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('books-demo/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("books-demo/templates/components/speackers-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "agh9jG5G", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n\\t\\t\"],[6,\"img\"],[10,\"src\",\"images/speaker.jpg\"],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Фото спикера\"],[8],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[26,\"get-fio\",[[22,[\"firstName\"]],[22,[\"lastName\"]],[22,[\"patronymic\"]]],null],false],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"onclick\",\"javascript:location='edit-speaker.html'\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/speackers-item.hbs" } });
});
define("books-demo/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9CcYHE0z", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"sp\"],[8],[0,\"\\n    \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[0,\"Error\"],[9],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"images/error.gif\"],[10,\"class\",\"images\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/error.hbs" } });
});
define("books-demo/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rRFLFVe0", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center h-100 home-page-nav\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"meetings.html\"],[10,\"class\",\"card text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-people desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"books\"],[10,\"class\",\"card text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-book desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Книги\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"speackers\"],[10,\"class\",\"card text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-mic desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\"],[9],[0,\"  \"]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/index.hbs" } });
});
define("books-demo/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5Kl7A3xL", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"sp\"],[8],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"images/load.gif\"],[10,\"class\",\"images\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/loading.hbs" } });
});
define("books-demo/templates/speackers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tRo0P4Mv", "block": "{\"symbols\":[\"speacker\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100 \"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить спикера\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"input\"],[10,\"class\",\"form-control mr-2 search-long search-only\"],[10,\"placeholder\",\"ФИО\"],[10,\"aria-label\",\"Спикер\"],[10,\"type\",\"search\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Найти\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[1,[26,\"speackers-item\",null,[[\"firstName\",\"lastName\",\"patronymic\",\"tagName\"],[[21,1,[\"firstName\"]],[21,1,[\"lastName\"]],[21,1,[\"patronymic\"]],\"\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/speackers.hbs" } });
});


define('books-demo/config/environment', [], function() {
  var prefix = 'books-demo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("books-demo/app")["default"].create({"name":"books-demo","version":"0.0.0+03912393"});
}
//# sourceMappingURL=books-demo.map
