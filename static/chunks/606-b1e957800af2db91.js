'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [606],
  {
    51807: (o, e, n) => {
      n.d(e, { ColorSchemeScript: () => a });
      var r = n(95155);
      let t = (o) => {
        let { defaultColorScheme: e, localStorageKey: n, forceColorScheme: r } = o;
        return r
          ? 'document.documentElement.setAttribute("data-mantine-color-scheme", \''.concat(r, "');")
          : 'try {\n  var _colorScheme = window.localStorage.getItem("'
              .concat(
                n,
                '");\n  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "'
              )
              .concat(
                e,
                '";\n  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";\n  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);\n} catch (e) {}\n'
              );
      };
      function a(o) {
        let {
            defaultColorScheme: e = 'light',
            localStorageKey: n = 'mantine-color-scheme-value',
            forceColorScheme: a,
            ...c
          } = o,
          i = ['light', 'dark', 'auto'].includes(e) ? e : 'light';
        return (0, r.jsx)('script', {
          ...c,
          'data-mantine-script': !0,
          dangerouslySetInnerHTML: {
            __html: t({ defaultColorScheme: i, localStorageKey: n, forceColorScheme: a }),
          },
        });
      }
    },
    20431: (o, e, n) => {
      n.d(e, {
        A$: () => t,
        AI: () => i,
        FI: () => d,
        If: () => s,
        NL: () => m,
        OY: () => c,
        WV: () => l,
        m6: () => f,
      });
      var r = n(12115);
      let t = (0, r.createContext)(null);
      function a() {
        let o = (0, r.useContext)(t);
        if (!o) throw Error('[@mantine/core] MantineProvider was not found in tree');
        return o;
      }
      function c() {
        return a().cssVariablesResolver;
      }
      function i() {
        return a().classNamesPrefix;
      }
      function l() {
        return a().getStyleNonce;
      }
      function s() {
        return a().withStaticClasses;
      }
      function d() {
        return a().headless;
      }
      function m() {
        var o;
        return null === (o = a().stylesTransform) || void 0 === o ? void 0 : o.sx;
      }
      function f() {
        var o;
        return null === (o = a().stylesTransform) || void 0 === o ? void 0 : o.styles;
      }
    },
    1900: (o, e, n) => {
      n.d(e, { MantineProvider: () => x });
      var r = n(95155);
      function t(o) {
        return 'auto' === o || 'dark' === o || 'light' === o;
      }
      var a = n(20431),
        c = n(78643),
        i = n(23884),
        l = n(57518),
        s = n(12115),
        d = n(78770);
      function m() {
        let o = (0, d.xd)(),
          e = (0, a.WV)(),
          n = (0, c.H)(o.breakpoints).reduce((e, n) => {
            let r = o.breakpoints[n].includes('px'),
              t = (0, i.px)(o.breakpoints[n]),
              a = r ? ''.concat(t - 0.1, 'px') : (0, l.em)(t - 0.1),
              c = r ? ''.concat(t, 'px') : (0, l.em)(t);
            return ''
              .concat(e, '@media (max-width: ')
              .concat(a, ') {.mantine-visible-from-')
              .concat(n, ' {display: none !important;}}@media (min-width: ')
              .concat(c, ') {.mantine-hidden-from-')
              .concat(n, ' {display: none !important;}}');
          }, '');
        return (0, r.jsx)('style', {
          'data-mantine-styles': 'classes',
          nonce: null == e ? void 0 : e(),
          dangerouslySetInnerHTML: { __html: n },
        });
      }
      function f(o) {
        return Object.entries(o)
          .map((o) => {
            let [e, n] = o;
            return ''.concat(e, ': ').concat(n, ';');
          })
          .join('');
      }
      function u(o, e) {
        return (Array.isArray(o) ? o : [o]).reduce((o, e) => ''.concat(e, '{').concat(o, '}'), e);
      }
      var h = n(22805),
        v = n(56379),
        g = n(73343),
        b = n(61673);
      function p(o) {
        let { theme: e, color: n, colorScheme: r, name: t = n, withColorValues: a = !0 } = o;
        if (!e.colors[n]) return {};
        if ('light' === r) {
          let o = (0, v.g)(e, 'light'),
            r = {
              ['--mantine-color-'.concat(t, '-text')]: 'var(--mantine-color-'.concat(t, '-filled)'),
              ['--mantine-color-'.concat(t, '-filled')]: 'var(--mantine-color-'
                .concat(t, '-')
                .concat(o, ')'),
              ['--mantine-color-'.concat(t, '-filled-hover')]: 'var(--mantine-color-'
                .concat(t, '-')
                .concat(9 === o ? 8 : o + 1, ')'),
              ['--mantine-color-'.concat(t, '-light')]: (0, b.X)(e.colors[n][o], 0.1),
              ['--mantine-color-'.concat(t, '-light-hover')]: (0, b.X)(e.colors[n][o], 0.12),
              ['--mantine-color-'.concat(t, '-light-color')]: 'var(--mantine-color-'
                .concat(t, '-')
                .concat(o, ')'),
              ['--mantine-color-'.concat(t, '-outline')]: 'var(--mantine-color-'
                .concat(t, '-')
                .concat(o, ')'),
              ['--mantine-color-'.concat(t, '-outline-hover')]: (0, b.X)(e.colors[n][o], 0.05),
            };
          return a
            ? {
                ['--mantine-color-'.concat(t, '-0')]: e.colors[n][0],
                ['--mantine-color-'.concat(t, '-1')]: e.colors[n][1],
                ['--mantine-color-'.concat(t, '-2')]: e.colors[n][2],
                ['--mantine-color-'.concat(t, '-3')]: e.colors[n][3],
                ['--mantine-color-'.concat(t, '-4')]: e.colors[n][4],
                ['--mantine-color-'.concat(t, '-5')]: e.colors[n][5],
                ['--mantine-color-'.concat(t, '-6')]: e.colors[n][6],
                ['--mantine-color-'.concat(t, '-7')]: e.colors[n][7],
                ['--mantine-color-'.concat(t, '-8')]: e.colors[n][8],
                ['--mantine-color-'.concat(t, '-9')]: e.colors[n][9],
                ...r,
              }
            : r;
        }
        let c = (0, v.g)(e, 'dark'),
          i = {
            ['--mantine-color-'.concat(t, '-text')]: 'var(--mantine-color-'.concat(t, '-4)'),
            ['--mantine-color-'.concat(t, '-filled')]: 'var(--mantine-color-'
              .concat(t, '-')
              .concat(c, ')'),
            ['--mantine-color-'.concat(t, '-filled-hover')]: 'var(--mantine-color-'
              .concat(t, '-')
              .concat(9 === c ? 8 : c + 1, ')'),
            ['--mantine-color-'.concat(t, '-light')]: (0, b.X)(
              e.colors[n][Math.max(0, c - 2)],
              0.15
            ),
            ['--mantine-color-'.concat(t, '-light-hover')]: (0, b.X)(
              e.colors[n][Math.max(0, c - 2)],
              0.2
            ),
            ['--mantine-color-'.concat(t, '-light-color')]: 'var(--mantine-color-'
              .concat(t, '-')
              .concat(Math.max(c - 5, 0), ')'),
            ['--mantine-color-'.concat(t, '-outline')]: 'var(--mantine-color-'
              .concat(t, '-')
              .concat(Math.max(c - 4, 0), ')'),
            ['--mantine-color-'.concat(t, '-outline-hover')]: (0, b.X)(
              e.colors[n][Math.max(c - 4, 0)],
              0.05
            ),
          };
        return a
          ? {
              ['--mantine-color-'.concat(t, '-0')]: e.colors[n][0],
              ['--mantine-color-'.concat(t, '-1')]: e.colors[n][1],
              ['--mantine-color-'.concat(t, '-2')]: e.colors[n][2],
              ['--mantine-color-'.concat(t, '-3')]: e.colors[n][3],
              ['--mantine-color-'.concat(t, '-4')]: e.colors[n][4],
              ['--mantine-color-'.concat(t, '-5')]: e.colors[n][5],
              ['--mantine-color-'.concat(t, '-6')]: e.colors[n][6],
              ['--mantine-color-'.concat(t, '-7')]: e.colors[n][7],
              ['--mantine-color-'.concat(t, '-8')]: e.colors[n][8],
              ['--mantine-color-'.concat(t, '-9')]: e.colors[n][9],
              ...i,
            }
          : i;
      }
      function y(o, e, n) {
        (0, c.H)(e).forEach((r) =>
          Object.assign(o, { ['--mantine-'.concat(n, '-').concat(r)]: e[r] })
        );
      }
      let k = (o) => {
          let e = (0, v.g)(o, 'light'),
            n = o.defaultRadius in o.radius ? o.radius[o.defaultRadius] : (0, l.D)(o.defaultRadius),
            r = {
              variables: {
                '--mantine-scale': o.scale.toString(),
                '--mantine-cursor-type': o.cursorType,
                '--mantine-color-scheme': 'light dark',
                '--mantine-webkit-font-smoothing': o.fontSmoothing ? 'antialiased' : 'unset',
                '--mantine-moz-font-smoothing': o.fontSmoothing ? 'grayscale' : 'unset',
                '--mantine-color-white': o.white,
                '--mantine-color-black': o.black,
                '--mantine-line-height': o.lineHeights.md,
                '--mantine-font-family': o.fontFamily,
                '--mantine-font-family-monospace': o.fontFamilyMonospace,
                '--mantine-font-family-headings': o.headings.fontFamily,
                '--mantine-heading-font-weight': o.headings.fontWeight,
                '--mantine-heading-text-wrap': o.headings.textWrap,
                '--mantine-radius-default': n,
                '--mantine-primary-color-filled': 'var(--mantine-color-'.concat(
                  o.primaryColor,
                  '-filled)'
                ),
                '--mantine-primary-color-filled-hover': 'var(--mantine-color-'.concat(
                  o.primaryColor,
                  '-filled-hover)'
                ),
                '--mantine-primary-color-light': 'var(--mantine-color-'.concat(
                  o.primaryColor,
                  '-light)'
                ),
                '--mantine-primary-color-light-hover': 'var(--mantine-color-'.concat(
                  o.primaryColor,
                  '-light-hover)'
                ),
                '--mantine-primary-color-light-color': 'var(--mantine-color-'.concat(
                  o.primaryColor,
                  '-light-color)'
                ),
              },
              light: {
                '--mantine-primary-color-contrast': (0, g.g)(o, 'light'),
                '--mantine-color-bright': 'var(--mantine-color-black)',
                '--mantine-color-text': o.black,
                '--mantine-color-body': o.white,
                '--mantine-color-error': 'var(--mantine-color-red-6)',
                '--mantine-color-placeholder': 'var(--mantine-color-gray-5)',
                '--mantine-color-anchor': 'var(--mantine-color-'
                  .concat(o.primaryColor, '-')
                  .concat(e, ')'),
                '--mantine-color-default': 'var(--mantine-color-white)',
                '--mantine-color-default-hover': 'var(--mantine-color-gray-0)',
                '--mantine-color-default-color': 'var(--mantine-color-black)',
                '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
                '--mantine-color-dimmed': 'var(--mantine-color-gray-6)',
              },
              dark: {
                '--mantine-primary-color-contrast': (0, g.g)(o, 'dark'),
                '--mantine-color-bright': 'var(--mantine-color-white)',
                '--mantine-color-text': 'var(--mantine-color-dark-0)',
                '--mantine-color-body': 'var(--mantine-color-dark-7)',
                '--mantine-color-error': 'var(--mantine-color-red-8)',
                '--mantine-color-placeholder': 'var(--mantine-color-dark-3)',
                '--mantine-color-anchor': 'var(--mantine-color-'.concat(o.primaryColor, '-4)'),
                '--mantine-color-default': 'var(--mantine-color-dark-6)',
                '--mantine-color-default-hover': 'var(--mantine-color-dark-5)',
                '--mantine-color-default-color': 'var(--mantine-color-white)',
                '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
                '--mantine-color-dimmed': 'var(--mantine-color-dark-2)',
              },
            };
          y(r.variables, o.breakpoints, 'breakpoint'),
            y(r.variables, o.spacing, 'spacing'),
            y(r.variables, o.fontSizes, 'font-size'),
            y(r.variables, o.lineHeights, 'line-height'),
            y(r.variables, o.shadows, 'shadow'),
            y(r.variables, o.radius, 'radius'),
            o.colors[o.primaryColor].forEach((e, n) => {
              r.variables['--mantine-primary-color-'.concat(n)] = 'var(--mantine-color-'
                .concat(o.primaryColor, '-')
                .concat(n, ')');
            }),
            (0, c.H)(o.colors).forEach((e) => {
              let n = o.colors[e];
              if (
                (function (o) {
                  return !!o && 'object' == typeof o && 'mantine-virtual-color' in o;
                })(n)
              ) {
                Object.assign(
                  r.light,
                  p({
                    theme: o,
                    name: n.name,
                    color: n.light,
                    colorScheme: 'light',
                    withColorValues: !0,
                  })
                ),
                  Object.assign(
                    r.dark,
                    p({
                      theme: o,
                      name: n.name,
                      color: n.dark,
                      colorScheme: 'dark',
                      withColorValues: !0,
                    })
                  );
                return;
              }
              n.forEach((o, n) => {
                r.variables['--mantine-color-'.concat(e, '-').concat(n)] = o;
              }),
                Object.assign(
                  r.light,
                  p({ theme: o, color: e, colorScheme: 'light', withColorValues: !1 })
                ),
                Object.assign(
                  r.dark,
                  p({ theme: o, color: e, colorScheme: 'dark', withColorValues: !1 })
                );
            });
          let t = o.headings.sizes;
          return (
            (0, c.H)(t).forEach((e) => {
              (r.variables['--mantine-'.concat(e, '-font-size')] = t[e].fontSize),
                (r.variables['--mantine-'.concat(e, '-line-height')] = t[e].lineHeight),
                (r.variables['--mantine-'.concat(e, '-font-weight')] =
                  t[e].fontWeight || o.headings.fontWeight);
            }),
            r
          );
        },
        w = k(n(79543).S);
      function D(o) {
        let { cssVariablesSelector: e, deduplicateCssVariables: n } = o,
          t = (0, d.xd)(),
          i = (0, a.WV)(),
          l = (function (o) {
            let { theme: e, generator: n } = o,
              r = k(e),
              t = null == n ? void 0 : n(e);
            return t ? (0, h.$)(r, t) : r;
          })({ theme: t, generator: (0, a.OY)() }),
          s = ':root' === e && n,
          m = (function (o, e) {
            let n = f(o.variables),
              r = n ? u(e, n) : '',
              t = f(o.dark),
              a = f(o.light),
              c = t
                ? ':host' === e
                  ? u(''.concat(e, '([data-mantine-color-scheme="dark"])'), t)
                  : u(''.concat(e, '[data-mantine-color-scheme="dark"]'), t)
                : '',
              i = a
                ? ':host' === e
                  ? u(''.concat(e, '([data-mantine-color-scheme="light"])'), a)
                  : u(''.concat(e, '[data-mantine-color-scheme="light"]'), a)
                : '';
            return ''.concat(r).concat(c).concat(i);
          })(
            s
              ? (function (o) {
                  let e = { variables: {}, light: {}, dark: {} };
                  return (
                    (0, c.H)(o.variables).forEach((n) => {
                      w.variables[n] !== o.variables[n] && (e.variables[n] = o.variables[n]);
                    }),
                    (0, c.H)(o.light).forEach((n) => {
                      w.light[n] !== o.light[n] && (e.light[n] = o.light[n]);
                    }),
                    (0, c.H)(o.dark).forEach((n) => {
                      w.dark[n] !== o.dark[n] && (e.dark[n] = o.dark[n]);
                    }),
                    e
                  );
                })(l)
              : l,
            e
          );
        return m
          ? (0, r.jsx)('style', {
              'data-mantine-styles': !0,
              nonce: null == i ? void 0 : i(),
              dangerouslySetInnerHTML: {
                __html: ''
                  .concat(m)
                  .concat(
                    s
                      ? ''
                      : '\n  '
                          .concat(
                            e,
                            '[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }\n  '
                          )
                          .concat(
                            e,
                            '[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }\n'
                          )
                  ),
              },
            })
          : null;
      }
      D.displayName = '@mantine/CssVariables';
      var S = n(64058);
      function C(o, e) {
        var n, r;
        let t =
          'undefined' != typeof window &&
          'matchMedia' in window &&
          (null === (n = window.matchMedia('(prefers-color-scheme: dark)')) || void 0 === n
            ? void 0
            : n.matches);
        null === (r = e()) ||
          void 0 === r ||
          r.setAttribute('data-mantine-color-scheme', 'auto' !== o ? o : t ? 'dark' : 'light');
      }
      function x(o) {
        let {
            theme: e,
            children: n,
            getStyleNonce: c,
            withStaticClasses: i = !0,
            withGlobalClasses: l = !0,
            deduplicateCssVariables: f = !0,
            withCssVariables: u = !0,
            cssVariablesSelector: h = ':root',
            classNamesPrefix: v = 'mantine',
            colorSchemeManager: g = (function () {
              let o,
                { key: e = 'mantine-color-scheme-value' } =
                  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return {
                get: (o) => {
                  if ('undefined' == typeof window) return o;
                  try {
                    let n = window.localStorage.getItem(e);
                    return t(n) ? n : o;
                  } catch (e) {
                    return o;
                  }
                },
                set: (o) => {
                  try {
                    window.localStorage.setItem(e, o);
                  } catch (o) {
                    console.warn(
                      '[@mantine/core] Local storage color scheme manager was unable to save color scheme.',
                      o
                    );
                  }
                },
                subscribe: (n) => {
                  (o = (o) => {
                    o.storageArea === window.localStorage &&
                      o.key === e &&
                      t(o.newValue) &&
                      n(o.newValue);
                  }),
                    window.addEventListener('storage', o);
                },
                unsubscribe: () => {
                  window.removeEventListener('storage', o);
                },
                clear: () => {
                  window.localStorage.removeItem(e);
                },
              };
            })(),
            defaultColorScheme: b = 'light',
            getRootElement: p = () => document.documentElement,
            cssVariablesResolver: y,
            forceColorScheme: k,
            stylesTransform: w,
          } = o,
          {
            colorScheme: x,
            setColorScheme: M,
            clearColorScheme: E,
          } = (function (o) {
            let { manager: e, defaultColorScheme: n, getRootElement: r, forceColorScheme: t } = o,
              a = (0, s.useRef)(null),
              [c, i] = (0, s.useState)(() => e.get(n)),
              l = t || c,
              d = (0, s.useCallback)(
                (o) => {
                  t || (C(o, r), i(o), e.set(o));
                },
                [e.set, l, t]
              ),
              m = (0, s.useCallback)(() => {
                i(n), C(n, r), e.clear();
              }, [e.clear, n]);
            return (
              (0, s.useEffect)(() => (e.subscribe(d), e.unsubscribe), [e.subscribe, e.unsubscribe]),
              (0, S.o)(() => {
                C(e.get(n), r);
              }, []),
              (0, s.useEffect)(() => {
                var o;
                if (t) return C(t, r), () => {};
                void 0 === t && C(c, r),
                  'undefined' != typeof window &&
                    'matchMedia' in window &&
                    (a.current = window.matchMedia('(prefers-color-scheme: dark)'));
                let e = (o) => {
                  'auto' === c && C(o.matches ? 'dark' : 'light', r);
                };
                return (
                  null === (o = a.current) || void 0 === o || o.addEventListener('change', e),
                  () => {
                    var o;
                    return null === (o = a.current) || void 0 === o
                      ? void 0
                      : o.removeEventListener('change', e);
                  }
                );
              }, [c, t]),
              { colorScheme: l, setColorScheme: d, clearColorScheme: m }
            );
          })({ defaultColorScheme: b, forceColorScheme: k, manager: g, getRootElement: p });
        return (
          !(function (o) {
            let { respectReducedMotion: e, getRootElement: n } = o;
            (0, S.o)(() => {
              if (e) {
                var o;
                null === (o = n()) ||
                  void 0 === o ||
                  o.setAttribute('data-respect-reduced-motion', 'true');
              }
            }, [e]);
          })({
            respectReducedMotion: (null == e ? void 0 : e.respectReducedMotion) || !1,
            getRootElement: p,
          }),
          (0, r.jsx)(a.A$.Provider, {
            value: {
              colorScheme: x,
              setColorScheme: M,
              clearColorScheme: E,
              getRootElement: p,
              classNamesPrefix: v,
              getStyleNonce: c,
              cssVariablesResolver: y,
              cssVariablesSelector: h,
              withStaticClasses: i,
              stylesTransform: w,
            },
            children: (0, r.jsxs)(d.nW, {
              theme: e,
              children: [
                u && (0, r.jsx)(D, { cssVariablesSelector: h, deduplicateCssVariables: f }),
                l && (0, r.jsx)(m, {}),
                n,
              ],
            }),
          })
        );
      }
      !(function () {
        let o = console.error;
        console.error = function () {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          (n.length > 1 &&
            'string' == typeof n[0] &&
            n[0].toLowerCase().includes('extra attributes from the server') &&
            'string' == typeof n[1] &&
            n[1].toLowerCase().includes('data-mantine-color-scheme')) ||
            o(...n);
        };
      })(),
        (x.displayName = '@mantine/core/MantineProvider');
    },
    78770: (o, e, n) => {
      n.d(e, { nW: () => f, xd: () => m });
      var r = n(95155),
        t = n(12115),
        a = n(79543),
        c = n(22805);
      function i(o) {
        return !(o < 0) && !(o > 9) && parseInt(o.toString(), 10) === o;
      }
      function l(o) {
        if (!(o.primaryColor in o.colors))
          throw Error(
            '[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color'
          );
        if (
          ('object' == typeof o.primaryShade &&
            (!i(o.primaryShade.dark) || !i(o.primaryShade.light))) ||
          ('number' == typeof o.primaryShade && !i(o.primaryShade))
        )
          throw Error(
            '[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }'
          );
      }
      let s = (0, t.createContext)(null),
        d = () => (0, t.useContext)(s) || a.S;
      function m() {
        let o = (0, t.useContext)(s);
        if (!o)
          throw Error(
            '@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app'
          );
        return o;
      }
      function f(o) {
        let { theme: e, children: n, inherit: i = !0 } = o,
          m = d(),
          f = (0, t.useMemo)(
            () =>
              (function (o, e) {
                var n;
                if (!e) return l(o), o;
                let r = (0, c.$)(o, e);
                return (
                  !e.fontFamily ||
                    (null === (n = e.headings) || void 0 === n ? void 0 : n.fontFamily) ||
                    (r.headings.fontFamily = e.fontFamily),
                  l(r),
                  r
                );
              })(i ? m : a.S, e),
            [e, m, i]
          );
        return (0, r.jsx)(s.Provider, { value: f, children: n });
      }
      f.displayName = '@mantine/core/MantineThemeProvider';
    },
    73343: (o, e, n) => {
      n.d(e, { g: () => c, w: () => a });
      var r = n(56379),
        t = n(54637);
      function a(o) {
        let { color: e, theme: n, autoContrast: r } = o;
        return ('boolean' == typeof r ? r : n.autoContrast) &&
          (0, t.g)({ color: e || n.primaryColor, theme: n }).isLight
          ? 'var(--mantine-color-black)'
          : 'var(--mantine-color-white)';
      }
      function c(o, e) {
        return a({ color: o.colors[o.primaryColor][(0, r.g)(o, e)], theme: o, autoContrast: null });
      }
    },
    32463: (o, e, n) => {
      n.d(e, { v: () => t });
      var r = n(27151);
      function t(o, e) {
        var n, t;
        let a = {
            from: (null == o ? void 0 : o.from) || e.defaultGradient.from,
            to: (null == o ? void 0 : o.to) || e.defaultGradient.to,
            deg:
              null !==
                (t =
                  null !== (n = null == o ? void 0 : o.deg) && void 0 !== n
                    ? n
                    : e.defaultGradient.deg) && void 0 !== t
                ? t
                : 0,
          },
          c = (0, r.r)(a.from, e),
          i = (0, r.r)(a.to, e);
        return 'linear-gradient('.concat(a.deg, 'deg, ').concat(c, ' 0%, ').concat(i, ' 100%)');
      }
    },
    56379: (o, e, n) => {
      n.d(e, { g: () => r });
      function r(o, e) {
        return 'number' == typeof o.primaryShade
          ? o.primaryShade
          : 'dark' === e
            ? o.primaryShade.dark
            : o.primaryShade.light;
      }
    },
    27151: (o, e, n) => {
      n.d(e, { r: () => t });
      var r = n(54637);
      function t(o, e) {
        let n = (0, r.g)({ color: o || e.primaryColor, theme: e });
        return n.variable ? 'var('.concat(n.variable, ')') : o;
      }
    },
    54637: (o, e, n) => {
      n.d(e, { g: () => i });
      var r = n(56379),
        t = n(25891);
      function a(o) {
        return o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
      }
      function c(o) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.179;
        return (
          !o.startsWith('var(') &&
          (function (o) {
            if (o.startsWith('oklch('))
              return (
                ((function (o) {
                  let e = o.match(/oklch\((.*?)%\s/);
                  return e ? parseFloat(e[1]) : null;
                })(o) || 0) / 100
              );
            let { r: e, g: n, b: r } = (0, t.K)(o);
            return 0.2126 * a(e / 255) + 0.7152 * a(n / 255) + 0.0722 * a(r / 255);
          })(o) > e
        );
      }
      function i(o) {
        let { color: e, theme: n, colorScheme: t } = o;
        if ('string' != typeof e)
          throw Error(
            '[@mantine/core] Failed to parse color. Expected color to be a string, instead got '.concat(
              typeof e
            )
          );
        if ('bright' === e)
          return {
            color: e,
            value: 'dark' === t ? n.white : n.black,
            shade: void 0,
            isThemeColor: !1,
            isLight: c('dark' === t ? n.white : n.black, n.luminanceThreshold),
            variable: '--mantine-color-bright',
          };
        if ('dimmed' === e)
          return {
            color: e,
            value: 'dark' === t ? n.colors.dark[2] : n.colors.gray[7],
            shade: void 0,
            isThemeColor: !1,
            isLight: c('dark' === t ? n.colors.dark[2] : n.colors.gray[6], n.luminanceThreshold),
            variable: '--mantine-color-dimmed',
          };
        if ('white' === e || 'black' === e)
          return {
            color: e,
            value: 'white' === e ? n.white : n.black,
            shade: void 0,
            isThemeColor: !1,
            isLight: c('white' === e ? n.white : n.black, n.luminanceThreshold),
            variable: '--mantine-color-'.concat(e),
          };
        let [a, i] = e.split('.'),
          l = i ? Number(i) : void 0,
          s = a in n.colors;
        if (s) {
          let o = void 0 !== l ? n.colors[a][l] : n.colors[a][(0, r.g)(n, t || 'light')];
          return {
            color: a,
            value: o,
            shade: l,
            isThemeColor: s,
            isLight: c(o, n.luminanceThreshold),
            variable: i
              ? '--mantine-color-'.concat(a, '-').concat(l)
              : '--mantine-color-'.concat(a, '-filled'),
          };
        }
        return {
          color: e,
          value: e,
          isThemeColor: s,
          isLight: c(e, n.luminanceThreshold),
          shade: l,
          variable: void 0,
        };
      }
    },
    61673: (o, e, n) => {
      n.d(e, { B: () => t, X: () => a });
      var r = n(25891);
      function t(o, e) {
        if ('string' != typeof o || e > 1 || e < 0) return 'rgba(0, 0, 0, 1)';
        if (o.startsWith('var('))
          return 'color-mix(in srgb, '.concat(o, ', transparent ').concat((1 - e) * 100, '%)');
        if (o.startsWith('oklch'))
          return o.includes('/')
            ? o.replace(/\/\s*[\d.]+\s*\)/, '/ '.concat(e, ')'))
            : o.replace(')', ' / '.concat(e, ')'));
        let { r: n, g: t, b: a } = (0, r.K)(o);
        return 'rgba('.concat(n, ', ').concat(t, ', ').concat(a, ', ').concat(e, ')');
      }
      let a = t;
    },
    25891: (o, e, n) => {
      n.d(e, { K: () => r });
      function r(o) {
        return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(o)
          ? (function (o) {
              let e = o.replace('#', '');
              if (3 === e.length) {
                let o = e.split('');
                e = [o[0], o[0], o[1], o[1], o[2], o[2]].join('');
              }
              if (8 === e.length) {
                let o = parseInt(e.slice(6, 8), 16) / 255;
                return {
                  r: parseInt(e.slice(0, 2), 16),
                  g: parseInt(e.slice(2, 4), 16),
                  b: parseInt(e.slice(4, 6), 16),
                  a: o,
                };
              }
              let n = parseInt(e, 16);
              return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: 255 & n, a: 1 };
            })(o)
          : o.startsWith('rgb')
            ? (function (o) {
                let [e, n, r, t] = o
                  .replace(/[^0-9,./]/g, '')
                  .split(/[/,]/)
                  .map(Number);
                return { r: e, g: n, b: r, a: t || 1 };
              })(o)
            : o.startsWith('hsl')
              ? (function (o) {
                  let e, n, r;
                  let t = o.match(
                    /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i
                  );
                  if (!t) return { r: 0, g: 0, b: 0, a: 1 };
                  let a = parseInt(t[1], 10),
                    c = parseInt(t[2], 10) / 100,
                    i = parseInt(t[3], 10) / 100,
                    l = t[5] ? parseFloat(t[5]) : void 0,
                    s = (1 - Math.abs(2 * i - 1)) * c,
                    d = a / 60,
                    m = s * (1 - Math.abs((d % 2) - 1)),
                    f = i - s / 2;
                  return (
                    d >= 0 && d < 1
                      ? ((e = s), (n = m), (r = 0))
                      : d >= 1 && d < 2
                        ? ((e = m), (n = s), (r = 0))
                        : d >= 2 && d < 3
                          ? ((e = 0), (n = s), (r = m))
                          : d >= 3 && d < 4
                            ? ((e = 0), (n = m), (r = s))
                            : d >= 4 && d < 5
                              ? ((e = m), (n = 0), (r = s))
                              : ((e = s), (n = 0), (r = m)),
                    {
                      r: Math.round((e + f) * 255),
                      g: Math.round((n + f) * 255),
                      b: Math.round((r + f) * 255),
                      a: l || 1,
                    }
                  );
                })(o)
              : { r: 0, g: 0, b: 0, a: 1 };
      }
    },
    79543: (o, e, n) => {
      n.d(e, { S: () => d });
      var r = n(57518);
      n(12115), n(95155);
      var t = n(25891);
      function a(o, e) {
        if (o.startsWith('var('))
          return 'color-mix(in srgb, '.concat(o, ', black ').concat(100 * e, '%)');
        let { r: n, g: r, b: a, a: c } = (0, t.K)(o),
          i = 1 - e,
          l = (o) => Math.round(o * i);
        return 'rgba('.concat(l(n), ', ').concat(l(r), ', ').concat(l(a), ', ').concat(c, ')');
      }
      var c = n(32463),
        i = n(54637),
        l = n(61673);
      let s =
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
        d = {
          scale: 1,
          fontSmoothing: !0,
          focusRing: 'auto',
          white: '#fff',
          black: '#000',
          colors: {
            dark: [
              '#C9C9C9',
              '#b8b8b8',
              '#828282',
              '#696969',
              '#424242',
              '#3b3b3b',
              '#2e2e2e',
              '#242424',
              '#1f1f1f',
              '#141414',
            ],
            gray: [
              '#f8f9fa',
              '#f1f3f5',
              '#e9ecef',
              '#dee2e6',
              '#ced4da',
              '#adb5bd',
              '#868e96',
              '#495057',
              '#343a40',
              '#212529',
            ],
            red: [
              '#fff5f5',
              '#ffe3e3',
              '#ffc9c9',
              '#ffa8a8',
              '#ff8787',
              '#ff6b6b',
              '#fa5252',
              '#f03e3e',
              '#e03131',
              '#c92a2a',
            ],
            pink: [
              '#fff0f6',
              '#ffdeeb',
              '#fcc2d7',
              '#faa2c1',
              '#f783ac',
              '#f06595',
              '#e64980',
              '#d6336c',
              '#c2255c',
              '#a61e4d',
            ],
            grape: [
              '#f8f0fc',
              '#f3d9fa',
              '#eebefa',
              '#e599f7',
              '#da77f2',
              '#cc5de8',
              '#be4bdb',
              '#ae3ec9',
              '#9c36b5',
              '#862e9c',
            ],
            violet: [
              '#f3f0ff',
              '#e5dbff',
              '#d0bfff',
              '#b197fc',
              '#9775fa',
              '#845ef7',
              '#7950f2',
              '#7048e8',
              '#6741d9',
              '#5f3dc4',
            ],
            indigo: [
              '#edf2ff',
              '#dbe4ff',
              '#bac8ff',
              '#91a7ff',
              '#748ffc',
              '#5c7cfa',
              '#4c6ef5',
              '#4263eb',
              '#3b5bdb',
              '#364fc7',
            ],
            blue: [
              '#e7f5ff',
              '#d0ebff',
              '#a5d8ff',
              '#74c0fc',
              '#4dabf7',
              '#339af0',
              '#228be6',
              '#1c7ed6',
              '#1971c2',
              '#1864ab',
            ],
            cyan: [
              '#e3fafc',
              '#c5f6fa',
              '#99e9f2',
              '#66d9e8',
              '#3bc9db',
              '#22b8cf',
              '#15aabf',
              '#1098ad',
              '#0c8599',
              '#0b7285',
            ],
            teal: [
              '#e6fcf5',
              '#c3fae8',
              '#96f2d7',
              '#63e6be',
              '#38d9a9',
              '#20c997',
              '#12b886',
              '#0ca678',
              '#099268',
              '#087f5b',
            ],
            green: [
              '#ebfbee',
              '#d3f9d8',
              '#b2f2bb',
              '#8ce99a',
              '#69db7c',
              '#51cf66',
              '#40c057',
              '#37b24d',
              '#2f9e44',
              '#2b8a3e',
            ],
            lime: [
              '#f4fce3',
              '#e9fac8',
              '#d8f5a2',
              '#c0eb75',
              '#a9e34b',
              '#94d82d',
              '#82c91e',
              '#74b816',
              '#66a80f',
              '#5c940d',
            ],
            yellow: [
              '#fff9db',
              '#fff3bf',
              '#ffec99',
              '#ffe066',
              '#ffd43b',
              '#fcc419',
              '#fab005',
              '#f59f00',
              '#f08c00',
              '#e67700',
            ],
            orange: [
              '#fff4e6',
              '#ffe8cc',
              '#ffd8a8',
              '#ffc078',
              '#ffa94d',
              '#ff922b',
              '#fd7e14',
              '#f76707',
              '#e8590c',
              '#d9480f',
            ],
          },
          primaryShade: { light: 6, dark: 8 },
          primaryColor: 'blue',
          variantColorResolver: (o) => {
            let { color: e, theme: n, variant: t, gradient: s, autoContrast: d } = o,
              m = (0, i.g)({ color: e, theme: n }),
              f = 'boolean' == typeof d ? d : n.autoContrast;
            if ('filled' === t) {
              let o = f && m.isLight ? 'var(--mantine-color-black)' : 'var(--mantine-color-white)';
              return m.isThemeColor
                ? void 0 === m.shade
                  ? {
                      background: 'var(--mantine-color-'.concat(e, '-filled)'),
                      hover: 'var(--mantine-color-'.concat(e, '-filled-hover)'),
                      color: o,
                      border: ''.concat((0, r.D)(1), ' solid transparent'),
                    }
                  : {
                      background: 'var(--mantine-color-'.concat(m.color, '-').concat(m.shade, ')'),
                      hover: 'var(--mantine-color-'
                        .concat(m.color, '-')
                        .concat(9 === m.shade ? 8 : m.shade + 1, ')'),
                      color: o,
                      border: ''.concat((0, r.D)(1), ' solid transparent'),
                    }
                : {
                    background: e,
                    hover: a(e, 0.1),
                    color: o,
                    border: ''.concat((0, r.D)(1), ' solid transparent'),
                  };
            }
            if ('light' === t) {
              if (m.isThemeColor) {
                if (void 0 === m.shade)
                  return {
                    background: 'var(--mantine-color-'.concat(e, '-light)'),
                    hover: 'var(--mantine-color-'.concat(e, '-light-hover)'),
                    color: 'var(--mantine-color-'.concat(e, '-light-color)'),
                    border: ''.concat((0, r.D)(1), ' solid transparent'),
                  };
                let o = n.colors[m.color][m.shade];
                return {
                  background: (0, l.B)(o, 0.1),
                  hover: (0, l.B)(o, 0.12),
                  color: 'var(--mantine-color-'
                    .concat(m.color, '-')
                    .concat(Math.min(m.shade, 6), ')'),
                  border: ''.concat((0, r.D)(1), ' solid transparent'),
                };
              }
              return {
                background: (0, l.B)(e, 0.1),
                hover: (0, l.B)(e, 0.12),
                color: e,
                border: ''.concat((0, r.D)(1), ' solid transparent'),
              };
            }
            if ('outline' === t)
              return m.isThemeColor
                ? void 0 === m.shade
                  ? {
                      background: 'transparent',
                      hover: 'var(--mantine-color-'.concat(e, '-outline-hover)'),
                      color: 'var(--mantine-color-'.concat(e, '-outline)'),
                      border: ''
                        .concat((0, r.D)(1), ' solid var(--mantine-color-')
                        .concat(e, '-outline)'),
                    }
                  : {
                      background: 'transparent',
                      hover: (0, l.B)(n.colors[m.color][m.shade], 0.05),
                      color: 'var(--mantine-color-'.concat(m.color, '-').concat(m.shade, ')'),
                      border: ''
                        .concat((0, r.D)(1), ' solid var(--mantine-color-')
                        .concat(m.color, '-')
                        .concat(m.shade, ')'),
                    }
                : {
                    background: 'transparent',
                    hover: (0, l.B)(e, 0.05),
                    color: e,
                    border: ''.concat((0, r.D)(1), ' solid ').concat(e),
                  };
            if ('subtle' === t) {
              if (m.isThemeColor) {
                if (void 0 === m.shade)
                  return {
                    background: 'transparent',
                    hover: 'var(--mantine-color-'.concat(e, '-light-hover)'),
                    color: 'var(--mantine-color-'.concat(e, '-light-color)'),
                    border: ''.concat((0, r.D)(1), ' solid transparent'),
                  };
                let o = n.colors[m.color][m.shade];
                return {
                  background: 'transparent',
                  hover: (0, l.B)(o, 0.12),
                  color: 'var(--mantine-color-'
                    .concat(m.color, '-')
                    .concat(Math.min(m.shade, 6), ')'),
                  border: ''.concat((0, r.D)(1), ' solid transparent'),
                };
              }
              return {
                background: 'transparent',
                hover: (0, l.B)(e, 0.12),
                color: e,
                border: ''.concat((0, r.D)(1), ' solid transparent'),
              };
            }
            return 'transparent' === t
              ? m.isThemeColor
                ? void 0 === m.shade
                  ? {
                      background: 'transparent',
                      hover: 'transparent',
                      color: 'var(--mantine-color-'.concat(e, '-light-color)'),
                      border: ''.concat((0, r.D)(1), ' solid transparent'),
                    }
                  : {
                      background: 'transparent',
                      hover: 'transparent',
                      color: 'var(--mantine-color-'
                        .concat(m.color, '-')
                        .concat(Math.min(m.shade, 6), ')'),
                      border: ''.concat((0, r.D)(1), ' solid transparent'),
                    }
                : {
                    background: 'transparent',
                    hover: 'transparent',
                    color: e,
                    border: ''.concat((0, r.D)(1), ' solid transparent'),
                  }
              : 'white' === t
                ? m.isThemeColor
                  ? void 0 === m.shade
                    ? {
                        background: 'var(--mantine-color-white)',
                        hover: a(n.white, 0.01),
                        color: 'var(--mantine-color-'.concat(e, '-filled)'),
                        border: ''.concat((0, r.D)(1), ' solid transparent'),
                      }
                    : {
                        background: 'var(--mantine-color-white)',
                        hover: a(n.white, 0.01),
                        color: 'var(--mantine-color-'.concat(m.color, '-').concat(m.shade, ')'),
                        border: ''.concat((0, r.D)(1), ' solid transparent'),
                      }
                  : {
                      background: 'var(--mantine-color-white)',
                      hover: a(n.white, 0.01),
                      color: e,
                      border: ''.concat((0, r.D)(1), ' solid transparent'),
                    }
                : 'gradient' === t
                  ? {
                      background: (0, c.v)(s, n),
                      hover: (0, c.v)(s, n),
                      color: 'var(--mantine-color-white)',
                      border: 'none',
                    }
                  : 'default' === t
                    ? {
                        background: 'var(--mantine-color-default)',
                        hover: 'var(--mantine-color-default-hover)',
                        color: 'var(--mantine-color-default-color)',
                        border: ''.concat(
                          (0, r.D)(1),
                          ' solid var(--mantine-color-default-border)'
                        ),
                      }
                    : {};
          },
          autoContrast: !1,
          luminanceThreshold: 0.3,
          fontFamily: s,
          fontFamilyMonospace:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
          respectReducedMotion: !1,
          cursorType: 'default',
          defaultGradient: { from: 'blue', to: 'cyan', deg: 45 },
          defaultRadius: 'sm',
          activeClassName: 'mantine-active',
          focusClassName: '',
          headings: {
            fontFamily: s,
            fontWeight: '700',
            textWrap: 'wrap',
            sizes: {
              h1: { fontSize: (0, r.D)(34), lineHeight: '1.3' },
              h2: { fontSize: (0, r.D)(26), lineHeight: '1.35' },
              h3: { fontSize: (0, r.D)(22), lineHeight: '1.4' },
              h4: { fontSize: (0, r.D)(18), lineHeight: '1.45' },
              h5: { fontSize: (0, r.D)(16), lineHeight: '1.5' },
              h6: { fontSize: (0, r.D)(14), lineHeight: '1.5' },
            },
          },
          fontSizes: {
            xs: (0, r.D)(12),
            sm: (0, r.D)(14),
            md: (0, r.D)(16),
            lg: (0, r.D)(18),
            xl: (0, r.D)(20),
          },
          lineHeights: { xs: '1.4', sm: '1.45', md: '1.55', lg: '1.6', xl: '1.65' },
          radius: {
            xs: (0, r.D)(2),
            sm: (0, r.D)(4),
            md: (0, r.D)(8),
            lg: (0, r.D)(16),
            xl: (0, r.D)(32),
          },
          spacing: {
            xs: (0, r.D)(10),
            sm: (0, r.D)(12),
            md: (0, r.D)(16),
            lg: (0, r.D)(20),
            xl: (0, r.D)(32),
          },
          breakpoints: { xs: '36em', sm: '48em', md: '62em', lg: '75em', xl: '88em' },
          shadows: {
            xs: '0 '
              .concat((0, r.D)(1), ' ')
              .concat((0, r.D)(3), ' rgba(0, 0, 0, 0.05), 0 ')
              .concat((0, r.D)(1), ' ')
              .concat((0, r.D)(2), ' rgba(0, 0, 0, 0.1)'),
            sm: '0 '
              .concat((0, r.D)(1), ' ')
              .concat((0, r.D)(3), ' rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ')
              .concat((0, r.D)(10), ' ')
              .concat((0, r.D)(15), ' ')
              .concat((0, r.D)(-5), ', rgba(0, 0, 0, 0.04) 0 ')
              .concat((0, r.D)(7), ' ')
              .concat((0, r.D)(7), ' ')
              .concat((0, r.D)(-5)),
            md: '0 '
              .concat((0, r.D)(1), ' ')
              .concat((0, r.D)(3), ' rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ')
              .concat((0, r.D)(20), ' ')
              .concat((0, r.D)(25), ' ')
              .concat((0, r.D)(-5), ', rgba(0, 0, 0, 0.04) 0 ')
              .concat((0, r.D)(10), ' ')
              .concat((0, r.D)(10), ' ')
              .concat((0, r.D)(-5)),
            lg: '0 '
              .concat((0, r.D)(1), ' ')
              .concat((0, r.D)(3), ' rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ')
              .concat((0, r.D)(28), ' ')
              .concat((0, r.D)(23), ' ')
              .concat((0, r.D)(-7), ', rgba(0, 0, 0, 0.04) 0 ')
              .concat((0, r.D)(12), ' ')
              .concat((0, r.D)(12), ' ')
              .concat((0, r.D)(-7)),
            xl: '0 '
              .concat((0, r.D)(1), ' ')
              .concat((0, r.D)(3), ' rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ')
              .concat((0, r.D)(36), ' ')
              .concat((0, r.D)(28), ' ')
              .concat((0, r.D)(-7), ', rgba(0, 0, 0, 0.04) 0 ')
              .concat((0, r.D)(17), ' ')
              .concat((0, r.D)(17), ' ')
              .concat((0, r.D)(-7)),
          },
          other: {},
          components: {},
        };
    },
    22805: (o, e, n) => {
      function r(o) {
        return o && 'object' == typeof o && !Array.isArray(o);
      }
      n.d(e, {
        $: () =>
          function o(e, n) {
            let t = { ...e };
            return (
              r(e) &&
                r(n) &&
                Object.keys(n).forEach((a) => {
                  r(n[a]) && a in e ? (t[a] = o(t[a], n[a])) : (t[a] = n[a]);
                }),
              t
            );
          },
      });
    },
    78643: (o, e, n) => {
      n.d(e, { H: () => r });
      function r(o) {
        return Object.keys(o);
      }
    },
    23884: (o, e, n) => {
      n.d(e, { px: () => r });
      function r(o) {
        var e;
        let n =
          'string' == typeof o && o.includes('var(--mantine-scale)')
            ? null === (e = o.match(/^calc\((.*?)\)$/)) || void 0 === e
              ? void 0
              : e[1].split('*')[0].trim()
            : o;
        return 'number' == typeof n
          ? n
          : 'string' == typeof n
            ? n.includes('calc') || n.includes('var')
              ? n
              : n.includes('px')
                ? Number(n.replace('px', ''))
                : n.includes('rem')
                  ? 16 * Number(n.replace('rem', ''))
                  : n.includes('em')
                    ? 16 * Number(n.replace('em', ''))
                    : Number(n)
            : NaN;
      }
    },
    57518: (o, e, n) => {
      function r(o) {
        return '0rem' === o ? '0rem' : 'calc('.concat(o, ' * var(--mantine-scale))');
      }
      function t(o) {
        let { shouldScale: e = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return function n(t) {
          if (0 === t || '0' === t) return '0'.concat(o);
          if ('number' == typeof t) {
            let n = ''.concat(t / 16).concat(o);
            return e ? r(n) : n;
          }
          if ('string' == typeof t) {
            if ('' === t || t.startsWith('calc(') || t.startsWith('clamp(') || t.includes('rgba('))
              return t;
            if (t.includes(','))
              return t
                .split(',')
                .map((o) => n(o))
                .join(',');
            if (t.includes(' '))
              return t
                .split(' ')
                .map((o) => n(o))
                .join(' ');
            if (t.includes(o)) return e ? r(t) : t;
            let a = t.replace('px', '');
            if (!Number.isNaN(Number(a))) {
              let n = ''.concat(Number(a) / 16).concat(o);
              return e ? r(n) : n;
            }
          }
          return t;
        };
      }
      n.d(e, { D: () => a, em: () => c });
      let a = t('rem', { shouldScale: !0 }),
        c = t('em');
    },
    64058: (o, e, n) => {
      n.d(e, { o: () => t });
      var r = n(12115);
      let t = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
    },
  },
]);
