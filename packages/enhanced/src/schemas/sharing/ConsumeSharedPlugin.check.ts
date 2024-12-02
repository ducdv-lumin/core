/* eslint-disable */
//@ts-nocheck
/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
'use strict';

function r(
  e,
  {
    instancePath: t = '',
    parentData: n,
    parentDataProperty: s,
    rootData: a = e,
  } = {},
) {
  let o = null,
    i = 0;
  if (0 === i) {
    if (!e || 'object' != typeof e || Array.isArray(e))
      return (r.errors = [{ params: { type: 'object' } }]), !1;
    {
      const t = i;
      for (const t in e)
        if (
          'eager' !== t &&
          'import' !== t &&
          'packageName' !== t &&
          'requiredVersion' !== t &&
          'shareKey' !== t &&
          'shareScope' !== t &&
          'singleton' !== t &&
          'strictVersion' !== t &&
          'issuerLayer' !== t &&
          'layer' !== t
        )
          return (r.errors = [{ params: { additionalProperty: t } }]), !1;
      if (t === i) {
        if (void 0 !== e.eager) {
          const t = i;
          if ('boolean' != typeof e.eager)
            return (r.errors = [{ params: { type: 'boolean' } }]), !1;
          var l = t === i;
        } else l = !0;
        if (l) {
          if (void 0 !== e.import) {
            let t = e.import;
            const n = i,
              s = i;
            let a = !1;
            const f = i;
            if (!1 !== t) {
              const r = { params: {} };
              null === o ? (o = [r]) : o.push(r), i++;
            }
            var p = f === i;
            if (((a = a || p), !a)) {
              const r = i;
              if (i == i)
                if ('string' == typeof t) {
                  if (t.length < 1) {
                    const r = { params: {} };
                    null === o ? (o = [r]) : o.push(r), i++;
                  }
                } else {
                  const r = { params: { type: 'string' } };
                  null === o ? (o = [r]) : o.push(r), i++;
                }
              (p = r === i), (a = a || p);
            }
            if (!a) {
              const e = { params: {} };
              return (
                null === o ? (o = [e]) : o.push(e), i++, (r.errors = o), !1
              );
            }
            (i = s),
              null !== o && (s ? (o.length = s) : (o = null)),
              (l = n === i);
          } else l = !0;
          if (l) {
            if (void 0 !== e.packageName) {
              let t = e.packageName;
              const n = i;
              if (i === n) {
                if ('string' != typeof t)
                  return (r.errors = [{ params: { type: 'string' } }]), !1;
                if (t.length < 1) return (r.errors = [{ params: {} }]), !1;
              }
              l = n === i;
            } else l = !0;
            if (l) {
              if (void 0 !== e.requiredVersion) {
                let t = e.requiredVersion;
                const n = i,
                  s = i;
                let a = !1;
                const p = i;
                if (!1 !== t) {
                  const r = { params: {} };
                  null === o ? (o = [r]) : o.push(r), i++;
                }
                var f = p === i;
                if (((a = a || f), !a)) {
                  const r = i;
                  if ('string' != typeof t) {
                    const r = { params: { type: 'string' } };
                    null === o ? (o = [r]) : o.push(r), i++;
                  }
                  (f = r === i), (a = a || f);
                }
                if (!a) {
                  const e = { params: {} };
                  return (
                    null === o ? (o = [e]) : o.push(e), i++, (r.errors = o), !1
                  );
                }
                (i = s),
                  null !== o && (s ? (o.length = s) : (o = null)),
                  (l = n === i);
              } else l = !0;
              if (l) {
                if (void 0 !== e.shareKey) {
                  let t = e.shareKey;
                  const n = i;
                  if (i === n) {
                    if ('string' != typeof t)
                      return (r.errors = [{ params: { type: 'string' } }]), !1;
                    if (t.length < 1) return (r.errors = [{ params: {} }]), !1;
                  }
                  l = n === i;
                } else l = !0;
                if (l) {
                  if (void 0 !== e.shareScope) {
                    let t = e.shareScope;
                    const n = i;
                    if (i === n) {
                      if ('string' != typeof t)
                        return (
                          (r.errors = [{ params: { type: 'string' } }]), !1
                        );
                      if (t.length < 1)
                        return (r.errors = [{ params: {} }]), !1;
                    }
                    l = n === i;
                  } else l = !0;
                  if (l) {
                    if (void 0 !== e.singleton) {
                      const t = i;
                      if ('boolean' != typeof e.singleton)
                        return (
                          (r.errors = [{ params: { type: 'boolean' } }]), !1
                        );
                      l = t === i;
                    } else l = !0;
                    if (l)
                      if (void 0 !== e.strictVersion) {
                        const t = i;
                        if ('boolean' != typeof e.strictVersion)
                          return (
                            (r.errors = [{ params: { type: 'boolean' } }]), !1
                          );
                        l = t === i;
                      } else l = !0;
                    if (l) {
                      if (void 0 !== e.issuerLayer) {
                        let t = e.issuerLayer;
                        const n = i;
                        if (i === n) {
                          if ('string' != typeof t)
                            return (
                              (r.errors = [{ params: { type: 'string' } }]), !1
                            );
                          if (t.length < 1)
                            return (r.errors = [{ params: {} }]), !1;
                        }
                        l = n === i;
                      } else l = !0;
                      if (l) {
                        if (void 0 !== e.layer) {
                          let t = e.layer;
                          const n = i;
                          if (i === n) {
                            if ('string' != typeof t)
                              return (
                                (r.errors = [{ params: { type: 'string' } }]),
                                !1
                              );
                            if (t.length < 1)
                              return (r.errors = [{ params: {} }]), !1;
                          }
                          l = n === i;
                        } else l = !0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return (r.errors = o), 0 === i;
}

function e(
  t,
  {
    instancePath: n = '',
    parentData: s,
    parentDataProperty: a,
    rootData: o = t,
  } = {},
) {
  let i = null,
    l = 0;
  if (0 === l) {
    if (!t || 'object' != typeof t || Array.isArray(t))
      return (e.errors = [{ params: { type: 'object' } }]), !1;
    for (const s in t) {
      let a = t[s];
      const f = l,
        c = l;
      let u = !1;
      const y = l;
      r(a, {
        instancePath: n + '/' + s.replace(/~/g, '~0').replace(/\//g, '~1'),
        parentData: t,
        parentDataProperty: s,
        rootData: o,
      }) || ((i = null === i ? r.errors : i.concat(r.errors)), (l = i.length));
      var p = y === l;
      if (((u = u || p), !u)) {
        const r = l;
        if (l == l)
          if ('string' == typeof a) {
            if (a.length < 1) {
              const r = { params: {} };
              null === i ? (i = [r]) : i.push(r), l++;
            }
          } else {
            const r = { params: { type: 'string' } };
            null === i ? (i = [r]) : i.push(r), l++;
          }
        (p = r === l), (u = u || p);
      }
      if (!u) {
        const r = { params: {} };
        return null === i ? (i = [r]) : i.push(r), l++, (e.errors = i), !1;
      }
      if (((l = c), null !== i && (c ? (i.length = c) : (i = null)), f !== l))
        break;
    }
  }
  return (e.errors = i), 0 === l;
}

function t(
  r,
  {
    instancePath: n = '',
    parentData: s,
    parentDataProperty: a,
    rootData: o = r,
  } = {},
) {
  let i = null,
    l = 0;
  const p = l;
  let f = !1;
  const c = l;
  if (l === c)
    if (Array.isArray(r)) {
      const t = r.length;
      for (let s = 0; s < t; s++) {
        let t = r[s];
        const a = l,
          p = l;
        let f = !1;
        const c = l;
        if (l == l)
          if ('string' == typeof t) {
            if (t.length < 1) {
              const r = { params: {} };
              null === i ? (i = [r]) : i.push(r), l++;
            }
          } else {
            const r = { params: { type: 'string' } };
            null === i ? (i = [r]) : i.push(r), l++;
          }
        var u = c === l;
        if (((f = f || u), !f)) {
          const a = l;
          e(t, {
            instancePath: n + '/' + s,
            parentData: r,
            parentDataProperty: s,
            rootData: o,
          }) ||
            ((i = null === i ? e.errors : i.concat(e.errors)), (l = i.length)),
            (u = a === l),
            (f = f || u);
        }
        if (f) (l = p), null !== i && (p ? (i.length = p) : (i = null));
        else {
          const r = { params: {} };
          null === i ? (i = [r]) : i.push(r), l++;
        }
        if (a !== l) break;
      }
    } else {
      const r = { params: { type: 'array' } };
      null === i ? (i = [r]) : i.push(r), l++;
    }
  var y = c === l;
  if (((f = f || y), !f)) {
    const t = l;
    e(r, {
      instancePath: n,
      parentData: s,
      parentDataProperty: a,
      rootData: o,
    }) || ((i = null === i ? e.errors : i.concat(e.errors)), (l = i.length)),
      (y = t === l),
      (f = f || y);
  }
  if (!f) {
    const r = { params: {} };
    return null === i ? (i = [r]) : i.push(r), l++, (t.errors = i), !1;
  }
  return (
    (l = p),
    null !== i && (p ? (i.length = p) : (i = null)),
    (t.errors = i),
    0 === l
  );
}

function n(
  r,
  {
    instancePath: e = '',
    parentData: s,
    parentDataProperty: a,
    rootData: o = r,
  } = {},
) {
  let i = null,
    l = 0;
  if (0 === l) {
    if (!r || 'object' != typeof r || Array.isArray(r))
      return (n.errors = [{ params: { type: 'object' } }]), !1;
    {
      let s;
      if (void 0 === r.consumes && (s = 'consumes'))
        return (n.errors = [{ params: { missingProperty: s } }]), !1;
      {
        const s = l;
        for (const e in r)
          if ('consumes' !== e && 'shareScope' !== e)
            return (n.errors = [{ params: { additionalProperty: e } }]), !1;
        if (s === l) {
          if (void 0 !== r.consumes) {
            const n = l;
            t(r.consumes, {
              instancePath: e + '/consumes',
              parentData: r,
              parentDataProperty: 'consumes',
              rootData: o,
            }) ||
              ((i = null === i ? t.errors : i.concat(t.errors)),
              (l = i.length));
            var p = n === l;
          } else p = !0;
          if (p)
            if (void 0 !== r.shareScope) {
              let e = r.shareScope;
              const t = l;
              if (l === t) {
                if ('string' != typeof e)
                  return (n.errors = [{ params: { type: 'string' } }]), !1;
                if (e.length < 1) return (n.errors = [{ params: {} }]), !1;
              }
              p = t === l;
            } else p = !0;
        }
      }
    }
  }
  return (n.errors = i), 0 === l;
}

(module.exports = n), (module.exports.default = n);
