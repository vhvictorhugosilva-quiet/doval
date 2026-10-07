/* @ds-bundle: {"format":4,"namespace":"DovalDesignSystem_84fe4e","components":[{"name":"MealCard","sourcePath":"components/commerce/MealCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Doodle","sourcePath":"components/core/Doodle.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/commerce/MealCard.jsx":"af85df9ed837","components/core/Badge.jsx":"8658732b2b3c","components/core/Button.jsx":"5af574f04c9a","components/core/Card.jsx":"89d853d63e94","components/core/Doodle.jsx":"45fcad488c4f","components/core/Icon.jsx":"efdd0cd0d73a","components/core/IconButton.jsx":"0a50fc3ea669","components/core/Logo.jsx":"f35e01fcc9fc","components/core/Tag.jsx":"6c7bfb255998","components/feedback/Dialog.jsx":"a0b341395961","components/feedback/Toast.jsx":"c69428910d4b","components/feedback/Tooltip.jsx":"50b8e195433b","components/forms/Checkbox.jsx":"6b18c939f5dd","components/forms/Input.jsx":"d741bfb5a6d0","components/forms/Radio.jsx":"efd4ab17931f","components/forms/Select.jsx":"acf1fa92e28a","components/forms/Stepper.jsx":"1a89d8c1386c","components/forms/Switch.jsx":"e970d9ad45b2","components/forms/Textarea.jsx":"e6063b31a473","components/navigation/Tabs.jsx":"e9366f6fd762","ui_kits/app/Screens.jsx":"06aeb2f4bbc7","ui_kits/app/Shell.jsx":"d436d715b96a","ui_kits/site/Cart.jsx":"4e7cf7a66f8a","ui_kits/site/Chrome.jsx":"6ed3f375621b","ui_kits/site/Home.jsx":"de16372b7d53","ui_kits/site/Menu.jsx":"4e7233197c93","ui_kits/site/data.js":"3fb11c4a8aa6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DovalDesignSystem_84fe4e = window.DovalDesignSystem_84fe4e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/MealCard.jsx
try { (() => {
function MealCard({
  name,
  description,
  price,
  image,
  media,
  badges = [],
  footer,
  onClick,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: ['dv-meal', className].filter(Boolean).join(' '),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "dv-meal__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name
  }) : media, badges.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "dv-meal__badges"
  }, badges)), /*#__PURE__*/React.createElement("div", {
    className: "dv-meal__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "dv-meal__name"
  }, name), description && /*#__PURE__*/React.createElement("p", {
    className: "dv-meal__desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "dv-meal__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dv-meal__price"
  }, price), footer)));
}
Object.assign(__ds_scope, { MealCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/MealCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  color = 'neutral',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['dv-badge', 'dv-badge--' + color, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  sticker = false,
  block = false,
  iconLeft,
  iconRight,
  as = 'button',
  href,
  className = '',
  children,
  ...rest
}) {
  const cls = ['dv-btn', 'dv-btn--' + variant, 'dv-btn--' + size, sticker && 'dv-btn--sticker', block && 'dv-btn--block', className].filter(Boolean).join(' ');
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: as === 'a' ? href : undefined
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'default',
  interactive = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const cls = ['dv-card', 'dv-card--' + variant, interactive && 'dv-card--interactive', className].filter(Boolean).join(' ');
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Doodle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Doodle({
  name = 'star-blue',
  size = 64,
  rotate = 0,
  opacity = 1,
  base = 'assets/illustrations',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base + '/' + name + '.png',
    alt: "",
    "aria-hidden": "true",
    className: ['dv-doodle', className].filter(Boolean).join(' '),
    style: {
      width: size,
      height: 'auto',
      transform: 'rotate(' + rotate + 'deg)',
      opacity,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Doodle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Doodle.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide is loaded from CDN by the consuming page:
   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script> */
function Icon({
  name,
  size = 20,
  strokeWidth = 2.5,
  className = '',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    const lucide = typeof window !== 'undefined' && window.lucide;
    if (lucide && lucide.createIcons) {
      try {
        lucide.createIcons({
          attrs: {
            width: size,
            height: size,
            'stroke-width': strokeWidth
          },
          nodes: [el.firstChild]
        });
      } catch (e) {}
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const cls = ['dv-iconbtn', 'dv-iconbtn--' + variant, size === 'sm' && 'dv-iconbtn--sm', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  color: 'logo-horizontal.png',
  black: 'logo-horizontal-black.png',
  white: 'logo-horizontal-white.png'
};
function Logo({
  height = 40,
  tone = 'color',
  base = 'assets',
  src,
  className = '',
  ...rest
}) {
  const file = src || base + '/' + (FILES[tone] || FILES.color);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: file,
    alt: "doval",
    style: {
      height,
      width: 'auto',
      display: 'block'
    },
    className: className
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['dv-tag', className].filter(Boolean).join(' '),
    "data-selected": selected
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "dv-tag__x",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-hidden": "true"
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  onClose,
  actions,
  className = '',
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dv-overlay",
    onClick: onClose,
    role: "presentation"
  }, /*#__PURE__*/React.createElement("div", {
    className: ['dv-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, onClose && /*#__PURE__*/React.createElement("button", {
    className: "dv-iconbtn dv-iconbtn--ghost dv-iconbtn--sm dv-dialog__close",
    onClick: onClose,
    "aria-label": "Fechar"
  }, "\u2715"), title && /*#__PURE__*/React.createElement("h3", {
    className: "dv-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "dv-dialog__body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "dv-dialog__actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'success',
  className = '',
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['dv-toast', 'dv-toast--' + tone, className].filter(Boolean).join(' '),
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dv-toast__dot"
  }), /*#__PURE__*/React.createElement("span", null, children), action);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  text,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['dv-tip', className].filter(Boolean).join(' ')
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "dv-tip__bubble",
    role: "tooltip"
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  disabled = false,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['dv-check', className].filter(Boolean).join(' '),
    "data-checked": checked,
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "dv-check__box"
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  id,
  className = '',
  ...rest
}) {
  const rid = id || 'dv-' + (rest.name || 'input');
  return /*#__PURE__*/React.createElement("div", {
    className: "dv-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "dv-field__label",
    htmlFor: rid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: 'dv-input__wrap' + (icon ? ' dv-input__wrap--icon' : '')
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "dv-input__icon"
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    className: ['dv-input', className].filter(Boolean).join(' '),
    "aria-invalid": error ? true : undefined
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    className: "dv-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "dv-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked = false,
  disabled = false,
  onChange,
  name,
  value,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['dv-check', className].filter(Boolean).join(' '),
    "data-checked": checked,
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "dv-check__box dv-check__box--round"
  }, checked && /*#__PURE__*/React.createElement("span", {
    className: "dv-check__dot"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  className = '',
  children,
  ...rest
}) {
  const rid = id || 'dv-' + (rest.name || 'select');
  return /*#__PURE__*/React.createElement("div", {
    className: "dv-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "dv-field__label",
    htmlFor: rid
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: rid,
    className: ['dv-select', className].filter(Boolean).join(' ')
  }, rest), children || options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), error ? /*#__PURE__*/React.createElement("span", {
    className: "dv-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "dv-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function Stepper({
  value = 1,
  min = 0,
  max = 99,
  onChange,
  className = '',
  label = 'Quantidade'
}) {
  const set = v => {
    const n = Math.min(max, Math.max(min, v));
    if (n !== value && onChange) onChange(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['dv-stepper', className].filter(Boolean).join(' '),
    role: "group",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dv-stepper__btn",
    onClick: () => set(value - 1),
    disabled: value <= min,
    "aria-label": "Diminuir"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "dv-stepper__val"
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "dv-stepper__btn",
    onClick: () => set(value + 1),
    disabled: value >= max,
    "aria-label": "Aumentar"
  }, "+"));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['dv-switch', className].filter(Boolean).join(' '),
    "data-checked": checked
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "dv-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dv-switch__knob"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  id,
  className = '',
  ...rest
}) {
  const rid = id || 'dv-' + (rest.name || 'textarea');
  return /*#__PURE__*/React.createElement("div", {
    className: "dv-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "dv-field__label",
    htmlFor: rid
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: rid,
    className: ['dv-textarea', className].filter(Boolean).join(' '),
    "aria-invalid": error ? true : undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "dv-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "dv-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['dv-tabs', variant === 'pill' && 'dv-tabs--pill', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      className: "dv-tab",
      "aria-selected": value === v,
      onClick: () => onChange && onChange(v)
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Screens.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Logo,
  Doodle,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Stepper,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  MealCard,
  Icon
} = window.DovalDesignSystem_84fe4e;
const A = '../../assets';
function MenuScreen({
  onOpen,
  onAdd
}) {
  const [day, setDay] = React.useState('Terça');
  const [filter, setFilter] = React.useState('todos');
  const items = window.DOVAL_MENU.filter(m => filter === 'todos' || m.tags.includes(filter));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 16px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 34,
      color: 'var(--doval-blue)',
      lineHeight: 1
    }
  }, "oi, Camila!"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h3)',
      margin: '2px 0 14px'
    }
  }, "Menu da semana"), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    value: day,
    onChange: setDay
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      flexWrap: 'nowrap',
      padding: '14px 0 16px',
      scrollbarWidth: 'none'
    }
  }, [['todos', 'Todos'], ['fit', 'Fit'], ['low-carb', 'Low carb'], ['vegano', 'Veg'], ['conforto', 'Comfort']].map(([k, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    selected: filter === k,
    onClick: () => setFilter(k)
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.id,
    interactive: true,
    onClick: () => onOpen(m),
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 74,
      height: 74,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-sunken)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/illustrations/' + m.doodle + '.png',
    alt: "",
    style: {
      width: 40,
      height: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)',
      fontSize: 16
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, m.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-price)',
      fontSize: 16
    }
  }, m.price), m.badges.slice(0, 1).map(([c, t]) => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    color: c
  }, t)))), /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    size: "sm",
    label: 'Adicionar ' + m.name,
    onClick: e => {
      e.stopPropagation();
      onAdd(m);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18
  }))))));
}
function DetailScreen({
  meal,
  onAdd,
  onBack
}) {
  const [qty, setQty] = React.useState(1);
  const [extra, setExtra] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      background: 'var(--surface-sunken)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + '/illustrations/' + meal.doodle + '.png',
    alt: "",
    style: {
      width: 120,
      height: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, meal.badges.map(([c, t]) => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    color: c
  }, t))), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h2)',
      fontSize: 30,
      margin: 0
    }
  }, meal.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)'
    }
  }, meal.desc, ". Congelado no mesmo dia, sem conservantes. 7 minutos no micro-ondas e t\xE1 pronto."), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    style: {
      display: 'flex',
      gap: 18
    }
  }, [['480', 'kcal'], ['32g', 'proteína'], ['380g', 'porção']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--doval-blue)'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, l)))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Adicionar salada extra (+R$ 6)",
    checked: extra,
    onChange: e => setExtra(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    value: qty,
    min: 1,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    sticker: true,
    onClick: () => {
      onAdd(meal, qty);
      onBack();
    }
  }, "Adicionar \xB7 ", meal.price))));
}
function CartScreen({
  lines,
  setQty,
  onConfirm
}) {
  const total = lines.reduce((s, l) => s + l.qty * parseFloat(l.price.replace('R$ ', '').replace(',', '.')), 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h3)',
      margin: 0
    }
  }, "Seu carrinho"), lines.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    style: {
      textAlign: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "eye-blue",
    size: 54,
    base: A + '/illustrations',
    style: {
      margin: '0 auto 10px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)'
    }
  }, "Vazio por aqui"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, "Bora escolher o almo\xE7o da semana?")) : /*#__PURE__*/React.createElement(React.Fragment, null, lines.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)',
      fontSize: 15
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, l.price)), /*#__PURE__*/React.createElement(Stepper, {
    value: l.qty,
    min: 0,
    onChange: v => setQty(l.id, v)
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, 'R$ ' + total.toFixed(2).replace('.', ','))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-body-sm)',
      color: 'var(--doval-green)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, "Entrega"), /*#__PURE__*/React.createElement("span", null, "gr\xE1tis")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '2px solid var(--border-subtle)',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, 'R$ ' + total.toFixed(2).replace('.', ',')))), /*#__PURE__*/React.createElement(Select, {
    label: "Janela de entrega",
    options: ['Hoje, 16h–20h', 'Amanhã, 08h–12h', 'Amanhã, 12h–16h']
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    sticker: true,
    onClick: onConfirm
  }, "Fechar pedido")));
}
function PlanScreen() {
  const [paused, setPaused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h3)',
      margin: 0
    }
  }, "Seu plano"), /*#__PURE__*/React.createElement(Card, {
    variant: "sticker",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      background: 'var(--yellow-100)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "green"
  }, "Ativo"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)'
    }
  }, "5 marmitas / semana"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--neutral-700)'
    }
  }, "Pr\xF3xima entrega: segunda, 12h\u201316h"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline"
  }, "Trocar pratos"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Mudar plano"))), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Pausar a pr\xF3xima semana",
    checked: paused,
    onChange: e => setPaused(e.target.checked)
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Avisar por WhatsApp",
    defaultChecked: true
  }), paused && /*#__PURE__*/React.createElement(Toast, {
    tone: "warning"
  }, "Semana pausada \u2014 nada ser\xE1 cobrado.")), /*#__PURE__*/React.createElement("div", {
    className: "dv-eyebrow"
  }, "\xFAltimas entregas"), [['Segunda, 12 mai', '5 marmitas', 'Entregue'], ['Segunda, 5 mai', '5 marmitas', 'Entregue'], ['Segunda, 28 abr', '3 marmitas', 'Entregue']].map(([d, q, s]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "package-check",
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 700
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, q)), /*#__PURE__*/React.createElement(Badge, {
    color: "green"
  }, s))));
}
function AccountScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '0 16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-h3)',
      margin: 0
    }
  }, "Sua conta"), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    defaultValue: "Camila Ribeiro"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "WhatsApp",
    defaultValue: "(11) 98877-6655",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Endere\xE7o",
    defaultValue: "Rua Aurora, 245 \u2014 Santa Cec\xEDlia"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Salvar altera\xE7\xF5es")), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, [['Formas de pagamento', 'credit-card'], ['Notificações', 'bell'], ['Indicar uma amiga', 'gift'], ['Fale com a gente', 'message-circle']].map(([l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 4px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      font: 'var(--type-body)',
      color: 'var(--ink)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, l), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18
  })))));
}
Object.assign(window, {
  MenuScreen,
  DetailScreen,
  CartScreen,
  PlanScreen,
  AccountScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Shell.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Logo,
  Doodle,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Stepper,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  MealCard,
  Icon
} = window.DovalDesignSystem_84fe4e;
const A = '../../assets';
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 22px 4px',
      font: 'var(--type-body-sm)',
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 15
  })));
}
function AppBar({
  title,
  right,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '6px 12px 12px'
    }
  }, onBack ? /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    label: "Voltar",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left"
  })) : /*#__PURE__*/React.createElement("img", {
    src: A + '/logo-horizontal.png',
    alt: "doval",
    style: {
      height: 30,
      marginLeft: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)',
      flex: 1,
      textAlign: onBack ? 'left' : 'right',
      marginLeft: onBack ? 4 : 0
    }
  }, onBack ? title : ''), right);
}
function TabBar({
  tab,
  setTab,
  cartCount
}) {
  const items = [['menu', 'Menu', 'utensils'], ['plano', 'Plano', 'calendar-days'], ['carrinho', 'Carrinho', 'shopping-bag'], ['conta', 'Conta', 'user-round']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      borderTop: '2px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, items.map(([k, l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      padding: '10px 0 14px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      color: tab === k ? 'var(--doval-red)' : 'var(--neutral-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  }), k === 'carrinho' && cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -10,
      background: 'var(--doval-red)',
      color: '#fff',
      font: 'var(--type-label)',
      fontSize: 10,
      borderRadius: 999,
      minWidth: 18,
      height: 18,
      display: 'grid',
      placeItems: 'center'
    }
  }, cartCount)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 10,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase'
    }
  }, l))));
}
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: 'var(--surface-card)',
      borderRadius: 44,
      border: '10px solid var(--ink)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative'
    }
  }, children);
}
Object.assign(window, {
  StatusBar,
  AppBar,
  TabBar,
  Phone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Cart.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Logo,
  Doodle,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Stepper,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  MealCard
} = window.DovalDesignSystem_84fe4e;
function Cart({
  open,
  onClose,
  lines,
  setQty,
  onCheckout
}) {
  const total = lines.reduce((s, l) => s + l.qty * parseFloat(l.price.replace('R$ ', '').replace(',', '.')), 0);
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Seu carrinho",
    onClose: onClose,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: onClose
    }, "Continuar escolhendo"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onCheckout,
      disabled: !lines.length
    }, "Fechar pedido"))
  }, lines.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, "Nada aqui ainda. Bora escolher o almo\xE7o?") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, lines.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)',
      fontSize: 'var(--text-base)'
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, l.price)), /*#__PURE__*/React.createElement(Stepper, {
    value: l.qty,
    min: 0,
    onChange: v => setQty(l.id, v)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '2px solid var(--border-subtle)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)'
    }
  }, 'R$ ' + total.toFixed(2).replace('.', ',')))));
}
function Checkout({
  open,
  onClose,
  onDone
}) {
  const [pay, setPay] = React.useState('pix');
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Fechar pedido",
    onClose: onClose,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: onClose
    }, "Voltar"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onDone
    }, "Confirmar pedido"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Endere\xE7o de entrega",
    defaultValue: "Rua Aurora, 245 \u2014 Santa Cec\xEDlia"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Janela de entrega",
    options: ['Hoje, 16h–20h', 'Amanhã, 08h–12h', 'Amanhã, 12h–16h']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dv-field__label",
    style: {
      marginBottom: 6
    }
  }, "Pagamento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "pg",
    label: "Pix (5% de desconto)",
    checked: pay === 'pix',
    onChange: () => setPay('pix')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "pg",
    label: "Cart\xE3o na entrega",
    checked: pay === 'card',
    onChange: () => setPay('card')
  }))), /*#__PURE__*/React.createElement(Textarea, {
    label: "Observa\xE7\xF5es",
    placeholder: "Pode deixar na portaria",
    rows: 2
  })));
}
Object.assign(window, {
  Cart,
  Checkout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Chrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Logo,
  Doodle,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Stepper,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  MealCard,
  Icon
} = window.DovalDesignSystem_84fe4e;
const A = '../../assets';
function Header({
  page,
  setPage,
  cartCount,
  onCart
}) {
  const nav = [['home', 'Início'], ['menu', 'Menu da semana'], ['planos', 'Planos'], ['sobre', 'A gente']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--paper)',
      borderBottom: '2px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '14px var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage('home');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 40,
    src: A + '/logo-horizontal.png'
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginRight: 'auto'
    }
  }, nav.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage(k);
    },
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 700,
      padding: '10px 14px',
      borderRadius: 'var(--radius-pill)',
      color: page === k ? 'var(--ink)' : 'var(--text-muted)',
      background: page === k ? 'var(--neutral-100)' : 'transparent',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement(Tooltip, {
    text: "Seu carrinho"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onCart,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "shopping-cart",
      size: 18
    })
  }, cartCount)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    sticker: true,
    onClick: () => setPage('menu')
  }, "Pedir agora")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'var(--space-20)',
      background: 'var(--ink)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1.4fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: A + '/logo-horizontal-white.png',
    alt: "doval",
    style: {
      height: 52
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--neutral-300)',
      maxWidth: '30ch',
      marginTop: 'var(--space-4)'
    }
  }, "Comida de verdade, congelada na hora, entregue na sua porta.")), [['Menu', ['Menu da semana', 'Pratos fit', 'Veganos', 'Sobremesas']], ['Planos', ['3 marmitas', '5 marmitas', '10 marmitas', 'Presentear']], ['A gente', ['Nossa cozinha', 'Sustentabilidade', 'Trabalhe com a gente', 'Fale com a gente']]].map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    className: "dv-eyebrow",
    style: {
      color: 'var(--doval-yellow)'
    }
  }, t), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 'var(--space-4) 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--neutral-300)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--neutral-700)',
      padding: 'var(--space-5) var(--space-6)',
      textAlign: 'center',
      font: 'var(--type-body-sm)',
      color: 'var(--neutral-400)'
    }
  }, "\xA9 2026 doval \xB7 CNPJ 00.000.000/0001-00"));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Home.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Logo,
  Doodle,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Stepper,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  MealCard,
  Icon
} = window.DovalDesignSystem_84fe4e;
const A = '../../assets';
const D = n => /*#__PURE__*/React.createElement(Doodle, {
  name: n,
  base: A + '/illustrations'
});
function Hero({
  setPage
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: 'var(--space-24) var(--space-6) var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'url(' + A + '/illustrations/doodle-sheet.png) center/cover no-repeat',
      opacity: .14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dv-badge dv-badge--yellow"
  }, "Entrega em S\xE3o Paulo \xB7 hoje at\xE9 20h"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display)',
      margin: 'var(--space-5) 0 0'
    }
  }, "O almo\xE7o resolvido", /*#__PURE__*/React.createElement("br", null), "pela semana inteira"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 44,
      color: 'var(--doval-blue)',
      marginTop: 8
    }
  }, "feito hoje cedo"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-md)',
      maxWidth: '46ch',
      margin: 'var(--space-5) auto 0'
    }
  }, "A gente cozinha, congela na hora e entrega na sua porta. Voc\xEA esquenta e come. Sem lou\xE7a, sem pensar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'center',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    sticker: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    }),
    onClick: () => setPage('menu')
  }, "Montar minha marmita"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => setPage('planos')
  }, "Ver planos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      justifyContent: 'center',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, ['Sem conservantes', 'Congelado na hora', 'Entrega no mesmo dia'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-body-sm)',
      fontWeight: 700,
      color: 'var(--neutral-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  }), t)))));
}
function Steps() {
  const steps = [['Escolhe', 'Monta a semana com o que você gosta.', 'crown-blue'], ['A gente cozinha', 'De manhã, com comida fresca de feira.', 'flower-yellow'], ['Chega em casa', 'Congelado, no seu horário.', 'star-blue'], ['Esquenta e come', '7 minutos no micro-ondas.', 'heart-red']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dv-eyebrow",
    style: {
      textAlign: 'center'
    }
  }, "como funciona"), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      margin: 'var(--space-2) 0 var(--space-10)'
    }
  }, "Quatro passos e pronto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter)'
    }
  }, steps.map(([t, d, doodle], i) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: doodle,
    size: 54,
    rotate: i % 2 ? 6 : -6,
    base: A + '/illustrations'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h4)'
    }
  }, i + 1, ". ", t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, d)))));
}
function Quote() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: 'var(--space-20) auto 0',
      maxWidth: 'var(--container-md)',
      padding: '0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sticker",
    style: {
      background: 'var(--yellow-100)',
      textAlign: 'center',
      padding: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Doodle, {
    name: "starburst-yellow",
    size: 60,
    base: A + '/illustrations',
    style: {
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-h3)',
      margin: 'var(--space-4) 0 var(--space-3)',
      color: 'var(--ink)'
    }
  }, "\u201CParei de pedir delivery no meio da semana. S\xE9rio.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      fontWeight: 700,
      color: 'var(--neutral-700)'
    }
  }, "Camila R. \xB7 assinante h\xE1 8 meses")));
}
Object.assign(window, {
  Hero,
  Steps,
  Quote
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Menu.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Logo,
  Doodle,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  Stepper,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  MealCard
} = window.DovalDesignSystem_84fe4e;
const A = '../../assets';
function MenuGrid({
  onAdd,
  compact
}) {
  const [filter, setFilter] = React.useState('todos');
  const [day, setDay] = React.useState('Terça');
  const items = window.DOVAL_MENU.filter(m => filter === 'todos' || m.tags.includes(filter));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dv-eyebrow"
  }, "menu da semana"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-2) 0 var(--space-6)'
    }
  }, "Escolhe o que voc\xEA quer comer"), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    value: day,
    onChange: setDay
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      margin: 'var(--space-5) 0 var(--space-8)',
      flexWrap: 'nowrap',
      overflowX: 'auto'
    }
  }, [['todos', 'Todos'], ['fit', 'Fit'], ['low-carb', 'Low carb'], ['vegano', 'Vegetariano'], ['conforto', 'Comfort food']].map(([k, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    selected: filter === k,
    onClick: () => setFilter(k)
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + (compact ? 3 : 4) + ',1fr)',
      gap: 'var(--gutter)'
    }
  }, items.map(m => /*#__PURE__*/React.createElement(MealCard, {
    key: m.id,
    name: m.name,
    description: m.desc,
    price: m.price,
    media: /*#__PURE__*/React.createElement("img", {
      src: A + '/illustrations/' + m.doodle + '.png',
      alt: "",
      style: {
        width: '42%',
        height: 'auto',
        objectFit: 'contain',
        opacity: .9
      }
    }),
    badges: m.badges.map(([c, t]) => /*#__PURE__*/React.createElement(Badge, {
      key: t,
      color: c
    }, t)),
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onAdd(m)
    }, "Adicionar")
  }))));
}
function Plans({
  onPick
}) {
  const [sel, setSel] = React.useState('p2');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dv-eyebrow"
  }, "planos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-2) 0 var(--space-8)'
    }
  }, "Quanto voc\xEA come por semana?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)'
    }
  }, window.DOVAL_PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    variant: sel === p.id ? 'sticker' : 'default',
    interactive: true,
    onClick: () => setSel(p.id),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      position: 'relative'
    }
  }, p.best && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -12,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: "yellow"
  }, "Mais escolhido")), /*#__PURE__*/React.createElement(Radio, {
    name: "plano",
    label: p.n,
    checked: sel === p.id,
    onChange: () => setSel(p.id)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--ink)'
    }
  }, p.price, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, " /semana")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--doval-green)',
      fontWeight: 700
    }
  }, p.per)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    sticker: true,
    onClick: () => onPick(sel)
  }, "Assinar este plano"), /*#__PURE__*/React.createElement(Switch, {
    label: "Pausar quando eu viajar",
    defaultChecked: true
  })));
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dv-eyebrow"
  }, "a gente"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-2) 0 var(--space-5)'
    }
  }, "Uma cozinha de bairro que cresceu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-md)'
    }
  }, "A doval come\xE7ou com duas panelas grandes e uma lista de vizinhos no WhatsApp. Hoje s\xE3o 1.400 marmitas por semana \u2014 e a mesma regra: se a gente n\xE3o comeria, n\xE3o vende."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)'
    }
  }, "Compramos de tr\xEAs produtores da regi\xE3o, congelamos no mesmo dia e nunca usamos conservante. Nada de \u201Csabor natural id\xEAntico ao natural\u201D."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script-wild)',
      fontSize: 40,
      color: 'var(--doval-red)',
      marginTop: 16
    }
  }, "comida de gente, pra gente")), /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['1.400', 'marmitas por semana'], ['3', 'produtores parceiros'], ['0', 'conservantes'], ['8 anos', 'de cozinha aberta']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h2)',
      color: 'var(--doval-blue)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, l))))));
}
Object.assign(window, {
  MenuGrid,
  Plans,
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Menu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/data.js
try { (() => {
window.DOVAL_MENU = [{
  id: 'm1',
  name: 'Frango grelhado com purê',
  desc: 'Purê de batata-doce e brócolis no vapor',
  price: 'R$ 26,90',
  doodle: 'leaf-red',
  badges: [['green', 'Fit']],
  tags: ['fit', 'low-carb']
}, {
  id: 'm2',
  name: 'Strogonoff cremoso',
  desc: 'Arroz soltinho e batata palha crocante',
  price: 'R$ 29,90',
  doodle: 'starburst-yellow',
  badges: [['yellow', 'Mais pedido']],
  tags: ['conforto']
}, {
  id: 'm3',
  name: 'Curry de grão-de-bico',
  desc: 'Arroz integral e couve crocante',
  price: 'R$ 27,90',
  doodle: 'asterisk-green',
  badges: [['green', 'Vegano'], ['red', 'Novo']],
  tags: ['vegano', 'fit']
}, {
  id: 'm4',
  name: 'Carne de panela',
  desc: 'Mandioquinha e arroz sete grãos',
  price: 'R$ 31,90',
  doodle: 'heart-red',
  badges: [['neutral', '620 kcal']],
  tags: ['conforto']
}, {
  id: 'm5',
  name: 'Escondidinho de abóbora',
  desc: 'Carne seca desfiada e queijo coalho',
  price: 'R$ 30,90',
  doodle: 'flower-yellow',
  badges: [['yellow', 'Mais pedido']],
  tags: ['conforto']
}, {
  id: 'm6',
  name: 'Salmão com legumes',
  desc: 'Quinoa, aspargos e molho de limão',
  price: 'R$ 36,90',
  doodle: 'moon-green',
  badges: [['green', 'Fit'], ['blue', 'Ômega 3']],
  tags: ['fit', 'low-carb']
}, {
  id: 'm7',
  name: 'Macarrão ao sugo',
  desc: 'Molho de tomate fresco e manjericão',
  price: 'R$ 24,90',
  doodle: 'squiggle-blue',
  badges: [['green', 'Vegetariano']],
  tags: ['vegano', 'conforto']
}, {
  id: 'm8',
  name: 'Feijoada leve',
  desc: 'Feijão preto, couve e farofa de banana',
  price: 'R$ 32,90',
  doodle: 'crown-red',
  badges: [['red', 'Sexta']],
  tags: ['conforto']
}];
window.DOVAL_PLANS = [{
  id: 'p1',
  n: '3 marmitas',
  sub: 'pra testar a semana',
  price: 'R$ 79',
  per: 'R$ 26,30 cada'
}, {
  id: 'p2',
  n: '5 marmitas',
  sub: 'o almoço da semana inteira',
  price: 'R$ 124',
  per: 'R$ 24,80 cada',
  best: true
}, {
  id: 'p3',
  n: '10 marmitas',
  sub: 'almoço e jantar, sem pensar',
  price: 'R$ 229',
  per: 'R$ 22,90 cada'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.MealCard = __ds_scope.MealCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Doodle = __ds_scope.Doodle;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
