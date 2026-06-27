/* @ds-bundle: {"format":3,"namespace":"EmojiPunkPUNKREDDesignSystem_d744f1","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatNumber","sourcePath":"components/core/StatNumber.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a1f96772e933","components/core/Button.jsx":"6dac9ba9c247","components/core/Card.jsx":"861e33559ff3","components/core/Marquee.jsx":"d6314d01d91f","components/core/SectionHeading.jsx":"73fa3d1f309c","components/core/StatNumber.jsx":"9f66dd6800e5","components/core/Tag.jsx":"36bdc515a334","ui_kits/landing/sections1.jsx":"afa966706e28","ui_kits/landing/sections2.jsx":"83da113d32c7","ui_kits/landing/sections3.jsx":"2288391393d4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EmojiPunkPUNKREDDesignSystem_d744f1 = window.EmojiPunkPUNKREDDesignSystem_d744f1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label. Graphite fill, thin light border, optional red dot.
 * Use for section eyebrows: НОВЫЙ УРОВЕНЬ, ДОСТУП ОТКРЫТ, ТОЛЬКО ДЛЯ СВОИХ.
 */
function Badge({
  children,
  dot = true,
  tone = "default",
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: "var(--black-graphite)",
      color: "var(--gray-light)",
      borderColor: "var(--border-subtle)"
    },
    red: {
      background: "rgba(242,13,13,0.10)",
      color: "var(--red-laser)",
      borderColor: "var(--border-active)"
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 11,
      lineHeight: 1,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "7px 13px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid",
      background: t.background,
      color: t.color,
      borderColor: t.borderColor,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--red)",
      boxShadow: "0 0 8px rgba(242,13,13,0.8)",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — PUNK RED CTA primitive.
 * Primary = red gradient pill with soft glow. Secondary = carbon fill, thin border → red on hover.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  uppercase = true,
  arrow = false,
  fullWidth = false,
  href,
  onClick,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      padding: "11px 22px",
      fontSize: 13
    },
    md: {
      padding: "16px 32px",
      fontSize: 14
    },
    lg: {
      padding: "20px 44px",
      fontSize: 15
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: "0.02em",
    textTransform: uppercase ? "uppercase" : "none",
    textDecoration: "none",
    padding: s.padding,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : "auto",
    border: "1px solid transparent",
    transition: "transform var(--dur-base) var(--ease-luxe), box-shadow var(--dur-base) var(--ease-luxe), filter var(--dur-base) var(--ease-luxe), border-color var(--dur-base) var(--ease-luxe)",
    transform: hover && !disabled ? "translateY(-2px)" : "translateY(0)",
    opacity: disabled ? 0.45 : 1,
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--grad-cta)",
      color: "var(--white)",
      boxShadow: hover && !disabled ? "var(--glow-cta-hover)" : "var(--glow-cta)",
      filter: hover && !disabled ? "brightness(1.06)" : "none"
    },
    secondary: {
      background: "var(--black-carbon)",
      color: "var(--white)",
      borderColor: hover && !disabled ? "var(--red)" : "rgba(255,255,255,0.35)",
      boxShadow: hover && !disabled ? "var(--glow-soft)" : "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--white)",
      borderColor: hover && !disabled ? "var(--red)" : "var(--border-line)"
    }
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      transition: "transform var(--dur-base) var(--ease-luxe)",
      transform: hover && !disabled ? "translateX(4px)" : "translateX(0)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — dark gradient panel. The system's primary surface.
 * Base = graphite→deep gradient + hairline border. active=red border. glass=dark blur.
 * Hover (when interactive) lifts the card and adds a soft red glow.
 */
function Card({
  children,
  variant = "base",
  interactive = false,
  padding = "var(--pad-card)",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  const variants = {
    base: {
      background: "var(--grad-card)",
      border: "1px solid var(--border-subtle)",
      boxShadow: lift ? "var(--shadow-card-hover)" : "var(--shadow-card)"
    },
    active: {
      background: "var(--grad-card)",
      border: "1px solid var(--border-active)",
      boxShadow: "var(--shadow-card-hover)"
    },
    glass: {
      background: "var(--glass-bg)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
      border: "1px solid var(--glass-border)",
      boxShadow: lift ? "var(--shadow-card-hover)" : "var(--shadow-card)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: "relative",
      borderRadius: "var(--radius-card)",
      padding,
      boxSizing: "border-box",
      transition: "transform var(--dur-base) var(--ease-luxe), box-shadow var(--dur-base) var(--ease-luxe), border-color var(--dur-base) var(--ease-luxe)",
      transform: lift ? "translateY(-6px)" : "translateY(0)",
      borderColor: lift ? "var(--border-active-strong)" : undefined,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Marquee — signature running red strip. Repeats its text and scrolls continuously.
 * Default red background; `variant="line"` is a transparent divider with red text.
 */
function Marquee({
  text = "EMOJI PUNK — ЭТО НЕ ПРОСТО КОНТЕНТ — ЭТО СИСТЕМА",
  speed = 26,
  variant = "red",
  height = 46,
  style = {},
  ...rest
}) {
  const item = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      flex: "none",
      padding: "0 22px",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: variant === "red" ? "var(--white)" : "var(--red)"
    }
  }, text, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "0 0 0 22px",
      opacity: 0.7
    }
  }, "\u2014"));

  // Repeat enough to fill, then duplicate the whole group for a seamless -50% loop.
  const group = Array.from({
    length: 6
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: "hidden",
      height,
      display: "flex",
      alignItems: "center",
      background: variant === "red" ? "var(--red)" : "transparent",
      borderTop: variant === "line" ? "1px solid var(--border-line)" : "none",
      borderBottom: variant === "line" ? "1px solid var(--border-line)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      whiteSpace: "nowrap",
      animation: `ds-marquee ${speed}s linear infinite`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, group.map((_, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    },
    "aria-hidden": "true"
  }, group.map((_, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: "d" + i
  }, item)))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — eyebrow badge + multi-line headline + optional lead.
 * Headline accepts <span className="ds-accent"> for the red key word.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  size = "h2",
  style = {},
  ...rest
}) {
  const titleStyle = size === "h1" ? {
    fontWeight: 800,
    fontSize: "clamp(38px, 5vw, 64px)",
    lineHeight: 0.98,
    letterSpacing: "-0.02em"
  } : {
    fontWeight: 700,
    fontSize: "clamp(30px, 3.6vw, 46px)",
    lineHeight: 1.04,
    letterSpacing: "-0.018em"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      gap: 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--gray-light)",
      background: "var(--black-graphite)",
      border: "1px solid var(--border-subtle)",
      padding: "7px 13px",
      borderRadius: "var(--radius-pill)",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--red)",
      boxShadow: "0 0 8px rgba(242,13,13,0.8)"
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      color: "var(--white)",
      ...titleStyle
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "22px 0 0",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 21,
      lineHeight: 1.42,
      color: "var(--gray-light)",
      maxWidth: 620
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatNumber.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatNumber — large metric / price. Heavy or ExtraBold, red or white.
 * Optional struck-through old price and a label below.
 */
function StatNumber({
  value,
  oldValue,
  label,
  color = "red",
  size = 64,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), oldValue && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: Math.round(size * 0.34),
      color: "var(--gray-muted)",
      textDecoration: "line-through",
      textDecorationColor: "var(--red)",
      marginBottom: 2
    }
  }, oldValue), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: size,
      lineHeight: 0.94,
      letterSpacing: "-0.02em",
      color: color === "red" ? "var(--red)" : "var(--white)"
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 13,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--gray-light)",
      marginTop: 10
    }
  }, label));
}
Object.assign(__ds_scope, { StatNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatNumber.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — tiny inline label/chip. Lighter weight than Badge, no dot.
 * Use for lists of attributes, list bullets with red checkmarks, meta.
 */
function Tag({
  children,
  check = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.2,
      color: "var(--gray-light)",
      ...style
    }
  }, rest), check && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: 7,
      background: "var(--grad-cta)",
      color: "#fff",
      fontSize: 12,
      fontWeight: 800,
      flex: "none",
      boxShadow: "0 0 14px rgba(242,13,13,0.35)"
    }
  }, "\u2713"), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections1.jsx
try { (() => {
/* Emoji Punk landing — Nav, Hero, WhoFor (red section) */

function GlowBg({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      pointerEvents: "none",
      borderRadius: "50%",
      filter: "blur(90px)",
      ...style
    }
  });
}
function Nav() {
  const {
    Button
  } = window.EmojiPunkPUNKREDDesignSystem_d744f1;
  const links = ["Что внутри", "Результаты", "Цена", "Гарантия"];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "18px var(--pad-x-desktop)",
      background: "rgba(3,3,3,0.72)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border-faint)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      filter: "drop-shadow(0 0 10px rgba(242,13,13,0.6))"
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 19,
      color: "#fff",
      letterSpacing: "-0.02em"
    }
  }, "EMOJI ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)"
    }
  }, "PUNK"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    },
    className: "nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontWeight: 500,
      fontSize: 14,
      color: "var(--gray-light)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.color = "#fff",
    onMouseLeave: e => e.currentTarget.style.color = "var(--gray-light)"
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "\u0425\u043E\u0447\u0443 \u0432\u043D\u0443\u0442\u0440\u044C"));
}
function Hero() {
  const {
    Button,
    Badge,
    Marquee
  } = window.EmojiPunkPUNKREDDesignSystem_d744f1;
  const minis = [{
    e: "📈",
    t: "Охваты, а не лайки"
  }, {
    e: "💸",
    t: "Монетизация аудитории"
  }, {
    e: "🧠",
    t: "Готовая система"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GlowBg, {
    style: {
      width: 620,
      height: 620,
      top: -180,
      right: -120,
      background: "rgba(242,13,13,0.16)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "70px var(--pad-x-desktop) 30px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 56,
      alignItems: "center"
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, null, "\u041F\u0440\u0435\u043C\u0438\u0443\u043C \u0434\u043E\u0441\u0442\u0443\u043F \xB7 \u0421\u0438\u0441\u0442\u0435\u043C\u0430 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "26px 0 0",
      fontWeight: 800,
      fontSize: "clamp(40px, 5.4vw, 66px)",
      lineHeight: 0.98,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, "\u041D\u0415 \u041F\u0420\u041E\u0421\u0422\u041E \u041A\u041E\u041D\u0422\u0415\u041D\u0422.", /*#__PURE__*/React.createElement("br", null), "\u041F\u041E\u0421\u0422\u0420\u041E\u0419 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)"
    }
  }, "\u041C\u0415\u0414\u0418\u0410-\u0421\u0418\u0421\u0422\u0415\u041C\u0423"), ",", /*#__PURE__*/React.createElement("br", null), "\u041A\u041E\u0422\u041E\u0420\u0410\u042F \u0421\u041E\u0417\u0414\u0410\u0401\u0422", /*#__PURE__*/React.createElement("br", null), "\u0412\u041B\u0418\u042F\u041D\u0418\u0415 \u0418 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)"
    }
  }, "\u0414\u0415\u041D\u042C\u0413\u0418"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "26px 0 0",
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.45,
      color: "var(--gray-light)",
      maxWidth: 520
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F\u043C, \u0443\u0440\u043E\u043A\u0430\u043C, \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C \u0438 \u043B\u044E\u0434\u044F\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0445\u043E\u0442\u044F\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u043E \u0437\u0440\u0438\u0442\u0435\u043B\u044F\u043C\u0438."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 34,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C, \u0447\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      marginTop: 38,
      flexWrap: "wrap"
    }
  }, minis.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, m.e), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 14,
      color: "var(--white-soft)"
    }
  }, m.t))))), /*#__PURE__*/React.createElement(HeroVisual, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    text: "\u041A\u041E\u041D\u0422\u0415\u041D\u0422 \u2022 \u0410\u0423\u0414\u0418\u0422\u041E\u0420\u0418\u042F \u2022 \u041E\u0425\u0412\u0410\u0422\u042B \u2022 \u0414\u0415\u041D\u042C\u0413\u0418 \u2022 \u0421\u0412\u041E\u0411\u041E\u0414\u0410 \u2022 \u0412\u041B\u0418\u042F\u041D\u0418\u0415"
  })));
}
function HeroVisual() {
  // Stylized phone with notifications — "expensive ad campaign" object.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(GlowBg, {
    style: {
      width: 380,
      height: 380,
      bottom: -40,
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(242,13,13,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 280,
      height: 560,
      borderRadius: 44,
      background: "linear-gradient(160deg, #161616 0%, #050505 100%)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 40px 90px rgba(0,0,0,0.7), 0 0 70px rgba(242,13,13,0.18)",
      padding: 14,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: 32,
      background: "radial-gradient(circle at 50% 18%, #1a1010 0%, #060606 60%)",
      overflow: "hidden",
      position: "relative",
      padding: 16,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "var(--gray-light)",
      fontSize: 12,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      filter: "drop-shadow(0 0 8px rgba(242,13,13,0.7))"
    }
  }, "\uD83D\uDD25")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [{
    e: "💸",
    t: "Новый платёж",
    s: "+ 24 900 ₽ · сегодня"
  }, {
    e: "📈",
    t: "Рост охватов",
    s: "+340% за 14 дней"
  }, {
    e: "💬",
    t: "Сообщение в клубе",
    s: "«Залетел рилс на 1.2М»"
  }].map(n => /*#__PURE__*/React.createElement("div", {
    key: n.t,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      background: "rgba(18,18,18,0.82)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 16,
      padding: "12px 13px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26
    }
  }, n.e), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      color: "#fff"
    }
  }, n.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 11.5,
      color: "var(--gray-light)",
      marginTop: 2
    }
  }, n.s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 16,
      background: "linear-gradient(90deg, #F20D0D, #FF3D3D)",
      borderRadius: 14,
      padding: "13px 16px",
      textAlign: "center",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "#fff",
      boxShadow: "0 10px 26px rgba(242,13,13,0.5)"
    }
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F"))));
}
function WhoFor() {
  const cats = [{
    e: "🚀",
    t: "Ты только начинаешь",
    d: "Нет канала, но есть желание расти и зарабатывать на контенте."
  }, {
    e: "🎥",
    t: "Есть контент, но мало охватов",
    d: "Снимаешь, но просмотры стоят на месте и не растут."
  }, {
    e: "🧠",
    t: "Застрял и не понимаешь, что дальше",
    d: "Делаешь много, но без системы и понятной стратегии."
  }, {
    e: "💸",
    t: "Хочешь монетизировать аудиторию",
    d: "Аудитория есть — а денег с неё пока нет."
  }, {
    e: "😎",
    t: "Устал смотреть, как другие растут",
    d: "Готов перестать наблюдать и занять своё место."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-gap) var(--pad-x-desktop)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      background: "var(--grad-red-section)",
      borderRadius: "var(--radius-block)",
      padding: "clamp(28px, 4vw, 56px)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#060606",
      borderRadius: 22,
      border: "1px solid rgba(0,0,0,0.4)",
      padding: "clamp(28px, 3.4vw, 52px)",
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 48,
      alignItems: "center"
    },
    className: "who-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      marginBottom: 18,
      filter: "drop-shadow(0 0 24px rgba(242,13,13,0.5))"
    }
  }, "\uD83D\uDC51"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: "clamp(30px,3.4vw,44px)",
      lineHeight: 1.04,
      letterSpacing: "-0.018em",
      color: "#fff"
    }
  }, "\u0414\u041B\u042F \u041A\u041E\u0413\u041E", /*#__PURE__*/React.createElement("br", null), "\u042D\u0422\u041E ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red-laser)"
    }
  }, "\u0412\u041D\u0423\u0422\u0420\u0418")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 0",
      fontWeight: 500,
      fontSize: 17,
      lineHeight: 1.5,
      color: "var(--gray-light)"
    }
  }, "\u0415\u0441\u043B\u0438 \u0442\u044B \u0443\u0437\u043D\u0430\u043B \u0441\u0435\u0431\u044F \u0445\u043E\u0442\u044F \u0431\u044B \u0432 \u043E\u0434\u043D\u043E\u043C \u043F\u0443\u043D\u043A\u0442\u0435 \u2014 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0434\u043B\u044F \u0442\u0430\u043A\u0438\u0445, \u043A\u0430\u043A \u0442\u044B.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      background: "var(--grad-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: 16,
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      flex: "none"
    }
  }, c.e), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: "#fff"
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.45,
      color: "var(--gray-light)",
      marginTop: 3
    }
  }, c.d))))))));
}
Object.assign(window, {
  Nav,
  Hero,
  WhoFor,
  GlowBg
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections2.jsx
try { (() => {
/* Emoji Punk landing — WhatInside, Benefits, Results */

function WhatInside() {
  const {
    SectionHeading,
    Card,
    Marquee
  } = window.EmojiPunkPUNKREDDesignSystem_d744f1;
  const lessons = [{
    e: "🧠",
    t: "Как найти свою нишу",
    d: "Точка входа, в которой ты сильнее других и быстрее растёшь."
  }, {
    e: "📱",
    t: "Как создать сильный канал",
    d: "Упаковка, позиционирование, первые форматы."
  }, {
    e: "🎥",
    t: "Контент, который смотрят",
    d: "Структура видео, удержание, сценарии."
  }, {
    e: "📈",
    t: "Как получать просмотры",
    d: "Алгоритмы, охваты, вирусные механики."
  }, {
    e: "😎",
    t: "Личный бренд",
    d: "Образ, голос, доверие аудитории."
  }, {
    e: "💸",
    t: "Монетизация аудитории",
    d: "Деньги с контента: модели и инструменты."
  }, {
    e: "⚡",
    t: "Как работать с ИИ",
    d: "Скорость продакшна без потери качества."
  }, {
    e: "🔥",
    t: "Вирусные форматы",
    d: "Шаблоны, которые залетают снова и снова."
  }, {
    e: "👑",
    t: "Как не сдаться",
    d: "Система и поддержка вместо выгорания на 2-й неделе."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--pad-x-desktop) var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\u0427\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0412\u041D\u0423\u0422\u0420\u0418 \u041D\u0415 \u041C\u041E\u0422\u0418\u0412\u0410\u0426\u0418\u042F.", /*#__PURE__*/React.createElement("br", null), "\u0412\u041D\u0423\u0422\u0420\u0418 \u2014 ", /*#__PURE__*/React.createElement("span", {
      className: "ds-accent"
    }, "\u0421\u0418\u0421\u0422\u0415\u041C\u0410"), "."),
    lead: "\u041D\u0435 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u043B\u044F\u044E\u0449\u0438\u0435 \u0446\u0438\u0442\u0430\u0442\u044B, \u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0448\u0430\u0433\u0438, \u0444\u043E\u0440\u043C\u0430\u0442\u044B \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0432\u0438\u0433\u0430\u044E\u0442 \u043A \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0443.",
    style: {
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--gap-cards)"
    },
    className: "cards-3"
  }, lessons.map((l, i) => /*#__PURE__*/React.createElement(Card, {
    key: l.t,
    variant: i === 3 ? "active" : "base",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: "rgba(242,13,13,0.10)",
      border: "1px solid var(--border-active)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
      marginBottom: 20
    }
  }, l.e), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 700,
      fontSize: 21,
      color: "#fff",
      letterSpacing: "-0.01em"
    }
  }, l.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontWeight: 400,
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--gray-light)"
    }
  }, l.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    variant: "line",
    text: "EMOJI PUNK \u2014 \u042D\u0422\u041E \u041D\u0415 \u041F\u0420\u041E\u0421\u0422\u041E \u041A\u041E\u041D\u0422\u0415\u041D\u0422 \u2014 \u042D\u0422\u041E \u0421\u0418\u0421\u0422\u0415\u041C\u0410",
    speed: 30
  })));
}
function Benefits() {
  const {
    SectionHeading
  } = window.EmojiPunkPUNKREDDesignSystem_d744f1;
  const items = [{
    e: "🧠",
    t: "Готовые стратегии",
    d: "Не теория, а проверенные схемы под копирование."
  }, {
    e: "🎥",
    t: "Новые уроки",
    d: "Библиотека постоянно пополняется свежими разборами."
  }, {
    e: "💬",
    t: "Чат с единомышленниками",
    d: "Люди, которые растут рядом и подсказывают."
  }, {
    e: "📈",
    t: "Разборы и кейсы",
    d: "Личный фидбэк по твоему контенту и каналу."
  }, {
    e: "⚡",
    t: "Доступ к инструментам",
    d: "ИИ, шаблоны, чек-листы, готовые сценарии."
  }, {
    e: "✅",
    t: "Конкретные действия",
    d: "Ясно, что делать сегодня, а не «когда-нибудь»."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--pad-x-desktop) var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\u041F\u043E\u0447\u0435\u043C\u0443 \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041F\u041E\u0427\u0415\u041C\u0423 \u042D\u0422\u041E \u0420\u0410\u0411\u041E\u0422\u0410\u0415\u0422", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      className: "ds-accent"
    }, "\u0411\u042B\u0421\u0422\u0420\u0415\u0415"), ", \u0427\u0415\u041C \u0412 \u041E\u0414\u0418\u041D\u041E\u0427\u041A\u0423"),
    style: {
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--gap-cards)"
    },
    className: "cards-3"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      background: "var(--bg-section)",
      border: "1px solid var(--border-faint)",
      borderRadius: 16,
      padding: "24px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      flex: "none"
    }
  }, it.e), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: "#fff"
    }
  }, it.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 400,
      fontSize: 14.5,
      lineHeight: 1.5,
      color: "var(--gray-light)",
      marginTop: 6
    }
  }, it.d)))))));
}
function Results() {
  const {
    SectionHeading,
    StatNumber
  } = window.EmojiPunkPUNKREDDesignSystem_d744f1;
  const reviews = [{
    name: "Артём",
    h: "@artem.media",
    t: "За месяц вышел с 2К на 60К подписчиков. Первый рилс на 1.2М просмотров — по шаблону из клуба.",
    e: "🚀"
  }, {
    name: "Лера",
    h: "блогер",
    t: "Перестала снимать «в стол». Появилась система — и первые 80 000 ₽ с контента.",
    e: "💸"
  }, {
    name: "Макс",
    h: "@maxbuilds",
    t: "Думал, поздно начинать. За 6 недель — стабильные охваты и заявки в личку каждый день.",
    e: "📈"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--pad-x-desktop) var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041B\u042E\u0414\u0418 \u041F\u0420\u0418\u0425\u041E\u0414\u042F\u0422 \u0417\u0410 \u0417\u041D\u0410\u041D\u0418\u042F\u041C\u0418.", /*#__PURE__*/React.createElement("br", null), "\u041E\u0421\u0422\u0410\u042E\u0422\u0421\u042F \u0420\u0410\u0414\u0418 ", /*#__PURE__*/React.createElement("span", {
      className: "ds-accent"
    }, "\u0420\u0415\u0417\u0423\u041B\u042C\u0422\u0410\u0422\u0410"), "."),
    style: {
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18,
      marginBottom: 18
    },
    className: "stats-3"
  }, /*#__PURE__*/React.createElement(StatNumber, {
    value: "+340%",
    label: "\u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0440\u043E\u0441\u0442 \u043E\u0445\u0432\u0430\u0442\u043E\u0432",
    color: "red",
    size: 56
  }), /*#__PURE__*/React.createElement(StatNumber, {
    value: "14 \u0434\u043D\u0435\u0439",
    label: "\u0434\u043E \u043F\u0435\u0440\u0432\u044B\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432",
    color: "white",
    size: 56
  }), /*#__PURE__*/React.createElement(StatNumber, {
    value: "2 400+",
    label: "\u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u043A\u043B\u0443\u0431\u0430",
    color: "white",
    size: 56
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--gap-cards)"
    },
    className: "cards-3"
  }, reviews.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      background: "#fff",
      borderRadius: 18,
      padding: 22,
      boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: "50%",
      background: "linear-gradient(145deg,#1a1a1a,#000)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22
    }
  }, r.e), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: "#0b0b0b"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 12.5,
      color: "#888"
    }
  }, r.h))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontWeight: 500,
      fontSize: 14.5,
      lineHeight: 1.5,
      color: "#1c1c1c"
    }
  }, r.t))))));
}
Object.assign(window, {
  WhatInside,
  Benefits,
  Results
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections3.jsx
try { (() => {
/* Emoji Punk landing — Pricing, Guarantee, FinalCTA, Footer */

function Pricing() {
  const {
    Button,
    Tag,
    StatNumber,
    Badge
  } = window.EmojiPunkPUNKREDDesignSystem_d744f1;
  const includes = ["Полная система: ниша → канал → охваты → деньги", "Библиотека уроков и регулярные обновления", "Чат клуба и поддержка единомышленников", "Разборы твоего контента и личный фидбэк", "Доступ к инструментам, шаблонам и ИИ"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--pad-x-desktop) var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.25fr 0.75fr",
      gap: 28,
      alignItems: "stretch"
    },
    className: "price-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--grad-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-block)",
      padding: "clamp(28px, 3.4vw, 48px)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      width: 360,
      height: 360,
      borderRadius: "50%",
      filter: "blur(90px)",
      background: "rgba(242,13,13,0.14)",
      bottom: -120,
      right: -80
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "red"
  }, "\u0414\u043E\u0441\u0442\u0443\u043F \u043E\u0442\u043A\u0440\u044B\u0442"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "20px 0 0",
      fontWeight: 600,
      fontSize: 22,
      color: "#fff"
    }
  }, "\u0414\u041E\u0421\u0422\u0423\u041F \u0412 EMOJI PUNK"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(StatNumber, {
    oldValue: "4 990 \u20BD",
    value: "1 990 \u20BD / \u043C\u0435\u0441",
    label: "\u0432\u0441\u0451, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044C \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438 \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u0438\u0442\u044C",
    color: "red",
    size: 56
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 13,
      margin: "30px 0 34px"
    }
  }, includes.map(i => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    check: true
  }, i))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true,
    fullWidth: true
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      textAlign: "center",
      fontWeight: 400,
      fontSize: 13,
      color: "var(--gray-muted)"
    }
  }, "\u0414\u043E\u0441\u0442\u0443\u043F \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B. \u041E\u0442\u043C\u0435\u043D\u0430 \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--grad-red-section)",
      borderRadius: "var(--radius-block)",
      padding: 36,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 120,
      filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.5))"
    }
  }, "\uD83C\uDF9F\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontWeight: 800,
      fontSize: 22,
      color: "#fff",
      letterSpacing: "-0.01em"
    }
  }, "\u0422\u0412\u041E\u0419 \u041F\u0420\u041E\u041F\u0423\u0421\u041A", /*#__PURE__*/React.createElement("br", null), "\u0412\u041D\u0423\u0422\u0420\u042C \u041A\u041B\u0423\u0411\u0410"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.85)"
    }
  }, "\u041E\u0434\u0438\u043D \u0434\u043E\u0441\u0442\u0443\u043F \u2014 \u0432\u0441\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435."))));
}
function Guarantee() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 var(--pad-x-desktop) var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      background: "var(--bg-section)",
      border: "1px solid var(--border-faint)",
      borderRadius: "var(--radius-block)",
      padding: "clamp(32px, 4vw, 60px)",
      display: "grid",
      gridTemplateColumns: "0.5fr 1fr",
      gap: 40,
      alignItems: "center"
    },
    className: "who-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 150,
      filter: "drop-shadow(0 20px 50px rgba(242,13,13,0.4))"
    }
  }, "\uD83D\uDEE1\uFE0F")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: "clamp(28px,3.2vw,42px)",
      lineHeight: 1.05,
      letterSpacing: "-0.018em",
      color: "#fff"
    }
  }, "\u0420\u0418\u0421\u041A\u0410 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)"
    }
  }, "\u041D\u0415\u0422"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "18px 0 0",
      fontWeight: 500,
      fontSize: 19,
      lineHeight: 1.45,
      color: "var(--white-soft)",
      maxWidth: 560
    }
  }, "\u0422\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0448\u044C, \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043B\u0438 \u0442\u0435\u0431\u0435 \u0444\u043E\u0440\u043C\u0430\u0442 \u2014 \u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0442\u043E\u043C \u0440\u0435\u0448\u0430\u0435\u0448\u044C, \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u0438\u043B\u0438 \u043D\u0435\u0442."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--gray-muted)",
      maxWidth: 600
    }
  }, "\u0414\u043E\u0441\u0442\u0443\u043F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438. \u041E\u043F\u043B\u0430\u0442\u0430 \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u0430\u044F, \u043E\u0442\u043C\u0435\u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435. \u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043A\u043B\u0443\u0431\u0430 \u043D\u043E\u0441\u0438\u0442 \u043E\u0431\u0443\u0447\u0430\u044E\u0449\u0438\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0438 \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0433\u043E \u0434\u043E\u0445\u043E\u0434\u0430."))));
}
function FinalCTA() {
  const {
    Button,
    Marquee
  } = window.EmojiPunkPUNKREDDesignSystem_d744f1;
  const notes = ["Доступ открывается сразу", "Всё внутри в одном месте", "Можно начать сегодня"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--section-gap) var(--pad-x-desktop) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      width: 760,
      height: 520,
      borderRadius: "50%",
      filter: "blur(120px)",
      background: "rgba(242,13,13,0.22)",
      bottom: -260,
      left: "50%",
      transform: "translateX(-50%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 980,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      marginBottom: 22,
      filter: "drop-shadow(0 0 30px rgba(242,13,13,0.6))"
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 800,
      fontSize: "clamp(36px,5vw,62px)",
      lineHeight: 1.0,
      letterSpacing: "-0.02em",
      color: "#fff"
    }
  }, "\u0422\u042B \u041C\u041E\u0416\u0415\u0428\u042C \u041E\u0421\u0422\u0410\u0422\u042C\u0421\u042F ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gray-muted)"
    }
  }, "\u0417\u0420\u0418\u0422\u0415\u041B\u0415\u041C"), ".", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900
    }
  }, "\u0410 \u041C\u041E\u0416\u0415\u0428\u042C \u0421\u0422\u0410\u0422\u042C \u0422\u0415\u041C, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)"
    }
  }, "\u041A\u041E\u0413\u041E \u0421\u041C\u041E\u0422\u0420\u042F\u0422"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 38
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true
  }, "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043A\u043B\u0443\u0431")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 28
    }
  }, notes.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontWeight: 500,
      fontSize: 13.5,
      color: "var(--gray-light)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)",
      fontWeight: 800
    }
  }, "\u2713"), " ", n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    text: "EMOJI PUNK \u2014 \u042D\u0422\u041E \u041D\u0415 \u041F\u0420\u041E\u0421\u0422\u041E \u041A\u041E\u041D\u0422\u0415\u041D\u0422 \u2014 \u042D\u0422\u041E \u0421\u0418\u0421\u0422\u0415\u041C\u0410"
  })));
}
function Footer() {
  const cols = [{
    h: "Продукт",
    links: ["Что внутри", "Результаты", "Цена", "Гарантия"]
  }, {
    h: "Помощь",
    links: ["FAQ", "Поддержка", "Оплата", "Условия"]
  }, {
    h: "Контакты",
    links: ["Telegram", "Instagram", "YouTube", "Почта"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-faint)",
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "56px var(--pad-x-desktop) 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: 40
    },
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: "#fff",
      letterSpacing: "-0.02em"
    }
  }, "EMOJI ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--red)"
    }
  }, "PUNK"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--gray-muted)",
      maxWidth: 280
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0441\u0442\u0440\u043E\u0438\u0442 \u0432\u043B\u0438\u044F\u043D\u0438\u0435 \u0438 \u0434\u0435\u043D\u044C\u0433\u0438 \u043D\u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0435.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--gray-light)",
      marginBottom: 16
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontWeight: 500,
      fontSize: 14,
      color: "var(--gray-muted)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.color = "#fff",
    onMouseLeave: e => e.currentTarget.style.color = "var(--gray-muted)"
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-faint)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "20px var(--pad-x-desktop)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 13,
      color: "var(--gray-dark)"
    }
  }, "\xA9 2026 Emoji Punk. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 13,
      color: "var(--gray-dark)"
    }
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \xB7 \u041E\u0444\u0435\u0440\u0442\u0430"))));
}
Object.assign(window, {
  Pricing,
  Guarantee,
  FinalCTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections3.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatNumber = __ds_scope.StatNumber;

__ds_ns.Tag = __ds_scope.Tag;

})();
