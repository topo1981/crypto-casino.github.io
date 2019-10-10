webpackJsonp([10], {
    5: function (e, n, t) {
        e.exports = t("FHXh")
    }, FHXh: function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var a = t("mtWM"), r = t.n(a), s = t("HNiq"), o = {
                update: null,
                begin: null,
                loopBegin: null,
                changeBegin: null,
                change: null,
                changeComplete: null,
                loopComplete: null,
                complete: null,
                loop: 1,
                direction: "normal",
                autoplay: !0,
                timelineOffset: 0
            }, i = {duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0},
            d = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
            c = {CSS: {}, springs: {}};

        function u(e, n, t) {
            return Math.min(Math.max(e, n), t)
        }

        function l(e, n) {
            return e.indexOf(n) > -1
        }

        function m(e, n) {
            return e.apply(null, n)
        }

        var p = {
            arr: function (e) {
                return Array.isArray(e)
            }, obj: function (e) {
                return l(Object.prototype.toString.call(e), "Object")
            }, pth: function (e) {
                return p.obj(e) && e.hasOwnProperty("totalLength")
            }, svg: function (e) {
                return e instanceof SVGElement
            }, inp: function (e) {
                return e instanceof HTMLInputElement
            }, dom: function (e) {
                return e.nodeType || p.svg(e)
            }, str: function (e) {
                return "string" == typeof e
            }, fnc: function (e) {
                return "function" == typeof e
            }, und: function (e) {
                return void 0 === e
            }, hex: function (e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
            }, rgb: function (e) {
                return /^rgb/.test(e)
            }, hsl: function (e) {
                return /^hsl/.test(e)
            }, col: function (e) {
                return p.hex(e) || p.rgb(e) || p.hsl(e)
            }, key: function (e) {
                return !o.hasOwnProperty(e) && !i.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e
            }
        };

        function g(e) {
            var n = /\(([^)]+)\)/.exec(e);
            return n ? n[1].split(",").map(function (e) {
                return parseFloat(e)
            }) : []
        }

        function f(e, n) {
            var t = g(e), a = u(p.und(t[0]) ? 1 : t[0], .1, 100), r = u(p.und(t[1]) ? 100 : t[1], .1, 100),
                s = u(p.und(t[2]) ? 10 : t[2], .1, 100), o = u(p.und(t[3]) ? 0 : t[3], .1, 100), i = Math.sqrt(r / a),
                d = s / (2 * Math.sqrt(r * a)), l = d < 1 ? i * Math.sqrt(1 - d * d) : 0, m = 1,
                f = d < 1 ? (d * i - o) / l : -o + i;

            function _(e) {
                var t = n ? n * e / 1e3 : e;
                return t = d < 1 ? Math.exp(-t * d * i) * (m * Math.cos(l * t) + f * Math.sin(l * t)) : (m + f * t) * Math.exp(-t * i), 0 === e || 1 === e ? e : 1 - t
            }

            return n ? _ : function () {
                var n = c.springs[e];
                if (n) return n;
                for (var t = 0, a = 0; ;) if (1 === _(t += 1 / 6)) {
                    if (++a >= 16) break
                } else a = 0;
                var r = t * (1 / 6) * 1e3;
                return c.springs[e] = r, r
            }
        }

        function _(e, n) {
            void 0 === e && (e = 1), void 0 === n && (n = .5);
            var t = u(e, 1, 10), a = u(n, .1, 2);
            return function (e) {
                return 0 === e || 1 === e ? e : -t * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1 - a / (2 * Math.PI) * Math.asin(1 / t)) * (2 * Math.PI) / a)
            }
        }

        function h(e) {
            return void 0 === e && (e = 10), function (n) {
                return Math.round(n * e) * (1 / e)
            }
        }

        var b = function () {
            var e = 11, n = 1 / (e - 1);

            function t(e, n) {
                return 1 - 3 * n + 3 * e
            }

            function a(e, n) {
                return 3 * n - 6 * e
            }

            function r(e) {
                return 3 * e
            }

            function s(e, n, s) {
                return ((t(n, s) * e + a(n, s)) * e + r(n)) * e
            }

            function o(e, n, s) {
                return 3 * t(n, s) * e * e + 2 * a(n, s) * e + r(n)
            }

            return function (t, a, r, i) {
                if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
                    var d = new Float32Array(e);
                    if (t !== a || r !== i) for (var c = 0; c < e; ++c) d[c] = s(c * n, t, r);
                    return function (e) {
                        return t === a && r === i ? e : 0 === e || 1 === e ? e : s(u(e), a, i)
                    }
                }

                function u(a) {
                    for (var i = 0, c = 1, u = e - 1; c !== u && d[c] <= a; ++c) i += n;
                    var l = i + (a - d[--c]) / (d[c + 1] - d[c]) * n, m = o(l, t, r);
                    return m >= .001 ? function (e, n, t, a) {
                        for (var r = 0; r < 4; ++r) {
                            var i = o(n, t, a);
                            if (0 === i) return n;
                            n -= (s(n, t, a) - e) / i
                        }
                        return n
                    }(a, l, t, r) : 0 === m ? l : function (e, n, t, a, r) {
                        var o, i, d = 0;
                        do {
                            (o = s(i = n + (t - n) / 2, a, r) - e) > 0 ? t = i : n = i
                        } while (Math.abs(o) > 1e-7 && ++d < 10);
                        return i
                    }(a, i, i + n, t, r)
                }
            }
        }(), y = function () {
            var e = ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"], n = {
                In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], _],
                Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (e, n) {
                    return function (t) {
                        return 1 - _(e, n)(1 - t)
                    }
                }],
                InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (e, n) {
                    return function (t) {
                        return t < .5 ? _(e, n)(2 * t) / 2 : 1 - _(e, n)(-2 * t + 2) / 2
                    }
                }]
            }, t = {linear: [.25, .25, .75, .75]}, a = function (a) {
                n[a].forEach(function (n, r) {
                    t["ease" + a + e[r]] = n
                })
            };
            for (var r in n) a(r);
            return t
        }();

        function v(e, n) {
            if (p.fnc(e)) return e;
            var t = e.split("(")[0], a = y[t], r = g(e);
            switch (t) {
                case"spring":
                    return f(e, n);
                case"cubicBezier":
                    return m(b, r);
                case"steps":
                    return m(h, r);
                default:
                    return p.fnc(a) ? m(a, r) : m(b, a)
            }
        }

        function w(e) {
            try {
                return document.querySelectorAll(e)
            } catch (e) {
                return
            }
        }

        function k(e, n) {
            for (var t = e.length, a = arguments.length >= 2 ? arguments[1] : void 0, r = [], s = 0; s < t; s++) if (s in e) {
                var o = e[s];
                n.call(a, o, s, e) && r.push(o)
            }
            return r
        }

        function x(e) {
            return e.reduce(function (e, n) {
                return e.concat(p.arr(n) ? x(n) : n)
            }, [])
        }

        function j(e) {
            return p.arr(e) ? e : (p.str(e) && (e = w(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
        }

        function I(e, n) {
            return e.some(function (e) {
                return e === n
            })
        }

        function E(e) {
            var n = {};
            for (var t in e) n[t] = e[t];
            return n
        }

        function O(e, n) {
            var t = E(e);
            for (var a in e) t[a] = n.hasOwnProperty(a) ? n[a] : e[a];
            return t
        }

        function S(e, n) {
            var t = E(e);
            for (var a in n) t[a] = p.und(e[a]) ? n[a] : e[a];
            return t
        }

        function B(e) {
            return p.rgb(e) ? (t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n = e)) ? "rgba(" + t[1] + ",1)" : n : p.hex(e) ? function (e) {
                var n = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, n, t, a) {
                    return n + n + t + t + a + a
                }), t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
                return "rgba(" + parseInt(t[1], 16) + "," + parseInt(t[2], 16) + "," + parseInt(t[3], 16) + ",1)"
            }(e) : p.hsl(e) ? function (e) {
                var n, t, a,
                    r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
                    s = parseInt(r[1], 10) / 360, o = parseInt(r[2], 10) / 100, i = parseInt(r[3], 10) / 100,
                    d = r[4] || 1;

                function c(e, n, t) {
                    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + 6 * (n - e) * t : t < .5 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e
                }

                if (0 == o) n = t = a = i; else {
                    var u = i < .5 ? i * (1 + o) : i + o - i * o, l = 2 * i - u;
                    n = c(l, u, s + 1 / 3), t = c(l, u, s), a = c(l, u, s - 1 / 3)
                }
                return "rgba(" + 255 * n + "," + 255 * t + "," + 255 * a + "," + d + ")"
            }(e) : void 0;
            var n, t
        }

        function F(e) {
            var n = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
            if (n) return n[2]
        }

        function C(e, n) {
            return p.fnc(e) ? e(n.target, n.id, n.total) : e
        }

        function M(e, n) {
            return e.getAttribute(n)
        }

        function T(e, n, t) {
            if (I([t, "deg", "rad", "turn"], F(n))) return n;
            var a = c.CSS[n + t];
            if (!p.und(a)) return a;
            var r = document.createElement(e.tagName),
                s = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
            s.appendChild(r), r.style.position = "absolute", r.style.width = 100 + t;
            var o = 100 / r.offsetWidth;
            s.removeChild(r);
            var i = o * parseFloat(n);
            return c.CSS[n + t] = i, i
        }

        function L(e, n, t) {
            if (n in e.style) {
                var a = n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                    r = e.style[n] || getComputedStyle(e).getPropertyValue(a) || "0";
                return t ? T(e, r, t) : r
            }
        }

        function z(e, n) {
            return p.dom(e) && !p.inp(e) && (M(e, n) || p.svg(e) && e[n]) ? "attribute" : p.dom(e) && I(d, n) ? "transform" : p.dom(e) && "transform" !== n && L(e, n) ? "css" : null != e[n] ? "object" : void 0
        }

        function R(e) {
            if (p.dom(e)) {
                for (var n, t = e.style.transform || "", a = /(\w+)\(([^)]*)\)/g, r = new Map; n = a.exec(t);) r.set(n[1], n[2]);
                return r
            }
        }

        function q(e, n, t, a) {
            var r = l(n, "scale") ? 1 : 0 + function (e) {
                return l(e, "translate") || "perspective" === e ? "px" : l(e, "rotate") || l(e, "skew") ? "deg" : void 0
            }(n), s = R(e).get(n) || r;
            return t && (t.transforms.list.set(n, s), t.transforms.last = n), a ? T(e, s, a) : s
        }

        function P(e, n, t, a) {
            switch (z(e, n)) {
                case"transform":
                    return q(e, n, a, t);
                case"css":
                    return L(e, n, t);
                case"attribute":
                    return M(e, n);
                default:
                    return e[n] || 0
            }
        }

        function D(e, n) {
            var t = /^(\*=|\+=|-=)/.exec(e);
            if (!t) return e;
            var a = F(e) || 0, r = parseFloat(n), s = parseFloat(e.replace(t[0], ""));
            switch (t[0][0]) {
                case"+":
                    return r + s + a;
                case"-":
                    return r - s + a;
                case"*":
                    return r * s + a
            }
        }

        function Y(e, n) {
            if (p.col(e)) return B(e);
            var t = F(e), a = t ? e.substr(0, e.length - t.length) : e;
            return n && !/\s/g.test(e) ? a + n : a
        }

        function N(e, n) {
            return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2))
        }

        function X(e) {
            for (var n, t = e.points, a = 0, r = 0; r < t.numberOfItems; r++) {
                var s = t.getItem(r);
                r > 0 && (a += N(n, s)), n = s
            }
            return a
        }

        function A(e) {
            if (e.getTotalLength) return e.getTotalLength();
            switch (e.tagName.toLowerCase()) {
                case"circle":
                    return function (e) {
                        return 2 * Math.PI * M(e, "r")
                    }(e);
                case"rect":
                    return function (e) {
                        return 2 * M(e, "width") + 2 * M(e, "height")
                    }(e);
                case"line":
                    return function (e) {
                        return N({x: M(e, "x1"), y: M(e, "y1")}, {x: M(e, "x2"), y: M(e, "y2")})
                    }(e);
                case"polyline":
                    return X(e);
                case"polygon":
                    return function (e) {
                        var n = e.points;
                        return X(e) + N(n.getItem(n.numberOfItems - 1), n.getItem(0))
                    }(e)
            }
        }

        function U(e, n) {
            var t = n || {}, a = t.el || function (e) {
                    for (var n = e.parentNode; p.svg(n) && (n = n.parentNode, p.svg(n.parentNode));) ;
                    return n
                }(e), r = a.getBoundingClientRect(), s = M(a, "viewBox"), o = r.width, i = r.height,
                d = t.viewBox || (s ? s.split(" ") : [0, 0, o, i]);
            return {el: a, viewBox: d, x: d[0] / 1, y: d[1] / 1, w: o / d[2], h: i / d[3]}
        }

        function G(e, n) {
            function t(t) {
                void 0 === t && (t = 0);
                var a = n + t >= 1 ? n + t : 0;
                return e.el.getPointAtLength(a)
            }

            var a = U(e.el, e.svg), r = t(), s = t(-1), o = t(1);
            switch (e.property) {
                case"x":
                    return (r.x - a.x) * a.w;
                case"y":
                    return (r.y - a.y) * a.h;
                case"angle":
                    return 180 * Math.atan2(o.y - s.y, o.x - s.x) / Math.PI
            }
        }

        function H(e, n) {
            var t = /-?\d*\.?\d+/g, a = Y(p.pth(e) ? e.totalLength : e, n) + "";
            return {
                original: a,
                numbers: a.match(t) ? a.match(t).map(Number) : [0],
                strings: p.str(e) || n ? a.split(t) : []
            }
        }

        function $(e) {
            return k(e ? x(p.arr(e) ? e.map(j) : j(e)) : [], function (e, n, t) {
                return t.indexOf(e) === n
            })
        }

        function W(e) {
            var n = $(e);
            return n.map(function (e, t) {
                return {target: e, id: t, total: n.length, transforms: {list: R(e)}}
            })
        }

        function Q(e, n) {
            var t = E(n);
            if (/^spring/.test(t.easing) && (t.duration = f(t.easing)), p.arr(e)) {
                var a = e.length;
                2 === a && !p.obj(e[0]) ? e = {value: e} : p.fnc(n.duration) || (t.duration = n.duration / a)
            }
            var r = p.arr(e) ? e : [e];
            return r.map(function (e, t) {
                var a = p.obj(e) && !p.pth(e) ? e : {value: e};
                return p.und(a.delay) && (a.delay = t ? 0 : n.delay), p.und(a.endDelay) && (a.endDelay = t === r.length - 1 ? n.endDelay : 0), a
            }).map(function (e) {
                return S(e, t)
            })
        }

        function Z(e, n) {
            var t = [], a = n.keyframes;
            for (var r in a && (n = S(function (e) {
                for (var n = k(x(e.map(function (e) {
                    return Object.keys(e)
                })), function (e) {
                    return p.key(e)
                }).reduce(function (e, n) {
                    return e.indexOf(n) < 0 && e.push(n), e
                }, []), t = {}, a = function (a) {
                    var r = n[a];
                    t[r] = e.map(function (e) {
                        var n = {};
                        for (var t in e) p.key(t) ? t == r && (n.value = e[t]) : n[t] = e[t];
                        return n
                    })
                }, r = 0; r < n.length; r++) a(r);
                return t
            }(a), n)), n) p.key(r) && t.push({name: r, tweens: Q(n[r], e)});
            return t
        }

        function V(e, n) {
            var t;
            return e.tweens.map(function (a) {
                var r = function (e, n) {
                        var t = {};
                        for (var a in e) {
                            var r = C(e[a], n);
                            p.arr(r) && 1 === (r = r.map(function (e) {
                                return C(e, n)
                            })).length && (r = r[0]), t[a] = r
                        }
                        return t.duration = parseFloat(t.duration), t.delay = parseFloat(t.delay), t
                    }(a, n), s = r.value, o = p.arr(s) ? s[1] : s, i = F(o), d = P(n.target, e.name, i, n),
                    c = t ? t.to.original : d, u = p.arr(s) ? s[0] : c, l = F(u) || F(d), m = i || l;
                return p.und(o) && (o = c), r.from = H(u, m), r.to = H(D(o, u), m), r.start = t ? t.end : 0, r.end = r.start + r.delay + r.duration + r.endDelay, r.easing = v(r.easing, r.duration), r.isPath = p.pth(s), r.isColor = p.col(r.from.original), r.isColor && (r.round = 1), t = r, r
            })
        }

        var J = {
            css: function (e, n, t) {
                return e.style[n] = t
            }, attribute: function (e, n, t) {
                return e.setAttribute(n, t)
            }, object: function (e, n, t) {
                return e[n] = t
            }, transform: function (e, n, t, a, r) {
                if (a.list.set(n, t), n === a.last || r) {
                    var s = "";
                    a.list.forEach(function (e, n) {
                        s += n + "(" + e + ") "
                    }), e.style.transform = s
                }
            }
        };

        function K(e, n) {
            W(e).forEach(function (e) {
                for (var t in n) {
                    var a = C(n[t], e), r = e.target, s = F(a), o = P(r, t, s, e), i = D(Y(a, s || F(o)), o),
                        d = z(r, t);
                    J[d](r, t, i, e.transforms, !0)
                }
            })
        }

        function ee(e, n) {
            return k(x(e.map(function (e) {
                return n.map(function (n) {
                    return function (e, n) {
                        var t = z(e.target, n.name);
                        if (t) {
                            var a = V(n, e), r = a[a.length - 1];
                            return {
                                type: t,
                                property: n.name,
                                animatable: e,
                                tweens: a,
                                duration: r.end,
                                delay: a[0].delay,
                                endDelay: r.endDelay
                            }
                        }
                    }(e, n)
                })
            })), function (e) {
                return !p.und(e)
            })
        }

        function ne(e, n) {
            var t = e.length, a = function (e) {
                return e.timelineOffset ? e.timelineOffset : 0
            }, r = {};
            return r.duration = t ? Math.max.apply(Math, e.map(function (e) {
                return a(e) + e.duration
            })) : n.duration, r.delay = t ? Math.min.apply(Math, e.map(function (e) {
                return a(e) + e.delay
            })) : n.delay, r.endDelay = t ? r.duration - Math.max.apply(Math, e.map(function (e) {
                return a(e) + e.duration - e.endDelay
            })) : n.endDelay, r
        }

        var te = 0;
        var ae, re = [], se = [], oe = function () {
            function e() {
                ae = requestAnimationFrame(n)
            }

            function n(n) {
                var t = re.length;
                if (t) {
                    for (var a = 0; a < t;) {
                        var r = re[a];
                        if (r.paused) {
                            var s = re.indexOf(r);
                            s > -1 && (re.splice(s, 1), t = re.length)
                        } else r.tick(n);
                        a++
                    }
                    e()
                } else ae = cancelAnimationFrame(ae)
            }

            return e
        }();

        function ie(e) {
            void 0 === e && (e = {});
            var n, t = 0, a = 0, r = 0, s = 0, d = null;

            function c(e) {
                var n = window.Promise && new Promise(function (e) {
                    return d = e
                });
                return e.finished = n, n
            }

            var l = function (e) {
                var n = O(o, e), t = O(i, e), a = Z(t, e), r = W(e.targets), s = ee(r, a), d = ne(s, t), c = te;
                return te++, S(n, {
                    id: c,
                    children: [],
                    animatables: r,
                    animations: s,
                    duration: d.duration,
                    delay: d.delay,
                    endDelay: d.endDelay
                })
            }(e);
            c(l);

            function m() {
                var e = l.direction;
                "alternate" !== e && (l.direction = "normal" !== e ? "normal" : "reverse"), l.reversed = !l.reversed, n.forEach(function (e) {
                    return e.reversed = l.reversed
                })
            }

            function p(e) {
                return l.reversed ? l.duration - e : e
            }

            function g() {
                t = 0, a = p(l.currentTime) * (1 / ie.speed)
            }

            function f(e, n) {
                n && n.seek(e - n.timelineOffset)
            }

            function _(e) {
                for (var n = 0, t = l.animations, a = t.length; n < a;) {
                    var r = t[n], s = r.animatable, o = r.tweens, i = o.length - 1, d = o[i];
                    i && (d = k(o, function (n) {
                        return e < n.end
                    })[0] || d);
                    for (var c = u(e - d.start - d.delay, 0, d.duration) / d.duration, m = isNaN(c) ? 1 : d.easing(c), p = d.to.strings, g = d.round, f = [], _ = d.to.numbers.length, h = void 0, b = 0; b < _; b++) {
                        var y = void 0, v = d.to.numbers[b], w = d.from.numbers[b] || 0;
                        y = d.isPath ? G(d.value, m * v) : w + m * (v - w), g && (d.isColor && b > 2 || (y = Math.round(y * g) / g)), f.push(y)
                    }
                    var x = p.length;
                    if (x) {
                        h = p[0];
                        for (var j = 0; j < x; j++) {
                            p[j];
                            var I = p[j + 1], E = f[j];
                            isNaN(E) || (h += I ? E + I : E + " ")
                        }
                    } else h = f[0];
                    J[r.type](s.target, r.property, h, s.transforms), r.currentValue = h, n++
                }
            }

            function h(e) {
                l[e] && !l.passThrough && l[e](l)
            }

            function b(e) {
                var o = l.duration, i = l.delay, g = o - l.endDelay, b = p(e);
                l.progress = u(b / o * 100, 0, 100), l.reversePlayback = b < l.currentTime, n && function (e) {
                    if (l.reversePlayback) for (var t = s; t--;) f(e, n[t]); else for (var a = 0; a < s; a++) f(e, n[a])
                }(b), !l.began && l.currentTime > 0 && (l.began = !0, h("begin"), h("loopBegin")), b <= i && 0 !== l.currentTime && _(0), (b >= g && l.currentTime !== o || !o) && _(o), b > i && b < g ? (l.changeBegan || (l.changeBegan = !0, l.changeCompleted = !1, h("changeBegin")), h("change"), _(b)) : l.changeBegan && (l.changeCompleted = !0, l.changeBegan = !1, h("changeComplete")), l.currentTime = u(b, 0, o), l.began && h("update"), e >= o && (a = 0, l.remaining && !0 !== l.remaining && l.remaining--, l.remaining ? (t = r, h("loopComplete"), h("loopBegin"), "alternate" === l.direction && m()) : (l.paused = !0, l.completed || (l.completed = !0, h("loopComplete"), h("complete"), !l.passThrough && "Promise" in window && (d(), c(l)))))
            }

            return l.reset = function () {
                var e = l.direction;
                l.passThrough = !1, l.currentTime = 0, l.progress = 0, l.paused = !0, l.began = !1, l.changeBegan = !1, l.completed = !1, l.changeCompleted = !1, l.reversePlayback = !1, l.reversed = "reverse" === e, l.remaining = l.loop, n = l.children;
                for (var t = s = n.length; t--;) l.children[t].reset();
                (l.reversed && !0 !== l.loop || "alternate" === e && 1 === l.loop) && l.remaining++, _(0)
            }, l.set = function (e, n) {
                return K(e, n), l
            }, l.tick = function (e) {
                r = e, t || (t = r), b((r + (a - t)) * ie.speed)
            }, l.seek = function (e) {
                b(p(e))
            }, l.pause = function () {
                l.paused = !0, g()
            }, l.play = function () {
                l.paused && (l.completed && l.reset(), l.paused = !1, re.push(l), g(), ae || oe())
            }, l.reverse = function () {
                m(), g()
            }, l.restart = function () {
                l.reset(), l.play()
            }, l.reset(), l.autoplay && l.play(), l
        }

        function de(e, n) {
            for (var t = n.length; t--;) I(e, n[t].animatable.target) && n.splice(t, 1)
        }

        "undefined" != typeof document && document.addEventListener("visibilitychange", function () {
            document.hidden ? (re.forEach(function (e) {
                return e.pause()
            }), se = re.slice(0), re = []) : se.forEach(function (e) {
                return e.play()
            })
        }), ie.version = "3.0.1", ie.speed = 1, ie.running = re, ie.remove = function (e) {
            for (var n = $(e), t = re.length; t--;) {
                var a = re[t], r = a.animations, s = a.children;
                de(n, r);
                for (var o = s.length; o--;) {
                    var i = s[o], d = i.animations;
                    de(n, d), d.length || i.children.length || s.splice(o, 1)
                }
                r.length || s.length || a.pause()
            }
        }, ie.get = P, ie.set = K, ie.convertPx = T, ie.path = function (e, n) {
            var t = p.str(e) ? w(e)[0] : e, a = n || 100;
            return function (e) {
                return {property: e, el: t, svg: U(t), totalLength: A(t) * (a / 100)}
            }
        }, ie.setDashoffset = function (e) {
            var n = A(e);
            return e.setAttribute("stroke-dasharray", n), n
        }, ie.stagger = function (e, n) {
            void 0 === n && (n = {});
            var t = n.direction || "normal", a = n.easing ? v(n.easing) : null, r = n.grid, s = n.axis, o = n.from || 0,
                i = "first" === o, d = "center" === o, c = "last" === o, u = p.arr(e),
                l = u ? parseFloat(e[0]) : parseFloat(e), m = u ? parseFloat(e[1]) : 0, g = F(u ? e[1] : e) || 0,
                f = n.start || 0 + (u ? l : 0), _ = [], h = 0;
            return function (e, n, p) {
                if (i && (o = 0), d && (o = (p - 1) / 2), c && (o = p - 1), !_.length) {
                    for (var b = 0; b < p; b++) {
                        if (r) {
                            var y = d ? (r[0] - 1) / 2 : o % r[0], v = d ? (r[1] - 1) / 2 : Math.floor(o / r[0]),
                                w = y - b % r[0], k = v - Math.floor(b / r[0]), x = Math.sqrt(w * w + k * k);
                            "x" === s && (x = -w), "y" === s && (x = -k), _.push(x)
                        } else _.push(Math.abs(o - b));
                        h = Math.max.apply(Math, _)
                    }
                    a && (_ = _.map(function (e) {
                        return a(e / h) * h
                    })), "reverse" === t && (_ = _.map(function (e) {
                        return s ? e < 0 ? -1 * e : -e : Math.abs(h - e)
                    }))
                }
                return f + (u ? (m - l) / h : l) * (Math.round(100 * _[n]) / 100) + g
            }
        }, ie.timeline = function (e) {
            void 0 === e && (e = {});
            var n = ie(e);
            return n.duration = 0, n.add = function (t, a) {
                var r = re.indexOf(n), s = n.children;

                function o(e) {
                    e.passThrough = !0
                }

                r > -1 && re.splice(r, 1);
                for (var d = 0; d < s.length; d++) o(s[d]);
                var c = S(t, O(i, e));
                c.targets = c.targets || e.targets;
                var u = n.duration;
                c.autoplay = !1, c.direction = n.direction, c.timelineOffset = p.und(a) ? u : D(a, u), o(n), n.seek(c.timelineOffset);
                var l = ie(c);
                o(l), s.push(l);
                var m = ne(s, e);
                return n.delay = m.delay, n.endDelay = m.endDelay, n.duration = m.duration, n.seek(0), n.reset(), n.autoplay && n.play(), n
            }, n
        }, ie.easing = v, ie.penner = y, ie.random = function (e, n) {
            return Math.floor(Math.random() * (n - e + 1)) + e
        };
        var ce = ie;
        window.CGameBlackjackSound = function (e, n) {
            var t = this;
            this.id = e, this.file = e, this.is_loop = !1, this.volume = 1, this.onload = n, this.play = function () {
                var e = (new createjs.PlayPropsConfig).set({
                    interrupt: createjs.Sound.INTERRUPT_ANY,
                    loop: t.is_loop ? -1 : 0,
                    volume: t.volume
                });
                createjs.Sound.play(t.id, e)
            }, this.stop = function () {
                createjs.Sound.stop(t.id)
            }, this.onfileload = function (e) {
                "function" == typeof t.onload && t.onload()
            };
            var a = new createjs.LoadQueue;
            return createjs.Sound.alternateExtensions = ["mp3"], a.installPlugin(createjs.Sound), a.addEventListener("complete", t.onfileload), a.loadManifest([{
                id: t.id,
                src: t.file
            }]), this
        }, window.CGameBlackjack = function (e) {
            var n = this;
            return Object.assign(n, e), Object.assign(n, {
                sound_click: null,
                sound_deal: null,
                sound_card: null,
                sound_flip: null,
                sound_hand: null,
                sound_insurance: null,
                sound_lose: null,
                sound_none: null,
                sound_shuffle: null,
                sound_win: null,
                is_sound: !0,
                hand: null,
                score_dealer: "",
                score_hand1: "",
                score_hand2: "",
                message: "",
                is_win: !1,
                is_push: !1
            }), n.initDom = function () {
                if (n.container = window.document.getElementById("game_blackjack_container"), !n.container) return !1;
                n.container_bg = window.document.getElementById("game_blackjack_bg"), n.container_inner = n.container.getElementsByClassName("inner")[0], n.container_deck = window.document.getElementById("gbj_deck"), n.container_boss = window.document.getElementById("gbj_boss_cards"), n.container_my = window.document.getElementById("gbj_my_cards"), n.preloader = window.document.getElementById("gbj_preloader"), n.button_mute = window.document.getElementById("gbj_btn_mute"), n.button_fulls = window.document.getElementById("gbj_btn_fulls"), n.button_deal = window.document.getElementById("gbj_btn_deal"), n.button_insurance = window.document.getElementById("gbj_btn_insurance"), n.button_hit = window.document.getElementById("gbj_btn_hit"), n.button_double = window.document.getElementById("gbj_btn_double"), n.button_stand = window.document.getElementById("gbj_btn_stand"), n.button_split = window.document.getElementById("gbj_btn_split"), n.button_bet_minus = window.document.getElementById("gbj_bet_btn_minus"), n.button_bet_plus = window.document.getElementById("gbj_bet_btn_plus"), n.server_hash = window.document.getElementById("server-hash-input"), n.input_seed = window.document.getElementById("client-seed-input"), n.label_preloader_percent = window.document.getElementById("gbj_preloader_text"), n.label_bet = window.document.getElementById("gbj_bet_text"), n.label_balance = window.document.getElementById("gbj_balance_text"), n.label_message = window.document.getElementById("gbj_text_message"), n.label_boss_score = window.document.getElementById("gbj_boss_cards_score"), n.label_hand1_score = window.document.getElementById("gbj_hand1_score"), n.label_hand2_score = window.document.getElementById("gbj_hand2_score"), n.deck_cards = [];
                for (var e = 0; e < 52; e++) n.deck_cards[e] = window.document.createElement("img"), n.deck_cards[e].src = "/images/games/blackjack/" + n.game_theme + "/back.png", n.deck_cards[e].style.top = "-" + e / 2 + "px", n.deck_cards[e].style.left = "-" + e / 4 + "px", n.container_deck.appendChild(n.deck_cards[e]);
                n.boss_cards = [], n.boss_cards_sym = [];
                for (e = 0; e < 2; e++) {
                    var t = window.document.createElement("div"), a = window.document.createElement("img"),
                        r = window.document.createElement("img");
                    t.appendChild(a), t.appendChild(r), t.classList.add("card"), t.style.top = "0px", t.style.left = 232 + 284 * e + "px", r.classList.add("backface"), r.src = "/images/games/blackjack/" + n.game_theme + "/back.png", a.src = "/images/games/blackjack/" + n.game_theme + "/back.png", n.boss_cards[e] = t, n.container_boss.appendChild(n.boss_cards[e])
                }
                n.hand1_cards = [], n.hand2_cards = [], n.hand1_cards_sym = [], n.hand2_cards_sym = [];
                for (e = 0; e < 2; e++) {
                    t = window.document.createElement("div"), a = window.document.createElement("img"), r = window.document.createElement("img");
                    t.appendChild(a), t.appendChild(r), t.classList.add("card"), t.style.top = "0px", t.style.left = 482 + 284 * e + "px", r.classList.add("backface"), r.src = "/images/games/blackjack/" + n.game_theme + "/back.png", a.src = "/images/games/blackjack/" + n.game_theme + "/back.png", n.hand1_cards[e] = t, n.container_my.appendChild(n.hand1_cards[e])
                }
                return n.game_buttons = ["deal", "insurance", "hit", "double", "stand", "split"], n.buttons = {
                    mute: n.button_mute,
                    fulls: n.button_fulls,
                    deal: n.button_deal,
                    insurance: n.button_insurance,
                    hit: n.button_hit,
                    double: n.button_double,
                    stand: n.button_stand,
                    split: n.button_split,
                    bet_minus: n.button_bet_minus,
                    bet_plus: n.button_bet_plus
                }, !0
            }, n.funcDom = function () {
                for (var e in n.buttons) "function" == typeof n["button_" + e + "_click"] && (n.buttons[e].onclick = n["button_" + e + "_click"])
            }, n.Init = function () {
                n.initDom() && (n.bet = n.default_bet_amount, n.images_path = "CASINO-REFERRAL-LINK/images/games/blackjack/", n.res_ld = [n.images_path + n.game_theme + "/back.png", n.images_path + "cards/c3.png", n.images_path + "cards/c2.png", n.images_path + "cards/c4.png", n.images_path + "cards/c5.png", n.images_path + "cards/c6.png", n.images_path + "cards/c7.png", n.images_path + "cards/c8.png", n.images_path + "cards/c9.png", n.images_path + "cards/ct.png", n.images_path + "cards/cj.png", n.images_path + "cards/cq.png", n.images_path + "cards/ck.png", n.images_path + "cards/ca.png", n.images_path + "cards/d2.png", n.images_path + "cards/d3.png", n.images_path + "cards/d4.png", n.images_path + "cards/d5.png", n.images_path + "cards/d6.png", n.images_path + "cards/d7.png", n.images_path + "cards/d8.png", n.images_path + "cards/d9.png", n.images_path + "cards/dt.png", n.images_path + "cards/dj.png", n.images_path + "cards/dq.png", n.images_path + "cards/dk.png", n.images_path + "cards/da.png", n.images_path + "cards/h2.png", n.images_path + "cards/h3.png", n.images_path + "cards/h4.png", n.images_path + "cards/h5.png", n.images_path + "cards/h6.png", n.images_path + "cards/h7.png", n.images_path + "cards/h8.png", n.images_path + "cards/h9.png", n.images_path + "cards/ht.png", n.images_path + "cards/hj.png", n.images_path + "cards/hq.png", n.images_path + "cards/hk.png", n.images_path + "cards/ha.png", n.images_path + "cards/s2.png", n.images_path + "cards/s3.png", n.images_path + "cards/s4.png", n.images_path + "cards/s5.png", n.images_path + "cards/s6.png", n.images_path + "cards/s7.png", n.images_path + "cards/s8.png", n.images_path + "cards/s9.png", n.images_path + "cards/st.png", n.images_path + "cards/sj.png", n.images_path + "cards/sq.png", n.images_path + "cards/sk.png", n.images_path + "cards/sa.png"], n.loading_cnt = 11 + n.res_ld.length, n.loading_idx = 1, n.setLoad(1), n.balance_warn_text = Object(s.a)("Insufficient balance, please add more credits to play."), n.updateUIText(), window.addEventListener("resize", n.Resize), n.Resize(), n.Load())
            }, n.res_onload = function () {
                n.loading_idx++, n.loadUpdate(), n.loading_idx == n.loading_cnt && n.Loaded()
            }, n.Load = function () {
                for (n.sound_click = new window.CGameBlackjackSound("/audio/games/blackjack/click.wav", n.res_onload), n.sound_deal = new window.CGameBlackjackSound("/audio/games/blackjack/deal.wav", n.res_onload), n.sound_card = new window.CGameBlackjackSound("/audio/games/blackjack/card.wav", n.res_onload), n.sound_flip = new window.CGameBlackjackSound("/audio/games/blackjack/flip.wav", n.res_onload), n.sound_hand = new window.CGameBlackjackSound("/audio/games/blackjack/hand.wav", n.res_onload), n.sound_insurance = new window.CGameBlackjackSound("/audio/games/blackjack/insurance.wav", n.res_onload), n.sound_lose = new window.CGameBlackjackSound("/audio/games/blackjack/lose.wav", n.res_onload), n.sound_none = new window.CGameBlackjackSound("/audio/games/blackjack/none.wav", n.res_onload), n.sound_shuffle = new window.CGameBlackjackSound("/audio/games/blackjack/shuffle.wav", n.res_onload), n.sound_win = new window.CGameBlackjackSound("/audio/games/blackjack/win.wav", n.res_onload); n.res_ld.length > 0;) {
                    var e = new Image;
                    e.onload = n.res_onload, e.src = n.res_ld.pop()
                }
            }, n.Loaded = function () {
                n.funcDom(), n.container.classList.add("loaded"), n.disableButtons(), n.checkBet()
            }, n.loadUpdate = function () {
                this.loading_idx > this.loading_cnt && (this.loading_idx = this.loading_cnt), this.setLoad(Math.round(100 * this.loading_idx / this.loading_cnt))
            }, n.setLoad = function (e) {
                this.label_preloader_percent.textContent = e + "%"
            }, n.updateUIText = function () {
                n.label_bet.innerText = parseFloat(n.bet.toFixed(2)).toString(), n.label_balance.innerText = parseFloat(n.balance.toFixed(2)).toString(), n.label_message.innerHTML = n.message, n.label_hand1_score.innerText = n.score_hand1, n.label_hand2_score.innerText = n.score_hand2, n.label_boss_score.innerText = n.score_dealer
            }, n.shiftDeck = function (e) {
                !function (e) {
                    var t = function (e) {
                        return (Math.round(Math.random()) ? -1 : 1) * e
                    }, a = 0;
                    for (var r in n.is_sound && (setTimeout(n.sound_shuffle.play, 0), setTimeout(n.sound_shuffle.play, 500), setTimeout(n.sound_shuffle.play, 1e3)), n.deck_cards) {
                        var s = r / 4, o = 2 * r;
                        a++, ce({
                            targets: n.deck_cards[r],
                            keyframes: [{
                                duration: 150,
                                translateX: 70 * t(40 * Math.random() + 20) / 16,
                                translateY: -s
                            }, {duration: 150, translateX: -s, translateY: -s}, {
                                delay: 200,
                                duration: 150,
                                translateX: 70 * t(40 * Math.random() + 20) / 16,
                                translateY: -s
                            }, {duration: 150, translateX: -s, translateY: -s}, {
                                delay: 200,
                                duration: 150,
                                translateX: 70 * t(40 * Math.random() + 20) / 16,
                                translateY: -s
                            }, {duration: 150, translateX: -s, translateY: -s}],
                            easing: "easeInOutSine",
                            delay: o,
                            complete: function (n) {
                                n.completed && 0 == --a && "function" == typeof e && e()
                            }
                        })
                    }
                }(e)
            }, n.Resize = function () {
                n.container.offsetWidth / n.container.offsetHeight < 1.5 ? (n.container_inner.style.transform = "translate(-50%,0) scale(" + (n.container.offsetWidth / 1620).toFixed(4) + ")", n.container_inner.style.width = 1620..toFixed(8) + "px") : (n.container_inner.style.transform = "translate(-50%,0) scale(" + (n.container.offsetHeight / 1080).toFixed(4) + ")", n.container_inner.style.width = (n.container.offsetWidth / (n.container.offsetHeight / 1080)).toFixed(8) + "px")
            }, n.checkBet = function () {
                n.balance < n.min_bet ? (n.message = n.balance_warn_text, n.disableButtons(), n.updateUIText()) : (n.disableButtons(), n.balance >= n.bet && (n.buttons.deal.disabled = !1), n.message = "", n.bet == n.max_bet || n.bet > n.balance - 1 ? n.buttons.bet_plus.disabled = !0 : n.buttons.bet_plus.disabled = !1, n.bet == n.min_bet ? n.buttons.bet_minus.disabled = !0 : n.buttons.bet_minus.disabled = !1, n.updateUIText())
            }, n.disableButtons = function () {
                n.buttons.deal.disabled = !0, n.buttons.insurance.disabled = !0, n.buttons.hit.disabled = !0, n.buttons.double.disabled = !0, n.buttons.stand.disabled = !0, n.buttons.split.disabled = !0, n.buttons.bet_minus.disabled = !0, n.buttons.bet_plus.disabled = !0
            }, n.button_mute_click = function () {
                n.is_sound = !n.is_sound, n.is_sound ? (n.button_mute.classList.remove("mute"), n.sound_click.play()) : n.button_mute.classList.add("mute")
            }, n.button_fulls_click = function () {
                document.fullscreenElement && null !== document.fullscreenElement || document.webkitFullscreenElement && null !== document.webkitFullscreenElement || document.mozFullScreenElement && null !== document.mozFullScreenElement || document.msFullscreenElement && null !== document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : n.container.requestFullscreen ? n.container.requestFullscreen() : n.container.mozRequestFullScreen ? n.container.mozRequestFullScreen() : n.container.webkitRequestFullScreen ? n.container.webkitRequestFullScreen() : n.container.msRequestFullscreen && n.container.msRequestFullscreen(), setTimeout(n.Resize, 100)
            }, n.button_bet_minus_click = function () {
                n.is_sound && n.sound_click.play(), n.bet -= n.bet_change_amount, n.bet < n.min_bet && (n.bet = n.min_bet), n.checkBet(), n.updateUIText()
            }, n.button_bet_plus_click = function () {
                n.is_sound && n.sound_click.play(), n.bet += n.bet_change_amount, n.bet > n.max_bet && (n.bet = n.max_bet), n.checkBet(), n.updateUIText()
            }, n.button_deal_click = function () {
                n.disableButtons(), n.is_sound && n.sound_deal.play();
                var e, t, a = -200, s = 0;
                for (n.hand = null, n.message = "", n.score_dealer = "", n.score_hand1 = "", n.score_hand2 = "", n.updateUIText(); n.boss_cards.length;) s++, function (t) {
                    ce({
                        targets: t,
                        top: "-38px",
                        left: "-287px",
                        translateX: "0px",
                        rotateY: "0deg",
                        easing: "easeInOutSine",
                        duration: 200,
                        delay: a += 200,
                        complete: function () {
                            n.is_sound && n.sound_card.play(), e(), t.remove()
                        }
                    })
                }(n.boss_cards.pop());
                for (; n.hand1_cards.length;) s++, function (t) {
                    ce({
                        targets: t,
                        top: "-441px",
                        left: "-36px",
                        translateX: "0px",
                        rotateY: "0deg",
                        easing: "easeInOutSine",
                        duration: 200,
                        delay: a += 200,
                        complete: function () {
                            n.is_sound && n.sound_card.play(), e(), t.remove()
                        }
                    })
                }(n.hand1_cards.pop());
                for (; n.hand2_cards.length;) s++, function (t) {
                    ce({
                        targets: t,
                        top: "-441px",
                        left: "-36px",
                        translateX: "0px",
                        rotateY: "0deg",
                        easing: "easeInOutSine",
                        duration: 200,
                        delay: a += 200,
                        complete: function () {
                            n.is_sound && n.sound_card.play(), e(), t.remove()
                        }
                    })
                }(n.hand2_cards.pop());
                n.boss_cards_sym = [], n.hand1_cards_sym = [], n.hand2_cards_sym = [], e = function () {
                    0 == --s && n.shiftDeck(t)
                }, t = function () {
                    n.balance -= n.bet, n.updateUIText(), r.a.post(n.routes.deal, {
                        game_id: n.game_id,
                        seed: n.input_seed.value || parseInt(1e6 * Math.random()),
                        bet: n.bet
                    }).then(function (e) {
                        return n.processResponse(e)
                    })
                }
            }, n.button_hit_click = function () {
                n.disableButtons(), n.is_sound && n.sound_click.play(), n.hand ? r.a.post(n.routes.splitHit, {
                    game_id: n.game_id,
                    hand: n.hand
                }).then(function (e) {
                    return n.processResponse(e)
                }) : r.a.post(n.routes.hit, {game_id: n.game_id}).then(function (e) {
                    return n.processResponse(e)
                })
            }, n.button_double_click = function () {
                n.disableButtons(), n.is_sound && n.sound_click.play(), n.old_bet = n.bet, n.bet *= 2, n.updateUIText(), r.a.post(n.routes.double, {game_id: n.game_id}).then(function (e) {
                    return n.processResponse(e)
                })
            }, n.button_stand_click = function () {
                n.disableButtons(), n.is_sound && n.sound_click.play(), n.hand ? r.a.post(n.routes.splitStand, {
                    game_id: n.game_id,
                    hand: n.hand
                }).then(function (e) {
                    return n.processResponse(e)
                }) : r.a.post(n.routes.stand, {game_id: n.game_id}).then(function (e) {
                    return n.processResponse(e)
                })
            }, n.button_insurance_click = function () {
                n.disableButtons(), n.is_sound && n.sound_click.play(), r.a.post(n.routes.insurance, {game_id: n.game_id}).then(function (e) {
                    return n.processResponse(e)
                })
            }, n.button_split_click = function () {
                n.disableButtons(), n.is_sound && n.sound_click.play(), n.hand2_cards_sym.push(n.hand1_cards_sym.pop()), n.hand2_cards.push(n.hand1_cards.pop()), ce({
                    targets: n.hand1_cards[0],
                    duration: 100,
                    easing: "easeInOutSine",
                    left: 245
                }), ce({
                    targets: n.hand2_cards[0],
                    duration: 100,
                    easing: "easeInOutSine",
                    left: 995
                }), setTimeout(function () {
                    return r.a.post(n.routes.split, {game_id: n.game_id}).then(function (e) {
                        return n.processResponse(e)
                    })
                }, 100)
            }, n.processResponse = function (t) {
                var a = t.data.gameable, r = a.player_hand.split(","),
                    o = a.player_hand2 ? a.player_hand2.split(",") : [],
                    i = a.dealer_hand ? a.dealer_hand.split(",") : [a.dealer_hand_first_card], d = function () {
                        if (void 0 !== a.actions) for (var r in n.game_buttons) -1 != a.actions.indexOf(n.game_buttons[r]) && (n.buttons[n.game_buttons[r]].disabled = !1);
                        for (var r in void 0 !== t.data.account && (n.balance = t.data.account.balance), n.hand1_cards) n.hand1_cards[r].children[0].style.filter = "";
                        for (var r in n.hand2_cards) n.hand2_cards[r].children[0].style.filter = "";
                        if (t.data.status == e.statuses.completed) n.old_bet && (n.bet = n.old_bet, delete n.old_bet), n.checkBet(), n.message.length ? n.message = n.win_message + "<br><br>" + n.message : n.message = n.win_message, n.is_win ? n.is_sound && n.sound_win.play() : n.is_push ? n.is_sound && n.sound_none.play() : n.is_sound && n.sound_lose.play(); else if (n.hand = null, -1 != a.actions.indexOf("splitStand")) {
                            for (var r in n.hand2_cards) n.hand2_cards[r].children[0].style.filter = "brightness(0.8)";
                            n.message = Object(s.a)("Left hand"), n.hand = 1, n.buttons.stand.disabled = !1, -1 != a.actions.indexOf("splitHit") && (n.buttons.hit.disabled = !1)
                        } else if (-1 != a.actions.indexOf("splitStand2")) {
                            for (var r in n.hand1_cards) n.hand1_cards[r].children[0].style.filter = "brightness(0.8)";
                            n.message = Object(s.a)("Right hand"), n.hand = 2, n.buttons.stand.disabled = !1, -1 != a.actions.indexOf("splitHit2") && (n.buttons.hit.disabled = !1)
                        }
                        n.updateUIText()
                    }, c = function (e) {
                        var t, s, i, d = 0;
                        n.score_hand1 = "", n.score_hand2 = "", n.updateUIText(), n.score_hand1 = a.player_score, a.player_score2 && (n.score_hand2 = a.player_score2);
                        var c = null, u = null;
                        0 == n.boss_cards.length && (n.boss_cards = [], n.boss_cards_sym = ["0", a.dealer_hand_first_card], t = window.document.createElement("div"), s = window.document.createElement("img"), i = window.document.createElement("img"), t.appendChild(s), t.appendChild(i), t.classList.add("card"), t.style.zIndex = 11, t.style.top = "-38px", t.style.left = "-287px", t.style.transformOrigin = "right", i.classList.add("backface"), i.src = "/images/games/blackjack/" + n.game_theme + "/back.png", s.src = "/images/games/blackjack/" + n.game_theme + "/back.png", n.boss_cards[0] = t, n.container_boss.appendChild(n.boss_cards[0]), t = window.document.createElement("div"), s = window.document.createElement("img"), i = window.document.createElement("img"), t.appendChild(s), t.appendChild(i), t.classList.add("card"), t.style.zIndex = 200, t.style.top = "-38px", t.style.left = "-287px", t.style.transformOrigin = "right", i.classList.add("backface"), i.src = "/images/games/blackjack/" + n.game_theme + "/back.png", s.src = "/images/games/blackjack/cards/" + a.dealer_hand_first_card + ".png", n.boss_cards[1] = t, n.container_boss.appendChild(n.boss_cards[1]), n.container_boss.style.zIndex = "", c = function (e) {
                            return setTimeout(function () {
                                n.container_boss.style.zIndex = "100"
                            }, e - 10), ce({
                                targets: n.boss_cards[1],
                                easing: "easeInOutSine",
                                delay: e,
                                keyframes: [{left: "516px", top: "0px", duration: 150}, {
                                    translateX: "-260px",
                                    rotateY: "180deg",
                                    duration: 300
                                }],
                                complete: function (e) {
                                    e.completed && (n.boss_cards[1].style.zIndex = "", n.container_boss.style.zIndex = "")
                                }
                            }), n.is_sound && setTimeout(n.sound_flip.play, e), e += 450
                        }, u = function (e) {
                            return setTimeout(function () {
                                n.container_boss.style.zIndex = "100"
                            }, e - 10), ce({
                                targets: n.boss_cards[0],
                                easing: "easeInOutSine",
                                delay: e,
                                duration: 150,
                                left: "232px",
                                top: "0px",
                                complete: function (e) {
                                    e.completed && (n.boss_cards[0].style.zIndex = "", n.container_boss.style.zIndex = "")
                                }
                            }), n.is_sound && setTimeout(n.sound_flip.play, e), e += 150
                        });
                        var l = 1500 / (o.length ? 4 : 2) - 130 - 70 * (r.length - 1) / 2, m = 0;
                        if (n.label_hand1_score.style.left = l - 170 + "px", n.hand1_cards.length) {
                            for (var p in n.hand1_cards) !function (e, n) {
                                ce({
                                    targets: e,
                                    duration: 100,
                                    easing: "easeInOutSine",
                                    delay: d + 100 * n,
                                    left: l + 70 * n
                                })
                            }(n.hand1_cards[p], p);
                            l += 70 * (r.length - 1)
                        }
                        var g = r.filter(function (e) {
                            return -1 == n.hand1_cards_sym.indexOf(e)
                        }), f = o.filter(function (e) {
                            return -1 == n.hand2_cards_sym.indexOf(e)
                        });
                        if (f.length) {
                            m = 995 - 70 * (o.length - 1) / 2;
                            if (n.hand2_cards.length) {
                                for (var p in n.hand2_cards) !function (e, n) {
                                    ce({
                                        targets: e,
                                        duration: 100,
                                        easing: "easeInOutSine",
                                        delay: d + 100 * n,
                                        left: m + 70 * n
                                    })
                                }(n.hand2_cards[p], p);
                                m += 70 * (o.length - 1)
                            }
                        }
                        for (var p in g) {
                            var _ = n.hand1_cards_sym.length;
                            n.hand1_cards_sym[_] = g[p], t = window.document.createElement("div"), s = window.document.createElement("img"), i = window.document.createElement("img"), t.appendChild(s), t.appendChild(i), t.classList.add("card"), t.style.zIndex = g.length - p + 50, t.style.top = "-441px", t.style.left = "-36px", t.style.transformOrigin = "right", i.classList.add("backface"), i.src = "/images/games/blackjack/" + n.game_theme + "/back.png", s.src = "/images/games/blackjack/cards/" + g[p] + ".png", n.hand1_cards[_] = t, n.container_my.appendChild(n.hand1_cards[_]), function (e) {
                                ce({
                                    targets: e,
                                    easing: "easeInOutSine",
                                    delay: d,
                                    keyframes: [{left: l + "px", top: "0px", duration: 100}, {
                                        translateX: "-260px",
                                        rotateY: "180deg",
                                        duration: 250
                                    }],
                                    complete: function (n) {
                                        n.completed && (e.style.zIndex = "")
                                    }
                                }), n.is_sound && setTimeout(n.sound_flip.play, d), d += 350
                            }(n.hand1_cards[_]), l += 70, 0 == p && c && (d = c(d)), 1 == p && u && (d = u(d))
                        }
                        for (var p in f) {
                            _ = n.hand2_cards_sym.length;
                            n.hand2_cards_sym[_] = f[p], t = window.document.createElement("div"), s = window.document.createElement("img"), i = window.document.createElement("img"), t.appendChild(s), t.appendChild(i), t.classList.add("card"), t.style.zIndex = f.length - p + 10, t.style.top = "-441px", t.style.left = "-36px", t.style.transformOrigin = "right", i.classList.add("backface"), i.src = "/images/games/blackjack/" + n.game_theme + "/back.png", s.src = "/images/games/blackjack/cards/" + f[p] + ".png", n.hand2_cards[_] = t, n.container_my.appendChild(n.hand2_cards[_]), function (e) {
                                ce({
                                    targets: e,
                                    easing: "easeInOutSine",
                                    delay: d,
                                    keyframes: [{left: m + "px", top: "0px", duration: 100}, {
                                        translateX: "-260px",
                                        rotateY: "180deg",
                                        duration: 250
                                    }],
                                    complete: function (n) {
                                        n.completed && (e.style.zIndex = "")
                                    }
                                }), n.is_sound && setTimeout(n.sound_flip.play, d), d += 350
                            }(n.hand2_cards[_]), m += 70
                        }
                        n.hand2_cards_sym.length && m && (n.label_hand2_score.style.left = m + 260 + "px"), setTimeout(e, d)
                    };
                c(function (r) {
                    var o = 0;
                    if (t.data.status == e.statuses.completed) {
                        var u = [];
                        n.is_win = !1, n.is_push = !1, a.player_blackjack && !a.dealer_blackjack ? (n.is_win = !0, u.push(Object(s.a)("You won") + " " + a.win)) : !a.player_blackjack && a.dealer_blackjack ? u.push(Object(s.a)("You lost")) : a.player_blackjack && a.dealer_blackjack ? (n.is_push = !0, u.push(Object(s.a)("Push"))) : a.player_hand2 ? (a.win > a.bet ? (n.is_win = !0, u.push(Object(s.a)("1st hand won") + " " + a.win)) : a.win < a.bet ? u.push(Object(s.a)("1st hand lost")) : (n.is_push = !0, u.push(Object(s.a)("1st hand Push"))), a.win2 > a.bet2 ? (n.is_win = !0, u.push(Object(s.a)("2nd hand won") + " " + a.win2)) : a.win2 < a.bet2 ? u.push(Object(s.a)("2nd hand lost")) : (n.is_push = !0, u.push(Object(s.a)("2nd hand Push")))) : a.win > a.bet ? (n.is_win = !0, u.push(Object(s.a)("You won") + " " + a.win)) : a.win < a.bet ? u.push(Object(s.a)("You lost")) : (n.is_push = !0, u.push(Object(s.a)("Push"))), a.insurance_bet > 0 && a.insurance_win > 0 ? u.push(Object(s.a)("Insurance bet won") + " " + a.insurance_win) : a.insurance_bet > 0 && 0 == a.insurance_win && u.push(Object(s.a)("Insurance bet lost")), n.win_message = u.join("<br>"), n.updateUIText(), setTimeout(function () {
                            return n.server_hash.value = t.data.next_game.server_hash
                        }, 1e3), n.score_dealer = a.dealer_score, n.label_boss_score.style.left = 370 - 70 * i.length / 2 - 100 + "px";
                        var l = 335, m = i.filter(function (e) {
                            return -1 == n.boss_cards_sym.indexOf(e)
                        }), p = m.length;
                        for (n.boss_cards_sym[0] = m.shift(), n.boss_cards[0].children[0].src = "/images/games/blackjack/cards/" + n.boss_cards_sym[0] + ".png", ce({
                            targets: n.boss_cards[0],
                            translateX: "-260px",
                            rotateY: "180deg",
                            duration: 300,
                            easing: "easeInOutSine",
                            delay: o
                        }), n.is_sound && setTimeout(n.sound_flip.play, o), o += 300, ce({
                            targets: n.boss_cards[0],
                            left: l,
                            duration: 100,
                            easing: "easeInOutSine",
                            delay: o
                        }), l += 70, ce({
                            targets: n.boss_cards[1],
                            left: l,
                            duration: 100,
                            easing: "easeInOutSine",
                            delay: o
                        }), o += 100; m.length;) {
                            var g = n.boss_cards.length, f = window.document.createElement("div"),
                                _ = window.document.createElement("img"), h = window.document.createElement("img");
                            f.appendChild(_), f.appendChild(h), f.classList.add("card"), f.style.zIndex = p - g + 100, f.style.top = "-38px", f.style.left = "-287px", f.style.transformOrigin = "right", h.classList.add("backface"), h.src = "/images/games/blackjack/" + n.game_theme + "/back.png", _.src = "/images/games/blackjack/cards/" + m.shift() + ".png", n.boss_cards[g] = f, n.container_boss.appendChild(n.boss_cards[g]), function (e, t, a) {
                                ce({
                                    targets: e,
                                    easing: "easeInOutSine",
                                    delay: a,
                                    keyframes: [{
                                        left: 370 - 70 * (t + 0) / 2 + 70 * t + "px",
                                        top: "0px",
                                        duration: 150
                                    }, {translateX: "-260px", rotateY: "180deg", duration: 300}],
                                    complete: function (a) {
                                        if (a.completed) {
                                            e.style.zIndex = "";
                                            for (var r = 0; r < t; r++) ce({
                                                targets: n.boss_cards[r],
                                                left: 370 - 70 * (t + 0) / 2 + 70 * r,
                                                duration: 100,
                                                easing: "easeInOutSine"
                                            })
                                        }
                                    }
                                }), n.is_sound && setTimeout(n.sound_flip.play, a)
                            }(f, g, o), o += 450
                        }
                        n.game_id = t.data.next_game.id
                    }
                    setTimeout(function () {
                        return c(d)
                    }, o)
                })
            }, window.addEventListener("DOMContentLoaded", n.Init), n
        }
    }, HNiq: function (e, n, t) {
        "use strict";
        n.a = function (e) {
            return void 0 !== window.i18n ? o(window.i18n, e, e) : e
        }, n.b = function (e) {
            return void 0 !== window.cfg ? o(window.cfg, e) : e
        }, n.c = function (e) {
            e.select();
            try {
                document.execCommand("copy")
            } catch (e) {
            }
            document.getSelection().removeAllRanges(), document.activeElement.blur()
        }, n.f = function (e, n, t, a) {
            new (r.a.extend(e))({propsData: a, parent: n}).$mount(t)
        }, n.d = function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, n.g = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, t = Math.pow(10, n);
            return Math.round(e * t) / t
        }, n.e = function (e, n, t) {
            e = "" + e;
            for (; e.length < t;) e = n + e;
            return e
        }, n.h = function (e) {
            document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen()
        };
        var a = t("I3G/"), r = t.n(a),
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function o(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return n.split(".").reduce(function (e, n) {
                return e && void 0 != s(e[n]) && null != e[n] ? e[n] : t
            }, e)
        }
    }
}, [5]);