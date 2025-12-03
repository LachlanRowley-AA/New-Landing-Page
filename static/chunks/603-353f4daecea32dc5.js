(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [603],
  {
    56538: (e, t, a) => {
      'use strict';
      a.d(t, { AuthenticationForm: () => I });
      var s = a(95155),
        r = a(12115),
        i = a(17392),
        l = a(25314),
        n = a(55385),
        o = a(72994),
        c = a(3724),
        m = a(69539),
        d = a(19371),
        u = a(84968),
        x = a(58830),
        h = a(65033),
        p = a(50905),
        b = a(8862),
        g = a(48366),
        j = a(2485),
        y = a(35974),
        v = a(7523),
        f = a.n(v);
      let _ = (0, y.UU)(
        'https://hfsysehrdshrbtmjsgcx.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmc3lzZWhyZHNocmJ0bWpzZ2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjMyMzIsImV4cCI6MjA1NDk5OTIzMn0.S2q4Oza4s70afQlODHW-G3OUWIGWxOJ2nOxIzZJ8IIk'
      );
      function I(e) {
        let { noShadow: t, noPadding: a, noSubmit: y, style: v } = e,
          [I, w] = (0, r.useState)(!1),
          [z, S] = (0, r.useState)(null),
          [N, k] = (0, r.useState)(!1),
          T = (0, g.m)({
            initialValues: { firstName: '', lastName: '', email: '', phone: '', contact: !1 },
          }),
          [A, C] = (0, r.useState)(null);
        (0, r.useEffect)(() => {
          C(new URLSearchParams(window.location.search).get('ref'));
        }, []);
        let F = async () => {
          w(!0), S(null);
          let e = !1;
          if (
            (!1 === T.values.contact && (T.setFieldError('contact', 'Please agree'), (e = !0)),
            T.values.firstName.trim() ||
              (T.setFieldError('firstName', 'First name is required'), (e = !0)),
            T.values.lastName.trim() ||
              (T.setFieldError('lastName', 'Last name is required'), (e = !0)),
            f().isEmail(T.values.email) ||
              (T.setFieldError('email', 'Invalid email address'), (e = !0)),
            f().isMobilePhone(T.values.phone, 'en-AU') ||
              (T.setFieldError('phone', 'Invalid Australian phone number'), (e = !0)),
            e)
          ) {
            w(!1);
            return;
          }
          await J(), w(!1), k(!0);
        };
        async function J() {
          await _.from('enquiries').insert({
            first_name: T.values.firstName,
            last_name: T.values.lastName,
            phone: T.values.phone,
            email: T.values.email,
            referral: A,
          });
        }
        return (0, s.jsxs)(o.m, {
          size: 'xs',
          px: 'md',
          style: { height: 'vh:100px' },
          mt: 'calc(var(--mantine-spacing-xl) * 1)',
          children: [
            (0, s.jsx)(j.o, {
              order: 2,
              fz: 'sm',
              ta: 'center',
              style: { textWrap: 'balance' },
              mb: 'sm',
              children: 'Contact Us Now',
            }),
            (0, s.jsx)(j.o, {
              order: 2,
              fz: 'xxs',
              ta: 'center',
              style: { textWrap: 'balance' },
              mb: 'sm',
              children: 'For a free enquiry with no impact to your credit score',
            }),
            (0, s.jsx)(c.Flex, {
              justify: 'center',
              align: 'center',
              children: (0, s.jsx)(m.t, {
                p: a ? 0 : 'lg',
                shadow: t ? 'none' : 'sm',
                style: { ...v, position: 'relative', backgroundColor: 'var(--mantine-color-body)' },
                children: N
                  ? (0, s.jsxs)(c.Flex, {
                      justify: 'center',
                      align: 'center',
                      direction: 'column',
                      py: 'xl',
                      children: [
                        (0, s.jsx)(i.A, { size: 48, color: 'green' }),
                        (0, s.jsx)(d.Text, {
                          mt: 'md',
                          size: 'lg',
                          c: 'green',
                          children: "Thank you. We'll be in touch soon!",
                        }),
                      ],
                    })
                  : (0, s.jsxs)('form', {
                      onSubmit: T.onSubmit(F),
                      children: [
                        (0, s.jsx)(u.p, { visible: I }),
                        (0, s.jsxs)(x.Y, {
                          grow: !0,
                          children: [
                            (0, s.jsx)(h.k, {
                              'data-autofocus': !0,
                              required: !0,
                              placeholder: 'Your first name',
                              label: 'First name',
                              ...T.getInputProps('firstName'),
                            }),
                            (0, s.jsx)(h.k, {
                              required: !0,
                              placeholder: 'Your last name',
                              label: 'Last name',
                              ...T.getInputProps('lastName'),
                            }),
                          ],
                        }),
                        (0, s.jsx)(h.k, {
                          mt: 'md',
                          required: !0,
                          placeholder: 'Your phone Number',
                          label: 'Phone',
                          leftSection: (0, s.jsx)(l.A, { size: 16, stroke: 1.5 }),
                          ...T.getInputProps('phone'),
                        }),
                        (0, s.jsx)(h.k, {
                          mt: 'md',
                          required: !0,
                          placeholder: 'Your email',
                          label: 'Email',
                          leftSection: (0, s.jsx)(n.A, { size: 16, stroke: 1.5 }),
                          ...T.getInputProps('email'),
                        }),
                        (0, s.jsx)(p.S, {
                          mt: 'xl',
                          label: 'I agree to be contacted by a member of Asset Alley',
                          ...T.getInputProps('contact', { type: 'checkbox' }),
                        }),
                        z && (0, s.jsx)(d.Text, { c: 'red', size: 'sm', mt: 'sm', children: z }),
                        !y &&
                          (0, s.jsx)(x.Y, {
                            justify: 'center',
                            mt: 'xl',
                            children: (0, s.jsx)(b.$, {
                              color: '#01E194',
                              type: 'submit',
                              children: 'Submit',
                            }),
                          }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
    },
    81010: (e, t, a) => {
      'use strict';
      a.d(t, { Calculator: () => j });
      var s = a(95155),
        r = a(19371),
        i = a(12115);
      let l = (e) => {
        let { startValue: t, endValue: a, prefix: l, suffix: n, ...o } = e,
          [c, m] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            m(a);
          }, [a]),
          (0, s.jsxs)(r.Text, { ...o, children: [l, c.toFixed(2), n] })
        );
      };
      var n = a(2485),
        o = a(66496),
        c = a(57518),
        m = a(72994),
        d = a(61650),
        u = a(65033),
        x = a(91821),
        h = a(92601),
        p = a(84753);
      let b = (e) =>
          e <= 0
            ? 0
            : (((0.1595 / 52) * (0.1595 / 52 + 1) ** 260) / ((0.1595 / 52 + 1) ** 260 - 1)) * e,
        g = (e) => {
          let { startValue: t, endValue: a, title: i, description: n, ...m } = e;
          return (0, s.jsx)(p.P.div, {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.8, ease: 'easeInOut' },
            viewport: { once: !0 },
            children: (0, s.jsxs)(o.a, {
              ...m,
              children: [
                (0, s.jsx)(l, {
                  ta: 'center',
                  fz: (0, c.D)(64),
                  fw: 'bold',
                  endValue: Math.max(0, a),
                  prefix: '$',
                  startValue: Math.max(0, t),
                }),
                (0, s.jsx)(r.Text, {
                  fz: 'lg',
                  inline: !0,
                  ta: 'center',
                  c: 'dimmed',
                  children: n,
                }),
              ],
            }),
          });
        },
        j = () => {
          let [e, t] = (0, i.useState)(0),
            a = b(e);
          return (0, s.jsxs)(m.m, {
            bg: 'var(--mantine-color-body)',
            py: {
              base: 'calc(var(--mantine-spacing-lg) * 4)',
              xs: 'calc(var(--mantine-spacing-lg) * 5)',
              lg: 'calc(var(--mantine-spacing-lg) * 6)',
            },
            fluid: !0,
            children: [
              (0, s.jsx)(m.m, {
                size: 'md',
                children: (0, s.jsx)(d.B, {
                  align: 'center',
                  gap: 'xs',
                  children: (0, s.jsx)(p.P.div, {
                    initial: { opacity: 0, y: 40 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, ease: 'easeInOut' },
                    viewport: { once: !0 },
                    children: (0, s.jsx)(n.o, {
                      order: 2,
                      fz: 'xs',
                      ta: 'center',
                      style: { textWrap: 'balance' },
                      children: 'Calculate your estimated weekly repayment',
                    }),
                  }),
                }),
              }),
              (0, s.jsxs)(m.m, {
                size: 'lg',
                mt: 'calc(var(--mantine-spacing-xl) * 2)',
                ta: 'center',
                style: { paddingLeft: '5vw', paddingRight: '5vw' },
                children: [
                  (0, s.jsxs)(d.B, {
                    children: [
                      (0, s.jsx)(u.k, {
                        label: 'Loan Amount',
                        type: 'number',
                        value: e,
                        onChange: (e) => t(Math.max(0, Number(e.currentTarget.value))),
                        variant: 'unstyled',
                        leftSection: '$',
                        size: 'xl',
                        styles: {
                          input: { fontSize: (0, c.D)(40) },
                          label: { fontSize: (0, c.D)(40) },
                          section: { fontSize: (0, c.D)(40) },
                        },
                        ta: 'center',
                      }),
                      (0, s.jsx)(x.A, {
                        label: 'Loan Amount',
                        min: 0,
                        max: 2e5,
                        step: 1e3,
                        value: e,
                        onChange: (e) => t(Math.max(0, e)),
                      }),
                    ],
                  }),
                  (0, s.jsx)(h.x, {
                    gutter: 'calc(var(--mantine-spacing-lg) * 4)',
                    align: 'center',
                    mx: 'xl',
                    children: (0, s.jsx)(h.x.Col, {
                      span: { base: 12, md: 12 },
                      children: (0, s.jsx)(g, {
                        startValue: e,
                        endValue: a,
                        title: '37 million',
                        description: 'Weekly repayment',
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    2485: (e, t, a) => {
      'use strict';
      a.d(t, { o: () => c });
      var s = a(95155),
        r = a(77691),
        i = a(43463),
        l = a(24764),
        n = a.n(l);
      let o = { xl: 800, lg: 800, md: 700, sm: 600, xs: 500 },
        c = (e) => {
          let { className: t, children: a, order: l = 1, fz: c = 'xl', ...m } = e;
          return (0, s.jsx)(r.Title, {
            fw: o[c],
            className: (0, i.A)(n()[c], t),
            lh: 1,
            order: l,
            ...m,
            children: a,
          });
        };
    },
    90744: (e, t, a) => {
      'use strict';
      a.d(t, { Hero02: () => p });
      var s = a(95155),
        r = a(2485),
        i = a(2061),
        l = a(66496),
        n = a(19371),
        o = a(72994),
        c = a(3724),
        m = a(61650),
        d = a(84753),
        u = a(37675),
        x = a.n(u);
      let h = (e) => {
          let { description: t, ...a } = e;
          return (0, s.jsx)(d.P.div, {
            whileHover: { scale: 1.05, boxShadow: 'var(--mantine-shadow-xl)' },
            transition: { type: 'spring' },
            ...a,
            style: { borderRadius: 'var(--mantine-radius-lg)', ...a.style },
            children: (0, s.jsx)(i.Z, {
              className: x().card,
              h: '100%',
              withBorder: !0,
              children: (0, s.jsx)(l.a, {
                mt: 'xs',
                children: (0, s.jsx)(n.Text, { children: t }),
              }),
            }),
          });
        },
        p = (e) => {
          let { title: t = 'Customer Requirements', ...a } = e;
          return (0, s.jsx)(o.m, {
            bg: 'var(--mantine-color-body)',
            px: 0,
            style: { overflow: 'hidden' },
            fluid: !0,
            bd: 1,
            children: (0, s.jsxs)(o.m, {
              component: 'section',
              mih: 400,
              style: { position: 'relative', padding: '2rem 1rem' },
              size: 'xl',
              ...a,
              children: [
                (0, s.jsx)(l.a, {
                  pos: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  w: '100%',
                  h: '100%',
                  bg: 'var(--mantine-color-body)',
                  style: { zIndex: -1, opacity: 0 },
                  hiddenFrom: 'md',
                }),
                (0, s.jsxs)(c.Flex, {
                  justify: 'space-between',
                  gap: 'calc(var(--mantine-spacing-lg) * 3)',
                  p: { base: '1rem', sm: 'calc(var(--mantine-spacing-lg) * 2)' },
                  wrap: { base: 'wrap', lg: 'nowrap' },
                  style: { maxWidth: '100%' },
                  children: [
                    (0, s.jsx)(r.o, {
                      c: '#01E194',
                      order: 1,
                      fz: 'lg',
                      style: { textWrap: 'balance' },
                      children: t,
                    }),
                    (0, s.jsxs)(m.B, {
                      children: [
                        (0, s.jsx)(h, { description: '2-year ABN Running' }),
                        (0, s.jsx)(h, { description: 'Good credit' }),
                        (0, s.jsx)(h, {
                          description: 'Business monthly turn over to equate to the invoice amount',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    24764: (e) => {
      e.exports = {
        xl: 'JumboTitle_xl__1T__9',
        lg: 'JumboTitle_lg___GGt3',
        md: 'JumboTitle_md__ZtIIT',
        sm: 'JumboTitle_sm__6Ru3D',
        xs: 'JumboTitle_xs__Dc5qT',
      };
    },
    37675: (e) => {
      e.exports = {
        cta: 'Requirements_cta__T2pEv',
        card: 'Requirements_card__lpddH',
        'card-section': 'Requirements_card-section__IbJ2_',
      };
    },
    17402: (e) => {
      e.exports = { title: 'Welcome_title__Cz_nm', asset: 'Welcome_asset__DSo0j' };
    },
    63067: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => s });
      let s = {
        src: '/_next/static/media/Asset Alley Brandmark_ColourScreenUse.702377e6.svg',
        height: 125,
        width: 125,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
]);
