(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [927],
  {
    56068: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 63067)),
        Promise.resolve().then(n.bind(n, 56538)),
        Promise.resolve().then(n.bind(n, 81010)),
        Promise.resolve().then(n.t.bind(n, 24764, 23)),
        Promise.resolve().then(n.bind(n, 46083)),
        Promise.resolve().then(n.bind(n, 90744)),
        Promise.resolve().then(n.t.bind(n, 17402, 23)),
        Promise.resolve().then(n.bind(n, 3724)),
        Promise.resolve().then(n.bind(n, 91663)),
        Promise.resolve().then(n.bind(n, 19371)),
        Promise.resolve().then(n.bind(n, 77691)),
        Promise.resolve().then(n.bind(n, 51807)),
        Promise.resolve().then(n.bind(n, 1900)),
        Promise.resolve().then(n.t.bind(n, 87970, 23));
    },
    46083: (e, t, n) => {
      'use strict';
      n.d(t, { MatFaq: () => y });
      var r = n(95155),
        a = n(2485),
        s = n(66496),
        i = n(3724),
        o = n(91663),
        l = n(19371),
        c = n(90855),
        d = n(72994),
        u = n(61650),
        m = n(16850),
        h = n(5565),
        g = n(63067);
      let p = [
          {
            value: 'outlay',
            question: 'No Outlay',
            answer: 'No need to outlay the total amount upfront',
          },
          {
            value: 'repayment-time',
            question: 'Repayment TIme',
            answer: 'Repayments are calculated over 5 years',
          },
          {
            value: 'extra-repayment',
            question: 'Optional Extra Repayments',
            answer: 'Make extra repayments towards facility to lower monthly repayments',
          },
          {
            value: 'penalty',
            question: 'Repay Anytime Without Penalty',
            answer: (0, r.jsx)(r.Fragment, {
              children:
                "'Repay anytime without penalties and reuse the facility for business costs that traditional lenders won’t finance (materials, inventory, software, fit-out, etc.)'",
            }),
          },
          {
            value: 'charge',
            question: 'Only Charge on Use',
            answer: 'No charge if setup but not used',
          },
          {
            value: 'security',
            question: 'No Additional Security Needed',
            answer: (0, r.jsx)(r.Fragment, {
              children:
                "  'No additional security required (personal property or assets within the business)'",
            }),
          },
          { value: 'cost', question: 'Cost', answer: 'Only pay 1.1 - 1.5% interest per month' },
          { value: 'setup', question: 'No Setup Cost', answer: 'No setup cost or ongoing fees' },
        ],
        b = (e) => {
          let { question: t, answer: n } = e;
          return (0, r.jsxs)(s.a, {
            p: { base: 'xl', lg: 'calc(var(--mantine-spacing-lg) * 2)' },
            w: { base: '100%', lg: '33.333%' },
            children: [
              (0, r.jsxs)(i.Flex, {
                justify: 'left',
                align: 'left',
                direction: 'row',
                wrap: 'nowrap',
                children: [
                  (0, r.jsx)(o.Image, {
                    component: h.default,
                    src: g.default,
                    alt: 'Logo',
                    style: { width: '2em', height: '2em', marginRight: '0.5em' },
                  }),
                  (0, r.jsx)(l.Text, {
                    fz: 'xl',
                    fw: 'bold',
                    component: 'blockquote',
                    mb: 4,
                    c: '#01E194',
                    children: t,
                  }),
                ],
              }),
              (0, r.jsx)(l.Text, { fz: 'xl', component: 'blockquote', c: 'white', children: n }),
            ],
          });
        },
        y = () => {
          let e = (0, m.U)('(min-width: 1024px)');
          return (0, r.jsx)(c.o, {
            src: e ? '/meeting.jpg' : '',
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backgroundImage: e
                ? 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/meeting.jpg)'
                : 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            },
            children: (0, r.jsxs)(d.m, {
              py: {
                base: 'calc(var(--mantine-spacing-lg))',
                xs: 'calc(var(--mantine-spacing-lg))',
                lg: 'calc(var(--mantine-spacing-lg))',
              },
              fluid: !0,
              style: { backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: '8px' },
              children: [
                (0, r.jsx)(d.m, {
                  size: 'md',
                  style: { zIndex: 1 },
                  children: (0, r.jsx)(u.B, {
                    gap: 'xs',
                    align: 'center',
                    children: (0, r.jsx)(a.o, {
                      order: 2,
                      fz: 'sm',
                      ta: 'center',
                      style: { textWrap: 'balance' },
                      mb: 'sm',
                      c: '#01E194',
                      children: 'Why Get a Loan For Your Building Materials?',
                    }),
                  }),
                }),
                (0, r.jsx)(d.m, {
                  size: 'xl',
                  children: (0, r.jsx)(i.Flex, {
                    mt: 'calc(var(--mantine-spacing-lg) * 3)',
                    wrap: 'wrap',
                    justify: 'center',
                    children: p.map((e) => (0, r.jsx)(b, { ...e }, e.value)),
                  }),
                }),
              ],
            }),
          });
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [274, 606, 349, 603, 441, 517, 358], () => t(56068)), (_N_E = e.O());
  },
]);
