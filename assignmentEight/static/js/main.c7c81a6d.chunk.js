(this["webpackJsonpprogramming-hero"] = this["webpackJsonpprogramming-hero"] || []).push([
    [0], {
        18: function (e, t, a) { },
        19: function (e, t, a) { },
        20: function (e, t, a) { },
        22: function (e, t, a) { },
        28: function (e, t, a) { },
        29: function (e, t, a) { },
        30: function (e, t, a) {
            "use strict";
            a.r(t);
            var c = a(2),
                n = a.n(c),
                r = a(9),
                s = a.n(r),
                i = (a(18), a(19), a(20), a(0)),
                l = function () {
                    return Object(i.jsx)("div", {
                        className: "banner",
                        children: Object(i.jsxs)("div", {
                            className: "text-part",
                            children: [Object(i.jsx)("h2", {
                                className: "text-center fw-bold",
                                children: "Welcome to CIA Agent Center"
                            }), Object(i.jsx)("h5", {
                                className: "text-center",
                                children: "Hire Special Agent."
                            }), Object(i.jsx)("p", {
                                className: "text-center text-info fw-bold",
                                children: "Total Budget: 20000000"
                            })]
                        })
                    })
                },
                d = function () {
                    return Object(i.jsx)("div", {
                        children: Object(i.jsx)("nav", {
                            className: "navbar navbar-expand-lg navbar-light bg-info",
                            children: Object(i.jsxs)("div", {
                                className: "container",
                                children: [Object(i.jsx)("a", {
                                    className: "navbar-brand text-white fw-bold",
                                    href: "/CIA",
                                    children: "CIA Agent Center"
                                }), Object(i.jsx)("button", {
                                    className: "navbar-toggler",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#navbarSupportedContent",
                                    "aria-controls": "navbarSupportedContent",
                                    "aria-expanded": "false",
                                    "aria-label": "Toggle navigation",
                                    children: Object(i.jsx)("span", {
                                        className: "navbar-toggler-icon"
                                    })
                                }), Object(i.jsx)("div", {
                                    className: "collapse navbar-collapse",
                                    id: "navbarSupportedContent",
                                    children: Object(i.jsxs)("ul", {
                                        className: "navbar-nav ms-auto mb-2 mb-lg-0",
                                        children: [Object(i.jsx)("li", {
                                            className: "nav-item",
                                            children: Object(i.jsx)("a", {
                                                className: "nav-link active text-white",
                                                "aria-current": "page",
                                                href: "/home",
                                                children: "Home"
                                            })
                                        }), Object(i.jsx)("li", {
                                            className: "nav-item",
                                            children: Object(i.jsx)("a", {
                                                className: "nav-link text-white",
                                                href: "/team",
                                                children: "Team"
                                            })
                                        }), Object(i.jsx)("li", {
                                            className: "nav-item",
                                            children: Object(i.jsx)("a", {
                                                className: "nav-link text-white",
                                                href: "/review",
                                                children: "Review"
                                            })
                                        }), Object(i.jsx)("li", {
                                            className: "nav-item",
                                            children: Object(i.jsx)("a", {
                                                className: "nav-link text-white",
                                                href: "/about",
                                                children: "About"
                                            })
                                        }), Object(i.jsx)("li", {
                                            className: "nav-item",
                                            children: Object(i.jsx)("a", {
                                                className: "nav-link text-white",
                                                href: "/contact",
                                                children: "Contact"
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                j = a(13),
                o = a(8),
                b = a(10),
                h = (a(22), function (e) {
                    var t, a = e.cart,
                        c = 0,
                        n = 0,
                        r = Object(b.a)(a);
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var s = t.value;
                            s.quantity || (s.quantity = 1), n += s.salary * s.quantity, c += s.quantity
                        }
                    } catch (d) {
                        r.e(d)
                    } finally {
                        r.f()
                    }
                    var l = a.map((function (e) {
                        return Object(i.jsx)("p", {
                            children: e.name
                        })
                    }));
                    return Object(i.jsxs)("div", {
                        className: "mt-5 bg-info p-3 shadow",
                        children: [Object(i.jsx)("h3", {
                            className: "text-white fw-bold text-center",
                            children: "Order Summary"
                        }), Object(i.jsxs)("h5", {
                            className: "text-white text-center",
                            children: ["Items Ordered:", c, " "]
                        }), Object(i.jsx)("br", {}), Object(i.jsxs)("p", {
                            className: "text-white text-center fw-bold",
                            children: ["Total: ", n.toFixed(2)]
                        }), Object(i.jsxs)("p", {
                            className: "text-white text-center fw-bold",
                            children: ["Order List:", l]
                        })]
                    })
                }),
                m = a(11),
                x = a(12),
                u = (a(28), function (e) {
                    var t = e.hero,
                        a = t.img,
                        c = t.name,
                        n = t.profession,
                        r = t.salary,
                        s = t.hero,
                        l = Object(i.jsx)(m.a, {
                            icon: x.a
                        });
                    return Object(i.jsx)("div", {
                        className: "col-md-4 g-4",
                        children: Object(i.jsx)("div", {
                            className: "item-product container-fluid mt-3",
                            children: Object(i.jsxs)("div", {
                                className: "card h-100 shadow mb-5",
                                children: [Object(i.jsx)("img", {
                                    src: a,
                                    className: "card-img-top img-fluid w100 img-thumbnail custom",
                                    alt: "..."
                                }), Object(i.jsxs)("div", {
                                    className: "card-body",
                                    children: [Object(i.jsx)("h5", {
                                        className: "card-title text-center fw-bold",
                                        children: c
                                    }), Object(i.jsx)("p", {
                                        className: "text-center text-info",
                                        children: n
                                    }), Object(i.jsx)("p", {
                                        className: "text-center",
                                        children: s
                                    }), Object(i.jsxs)("p", {
                                        className: "card-text text-center",
                                        children: [r, "$"]
                                    })]
                                }), Object(i.jsxs)("button", {
                                    onClick: function () {
                                        return e.handleAddToBag(e.hero)
                                    },
                                    type: "button",
                                    className: "btn btn-info",
                                    children: ["Hire Now", l]
                                })]
                            })
                        })
                    })
                }),
                O = (a(29), function () {
                    var e = Object(c.useState)([]),
                        t = Object(o.a)(e, 2),
                        a = t[0],
                        n = t[1],
                        r = Object(c.useState)([]),
                        s = Object(o.a)(r, 2),
                        l = s[0],
                        d = s[1];
                    Object(c.useEffect)((function () {
                        fetch("./data.JSON").then((function (e) {
                            return e.json()
                        })).then((function (e) {
                            return n(e)
                        }))
                    }), []);
                    var b = function (e) {
                        var t = [].concat(Object(j.a)(l), [e]);
                        d(t)
                    };
                    return Object(i.jsxs)("div", {
                        className: "main",
                        children: [Object(i.jsx)("div", {
                            className: "row",
                            children: a.map((function (e) {
                                return Object(i.jsx)(u, {
                                    hero: e,
                                    handleAddToBag: b
                                }, e.key)
                            }))
                        }), Object(i.jsx)("div", {
                            className: "cart",
                            children: Object(i.jsx)(h, {
                                cart: l
                            })
                        })]
                    })
                });
            var v = function () {
                return Object(i.jsxs)("div", {
                    children: [Object(i.jsx)(d, {}), Object(i.jsx)(l, {}), Object(i.jsx)(O, {})]
                })
            },
                f = function (e) {
                    e && e instanceof Function && a.e(3).then(a.bind(null, 31)).then((function (t) {
                        var a = t.getCLS,
                            c = t.getFID,
                            n = t.getFCP,
                            r = t.getLCP,
                            s = t.getTTFB;
                        a(e), c(e), n(e), r(e), s(e)
                    }))
                };
            s.a.render(Object(i.jsx)(n.a.StrictMode, {
                children: Object(i.jsx)(v, {})
            }), document.getElementById("root")), f()
        }
    },
    [
        [30, 1, 2]
    ]
]);
//# sourceMappingURL=main.c7c81a6d.chunk.js.map