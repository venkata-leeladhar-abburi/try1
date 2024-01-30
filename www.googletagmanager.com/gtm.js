// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "4",

            "macros": [{
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-12109173-4",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return document.location.pathname+document.location.search})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "originalLocation"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollDirection",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Why attend - Investors",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Click",
                "vtp_eventLabel": ["macro", 0],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 8
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": ["macro", 0],
                "vtp_eventCategory": "Why attend - Cargo professionals",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Click",
                "vtp_eventLabel": ["macro", 0],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 9
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Why attend - Hackers",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Click",
                "vtp_eventLabel": ["macro", 0],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 10
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Why attend - Startups",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Click",
                "vtp_eventLabel": ["macro", 0],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 11
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventValue": ["macro", 4],
                "vtp_eventCategory": "Scroll Depth",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 3],
                "vtp_eventAction": "Scroll",
                "vtp_eventLabel": ["macro", 4],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "tag_id": 12
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 5]],
                    ["map", "fieldName", "location", "value", ["macro", 6]]
                ],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 3],
                "vtp_trackingId": "UA-12109173-3",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "tag_id": 13
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "11495114_16",
                "tag_id": 14
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "11495114_17",
                "tag_id": 15
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "11495114_18",
                "tag_id": 16
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "11495114_19",
                "tag_id": 17
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "11495114_20",
                "tag_id": 18
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "25,50,75,100",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "11495114_21",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 19
            }, {
                "function": "__hl",
                "tag_id": 20
            }],
            "predicates": [{
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "\/why-attend\/#investors"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)11495114_19($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "\/why-attend\/#cargo-professionals"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)11495114_17($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "\/why-attend\/#hackers"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)11495114_18($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 0],
                "arg1": "\/why-attend\/#startup"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)11495114_20($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.scrollDepth"
            }, {
                "function": "_re",
                "arg0": ["macro", 2],
                "arg1": "(^$|((^|,)11495114_21($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.historyChange"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "gtm.load"
            }],
            "rules": [
                [
                    ["if", 0, 1, 2],
                    ["add", 0]
                ],
                [
                    ["if", 1, 3, 4],
                    ["add", 1]
                ],
                [
                    ["if", 1, 5, 6],
                    ["add", 2]
                ],
                [
                    ["if", 1, 7, 8],
                    ["add", 3]
                ],
                [
                    ["if", 9, 10],
                    ["add", 4]
                ],
                [
                    ["if", 11],
                    ["add", 5, 6, 7, 8, 9, 10, 12]
                ],
                [
                    ["if", 12],
                    ["add", 5]
                ],
                [
                    ["if", 13],
                    ["add", 11]
                ]
            ]
        },
        "runtime": []









    };


    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        fa = function(a) {
            return a.raw = a
        },
        ha = function(a, b) {
            a.raw = b;
            return a
        },
        ia = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ba(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ja = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ka = function(a) {
            return a instanceof Array ? a :
                ja(ia(a))
        },
        la = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma,
        ra = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.xn = b.prototype
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var sa = this || self,
        ta = function(a) {
            return a
        };
    var wa = function() {},
        xa = function(a) {
            return "function" === typeof a
        },
        g = function(a) {
            return "string" === typeof a
        },
        ya = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        za = Array.isArray,
        Aa = function(a, b) {
            if (a && za(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ba = function(a, b) {
            if (!ya(a) || !ya(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Da = function(a, b) {
            for (var c = new Ca, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ea = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Fa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ga = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ha = function(a) {
            var b = [];
            if (za(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Ia = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ka = function() {
            return new Date(Date.now())
        },
        La = function() {
            return Ka().getTime()
        },
        Ca = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ca.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ca.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ma = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Na = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Oa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Pa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Qa = function(a, b) {
            return a.substring(0, b.length) === b
        },
        Ra = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Sa = /^\w{1,9}$/,
        Ta = function(a,
            b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Sa.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Ua = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Va = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Wa = function(a) {
            if (null == a) return String(a);
            var b = Va.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ya = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Za = function(a) {
            if (!a || "object" != Wa(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ya(a, "constructor") && !Ya(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ya(a, b)
        },
        z = function(a, b) {
            var c = b || ("array" == Wa(a) ? [] : {}),
                d;
            for (d in a)
                if (Ya(a, d)) {
                    var e = a[d];
                    "array" == Wa(e) ? ("array" != Wa(c[d]) && (c[d] = []), c[d] = z(e, c[d])) : Za(e) ? (Za(c[d]) || (c[d] = {}), c[d] = z(e, c[d])) : c[d] = e
                }
            return c
        };

    function $a() {
        for (var a = ab, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function bb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var ab, cb;

    function db(a) {
        ab = ab || bb();
        cb = cb || $a();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                h = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | h >> 4,
                p = (h & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(ab[m], ab[n], ab[p], ab[q])
        }
        return b.join("")
    }

    function eb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = cb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        ab = ab || bb();
        cb = cb || $a();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                h = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)))
        }
    };
    var fb = {},
        gb = function(a, b) {
            fb[a] = fb[a] || [];
            fb[a][b] = !0
        },
        hb = function() {
            delete fb.GA4_EVENT
        },
        ib = function(a) {
            var b = fb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return db(c.join("")).replace(/\.+$/, "")
        };
    var jb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var kb, lb = function() {
        if (void 0 === kb) {
            var a = null,
                b = sa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ta,
                        createScript: ta,
                        createScriptURL: ta
                    })
                } catch (c) {
                    sa.console && sa.console.error(c.message)
                }
                kb = a
            } else kb = a
        }
        return kb
    };
    var mb = function(a) {
        this.h = a
    };
    mb.prototype.toString = function() {
        return this.h + ""
    };
    var nb = {};
    var ob, pb;
    a: {
        for (var qb = ["CLOSURE_FLAGS"], rb = sa, sb = 0; sb < qb.length; sb++)
            if (rb = rb[qb[sb]], null == rb) {
                pb = null;
                break a
            }
        pb = rb
    }
    var tb = pb && pb[610401301];
    ob = null != tb ? tb : !1;

    function ub() {
        var a = sa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var vb, wb = sa.navigator;
    vb = wb ? wb.userAgentData || null : null;

    function xb(a) {
        return ob ? vb ? vb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function yb(a) {
        return -1 != ub().indexOf(a)
    };

    function zb() {
        return ob ? !!vb && 0 < vb.brands.length : !1
    }

    function Ab() {
        return zb() ? !1 : yb("Opera")
    }

    function Bb() {
        return yb("Firefox") || yb("FxiOS")
    }

    function Cb() {
        return zb() ? xb("Chromium") : (yb("Chrome") || yb("CriOS")) && !(zb() ? 0 : yb("Edge")) || yb("Silk")
    };
    var Db = {},
        Eb = function(a) {
            this.h = a
        };
    Eb.prototype.toString = function() {
        return this.h.toString()
    };
    var Fb = function(a) {
        return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Gb = fa([""]),
        Hb = ha(["\x00"], ["\\0"]),
        Ib = ha(["\n"], ["\\n"]),
        Jb = ha(["\x00"], ["\\u0000"]);

    function Kb(a) {
        return -1 === a.toString().indexOf("`")
    }
    Kb(function(a) {
        return a(Gb)
    }) || Kb(function(a) {
        return a(Hb)
    }) || Kb(function(a) {
        return a(Ib)
    }) || Kb(function(a) {
        return a(Jb)
    });
    var Lb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

    function Mb(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };

    function Nb(a) {
        var b = a = Ob(a),
            c = lb(),
            d = c ? c.createHTML(b) : b;
        return new Eb(d, Db)
    }

    function Ob(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var E = window,
        F = document,
        Qb = navigator,
        Rb = F.currentScript && F.currentScript.src,
        Sb = function(a, b) {
            var c = E[a];
            E[a] = void 0 === c ? b : c;
            return E[a]
        },
        Tb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Ub = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Vb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Wb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Xb = function(a, b, c, d, e) {
            var f = F.createElement("script");
            Wb(f, d, Ub);
            f.type = "text/javascript";
            f.async = d && !1 === d.async ? !1 : !0;
            var h, l = Ob(a),
                m = lb(),
                n = m ? m.createScriptURL(l) : l;
            h = new mb(n, nb);
            f.src = h instanceof mb && h.constructor === mb ? h.h : "type_error:TrustedResourceUrl";
            var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Tb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = F.getElementsByTagName("script")[0] || F.body || F.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Yb = function() {
            if (Rb) {
                var a = Rb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Zb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var h = e,
                l = !1;
            h || (h = F.createElement("iframe"), l = !0);
            Wb(h, c, Vb);
            d && k(d, function(n, p) {
                h.dataset[n] = p
            });
            f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
            if (l) {
                var m = F.body &&
                    F.body.lastChild || F.body || F.head;
                m.parentNode.insertBefore(h, m)
            }
            Tb(h, b);
            void 0 !== a && (h.src = a);
            return h
        },
        $b = function(a, b, c, d) {
            var e = new Image(1, 1);
            Wb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        ac = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        bc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            E.setTimeout(a, 0)
        },
        cc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        dc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        ec = function(a) {
            var b = F.createElement("div"),
                c = b,
                d = Nb("A<div>" + a + "</div>");
            1 === c.nodeType && Mb(c);
            c.innerHTML = Fb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        fc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, h = 0; f && h <= c; h++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        gc = function(a) {
            var b;
            try {
                b = Qb.sendBeacon && Qb.sendBeacon(a)
            } catch (c) {
                gb("TAGGING", 15)
            }
            b || $b(a)
        },
        hc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        ic = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                E.fetch(a, b)
            } catch (c) {}
        },
        jc = function() {
            var a = E.performance;
            if (a && xa(a.now)) return a.now()
        },
        kc = function() {
            return E.performance || void 0
        };

    function lc(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var mc = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Xi: a("consent"),
            Fg: a("convert_case_to"),
            Gg: a("convert_false_to"),
            Hg: a("convert_null_to"),
            Ig: a("convert_true_to"),
            Jg: a("convert_undefined_to"),
            Cm: a("debug_mode_metadata"),
            ka: a("function"),
            Ff: a("instance_name"),
            bk: a("live_only"),
            dk: a("malware_disabled"),
            ek: a("metadata"),
            hk: a("original_activity_id"),
            Xm: a("original_vendor_template_id"),
            Wm: a("once_on_load"),
            gk: a("once_per_event"),
            Ph: a("once_per_load"),
            dn: a("priority_override"),
            fn: a("respected_consent_types"),
            Uh: a("setup_tags"),
            qd: a("tag_id"),
            Zh: a("teardown_tags")
        }
    }();
    var Ic;
    var Jc = [],
        Lc = [],
        Mc = [],
        Nc = [],
        Oc = [],
        Pc = {},
        Qc, Rc, Sc = function(a) {
            Rc = Rc || a
        },
        Tc = function(a) {},
        Uc, Vc = [],
        Wc = function(a, b) {
            var c = a[mc.ka],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Pc[c],
                f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== Vc.indexOf(c),
                h = {},
                l = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
            e && d && d.cachedModelValues && (h.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (null == q) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = Jc[q];
                                    break;
                                case 1:
                                    r = Nc[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var t = r && r[mc.Ff];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName =
                    b.name)
            }
            var u, v;
            e && (u = e(h));
            if (!e || f) v = Ic(c, l, b);
            if (f && d) {
                var w;
                a: {
                    var x = u;
                    if (void 0 == x || za(x) || Za(x)) w = !0;
                    else {
                        switch (typeof x) {
                            case "boolean":
                            case "number":
                            case "string":
                            case "function":
                                w = !0;
                                break a
                        }
                        w = !1
                    }
                }
                w ? typeof u !== typeof v && d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c)
            }
            return e ? u : v
        },
        Yc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Xc(a[e], b, c));
            return d
        },
        Xc = function(a, b, c) {
            if (za(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Xc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var h = Jc[f];
                        if (!h || b.isBlocked(h)) return;
                        c[f] = !0;
                        var l = String(h[mc.Ff]);
                        try {
                            var m = Yc(h, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Wc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Uc && (d = Uc.Dk(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Xc(a[n], b, c)] = Xc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Xc(a[q], b, c);
                            Rc && (p = p || Rc.xl(r));
                            d.push(r)
                        }
                        return Rc && p ? Rc.Fk(d) : d.join("");
                    case "escape":
                        d = Xc(a[1], b, c);
                        if (Rc && za(a[1]) && "macro" === a[1][0] && Rc.yl(a)) return Rc.Vl(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) nc[a[t]] && (d = nc[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Nc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            ki: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[mc.ka] = a[1];
                        var w = Zc(v, b, c),
                            x = !!a[4];
                        return x || 2 !==
                            w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Zc = function(a, b, c) {
            try {
                return Qc(Yc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        $c = function(a) {
            var b = a[mc.ka];
            if (!b) throw Error("Error: No function name given for function call.");
            return !!Pc[b]
        };
    var cd = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = ad(a), f = 0; f < Lc.length; f++) {
                var h = Lc[f],
                    l = bd(h, e);
                if (l) {
                    for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(h.block || [])
                } else null === l && b(h.block || []);
            }
            for (var p = [], q = 0; q < Nc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        bd = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f = a.unless || [], h = 0; h < f.length; h++) {
                var l = b(f[h]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        ad = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Zc(Mc[c], a));
                return b[c]
            }
        };
    var dd = {
        Dk: function(a, b) {
            b[mc.Fg] && "string" === typeof a && (a = 1 == b[mc.Fg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(mc.Hg) && null === a && (a = b[mc.Hg]);
            b.hasOwnProperty(mc.Jg) && void 0 === a && (a = b[mc.Jg]);
            b.hasOwnProperty(mc.Ig) && !0 === a && (a = b[mc.Ig]);
            b.hasOwnProperty(mc.Gg) && !1 === a && (a = b[mc.Gg]);
            return a
        }
    };
    var ed = [],
        fd = function(a) {
            return void 0 == ed[a] ? !1 : ed[a]
        };
    var td = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
        ud = new Ca;
    var Bd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Cd(a, b) {
        for (var c = "", d = !0; 7 < a;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a | b] + c
    };
    var Ed = function(a) {
            return Dd ? F.querySelectorAll(a) : null
        },
        Fd = function(a, b) {
            if (!Dd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!F.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Gd = !1;
    if (F.querySelectorAll) try {
        var Hd = F.querySelectorAll(":root");
        Hd && 1 == Hd.length && Hd[0] == F.documentElement && (Gd = !0)
    } catch (a) {}
    var Dd = Gd;
    var J = function(a) {
        gb("GTM", a)
    };
    var K = {
            g: {
                ya: "ad_personalization",
                F: "ad_storage",
                M: "ad_user_data",
                O: "analytics_storage",
                Wb: "region",
                Rd: "consent_updated",
                Ag: "wait_for_update",
                Kg: "ads",
                Bm: "all",
                bj: "maps",
                cj: "playstore",
                dj: "search",
                ej: "shopping",
                fj: "youtube",
                ij: "app_remove",
                jj: "app_store_refund",
                kj: "app_store_subscription_cancel",
                lj: "app_store_subscription_convert",
                mj: "app_store_subscription_renew",
                Lg: "add_payment_info",
                Mg: "add_shipping_info",
                Xb: "add_to_cart",
                Yb: "remove_from_cart",
                Ng: "view_cart",
                Ab: "begin_checkout",
                Zb: "select_item",
                Va: "view_item_list",
                jb: "select_promotion",
                Wa: "view_promotion",
                na: "purchase",
                ac: "refund",
                Ca: "view_item",
                Og: "add_to_wishlist",
                nj: "exception",
                oj: "first_open",
                pj: "first_visit",
                oa: "gtag.config",
                La: "gtag.get",
                qj: "in_app_purchase",
                bc: "page_view",
                rj: "screen_view",
                sj: "session_start",
                tj: "timing_complete",
                uj: "track_social",
                Sd: "user_engagement",
                fc: "gclgb",
                kb: "gclid",
                qa: "ads_data_redaction",
                Fm: "gad_source",
                Gm: "gclid_url",
                Hm: "gclsrc",
                Im: "wbraid",
                ja: "allow_ad_personalization_signals",
                ff: "allow_custom_scripts",
                hf: "allow_display_features",
                Td: "allow_enhanced_conversions",
                Xa: "allow_google_signals",
                Da: "allow_interest_groups",
                vj: "app_id",
                wj: "app_installer_id",
                xj: "app_name",
                yj: "app_version",
                hc: "auid",
                zj: "auto_detection_enabled",
                Bb: "aw_remarketing",
                jf: "aw_remarketing_only",
                Ud: "discount",
                Vd: "aw_feed_country",
                Wd: "aw_feed_language",
                W: "items",
                Xd: "aw_merchant_id",
                Pg: "aw_basket_type",
                Dc: "campaign_content",
                Ec: "campaign_id",
                Fc: "campaign_medium",
                Gc: "campaign_name",
                Hc: "campaign",
                Ic: "campaign_source",
                Jc: "campaign_term",
                lb: "client_id",
                Aj: "content_group",
                Bj: "content_type",
                Qa: "conversion_cookie_prefix",
                Kc: "conversion_id",
                Ea: "conversion_linker",
                Cb: "conversion_api",
                Yd: "cookie_deprecation",
                Za: "cookie_domain",
                Ma: "cookie_expires",
                ab: "cookie_flags",
                ic: "cookie_name",
                Lc: "cookie_path",
                Ra: "cookie_prefix",
                jc: "cookie_update",
                kc: "country",
                ra: "currency",
                Zd: "customer_lifetime_value",
                Mc: "custom_map",
                Qg: "gcldc",
                Jm: "dclid",
                Cj: "debug_mode",
                X: "developer_id",
                Dj: "disable_merchant_reported_purchases",
                Nc: "dc_custom_params",
                Ej: "dc_natural_search",
                Rg: "dynamic_event_settings",
                Sg: "affiliation",
                ae: "checkout_option",
                kf: "checkout_step",
                Tg: "coupon",
                Oc: "item_list_name",
                lf: "list_name",
                Fj: "promotions",
                Pc: "shipping",
                nf: "tax",
                be: "engagement_time_msec",
                ce: "enhanced_client_id",
                de: "enhanced_conversions",
                Ug: "enhanced_conversions_automatic_settings",
                ee: "estimated_delivery_date",
                pf: "euid_logged_in_state",
                Qc: "event_callback",
                Gj: "event_category",
                nb: "event_developer_id_string",
                Hj: "event_label",
                Vg: "event",
                fe: "event_settings",
                he: "event_timeout",
                Ij: "description",
                Jj: "fatal",
                Kj: "experiments",
                qf: "firebase_id",
                Rc: "first_party_collection",
                ie: "_x_20",
                cb: "_x_19",
                Wg: "fledge",
                Xg: "flight_error_code",
                Yg: "flight_error_message",
                Zg: "fl_activity_category",
                ah: "fl_activity_group",
                rf: "fl_advertiser_id",
                bh: "fl_ar_dedupe",
                tf: "match_id",
                eh: "fl_random_number",
                fh: "tran",
                gh: "u",
                je: "gac_gclid",
                mc: "gac_wbraid",
                hh: "gac_wbraid_multiple_conversions",
                ih: "ga_restrict_domain",
                jh: "ga_temp_client_id",
                ke: "gdpr_applies",
                kh: "geo_granularity",
                ob: "value_callback",
                eb: "value_key",
                Km: "google_ono",
                Db: "google_signals",
                lh: "google_tld",
                me: "groups",
                mh: "gsa_experiment_id",
                nh: "iframe_state",
                Sc: "ignore_referrer",
                uf: "internal_traffic_results",
                qb: "is_legacy_converted",
                rb: "is_legacy_loaded",
                ne: "is_passthrough",
                oe: "_lps",
                Ga: "language",
                vf: "legacy_developer_id_string",
                Ha: "linker",
                Tc: "accept_incoming",
                Eb: "decorate_forms",
                R: "domains",
                nc: "url_position",
                oh: "method",
                Lj: "name",
                Uc: "new_customer",
                ph: "non_interaction",
                Mj: "optimize_id",
                Nj: "page_hostname",
                Vc: "page_path",
                Ia: "page_referrer",
                sb: "page_title",
                qh: "passengers",
                rh: "phone_conversion_callback",
                Oj: "phone_conversion_country_code",
                sh: "phone_conversion_css_class",
                Pj: "phone_conversion_ids",
                th: "phone_conversion_number",
                uh: "phone_conversion_options",
                wf: "_protected_audience_enabled",
                Wc: "quantity",
                pe: "redact_device_info",
                xf: "referral_exclusion_definition",
                Fb: "restricted_data_processing",
                Qj: "retoken",
                Rj: "sample_rate",
                yf: "screen_name",
                tb: "screen_resolution",
                Sj: "search_term",
                Ja: "send_page_view",
                Gb: "send_to",
                Xc: "server_container_url",
                Yc: "session_duration",
                qe: "session_engaged",
                zf: "session_engaged_time",
                ub: "session_id",
                se: "session_number",
                Zc: "delivery_postal_code",
                Lm: "temporary_client_id",
                Af: "topmost_url",
                Tj: "tracking_id",
                Bf: "traffic_type",
                sa: "transaction_id",
                Hb: "transport_url",
                vh: "trip_type",
                Ib: "update",
                vb: "url_passthrough",
                ad: "_user_agent_architecture",
                bd: "_user_agent_bitness",
                dd: "_user_agent_full_version_list",
                ed: "_user_agent_mobile",
                fd: "_user_agent_model",
                gd: "_user_agent_platform",
                hd: "_user_agent_platform_version",
                jd: "_user_agent_wow64",
                Aa: "user_data",
                wh: "user_data_auto_latency",
                xh: "user_data_auto_meta",
                yh: "user_data_auto_multi",
                zh: "user_data_auto_selectors",
                Ah: "user_data_auto_status",
                ue: "user_data_mode",
                ve: "user_data_settings",
                Na: "user_id",
                Sa: "user_properties",
                Bh: "_user_region",
                Ch: "us_privacy_string",
                ba: "value",
                Dh: "wbraid_multiple_conversions",
                Jh: "_host_name",
                Kh: "_in_page_command",
                Lh: "_is_passthrough_cid",
                sc: "non_personalized_ads",
                pd: "_sst_parameters",
                Ya: "conversion_label",
                za: "page_location",
                pb: "global_developer_id_string",
                te: "tc_privacy_string"
            }
        },
        ge = {},
        he = Object.freeze((ge[K.g.ja] = 1, ge[K.g.hf] =
            1, ge[K.g.Td] = 1, ge[K.g.Xa] = 1, ge[K.g.W] = 1, ge[K.g.Za] = 1, ge[K.g.Ma] = 1, ge[K.g.ab] = 1, ge[K.g.ic] = 1, ge[K.g.Lc] = 1, ge[K.g.Ra] = 1, ge[K.g.jc] = 1, ge[K.g.Mc] = 1, ge[K.g.X] = 1, ge[K.g.Rg] = 1, ge[K.g.Qc] = 1, ge[K.g.fe] = 1, ge[K.g.he] = 1, ge[K.g.Rc] = 1, ge[K.g.ih] = 1, ge[K.g.Db] = 1, ge[K.g.lh] = 1, ge[K.g.me] = 1, ge[K.g.uf] = 1, ge[K.g.qb] = 1, ge[K.g.rb] = 1, ge[K.g.Ha] = 1, ge[K.g.xf] = 1, ge[K.g.Fb] = 1, ge[K.g.Ja] = 1, ge[K.g.Gb] = 1, ge[K.g.Xc] = 1, ge[K.g.Yc] = 1, ge[K.g.zf] = 1, ge[K.g.Zc] = 1, ge[K.g.Hb] = 1, ge[K.g.Ib] = 1, ge[K.g.ve] = 1, ge[K.g.Sa] = 1, ge[K.g.pd] = 1, ge));
    Object.freeze([K.g.za, K.g.Ia, K.g.sb, K.g.Ga, K.g.yf, K.g.Na, K.g.qf, K.g.Aj]);
    var ie = {},
        je = Object.freeze((ie[K.g.ij] = 1, ie[K.g.jj] = 1, ie[K.g.kj] = 1, ie[K.g.lj] = 1, ie[K.g.mj] = 1, ie[K.g.oj] = 1, ie[K.g.pj] = 1, ie[K.g.qj] = 1, ie[K.g.sj] = 1, ie[K.g.Sd] = 1, ie)),
        ke = {},
        le = Object.freeze((ke[K.g.Lg] = 1, ke[K.g.Mg] = 1, ke[K.g.Xb] = 1, ke[K.g.Yb] = 1, ke[K.g.Ng] = 1, ke[K.g.Ab] = 1, ke[K.g.Zb] = 1, ke[K.g.Va] = 1, ke[K.g.jb] = 1, ke[K.g.Wa] = 1, ke[K.g.na] = 1, ke[K.g.ac] = 1, ke[K.g.Ca] = 1, ke[K.g.Og] = 1, ke)),
        me = Object.freeze([K.g.ja, K.g.Xa, K.g.jc, K.g.Rc, K.g.Sc, K.g.Ja, K.g.Ib]),
        ne = Object.freeze([].concat(me)),
        oe = Object.freeze([K.g.Ma, K.g.he,
            K.g.Yc, K.g.zf, K.g.be
        ]),
        pe = Object.freeze([].concat(oe)),
        qe = {},
        re = (qe[K.g.F] = "1", qe[K.g.O] = "2", qe[K.g.M] = "3", qe[K.g.ya] = "4", qe),
        se = {},
        te = Object.freeze((se[K.g.ja] = 1, se[K.g.Td] = 1, se[K.g.Da] = 1, se[K.g.Bb] = 1, se[K.g.jf] = 1, se[K.g.Ud] = 1, se[K.g.Vd] = 1, se[K.g.Wd] = 1, se[K.g.W] = 1, se[K.g.Xd] = 1, se[K.g.Qa] = 1, se[K.g.Ea] = 1, se[K.g.Za] = 1, se[K.g.Ma] = 1, se[K.g.ab] = 1, se[K.g.Ra] = 1, se[K.g.ra] = 1, se[K.g.Zd] = 1, se[K.g.X] = 1, se[K.g.Dj] = 1, se[K.g.de] = 1, se[K.g.ee] = 1, se[K.g.qf] = 1, se[K.g.Rc] = 1, se[K.g.qb] = 1, se[K.g.rb] = 1, se[K.g.Ga] = 1, se[K.g.Uc] =
            1, se[K.g.za] = 1, se[K.g.Ia] = 1, se[K.g.rh] = 1, se[K.g.sh] = 1, se[K.g.th] = 1, se[K.g.uh] = 1, se[K.g.Fb] = 1, se[K.g.Ja] = 1, se[K.g.Gb] = 1, se[K.g.Xc] = 1, se[K.g.Zc] = 1, se[K.g.sa] = 1, se[K.g.Hb] = 1, se[K.g.Ib] = 1, se[K.g.vb] = 1, se[K.g.Aa] = 1, se[K.g.Na] = 1, se[K.g.ba] = 1, se)),
        ue = {},
        ve = Object.freeze((ue[K.g.dj] = "s", ue[K.g.fj] = "y", ue[K.g.cj] = "p", ue[K.g.ej] = "h", ue[K.g.Kg] = "a", ue[K.g.bj] = "m", ue));
    Object.freeze(K.g);
    var we = {},
        xe = E.google_tag_manager = E.google_tag_manager || {},
        ye = Math.random();
    we.Gf = "41o0";
    we.od = Number("0") || 0;
    we.aa = "dataLayer";
    we.Zi = "ChAIgNnirQYQ/aaz6/2rkvQbEiQA1nw8c7A0Rt47pCzy+Iaekp2AOWKuhhleBYyc9TiBz57QavcaAjtG";
    var ze = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        Ae = {
            __paused: 1,
            __tg: 1
        },
        Be;
    for (Be in ze) ze.hasOwnProperty(Be) && (Ae[Be] = 1);
    var Ce = Ga(""),
        De, Ee = !1;
    De = Ee;
    var Fe, Ge = !1;
    Fe = Ge;
    var He, Ie = !1;
    He = Ie;
    we.Cc = "www.googletagmanager.com";
    var Je = "" + we.Cc + (De ? "/gtag/js" : "/gtm.js"),
        Ke = null,
        Le = null,
        Me = {},
        Ne = {},
        Oe = function() {
            var a = xe.sequence || 1;
            xe.sequence = a + 1;
            return a
        };
    we.Yi = "";
    var Pe = "";
    we.Ce = Pe;
    var Qe = new function() {
        this.h = "";
        this.s = !1;
        this.J = this.K = this.C = ""
    };

    function Re(a) {
        for (var b = {}, c = ia(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    }
    var Se = new Ca,
        Te = {},
        Ue = {},
        Xe = {
            name: we.aa,
            set: function(a, b) {
                z(Ra(a, b), Te);
                Ve()
            },
            get: function(a) {
                return We(a, 2)
            },
            reset: function() {
                Se = new Ca;
                Te = {};
                Ve()
            }
        },
        We = function(a, b) {
            return 2 != b ? Se.get(a) : Ye(a)
        },
        Ye = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Te, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Ze = function(a, b) {
            Ue.hasOwnProperty(a) || (Se.set(a, b), z(Ra(a, b), Te), Ve())
        },
        Ve = function(a) {
            k(Ue, function(b, c) {
                Se.set(b, c);
                z(Ra(b), Te);
                z(Ra(b,
                    c), Te);
                a && delete Ue[b]
            })
        },
        $e = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Ye(a) : Se.get(a);
            "array" === Wa(d) || "object" === Wa(d) ? c = z(d) : c = d;
            return c
        };
    var df = [];

    function ef(a) {
        switch (a) {
            case 24:
                return 3;
            case 45:
                return 14;
            case 55:
                return 11;
            case 56:
                return 12;
            case 60:
                return 13;
            case 57:
                return 15;
            case 96:
                return 16;
            case 100:
                return 17
        }
    }

    function N(a) {
        df[a] = !0;
        var b = ef(a);
        b && (ed[b] = !0)
    }
    N(5);
    N(6);
    N(7);
    N(9);
    N(10);
    N(14);
    N(11);
    N(15);
    N(18);
    N(19);
    N(20);
    N(22);
    N(23);
    N(26);
    N(28);
    N(29);
    N(30);
    N(32);
    N(33);
    N(37);
    N(39);
    N(42);
    N(43);
    N(44);
    N(46);
    N(47);
    N(48);
    N(50);
    N(51);
    N(52);
    N(57);
    N(59);
    N(62);
    N(63);
    N(64);
    N(69);

    N(75);
    N(78);
    N(81);
    N(82);
    N(84);
    N(85);
    N(90);
    N(91);
    N(92);
    N(93);
    N(94);
    N(101);
    N(100);

    function P(a) {
        return !!df[a]
    }
    var jf = function(a) {
        gb("HEALTH", a)
    };
    var kf;
    try {
        kf = JSON.parse(eb("eyIwIjoiSU4iLCIxIjoiSU4tVEciLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
    } catch (a) {
        J(123), jf(2), kf = {}
    }
    var lf = function() {
            return kf["0"] || ""
        },
        mf = function() {
            var a = !1;
            return a
        },
        nf = function() {
            var a = "";
            return a
        },
        of = function() {
            var a = !1;
            return a
        },
        pf = function() {
            var a = "";
            return a
        };
    var qf = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var rf = function(a) {
        rf[" "](a);
        return a
    };
    rf[" "] = function() {};
    var tf = function() {
        var a = sf,
            b = "Yf";
        if (a.Yf && a.hasOwnProperty(b)) return a.Yf;
        var c = new a;
        return a.Yf = c
    };
    var sf = function() {
        var a = {};
        this.h = function() {
            var b = qf.h,
                c = qf.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.s = function() {
            a[qf.h] = !0
        }
    };
    var uf = !1,
        vf = !1,
        wf = {},
        xf = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function yf() {
        var a = Sb("google_tag_data", {});
        return a.ics = a.ics || new zf
    }
    var zf = function() {
        this.entries = {};
        this.cps = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    zf.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        gb("TAGGING", 19);
        void 0 == b ? gb("TAGGING", 18) : Af(this, a, "granted" === b, c, d, e, f)
    };
    zf.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++) Af(this, a[c], void 0, void 0, "", "", b)
    };
    var Af = function(a, b, c, d, e, f, h) {
        var l = a.entries,
            m = l[b] || {},
            n = m.region,
            p = d && g(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Bf(p, n, e, f)) {
            var q = !!(h && 0 < h && void 0 === m.update),
                r = {
                    region: p,
                    declare_region: m.declare_region,
                    implicit: m.implicit,
                    default: void 0 !== c ? c : m.default,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
            if ("" !== e || !1 !== m.default) l[b] = r;
            q && E.setTimeout(function() {
                l[b] === r && r.quiet && (gb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners())
            }, h)
        }
    };
    aa = zf.prototype;
    aa.clearTimeout = function(a, b) {
        var c = [a],
            d;
        for (d in wf) wf.hasOwnProperty(d) && wf[d] === a && c.push(d);
        var e = this.entries[a] || {},
            f = this.getConsentState(a);
        if (e.quiet) {
            e.quiet = !1;
            for (var h = ia(c), l = h.next(); !l.done; l = h.next()) Cf(this, l.value)
        } else if (void 0 !== b && f !== b)
            for (var m = ia(c), n = m.next(); !n.done; n = m.next()) Cf(this, n.value)
    };
    aa.update = function(a, b) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a),
                d = this.entries;
            (d[a] = d[a] || {}).update = "granted" === b;
            this.clearTimeout(a, c)
        }
    };
    aa.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            h = f[a] || {},
            l = h.declare_region,
            m = c && g(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Bf(m, l, d, e)) {
            var n = {
                region: h.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: h.implicit,
                default: h.default,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare) f[a] = n
        }
    };
    aa.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    };
    aa.getConsentState = function(a) {
        var b = this.entries,
            c = b[a] || {},
            d = c.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d) return d ? 1 : 2;
        if (wf.hasOwnProperty(a)) {
            var e = b[wf[a]] || {};
            d = e.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d) return d ? 1 : 2;
        if (fd(3)) {
            d = c.implicit;
            if (void 0 !== d) return d ? 3 : 4;
            if (xf.hasOwnProperty(a)) return gb("TAGGING", 22), xf[a] ? 3 : 4
        }
        return 0
    };
    aa.setCps = function(a, b, c, d, e) {
        var f;
        a: {
            var h = this.cps,
                l, m = h[a] || {},
                n = m.region,
                p = c && g(c) ? c.toUpperCase() : void 0;l = d.toUpperCase();
            if (Bf(p, n, l, e.toUpperCase())) {
                var q = {
                    enabled: "granted" === b,
                    region: p
                };
                if ("" !== l || !1 !== m.enabled) {
                    h[a] = q;
                    f = !0;
                    break a
                }
            }
            f = !1
        }
        f && (this.usedSetCps = !0)
    };
    aa.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            Mk: b
        })
    };
    var Cf = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            za(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.zi = !0)
        }
    };
    zf.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.zi) {
                d.zi = !1;
                try {
                    d.Mk({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };

    function Bf(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }
    var Df = function(a) {
            var b = yf();
            b.accessedAny = !0;
            return (g(a) ? [a] : a).every(function(c) {
                switch (b.getConsentState(c)) {
                    case 1:
                    case 3:
                        return !0;
                    case 2:
                    case 4:
                        return !1;
                    default:
                        return !0
                }
            })
        },
        Ef = function(a) {
            var b = yf();
            b.accessedAny = !0;
            return b.getConsentState(a)
        },
        Ff = function() {
            var a = {},
                b = yf().cps,
                c;
            for (c in b) b.hasOwnProperty(c) && (a[c] = {
                enabled: b[c].enabled,
                region: b[c].region
            });
            for (var d = {}, e = ia(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
                var h = f.value;
                d[h] = a[h].enabled
            }
            return d
        },
        Gf = function(a) {
            var b = yf();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Hf = function() {
            if (!tf().h()) return !1;
            var a = yf();
            a.accessedAny = !0;
            return a.active
        },
        If = function(a, b) {
            yf().addListener(a, b)
        },
        Jf = function(a, b) {
            yf().notifyListeners(a, b)
        },
        Of = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Gf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                If(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Pf = function(a, b) {
            function c() {
                for (var l = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    Df(n) && !f[n] && l.push(n)
                }
                return l
            }

            function d(l) {
                for (var m =
                        0; m < l.length; m++) f[l[m]] = !0
            }
            var e = g(b) ? [b] : b,
                f = {},
                h = c();
            h.length !== e.length && (d(h), If(e, function(l) {
                function m(q) {
                    0 !== q.length && (d(q), l.consentTypes = q, a(l))
                }
                var n = c();
                if (0 !== n.length) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length ? m(n) : E.setTimeout(function() {
                        m(c())
                    }, 500)
                }
            }))
        };

    function Qf() {}

    function Rf() {};
    var Sf = [K.g.F, K.g.O, K.g.M, K.g.ya],
        Tf = function(a) {
            for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    zd: 0
                }; d.zd < c.length; d = {
                    zd: d.zd
                }, ++d.zd) k(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Wb) {
                        var l = c[e.zd],
                            m = lf(),
                            n = kf["1"] || "";
                        vf = !0;
                        uf && gb("TAGGING", 20);
                        yf().declare(f, h, l, m, n)
                    }
                }
            }(d))
        },
        Uf = function(a) {
            var b = a[K.g.Wb];
            b && J(40);
            var c = a[K.g.Ag];
            c && J(41);
            for (var d = za(b) ? b : [b], e = {
                    Ad: 0
                }; e.Ad < d.length; e = {
                    Ad: e.Ad
                }, ++e.Ad) k(a, function(f) {
                return function(h, l) {
                    if (h !== K.g.Wb && h !== K.g.Ag) {
                        var m = d[f.Ad],
                            n = Number(c),
                            p = lf(),
                            q = kf["1"] || "";
                        uf = !0;
                        vf && gb("TAGGING", 20);
                        yf().default(h, l, m, p, q, n)
                    }
                }
            }(e))
        },
        Vf = function(a, b) {
            k(a, function(c, d) {
                uf = !0;
                vf && gb("TAGGING", 20);
                yf().update(c, d)
            });
            Jf(b.eventId, b.priorityId)
        },
        Wf = function(a) {
            for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
                    Bd: 0
                }; d.Bd < c.length; d = {
                    Bd: d.Bd
                }, ++d.Bd) k(a, function(e) {
                return function(f, h) {
                    if (f !== K.g.Wb) {
                        var l = c[e.Bd],
                            m = lf(),
                            n = kf["1"] || "";
                        yf().setCps(f, h, l, m, n)
                    }
                }
            }(d))
        },
        Q = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return Df(b)
            })
        },
        Xf = function(a,
            b) {
            Pf(a, b)
        },
        Yf = function(a, b) {
            Of(a, b)
        },
        Zf = function() {
            var a = [K.g.F, K.g.ya, K.g.M];
            yf().waitForUpdate(a, 500)
        },
        $f = function(a) {
            for (var b = ia(a), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                yf().clearTimeout(d, void 0)
            }
            Jf()
        };
    var ag = function() {
        function a(b) {
            xe.pscdl = b
        }
        if (void 0 === xe.pscdl) try {
            "cookieDeprecationLabel" in Qb ? (a("pending"), Qb.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
        } catch (b) {
            a("error")
        }
    };
    var bg = /[A-Z]+/,
        cg = /\s/,
        dg = function(a, b) {
            if (g(a)) {
                a = Ia(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (bg.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var h = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = h(e);
                            if ("DC" === d && 2 === f.length) {
                                var l = h(f[1]);
                                2 === l.length && (f[1] = l[0], f.push(l[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || cg.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            Z: d + "-" + f[0],
                            N: f
                        }
                    }
                }
            }
        },
        fg = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = dg(a[d], b);
                e && (c[e.id] = e)
            }
            eg(c);
            var f = [];
            k(c, function(h, l) {
                f.push(l)
            });
            return f
        };

    function eg(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.N[1] && b.push(d.Z)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var gg = function(a) {
            var b = String(a[mc.ka] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        hg = 0 <= E.location.search.indexOf("?gtm_latency=") || 0 <= E.location.search.indexOf("&gtm_latency=");
    var jg = function(a) {
            var b = ig();
            b.pending || (b.pending = []);
            Aa(b.pending, function(c) {
                return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
            }) || b.pending.push({
                target: a,
                onLoad: void 0
            })
        },
        kg = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        ig = function() {
            var a = Sb("google_tag_data", {}),
                b = a.tidr;
            b || (b = new kg, a.tidr = b);
            return b
        };
    var lg = {},
        mg = !1,
        ng = {
            ctid: "GTM-N3HHNPX",
            Ge: "",
            xi: "GTM-N3HHNPX",
            yi: "GTM-N3HHNPX"
        };
    lg.ld = Ga("");
    var qg = function() {
            var a = og();
            return mg ? a.map(pg) : a
        },
        sg = function() {
            var a = rg();
            return mg ? a.map(pg) : a
        },
        ug = function() {
            return tg(ng.ctid)
        },
        vg = function() {
            return tg(ng.Ge || "_" + ng.ctid)
        },
        og = function() {
            return ng.xi ? ng.xi.split("|") : [ng.ctid]
        },
        rg = function() {
            return ng.yi ? ng.yi.split("|") : []
        },
        wg = function(a) {
            var b = ig();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        tg = function(a) {
            return mg ? pg(a) : a
        },
        pg = function(a) {
            return "siloed_" + a
        },
        xg = function(a) {
            a = String(a);
            return mg && 0 === a.indexOf("siloed_") ?
                a.substring(7) : a
        },
        yg = function() {
            var a = !1;
            if (a) {
                var b = ig();
                if (b.siloed) {
                    for (var c = [], d = og(), e = rg(), f = {}, h = 0; h < b.siloed.length; f = {
                            He: void 0
                        }, h++) f.He = b.siloed[h], !mg && Aa(f.He.isDestination ? e : d, function(l) {
                        return function(m) {
                            return m === l.He.ctid
                        }
                    }(f)) ? mg = !0 : c.push(f.He);
                    b.siloed = c
                }
            }
        };

    function zg() {
        var a = ig();
        if (a.pending) {
            for (var b, c = [], d = !1, e = qg(), f = sg(), h = {}, l = 0; l < a.pending.length; h = {
                    Md: void 0
                }, l++) h.Md = a.pending[l], Aa(h.Md.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Md.target.ctid
                }
            }(h)) ? d || (b = h.Md.onLoad, d = !0) : c.push(h.Md);
            a.pending = c;
            if (b) try {
                b(vg())
            } catch (m) {}
        }
    }
    var Ag = function() {
            for (var a = ig(), b = qg(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = qg(), d.destinations = sg()) : a.container[b[c]] = {
                    state: 2,
                    containers: qg(),
                    destinations: sg()
                }
            }
            for (var e = sg(), f = 0; f < e.length; f++) {
                var h = a.destination[e[f]];
                h && 0 === h.state && J(93);
                h ? (h.state = 2, h.containers = qg(), h.destinations = sg()) : a.destination[e[f]] = {
                    state: 2,
                    containers: qg(),
                    destinations: sg()
                }
            }
            a.canonical[vg()] = {};
            zg()
        },
        Bg = function(a) {
            return !!ig().container[a]
        },
        Cg = function() {
            return {
                ctid: ug(),
                isDestination: lg.ld
            }
        };

    function Dg(a) {
        var b = ig();
        (b.siloed = b.siloed || []).push(a)
    }
    var Eg = function() {
            var a = ig().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Fg = function() {
            var a = {};
            k(ig().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        },
        Gg = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var Hg = {
            sampleRate: "0.005000",
            Ui: "",
            Ti: Number("5"),
            yn: Number("")
        },
        Ig = [];

    function Jg(a) {
        Ig.push(a)
    }
    var Kg = !1,
        Lg;
    if (!(Lg = hg)) {
        var Mg = Math.random(),
            Ng = Hg.sampleRate;
        Lg = Mg < Number(Ng)
    }
    var Og = Lg,
        Pg = "/a?id=" + ng.ctid,
        Qg = "https://www.googletagmanager.com" + Pg,
        Rg = void 0,
        Sg = {},
        Tg = void 0,
        Ug = new function() {
            var a = 5;
            0 < Hg.Ti && (a = Hg.Ti);
            this.h = 0;
            this.C = [];
            this.s = a
        },
        Vg = 1E3;

    function Wg(a, b) {
        var c = Rg;
        if (void 0 === c)
            if (b) c = Oe();
            else return "";
        for (var d = [Qe.s ? "" + Qe.C + Pg : Qg], e = ia(Ig), f = e.next(); !f.done; f = e.next())
            for (var h = f.value, l = h({
                    eventId: c,
                    Vb: !!a,
                    Ii: function() {
                        Kg = !0
                    }
                }), m = ia(l), n = m.next(); !n.done; n = m.next()) {
                var p = ia(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }

    function Xg() {
        Tg && (E.clearTimeout(Tg), Tg = void 0);
        if (void 0 !== Rg && Yg) {
            var a;
            (a = Sg[Rg]) || (a = Ug.h < Ug.s ? !1 : 1E3 > La() - Ug.C[Ug.h % Ug.s]);
            if (a || 0 >= Vg--) J(1), Sg[Rg] = !0;
            else {
                var b = Ug.h++ % Ug.s;
                Ug.C[b] = La();
                var c = Wg(!0);
                $b(c);
                if (Kg) {
                    var d = c.replace("/a?", "/td?");
                    $b(d)
                }
                Yg = Kg = !1
            }
        }
    }
    var Yg = !1;

    function Zg(a) {
        Sg[a] || (a !== Rg && (Xg(), Rg = a), Yg = !0, Tg || (Tg = E.setTimeout(Xg, 500)), 2022 <= Wg().length && Xg())
    }
    var $g = Ba();

    function ah() {
        $g = Ba()
    }

    function bh() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", $g]
        ]
    };
    var ch = "",
        dh = [];

    function eh(a) {
        var b = [];
        ch && b.push(["dl", encodeURIComponent(ch)]);
        0 < dh.length && b.push(["tdp", dh.join(".")]);
        a.Vb && (ch = "", dh.length = 0, b.length && a.Ii());
        return b
    };
    var fh = [];

    function gh(a) {
        if (!fh.length) return [];
        var b = [
            ["tdc", fh.join("!")]
        ];
        a.Vb && (a.Ii(), fh.length = 0);
        return b
    };
    var hh = /:[0-9]+$/,
        ih = /^\d+\.fls\.doubleclick\.net$/,
        jh = function(a, b, c) {
            for (var d = ia(a.split("&")), e = d.next(); !e.done; e = d.next()) {
                var f = ia(e.value.split("=")),
                    h = f.next().value,
                    l = ja(f);
                if (decodeURIComponent(h.replace(/\+/g, " ")) === b) {
                    var m = l.join("=");
                    return c ? m : decodeURIComponent(m.replace(/\+/g, " "))
                }
            }
        },
        mh = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = kh(a.protocol) || kh(E.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) ||
                ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || E.location.hostname).replace(hh, "").toLowerCase());
            return lh(a, b, c, d, e)
        },
        lh = function(a, b, c, d, e) {
            var f, h = kh(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = nh(a);
                    break;
                case "protocol":
                    f = h;
                    break;
                case "host":
                    f = a.hostname.replace(hh, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === h ? 80 : "https" ===
                        h ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || gb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = jh(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        kh = function(a) {
            return a ? a.replace(":", "").toLowerCase() :
                ""
        },
        nh = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        oh = {},
        ph = 0,
        rh = function(a) {
            if (fd(17)) {
                var b = oh[a];
                b || (b = qh(a), 5 > ph && (oh[a] = b, ph++));
                return b
            }
            return qh(a)
        },
        qh = function(a) {
            var b = F.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || gb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(hh, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        sh = function(a) {
            function b(n) {
                var p =
                    n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = rh(a),
                f = a.split(/[?#]/)[0],
                h = e.search,
                l = e.hash;
            "?" === h[0] && (h = h.substring(1));
            "#" === l[0] && (l = l.substring(1));
            h = c(h);
            l = c(l);
            "" !== h && (h = "?" + h);
            "" !== l && (l = "#" + l);
            var m = "" + f + h + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        th = function(a) {
            var b = rh(E.location.href),
                c = mh(b,
                    "host", !1);
            if (c && c.match(ih)) {
                var d = mh(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var uh = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        vh = {},
        Bh = Object.freeze((vh[K.g.Ja] = !0, vh)),
        Ch = 0 <= F.location.search.indexOf("?gtm_diagnostics=") || 0 <= F.location.search.indexOf("&gtm_diagnostics="),
        Eh = function(a, b, c) {
            if (Og && "config" === a && !(1 < dg(b).N.length)) {
                var d, e = Sb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = z(c.J);
                z(c.h, f);
                var h = [],
                    l;
                for (l in d) {
                    var m = Dh(d[l], f);
                    m.length && (Ch && console.log(m), h.push(l))
                }
                h.length && (h.length && Og && fh.push(b + "*" + h.join(".")), gb("TAGGING", uh[F.readyState] ||
                    14));
                d[b] = f
            }
        };

    function Fh(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Dh(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? Bh[q] : t
            },
            f;
        for (f in Fh(a, b)) {
            var h = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Wa(l) || "array" === Wa(l),
                p = "object" === Wa(m) || "array" === Wa(m);
            if (n && p) Dh(l, m, c, h);
            else if (n || p || l !== m) c[h] = !0
        }
        return Object.keys(c)
    };
    var Gh = function(a, b, c, d, e, f, h, l, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.K = d;
            this.C = e;
            this.J = f;
            this.s = h;
            this.eventMetadata = l;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        Hh = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.h);
                    c.push(a.K);
                    c.push(a.C);
                    c.push(a.J);
                    c.push(a.s);
                    break;
                case 2:
                    c.push(a.h);
                    break;
                case 1:
                    c.push(a.K);
                    c.push(a.C);
                    c.push(a.J);
                    c.push(a.s);
                    break;
                case 4:
                    c.push(a.h), c.push(a.K), c.push(a.C), c.push(a.J)
            }
            return c
        },
        U = function(a, b, c, d) {
            for (var e = ia(Hh(a, void 0 === d ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var h = f.value;
                if (void 0 !== h[b]) return h[b]
            }
            return c
        },
        Ih = function(a) {
            for (var b = {}, c = Hh(a, 4), d = ia(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), h = ia(f), l = h.next(); !l.done; l = h.next()) b[l.value] = 1;
            return Object.keys(b)
        },
        Jh = function(a, b, c) {
            function d(n) {
                Za(n) && k(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                h = Hh(a, void 0 === c ? 3 : c);
            h.reverse();
            for (var l = ia(h), m = l.next(); !m.done; m = l.next()) d(m.value[b]);
            return f ? e : void 0
        },
        Kh = function(a) {
            for (var b = [K.g.Hc,
                    K.g.Dc, K.g.Ec, K.g.Fc, K.g.Gc, K.g.Ic, K.g.Jc
                ], c = Hh(a, 3), d = ia(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, h = {}, l = !1, m = ia(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    void 0 !== f[p] && (h[p] = f[p], l = !0)
                }
                var q = l ? h : void 0;
                if (q) return q
            }
            return {}
        },
        Lh = function(a, b) {
            this.xe = a;
            this.ye = b;
            this.C = {};
            this.xb = {};
            this.h = {};
            this.J = {};
            this.qc = {};
            this.wb = {};
            this.s = {};
            this.Fa = function() {};
            this.T = function() {};
            this.K = !1
        },
        Mh = function(a, b) {
            a.C = b;
            return a
        },
        Nh = function(a, b) {
            a.xb = b;
            return a
        },
        Oh = function(a, b) {
            a.h = b;
            return a
        },
        Ph = function(a, b) {
            a.J = b;
            return a
        },
        Qh = function(a, b) {
            a.qc = b;
            return a
        },
        Rh = function(a, b) {
            a.wb = b;
            return a
        },
        Sh = function(a, b) {
            a.s = b || {};
            return a
        },
        Th = function(a, b) {
            a.Fa = b;
            return a
        },
        Uh = function(a, b) {
            a.T = b;
            return a
        },
        Vh = function(a, b) {
            a.K = b;
            return a
        },
        Wh = function(a) {
            return new Gh(a.xe, a.ye, a.C, a.xb, a.h, a.J, a.wb, a.s, a.Fa, a.T, a.K)
        };
    var Xh = {};

    function Yh(a, b, c) {
        Og && void 0 !== a && (Xh[a] = Xh[a] || [], Xh[a].push(c + b), Zg(a))
    }

    function Zh(a) {
        var b = a.eventId,
            c = a.Vb,
            d = [],
            e = Xh[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete Xh[b];
        return d
    };
    var ai = function(a, b, c, d) {
            var e = dg(c, d.isGtmEvent);
            e && $h.push("event", [b, a], e, d)
        },
        bi = function(a, b, c, d) {
            var e = dg(c, d.isGtmEvent);
            e && $h.push("get", [a, b], e, d)
        },
        ci = function() {
            this.status = 1;
            this.J = {};
            this.h = {};
            this.K = {};
            this.T = null;
            this.C = {};
            this.s = !1
        },
        di = function(a, b, c, d) {
            var e = La();
            this.type = a;
            this.C = e;
            this.h = b;
            this.s = c;
            this.messageContext = d
        },
        ei = function() {
            this.s = {};
            this.C = {};
            this.h = []
        },
        fi = function(a, b) {
            var c = b.Z;
            return a.s[c] = a.s[c] || new ci
        },
        gi = function(a, b, c, d) {
            if (d.h) {
                var e = fi(a, d.h),
                    f = e.T;
                if (f) {
                    var h =
                        z(c),
                        l = z(e.J[d.h.id]),
                        m = z(e.C),
                        n = z(e.h),
                        p = z(a.C),
                        q = {};
                    if (Og) try {
                        q = z(Te)
                    } catch (v) {
                        J(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Yh(d.messageContext.eventId, r, v)
                        },
                        u = Wh(Vh(Uh(Th(Sh(Qh(Ph(Rh(Oh(Nh(Mh(new Lh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Yh(d.messageContext.eventId, r, "1"), Eh(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        Yh(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    ei.prototype.register = function(a, b, c) {
        var d = fi(this, a);
        3 !== d.status && (d.T = b, d.status = 3, c && (z(d.h, c), d.h = c), this.flush())
    };
    ei.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === fi(this, c).status && (fi(this, c).status = 2, this.push("require", [{}], c, {})), fi(this, c).s && (d.deferrable = !1));
        this.h.push(new di(a, c, b, d));
        d.deferrable || this.flush()
    };
    ei.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; e = {
                Kb: void 0,
                Qf: void 0
            }) {
            var f = this.h[0],
                h = f.h;
            if (f.messageContext.deferrable) !h || fi(this, h).s ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== fi(this, h).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.s[0], function(r, t) {
                            z(Ra(r, t), b.C)
                        });
                        break;
                    case "config":
                        var l = fi(this, h);
                        e.Kb = {};
                        k(f.s[0], function(r) {
                            return function(t, u) {
                                z(Ra(t, u), r.Kb)
                            }
                        }(e));
                        var m = !!e.Kb[K.g.Ib];
                        delete e.Kb[K.g.Ib];
                        var n = h.Z === h.id;
                        m || (n ? l.C = {} : l.J[h.id] = {});
                        l.s && m || gi(this, K.g.oa, e.Kb, f);
                        l.s = !0;
                        n ? z(e.Kb, l.C) : (z(e.Kb, l.J[h.id]), J(70));
                        d = !0;
                        break;
                    case "event":
                        e.Qf = {};
                        k(f.s[0], function(r) {
                            return function(t, u) {
                                z(Ra(t, u), r.Qf)
                            }
                        }(e));
                        gi(this, f.s[1], e.Qf, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[K.g.eb] = f.s[0], p[K.g.ob] = f.s[1], p);
                        gi(this, K.g.La, q, f)
                }
                this.h.shift();
                hi(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var hi = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = fi(a, b.h).K[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.s)
                        if (a.s.hasOwnProperty(e)) {
                            var f = a.s[e];
                            if (f && f.K)
                                for (var h = f.K[b.type] || [], l = 0; l < h.length; l++) h[l]()
                        }
        },
        ii = function(a, b) {
            var c = $h,
                d = z(b);
            z(fi(c, a).h, d);
            fi(c, a).h = d
        },
        $h = new ei;

    function ji(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var ki = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        li = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var mi = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function ni() {
        return ob ? !!vb && !!vb.platform : !1
    }

    function oi() {
        return yb("iPhone") && !yb("iPod") && !yb("iPad")
    }

    function pi() {
        oi() || yb("iPad") || yb("iPod")
    };
    Ab();
    zb() || yb("Trident") || yb("MSIE");
    yb("Edge");
    !yb("Gecko") || -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") || yb("Trident") || yb("MSIE") || yb("Edge"); - 1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") && yb("Mobile");
    ni() || yb("Macintosh");
    ni() || yb("Windows");
    (ni() ? "Linux" === vb.platform : yb("Linux")) || ni() || yb("CrOS");
    ni() || yb("Android");
    oi();
    yb("iPad");
    yb("iPod");
    pi();
    ub().toLowerCase().indexOf("kaios");
    var qi = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var h = a.charCodeAt(e - 1);
                if (38 == h || 63 == h) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        ri = /#|$/,
        si = function(a, b) {
            var c = a.search(ri),
                d = qi(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        ti = /[?&]($|#)/,
        ui = function(a, b, c) {
            for (var d, e = a.search(ri), f = 0, h, l = []; 0 <= (h = qi(a, f, b, e));) l.push(a.substring(f,
                h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(ti, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var vi = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        rf(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        wi = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function xi(a) {
        if (!a || !F.head) return null;
        var b = yi("META");
        F.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var zi = function(a) {
            if (E.top == E) return 0;
            if (void 0 === a ? 0 : a) {
                var b = E.location.ancestorOrigins;
                if (b) return b[b.length - 1] == E.location.origin ? 1 : 2
            }
            return vi(E.top) ? 1 : 2
        },
        yi = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Ai(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = yi("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var h = a.google_image_requests,
                        l = jb(h, e);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            mi(e, "load", f);
            mi(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Ci = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            wi(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Bi(c, b)
        },
        Bi = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else Ai(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Di = function() {};
    var Ei = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Fi = function(a, b) {
            b = void 0 === b ? {} : b;
            this.s = a;
            this.h = null;
            this.K = {};
            this.Fa = 0;
            var c;
            this.T = null != (c = b.qm) ? c : 500;
            var d;
            this.J = null != (d = b.nn) ? d : !1;
            this.C = null
        };
    ra(Fi, Di);
    var Hi = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Gi(a)
    };
    Fi.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.J
            },
            d = li(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.T && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.T));
        var f = function(h, l) {
            clearTimeout(e);
            h ? (c = h, c.internalErrorState = Ei(c), c.internalBlockOnErrors = b.J, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Ii(this, "addEventListener", f)
        } catch (h) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Fi.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ii(this, "removeEventListener", null, a.listenerId)
    };
    var Ki = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var h = e;
            if (0 === h) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Ji(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Ji(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Ji(a.purpose.legitimateInterests,
                b) && Ji(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Ji = function(a, b) {
            return !(!a || !a[b])
        },
        Ii = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.s.__tcfapi) {
                var e = a.s.__tcfapi;
                e(b, 2, c, d)
            } else if (Gi(a)) {
                Li(a);
                var f = ++a.Fa;
                a.K[f] = c;
                if (a.h) {
                    var h = {};
                    a.h.postMessage((h.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, h), "*")
                }
            } else c({}, !1)
        },
        Gi = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.s, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var h = c.parent;
                            if (h && h != c) {
                                f = h;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Li = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.K[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, mi(a.s, "message", a.C))
        },
        Mi = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Ei(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Ci({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Ni = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function Oi() {
        var a = xe.tcf || {};
        return xe.tcf = a
    }
    var Pi = function() {
            return new Fi(E, {
                qm: -1
            })
        },
        Vi = function() {
            var a = Oi(),
                b = Pi();
            Hi(b) && !Qi() && !Ri() && J(124);
            if (!a.active && Hi(b)) {
                Qi() && (a.active = !0, a.zb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, yf().active = !0, a.tcString = "tcunavailable");
                Zf();
                try {
                    b.addEventListener(function(c) {
                        if (0 !== c.internalErrorState) Si(a), $f([K.g.F, K.g.ya, K.g.M]), yf().active = !0;
                        else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, Ri() && (a.active = !0), !Ti(c) || Qi() || Ri()) {
                            a.tcfPolicyVersion =
                                c.tcfPolicyVersion;
                            var d;
                            if (!1 === c.gdprApplies) {
                                var e = {},
                                    f;
                                for (f in Ni) Ni.hasOwnProperty(f) && (e[f] = !0);
                                d = e;
                                b.removeEventListener(c)
                            } else if (Ti(c)) {
                                var h = {},
                                    l;
                                for (l in Ni)
                                    if (Ni.hasOwnProperty(l))
                                        if ("1" === l) {
                                            var m, n = c,
                                                p = {
                                                    Rk: !0
                                                };
                                            p = void 0 === p ? {} : p;
                                            m = Mi(n) ? !1 === n.gdprApplies ? !0 : "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p.Rk || "string" !== typeof n.tcString || !n.tcString.length ? !p.rn : Ki(n, "1", 0) : !1;
                                            h["1"] = m
                                        } else h[l] = Ki(c, l, Ni[l]);
                                d = h
                            }
                            if (d) {
                                a.tcString = c.tcString || "tcempty";
                                a.zb = d;
                                var q = {},
                                    r = (q[K.g.F] =
                                        a.zb["1"] ? "granted" : "denied", q);
                                !0 !== a.gdprApplies ? ($f([K.g.F, K.g.ya, K.g.M]), yf().active = !0) : (r[K.g.ya] = a.zb["3"] && a.zb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? r[K.g.M] = a.zb["1"] && a.zb["7"] ? "granted" : "denied" : $f([K.g.M]), Vf(r, {
                                    eventId: 0
                                }, {
                                    gdprApplies: a ? a.gdprApplies : void 0,
                                    tcString: Ui() || ""
                                }))
                            }
                        } else $f([K.g.F, K.g.ya, K.g.M])
                    })
                } catch (c) {
                    Si(a), $f([K.g.F, K.g.ya, K.g.M]), yf().active = !0
                }
            }
        };

    function Si(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Ti(a) {
        return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
    }
    var Qi = function() {
        return !0 === E.gtag_enable_tcf_support
    };

    function Ri() {
        return !0 === Oi().enableAdvertiserConsentMode
    }
    var Ui = function() {
            var a = Oi();
            if (a.active) return a.tcString
        },
        Wi = function() {
            var a = Oi();
            if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
        },
        Xi = function(a) {
            if (!Ni.hasOwnProperty(String(a))) return !0;
            var b = Oi();
            return b.active && b.zb ? !!b.zb[String(a)] : !0
        };
    var Yi = [K.g.F, K.g.O, K.g.M, K.g.ya],
        Zi = {},
        $i = (Zi[K.g.F] = 1, Zi[K.g.O] = 2, Zi);

    function aj(a) {
        if (void 0 === a) return 0;
        switch (U(a, K.g.ja)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var bj = function(a) {
            var b = aj(a);
            if (3 === b) return !1;
            switch (Ef(K.g.ya)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                    return !1;
                case 4:
                    return 2 === b;
                case 0:
                    return !0;
                default:
                    return !1
            }
        },
        cj = function() {
            return Hf() || !Df(K.g.F) || !Df(K.g.O)
        },
        dj = function() {
            var a = {},
                b;
            for (b in $i) $i.hasOwnProperty(b) && (a[$i[b]] = Ef(b));
            return "G1" + lc(a[1] || 0) + lc(a[2] || 0)
        },
        ej = {},
        fj = (ej[K.g.F] = 0, ej[K.g.O] = 1, ej[K.g.M] = 2, ej[K.g.ya] = 3, ej);

    function gj(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var hj = function(a) {
            for (var b = "1", c = 0; c < Yi.length; c++) {
                var d = b,
                    e, f = Yi[c],
                    h = wf[f];
                e = void 0 === h ? 0 : fj.hasOwnProperty(h) ? 12 | fj[h] : 8;
                var l = yf();
                l.accessedAny = !0;
                var m = l.entries[f] || {};
                e = e << 2 | gj(m.implicit);
                b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [gj(m.declare) << 4 | gj(m.default) << 2 | gj(m.update)])
            }
            var n = b,
                p;
            p = "" + (Hf() << 2 | aj(a));
            return n + p
        },
        ij = function() {
            if (!Df(K.g.M)) return "-";
            for (var a = Ff(), b = "", c = ia(Object.keys(ve)),
                    d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                !1 !== a[e] && (b += ve[e])
            }
            return "" === b ? "-" : b
        },
        jj = function() {
            return !1 !== kf["6"] || (Qi() || Ri()) && "1" === Wi() ? "1" : "0"
        },
        kj = function() {
            return (!1 !== kf["6"] ? !0 : !(!Qi() && !Ri()) && "1" === Wi()) || yf().usedSetCps || !Df(K.g.M)
        },
        lj = function() {
            var a = "0",
                b = "0",
                c;
            var d = Oi();
            c = d.active ? d.cmpId : void 0;
            "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c &
                63
            ]);
            var e = "0",
                f;
            var h = Oi();
            f = h.active ? h.tcfPolicyVersion : void 0;
            "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var l = 0;
            !1 !== kf["6"] && (l |= 1);
            "1" === Wi() && (l |= 2);
            Qi() && (l |= 4);
            var m;
            var n = Oi();
            m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            "1" === m && (l |= 8);
            yf().waitPeriodTimedOut && (l |= 16);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l]
        };
    var mj = function() {
        var a = !1;
        return a
    };
    var nj = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        oj = function(a, b) {
            var c = ng.ctid.split("-")[0].toUpperCase(),
                d = {};
            d.ctid = ng.ctid;
            d.fm = we.od;
            d.hm = we.Gf;
            d.Hl = lg.ld ? 2 : 1;
            d.ei = ng.Ge;
            d.ei !== a && (d.We = a);
            P(70) ? d.Li = 2 : P(71) && (d.Li = 1);
            De ? (d.Ue = nj[c], d.Ue || (d.Ue = 0)) : d.Ue = He ? 13 : 10;
            Fe ? d.ig = 1 : mj() ? d.ig = 2 : d.ig = 3;
            var e;
            var f = d.Ue,
                h = d.ig;
            void 0 === f ? e = "" : (h || (h = 0), e = "" + Cd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | h]);
            var l = d.mn,
                m = 4 + e + (l ? "" + Cd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l] :
                    ""),
                n, p = d.hm;
            n = p && Bd.test(p) ? "" + Cd(3, 2) + p : "";
            var q, r = d.fm;
            q = r ? "" + Cd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [r] : "";
            var t;
            var u = d.ctid;
            if (u && b) {
                var v = u.split("-"),
                    w = v[0].toUpperCase();
                if ("GTM" !== w && "OPT" !== w) t = "";
                else {
                    var x = v[1];
                    t = "" + Cd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + x.length] + (d.Hl || 0) + x
                }
            } else t = "";
            var y = d.Li,
                A = d.ei,
                B = d.We,
                C = d.wn;
            return m + n + q + t + (y ? "" + Cd(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [y] :
                "") + (A ? "" + Cd(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [A.length] + A : "") + (B ? "" + Cd(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [B.length] + B : "") + (C ? "" + Cd(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [C.length] + C : "")
        };
    var pj = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var qj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="),
                l = h[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var tj = function(a, b, c, d) {
            return rj(d) ? qj(a, String(b || sj()), c) : []
        },
        wj = function(a, b, c, d, e) {
            if (rj(e)) {
                var f = uj(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = vj(f, function(h) {
                        return h.Ie
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = vj(f, function(h) {
                        return h.Ld
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function xj(a, b, c, d) {
        var e = sj(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        var h = sj();
        return e != h || void 0 != c && 0 <= tj(b, h, !1, d).indexOf(c)
    }
    var Bj = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete h[u], t;
                h[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete h[u], t;
                h[u] = !0;
                return t + "; " + u
            }
            if (!rj(c.ib)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = yj(b), f = a + "=" + b);
            var h = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.sn);
            f = d(f, "samesite",
                c.un);
            c.vn && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = zj(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Aj(q, c.path) && xj(r, a, b, c.ib)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Aj(m, c.path) ? 1 : xj(f, a, b, c.ib) ? 0 : 1
        },
        Cj = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Bj(a, b, c)
        };

    function vj(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var l = a[h],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function uj(a, b, c) {
        for (var d = [], e = tj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var h = e[f].split("."),
                l = h.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = h.shift();
                m && (m = m.split("-"), d.push({
                    id: h.join("."),
                    Ie: 1 * m[0] || 1,
                    Ld: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var yj = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Dj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ej = /(^|\.)doubleclick\.net$/i,
        Aj = function(a, b) {
            return Ej.test(window.document.location.hostname) || "/" === b && Dj.test(a)
        },
        sj = function() {
            return "null" !== window.origin ? window.document.cookie : ""
        },
        zj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Ej.test(e) || Dj.test(e) || a.push("none");
            return a
        },
        rj = function(a) {
            return a && tf().h() ? (g(a) ? [a] : a).every(function(b) {
                return Gf(b) && Df(b)
            }) : !0
        },
        Fj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Gj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var Hj = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ pj(a) & 2147483647) : String(b)
        },
        Ij = function(a) {
            return [Hj(a), Math.round(La() / 1E3)].join(".")
        },
        Jj = function(a, b, c, d, e) {
            var f = Fj(b);
            return wj(a, f, Gj(c), d, e)
        },
        Kj = function(a, b, c, d) {
            var e = "" + Fj(c),
                f = Gj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        };

    function Lj(a, b, c, d) {
        var e, f = Number(null != a.Ob ? a.Ob : void 0);
        0 !== f && (e = new Date((b || La()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            ib: d
        }
    };
    var Mj;
    var Qj = function() {
            var a = Nj,
                b = Oj,
                c = Pj(),
                d = function(h) {
                    a(h.target || h.srcElement || {})
                },
                e = function(h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                ac(F, "mousedown", d);
                ac(F, "keyup", d);
                ac(F, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Rj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Pj().decorators.push(f)
        },
        Sj = function(a, b, c) {
            for (var d = Pj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h =
                    d[f],
                    l;
                if (l = !c || h.forms) a: {
                    var m = h.domains,
                        n = a,
                        p = !!h.sameHost;
                    if (m && (p || n !== F.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = h.placement;
                    void 0 == r && (r = h.fragment ? 2 : 1);
                    r === b && Oa(e, h.callback())
                }
            }
            return e
        };

    function Pj() {
        var a = Sb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Tj = /(.*?)\*(.*?)\*(.*)/,
        Uj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Vj = /^(?:www\.|m\.|amp\.)+/,
        Wj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Xj(a) {
        var b = Wj.exec(a);
        if (b) return {
            og: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function Yj(a, b) {
        var c = [Qb.userAgent, (new Date).getTimezoneOffset(), Qb.userLanguage || Qb.language, Math.floor(La() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Mj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                e[f] = h
            }
            d = e
        }
        Mj = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Mj[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Zj() {
        return function(a) {
            var b = rh(E.location.href),
                c = b.search.replace("?", ""),
                d = jh(c, "_gl", !0) || "";
            a.query = ak(d) || {};
            var e = mh(b, "fragment"),
                f;
            var h = -1;
            if (Qa(e, "_gl=")) h = 4;
            else {
                var l = e.indexOf("&_gl=");
                0 < l && (h = l + 3 + 2)
            }
            if (0 > h) f = void 0;
            else {
                var m = e.indexOf("&", h);
                f = 0 > m ? e.substring(h) : e.substring(h, m)
            }
            a.fragment = ak(f || "") || {}
        }
    }
    var bk = function(a) {
            var b = Zj(),
                c = Pj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Oa(d, e.query), a && Oa(d, e.fragment));
            return d
        },
        ak = function(a) {
            try {
                var b = ck(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            h = eb(d[e + 1]);
                        c[f] = h
                    }
                    gb("TAGGING", 6);
                    return c
                }
            } catch (l) {
                gb("TAGGING", 8)
            }
        };

    function ck(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Tj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var h = c;
            if (h && "1" === h[1]) {
                var l = h[3],
                    m;
                a: {
                    for (var n = h[2], p = 0; p < b; ++p)
                        if (n === Yj(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                gb("TAGGING", 7)
            }
        }
    }

    function dk(a, b, c, d, e) {
        function f(p) {
            var q = p,
                r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                t = q;
            if (r) {
                var u = r[2],
                    v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var h = Xj(c);
        if (!h) return "";
        var l = h.query || "",
            m = h.fragment || "",
            n = a + "=" + b;
        d ? 0 !== m.substring(1).length && e || (m = "#" + f(m.substring(1))) : l = "?" + f(l.substring(1));
        return "" + h.og + l + m
    }

    function ek(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        void 0 !== x && x === x && null !== x && "[object Object]" !== x.toString() && (v.push(w), v.push(db(String(x))))
                    }
                var y = v.join("*");
                u = ["1", Yj(y), y].join("*");
                d ? (fd(13) || fd(11) || !p) && fk("_gl", u, a, p, q) : gk("_gl", u, a, p, q)
            }
        }
        var d = "FORM" === (a.tagName || "").toUpperCase(),
            e = Sj(b, 1, d),
            f = Sj(b, 2, d),
            h = Sj(b, 4, d),
            l = Sj(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        fd(11) && c(h, !0, !0);
        for (var m in l) l.hasOwnProperty(m) && hk(m, l[m], a)
    }

    function hk(a, b, c) {
        "a" === c.tagName.toLowerCase() ? gk(a, b, c) : "form" === c.tagName.toLowerCase() && fk(a, b, c)
    }

    function gk(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f;
        if (f = c.href) {
            var h;
            if (!(h = !fd(16) || d)) {
                var l = E.location.href,
                    m = Xj(c.href),
                    n = Xj(l);
                h = !(m && n && m.og === n.og && m.query === n.query && m.fragment)
            }
            f = h
        }
        if (f) {
            var p = dk(a, b, c.href, d, e);
            Lb.test(p) && (c.href = p)
        }
    }

    function fk(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if ("get" !== f || d) {
                if ("get" === f || "post" === f) {
                    var h = dk(a, b, c.action, d, e);
                    Lb.test(h) && (c.action = h)
                }
            } else {
                for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
                    var p = l[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = F.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Nj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || ek(e, e.hostname)
            }
        } catch (h) {}
    }

    function Oj(a) {
        try {
            if (a.action) {
                var b = mh(rh(a.action), "host");
                ek(a, b)
            }
        } catch (c) {}
    }
    var ik = function(a, b, c, d) {
            Qj();
            Rj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        jk = function(a, b) {
            Qj();
            Rj(a, [lh(E.location, "host", !0)], b, !0, !0)
        },
        kk = function() {
            var a = F.location.hostname,
                b = Uj.exec(F.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    h = f[1];
                e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(Vj, ""),
                m = e.replace(Vj, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        lk = function(a, b) {
            return !1 === a ? !1 : a || b || kk()
        };
    var mk = ["1"],
        nk = {},
        ok = {},
        tk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = pk(a.prefix);
            if (!nk[c])
                if (qk(c, a.path, a.domain)) {
                    var d = ok[pk(a.prefix)];
                    rk(a, d ? d.id : void 0, d ? d.gg : void 0)
                } else {
                    var e = th("auiddc");
                    if (e) gb("TAGGING", 17), nk[c] = e;
                    else if (b) {
                        var f = pk(a.prefix),
                            h = Ij();
                        if (0 === sk(f, h, a)) {
                            var l = Sb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = h)
                        }
                        qk(c, a.path, a.domain)
                    }
                }
        };

    function rk(a, b, c) {
        var d = pk(a.prefix),
            e = nk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var h = Number(f[1]) || 0;
                if (h) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(La() / 1E3)));
                    sk(d, l, a, 1E3 * h)
                }
            }
        }
    }

    function sk(a, b, c, d) {
        var e = Kj(b, "1", c.domain, c.path),
            f = Lj(c, d);
        f.ib = uk();
        return Cj(a, e, f)
    }

    function qk(a, b, c) {
        var d = Jj(a, b, c, mk, uk());
        if (!d) return !1;
        vk(a, d);
        return !0
    }

    function vk(a, b) {
        var c = b.split(".");
        5 === c.length ? (nk[a] = c.slice(0, 2).join("."), ok[a] = {
            id: c.slice(2, 4).join("."),
            gg: Number(c[4]) || 0
        }) : 3 === c.length ? ok[a] = {
            id: c.slice(0, 2).join("."),
            gg: Number(c[2]) || 0
        } : nk[a] = b
    }

    function pk(a) {
        return (a || "_gcl") + "_au"
    }

    function wk(a) {
        function b() {
            Df(c) && a()
        }
        var c = uk();
        Of(function() {
            b();
            Df(c) || Pf(b, c)
        }, c)
    }

    function xk(a) {
        var b = bk(!0),
            c = pk(a.prefix);
        wk(function() {
            var d = b[c];
            if (d) {
                vk(c, d);
                var e = 1E3 * Number(nk[c].split(".")[1]);
                if (e) {
                    gb("TAGGING", 16);
                    var f = Lj(a, e);
                    f.ib = uk();
                    var h = Kj(d, "1", a.domain, a.path);
                    Cj(c, h, f)
                }
            }
        })
    }

    function yk(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var h = {},
                l = Jj(a, e.path, e.domain, mk, uk());
            l && (h[a] = l);
            return h
        };
        wk(function() {
            ik(f, b, c, d)
        })
    }

    function uk() {
        return fd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    };
    var zk = function(a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                xg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(h, l) {
            return l.timestamp - h.timestamp
        });
        return b
    };

    function Ak(a, b) {
        var c = zk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].xg] || (d[c[e].xg] = []);
                var h = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    U: f[2]
                };
                b && 3 < f.length && (h.labels = f.slice(3));
                d[c[e].xg].push(h)
            }
        }
        return d
    };
    var Bk = /^\w+$/,
        Ck = /^[\w-]+$/,
        Dk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function Ek() {
        return fd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    var Fk = function(a) {
            return !tf().h() || Df(a)
        },
        Gk = function(a) {
            function b() {
                var d = Fk(c);
                d && a();
                return d
            }
            var c = Ek();
            Of(function() {
                b() || Pf(b, c)
            }, c)
        },
        Ik = function(a) {
            return Hk(a).map(function(b) {
                return b.U
            })
        },
        Hk = function(a) {
            var b = [],
                c = tj(a, F.cookie, void 0, Ek());
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    U: void 0
                }, e++) {
                var f = Jk(c[e]);
                if (null != f) {
                    var h = f,
                        l = h.version;
                    d.U = h.U;
                    var m = h.timestamp,
                        n = h.labels,
                        p = Aa(b, function(q) {
                            return function(r) {
                                return r.U === q.U
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp,
                        m), p.labels = Kk(p.labels, n || [])) : b.push({
                        version: l,
                        U: d.U,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Lk(b)
        };

    function Kk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Wk(a) {
        return a && "string" == typeof a && a.match(Bk) ? a : "_gcl"
    }
    var Yk = function() {
            var a = rh(E.location.href),
                b = mh(a, "query", !1, void 0, "gclid"),
                c = mh(a, "query", !1, void 0, "gclsrc"),
                d = mh(a, "query", !1, void 0, "wbraid"),
                e = mh(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || jh(f, "gclid");
                c = c || jh(f, "gclsrc");
                d = d || jh(f, "wbraid")
            }
            return Xk(b, c, e, d)
        },
        Xk = function(a, b, c, d) {
            var e = {},
                f = function(h, l) {
                    e[l] || (e[l] = []);
                    e[l].push(h)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Ck.test(d) && (e.wbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Ck)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        $k = function(a) {
            var b = Yk();
            Gk(function() {
                Zk(b, !1, a)
            })
        };

    function Zk(a, b, c, d, e) {
        function f(w, x) {
            var y = al(w, h);
            y && (Cj(y, x, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var h = Wk(c.prefix);
        d = d || La();
        var l = Lj(c, d, !0);
        l.ib = Ek();
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = al("gb", h),
                t = !1;
            if (!b)
                for (var u = Hk(r), v = 0; v < u.length; v++) u[v].U === q && u[v].labels && 0 < u[v].labels.length &&
                    (t = !0);
            t || f("gb", p(q))
        }
    }
    var cl = function(a, b) {
            var c = bk(!0);
            Gk(function() {
                for (var d = Wk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Dk[f]) {
                        var h = al(f, d),
                            l = c[h];
                        if (l) {
                            var m = Math.min(bl(l), La()),
                                n;
                            b: {
                                for (var p = m, q = tj(h, F.cookie, void 0, Ek()), r = 0; r < q.length; ++r)
                                    if (bl(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                                n = !1
                            }
                            if (!n) {
                                var t = Lj(b, m, !0);
                                t.ib = Ek();
                                Cj(h, l, t)
                            }
                        }
                    }
                }
                Zk(Xk(c.gclid, c.gclsrc), !1, b)
            })
        },
        al = function(a, b) {
            var c = Dk[a];
            if (void 0 !== c) return b + c
        },
        bl = function(a) {
            return 0 !== dl(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
        };

    function Jk(a) {
        var b = dl(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            U: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function dl(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ck.test(a[2]) ? [] : a
    }
    var el = function(a, b, c, d, e) {
            if (za(b) && "null" !== E.origin) {
                var f = Wk(e),
                    h = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = al(a[m], f);
                            if (n) {
                                var p = tj(n, F.cookie, void 0, Ek());
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                Gk(function() {
                    ik(h, b, c, d)
                })
            }
        },
        Lk = function(a) {
            return a.filter(function(b) {
                return Ck.test(b.U)
            })
        },
        fl = function(a, b) {
            if ("null" !== E.origin) {
                for (var c = Wk(b.prefix), d = {}, e = 0; e < a.length; e++) Dk[a[e]] && (d[a[e]] = Dk[a[e]]);
                Gk(function() {
                    k(d, function(f, h) {
                        var l = tj(c + h, F.cookie, void 0, Ek());
                        l.sort(function(t,
                            u) {
                            return bl(u) - bl(t)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = bl(m),
                                p = 0 !== dl(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== dl(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Zk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function gl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var hl = function(a) {
            function b(e, f, h) {
                h && (e[f] = h)
            }
            if (Hf()) {
                var c = Yk();
                if (gl(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.wbraid);
                    jk(function() {
                        return d
                    }, 3);
                    jk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        il = function(a) {
            if (!fd(11)) return null;
            var b = bk(!0).gad_source;
            if (null != b) return E.location.hash = "", b;
            if (fd(12)) {
                var c = rh(E.location.href);
                b = mh(c, "query", !1, void 0, "gad_source");
                if (null != b) return b;
                var d = Yk();
                if (gl(d, a)) return "0"
            }
            return null
        },
        jl = function(a) {
            var b =
                il(a);
            null != b && jk(function() {
                var c = {};
                return c.gad_source = b, c
            }, 4)
        },
        kl = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Fk(Ek())) return e;
            var f = Hk(a);
            if (!f.length) return e;
            for (var h = 0; h < f.length; h++) - 1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m / 1E3), l.U].concat(l.labels || [], [b]).join("."),
                    p = Lj(c, m, !0);
                p.ib = Ek();
                Cj(a, n, p)
            }
            return e
        };

    function ll(a, b) {
        var c = Wk(b),
            d = al(a, c);
        if (!d) return 0;
        for (var e = Hk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
        return f
    }

    function ml(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var nl = function(a) {
        var b = Math.max(ll("aw", a), ml(Fk(Ek()) ? Ak() : {}));
        return Math.max(ll("gb", a), ml(Fk(Ek()) ? Ak("_gac_gb", !0) : {})) > b
    };
    var Dl, El = !1,
        Fl = function(a) {
            if (!El) {
                El = !0;
                Dl = Dl || {}
            }
            return Dl[a]
        };
    var Gl = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.o = c;
        this.h = {};
        this.metadata = z(c.eventMetadata || {});
        this.isAborted = !1
    };
    Gl.prototype.copyToHitData = function(a, b, c) {
        var d = U(this.o, a);
        void 0 === d && (d = b);
        if (void 0 !== d && void 0 !== c && g(d) && P(50)) try {
            d = c(d)
        } catch (e) {}
        void 0 !== d && (this.h[a] = d)
    };
    var Hl = function(a) {
            return a.metadata.source_canonical_id
        },
        Il = function(a, b, c) {
            var d = Fl(a.target.Z);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };
    var Jl = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Kl = /^www.googleadservices.com$/,
        Ml = function(a) {
            a || (a = Ll());
            return a.ym ? !1 : a.kl || a.ml || a.nl || a.Wf || a.Le || a.Qk || a.Xk ? !0 : !1
        },
        Ll = function() {
            var a = {},
                b = bk(!0);
            a.ym = !!b._up;
            var c = Yk();
            a.kl = void 0 !== c.aw;
            a.ml = void 0 !== c.dc;
            a.nl = void 0 !== c.wbraid;
            var d = rh(E.location.href),
                e = mh(d, "query", !1, void 0, "gad");
            a.Wf = void 0 !== e;
            if (!a.Wf) {
                var f = d.hash.replace("#", ""),
                    h = jh(f, "gad");
                a.Wf = void 0 !== h
            }
            a.Le = void 0;
            if (P(57)) {
                var l = mh(d, "query", !1, void 0, "gad_source");
                a.Le =
                    l;
                if (void 0 === a.Le) {
                    var m = d.hash.replace("#", ""),
                        n = jh(m, "gad_source");
                    a.Le = n
                }
            }
            var p = F.referrer ? mh(rh(F.referrer), "host") : "";
            a.Xk = Jl.test(p);
            a.Qk = Kl.test(p);
            return a
        };
    var Nl = function() {
        if (xa(E.__uspapi)) {
            var a = "";
            try {
                E.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };

    function Sl(a) {
        var b = U(a.o, K.g.rb),
            c = U(a.o, K.g.qb);
        b && !c ? (a.eventName !== K.g.oa && a.eventName !== K.g.Sd && J(131), a.isAborted = !0) : !b && c && (J(132), a.isAborted = !0)
    }

    function Tl(a) {
        var b = Q(K.g.F) ? xe.pscdl : "denied";
        a.h[K.g.Yd] = b
    };
    var Xl = function() {
        xe.dedupe_gclid || (xe.dedupe_gclid = "" + Ij());
        return xe.dedupe_gclid
    };
    var cm = function(a, b, c, d) {
        var e = Yb(),
            f;
        if (1 === e) a: {
            var h = Je;h = h.toLowerCase();
            for (var l = "https://" + h, m = "http://" + h, n = 1, p = F.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != E.location.protocol ? a : b) + c
    };
    var em = function(a, b, c) {
            if (E[a.functionName]) return b.mg && G(b.mg), E[a.functionName];
            var d = dm();
            E[a.functionName] = d;
            if (a.Ee)
                for (var e = 0; e < a.Ee.length; e++) E[a.Ee[e]] = E[a.Ee[e]] || dm();
            a.Ne && void 0 === E[a.Ne] && (E[a.Ne] = c);
            Xb(cm("https://", "http://", a.wg), b.mg, b.Pl);
            return d
        },
        dm = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        fm = {
            functionName: "_googWcmImpl",
            Ne: "_googWcmAk",
            wg: "www.gstatic.com/wcm/loader.js"
        },
        gm = {
            functionName: "_gaPhoneImpl",
            Ne: "ga_wpid",
            wg: "www.gstatic.com/gaphone/loader.js"
        },
        hm = {
            Wi: "",
            lk: "5"
        },
        im = {
            functionName: "_googCallTrackingImpl",
            Ee: [gm.functionName, fm.functionName],
            wg: "www.gstatic.com/call-tracking/call-tracking_" + (hm.Wi || hm.lk) + ".js"
        },
        jm = {},
        km = function(a, b, c, d) {
            J(22);
            if (c) {
                d = d || {};
                var e = em(fm, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.hb && (f.autoreplace = c);
                e(2, d.hb, f, c, 0, Ka(), d.options)
            }
        },
        lm = function(a, b, c, d, e) {
            J(21);
            if (b && c) {
                e = e || {};
                for (var f = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ka()
                    }, h = 0; h < a.length; h++) {
                    var l = a[h];
                    jm[l.id] ||
                        (l && "AW" === l.prefix && !f.adData && 2 <= l.N.length ? (f.adData = {
                            ak: l.N[0],
                            cl: l.N[1]
                        }, P(98) && (f.adData.dma = jj(), kj() && (f.adData.dmaCps = ij()), bj(d) ? f.adData.npa = "0" : f.adData.npa = "1"), jm[l.id] = !0) : l && "UA" === l.prefix && !f.gaData && (f.gaData = {
                            gaWpid: l.Z
                        }, jm[l.id] = !0))
                }(f.gaData || f.adData) && em(im, e)(e.hb, f, e.options)
            }
        },
        mm = function() {
            var a = !1;
            return a
        },
        nm = function(a, b) {
            if (a)
                if (mj()) {} else {
                    if (g(a)) {
                        var c = dg(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = U(b, K.g.Pj);
                    if (f && za(f)) {
                        d = [];
                        for (var h = 0; h < f.length; h++) {
                            var l = dg(f[h]);
                            l && (d.push(l), (a.id === l.id || a.id === a.Z && a.Z === l.Z) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = U(b, K.g.th),
                            n;
                        if (m) {
                            za(m) ? n = m : n = [m];
                            var p = U(b, K.g.rh),
                                q = U(b, K.g.sh),
                                r = U(b, K.g.uh),
                                t = U(b, K.g.Oj),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) lm(d, n[w], t, b, {
                                        hb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.N[1]) mm() ? lm([a],
                                n[w], t || "US", b, {
                                    hb: u,
                                    options: r
                                }) : km(a.N[0], a.N[1], n[w], {
                                hb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (mm()) lm([a], n[w], t || "US", b, {
                                    hb: u
                                });
                                else {
                                    var x = a.Z,
                                        y = n[w],
                                        A = {
                                            hb: u
                                        };
                                    J(23);
                                    if (y) {
                                        A = A || {};
                                        var B = em(gm, A, x),
                                            C = {};
                                        void 0 !== A.hb ? C.receiver = A.hb : C.replace = y;
                                        C.ga_wpid = x;
                                        C.destination = y;
                                        B(2, Ka(), C)
                                    }
                                }
                        }
                    }
                }
        };

    function om(a) {
        return {
            getDestinationId: function() {
                return a.target.Z
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return U(a.o, b)
            },
            qn: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };

    function um(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return rh("" + c + b).href
        }
    }

    function vm() {
        return Qe.s || Fe
    }

    function wm() {
        return !!we.Ce && "SGTM_TOKEN" !== we.Ce.split("@@").join("")
    }

    function xm(a) {
        for (var b = ia([K.g.Xc, K.g.Hb]), c = b.next(); !c.done; c = b.next()) {
            var d = U(a, c.value);
            if (d) return d
        }
    };
    var zm = function() {
            var a = E.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Am = function(a) {
            if (F.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle) return !0;
            var c = E.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    h = e.filter;
                if (h) {
                    var l = h.indexOf("opacity(");
                    0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = E.getComputedStyle(d, null))
            }
            return !1
        };
    var Bm = function() {
            var a = F.body,
                b = F.documentElement || a && a.parentElement,
                c, d;
            if (F.compatMode && "BackCompat" !== F.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, h) {
                    return f && h ? Math.min(f, h) : Math.max(f, h)
                };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        Cm = function(a) {
            var b = Bm(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                h = e.right - e.left;
            return f && h ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / h, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var An = {
        pk: Number('') || 500,
        Wj: Number('') || 5E3,
        Mh: Number('') || 10,
        gj: Number('') || 5E3
    };

    function Bn(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var Cn = function(a, b) {
        var c;
        return c
    };
    var Dn = "https://" + we.Cc,
        En = Dn + "/gtm/static/",
        Fn = Number('') || 5,
        Gn = Number('') || 50,
        Hn = Dn,
        In = En,
        Jn = !1,
        Kn = 0,
        Ln = Ba();

    function Un() {
        var a = !1;
        return a
    }

    function Vn(a) {}

    function Xn(a, b, c) {}

    function Qn(a, b, c, d) {}

    function Wn(a, b, c, d, e) {}

    function Yn(a, b, c, d) {}

    function Zn(a, b, c, d) {}

    function $n(a) {
        var b = {},
            c = ["tv.1"],
            d = 0;
        var u = c.join("~");
        return {
            P: b,
            Qe: u
        }
    }
    var ao = void 0;

    function bo(a) {
        var b = [];
        return b
    };
    Bb();
    oi() || yb("iPod");
    yb("iPad");
    !yb("Android") || Cb() || Bb() || Ab() || yb("Silk");
    Cb();
    !yb("Safari") || Cb() || (zb() ? 0 : yb("Coast")) || Ab() || (zb() ? 0 : yb("Edge")) || (zb() ? xb("Microsoft Edge") : yb("Edg/")) || (zb() ? xb("Opera") : yb("OPR")) || Bb() || yb("Silk") || yb("Android") || pi();
    var co = {},
        eo = null,
        fo = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!eo) {
                eo = {};
                for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = h.concat(l[m].split(""));
                    co[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === eo[q] && (eo[q] = p)
                    }
                }
            }
            for (var r = co[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    C = r[(x & 3) << 4 | y >> 4],
                    H = r[(y & 15) << 2 | A >> 6],
                    D = r[A & 63];
                t[w++] = "" + B + C + H + D
            }
            var I = 0,
                M = u;
            switch (b.length - v) {
                case 2:
                    I = b[v + 1], M = r[(I & 15) << 2] || u;
                case 1:
                    var L = b[v];
                    t[w] = "" + r[L >> 2] + r[(L & 3) << 4 | I >> 4] + M + u
            }
            return t.join("")
        };
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var go = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function ho() {
        var a;
        return null != (a = E.google_tag_data) ? a : E.google_tag_data = {}
    }

    function io() {
        var a = E.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function jo() {
        var a, b;
        return null != (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function ko() {
        var a, b;
        return "function" === typeof(null == (a = E.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function lo() {
        if (!ko()) return null;
        var a = ho();
        if (a.uach_promise) return a.uach_promise;
        var b = E.navigator.userAgentData.getHighEntropyValues(go).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };

    function ro() {
        return "attribution-reporting"
    }

    function so(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var to = !1;

    function uo() {
        if (so("join-ad-interest-group") && xa(Qb.joinAdInterestGroup)) return !0;
        to || (xi('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), to = !0);
        return so("join-ad-interest-group") && xa(Qb.joinAdInterestGroup)
    }

    function vo(a, b) {
        var c = void 0;
        try {
            c = F.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > La() - d) {
                gb("TAGGING", 9);
                return
            }
            try {
                c.parentNode.removeChild(c)
            } catch (e) {}
            c = void 0
        } else try {
            if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                gb("TAGGING", 10);
                return
            }
        } catch (e) {}
        Zb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: La()
        }, c)
    }

    function wo() {
        return "https://td.doubleclick.net"
    };
    var xo = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        yo = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        zo = /^\d+\.fls\.doubleclick\.net$/,
        Ao = /;gac=([^;?]+)/,
        Bo = /;gacgb=([^;?]+)/,
        Co = /;gclaw=([^;?]+)/,
        Do = /;gclgb=([^;?]+)/;

    function Eo(a, b) {
        if (zo.test(F.location.host)) {
            var c = F.location.href.match(b);
            return c && 2 == c.length && c[1].match(xo) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].U);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Fo = function(a, b, c) {
        var d = Fk(Ek()) ? Ak("_gac_gb", !0) : {},
            e = [],
            f = !1,
            h;
        for (h in d) {
            var l = kl("_gac_gb_" + h, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(h + ":" + l.join(","))
        }
        return {
            Pk: f ? e.join(";") : "",
            Ok: Eo(d, Bo)
        }
    };

    function Go(a, b, c) {
        if (zo.test(F.location.host)) {
            var d = F.location.href.match(c);
            if (d && 2 == d.length && d[1].match(yo)) return [{
                U: d[1]
            }]
        } else return Hk((a || "_gcl") + b);
        return []
    }
    var Ho = function(a) {
            return Go(a, "_aw", Co).map(function(b) {
                return b.U
            }).join(".")
        },
        Io = function(a) {
            return Go(a, "_gb", Do).map(function(b) {
                return b.U
            }).join(".")
        },
        Jo = function(a, b) {
            var c = kl((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var xp = {
        D: {
            zg: "ads_conversion_hit",
            Bc: "container_execute_start",
            Dg: "container_setup_end",
            cf: "container_setup_start",
            Bg: "container_blocking_end",
            Cg: "container_execute_end",
            Eg: "container_yield_end",
            df: "container_yield_start",
            Fh: "event_execute_end",
            Eh: "event_evaluation_end",
            Cf: "event_evaluation_start",
            Gh: "event_setup_end",
            kd: "event_setup_start",
            Hh: "ga4_conversion_hit",
            md: "page_load",
            Ym: "pageview",
            yb: "snippet_load",
            Vh: "tag_callback_error",
            Wh: "tag_callback_failure",
            Xh: "tag_callback_success",
            Yh: "tag_execute_end",
            uc: "tag_execute_start"
        }
    };

    function yp() {
        function a(c, d) {
            var e = ib(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var zp = !1;
    var gq = function(a, b) {},
        hq = function(a, b) {},
        iq = function(a, b) {},
        jq = function(a, b) {},
        kq = function() {
            var a = {};
            return a
        },
        Zp = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        lq = function() {},
        mq = function(a, b) {},
        nq = function(a, b, c) {};
    var oq = function(a, b) {
        var c, d = E.GooglebQhCsO;
        d || (d = {}, E.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var pq = function(a, b, c) {
        var d = si(a, "fmt");
        if (b) {
            var e = si(a, "random"),
                f = si(a, "label") || "";
            if (!e) return !1;
            var h = fo(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!oq(h, b)) return !1
        }
        d && 4 != d && (a = ui(a, "rfmt", d));
        var l = ui(a, "fmt", 4);
        Xb(l, function() {
            E.google_noFurtherRedirects && b && b.call && (E.google_noFurtherRedirects = null, b())
        }, void 0, c, F.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Hq = function() {
            this.h = {}
        },
        Iq = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Jq = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Lq = function(a, b, c, d) {};

    function Nq(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var Rq = function(a) {
            var b = vg(),
                c;
            c = void 0 === c ? !1 : c;
            if (Oq()) Pq().addRestriction(0, b, a, c);
            else {
                var d = Qq(b);
                d.entity.push(a);
                d._entity || (d._entity = {
                    internal: [],
                    external: []
                });
                c ? d._entity.external.push(a) : d._entity.internal.push(a)
            }
        },
        Sq = function() {
            var a = vg();
            if (Oq()) return Pq().getRestrictions(0, a);
            var b = Qq(a);
            if (P(91)) {
                var c, d;
                return [].concat(ka((null == b ? void 0 : null == (c = b._entity) ? void 0 : c.internal) || []), ka((null == b ? void 0 : null == (d = b._entity) ? void 0 : d.external) || []))
            }
            return b.entity
        },
        Tq = function(a) {
            var b =
                vg(),
                c;
            c = void 0 === c ? !1 : c;
            if (Oq()) Pq().addRestriction(1, b, a, c);
            else {
                var d = Qq(b);
                d.event && (d.event.push(a), d._event || (d._event = {
                    internal: [],
                    external: []
                }), c ? d._event.external.push(a) : d._event.internal.push(a))
            }
        },
        Uq = function() {
            var a = vg();
            if (Oq()) return Pq().getRestrictions(1, a);
            var b = Qq(a);
            if (P(91)) {
                var c, d;
                return [].concat(ka((null == b ? void 0 : null == (c = b._event) ? void 0 : c.internal) || []), ka((null == b ? void 0 : null == (d = b._event) ? void 0 : d.external) || []))
            }
            return b.event || []
        };

    function Qq(a) {
        var b = Pq(),
            c = b.container[a];
        c || (c = {
            entity: [],
            event: [],
            _entity: {
                internal: [],
                external: []
            },
            _event: {
                internal: [],
                external: []
            }
        }, b.container[a] = c);
        return c
    }
    var Vq = function() {
            this.container = {};
            this.h = {}
        },
        Wq = function(a, b) {
            var c = a.container[b];
            c || (c = {
                entity: [],
                event: [],
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.container[b] = c);
            return c
        };
    Vq.prototype.addRestriction = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!d || !this.h[b]) {
            var e = Wq(this, b);
            0 === a ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : 1 === a && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    Vq.prototype.getRestrictions = function(a, b) {
        var c = Wq(this, b);
        if (0 === a) {
            var d, e;
            return [].concat(ka((null == c ? void 0 : null == (d = c._entity) ? void 0 : d.internal) || []), ka((null == c ? void 0 : null == (e = c._entity) ? void 0 : e.external) || []))
        }
        if (1 === a) {
            var f, h;
            return [].concat(ka((null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) || []), ka((null == c ? void 0 : null == (h = c._event) ? void 0 : h.external) || []))
        }
        return []
    };
    Vq.prototype.getExternalRestrictions = function(a, b) {
        var c = Wq(this, b),
            d, e;
        return 0 === a ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) || [] : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) || []
    };
    Vq.prototype.removeExternalRestrictions = function(a) {
        var b = Wq(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.h[a] = !0
    };

    function Pq() {
        var a = xe.r;
        a || (a = new Vq, xe.r = a);
        return a
    }

    function Oq() {
        return P(91) && P(105)
    };
    var Xq = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Yq = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Zq = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        $q = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        cr = function(a) {
            var b = We("gtm.allowlist") || We("gtm.whitelist");
            b && J(9);
            De && (b = ["google", "gtagfl",
                "lcl", "zone"
            ]);
            ar() && (De ? J(116) : (J(117), br && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
            var c = b && Pa(Ha(b), Yq),
                d = We("gtm.blocklist") || We("gtm.blacklist");
            d || (d = We("tagTypeBlacklist")) && J(3);
            d ? J(8) : d = [];
            ar() && (d = Ha(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ha(d).indexOf("google") && J(2);
            var e = d && Pa(Ha(d), Zq),
                f = {};
            return function(h) {
                var l = h && h[mc.ka];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = Ne[l] || [],
                    n = a(l, m);
                if (!P(88))
                    for (var p = Sq(), q = 0; q < p.length; q++) try {
                        n = n && p[q](l, m)
                    } catch (y) {
                        n = !1
                    }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        J(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(l);
                    if (v) u = v;
                    else {
                        var w = Da(e, m || []);
                        w && J(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Da(e, $q));
                return f[l] = x
            }
        },
        br = !1;
    br = !0;
    var ar = function() {
            return Xq.test(E.location && E.location.hostname)
        },
        dr = function() {
            if (mg) {
                var a = function(b) {
                    var c = {};
                    c[mc.ka] = "__" + b;
                    for (var d in void 0)(void 0).hasOwnProperty(d) && (c["vtp_" + d] = (void 0)[d]);
                    var e;
                    if ($c(c)) {
                        var f = c[mc.ka];
                        if (!f) throw "Error: No function name given for function call.";
                        var h = Pc[f];
                        e = !!h && !!h.runInSiloedMode
                    } else e = !!Nq(c[mc.ka], 4);
                    return e
                };
                P(88) ? Rq(function(b) {
                    return a(b.entityId)
                }) : Rq(a)
            }
        };
    var Br = function(a, b, c, d) {
            if (!er() && !Bg(a)) {
                var e = "?id=" + encodeURIComponent(a) + "&l=" + we.aa,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                P(38) && (e += "&gtm=" + oj());
                var h = wm();
                h && (e += "&sign=" + we.Ce);
                var l = c ? "/gtag/js" : "/gtm.js",
                    m = vm() ? um(b, l + e) : void 0;
                if (!m) {
                    var n = we.Cc + l;
                    h && Rb && f && (n = Rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = cm("https://", "http://", n + e)
                }
                var p = a;
                d.siloed && (Dg({
                    ctid: p,
                    isDestination: !1
                }), p = pg(p));
                var q = p,
                    r = Cg();
                ig().container[q] = {
                    state: 1,
                    context: d,
                    parent: r
                };
                jg({
                    ctid: q,
                    isDestination: !1
                });
                Xb(m)
            }
        },
        Ir = function(a, b, c) {
            var d;
            if (d = !er()) {
                var e = ig().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Eg()) ig().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Cg()
                }, jg({
                    ctid: a,
                    isDestination: !0
                }), J(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + we.aa + "&cx=c";
                    P(38) && (f += "&gtm=" + oj());
                    wm() && (f += "&sign=" + we.Ce);
                    var h = vm() ? um(b, f) : void 0;
                    h || (h = cm("https://", "http://", we.Cc + f));
                    var l = a;
                    c.siloed && (Dg({
                        ctid: l,
                        isDestination: !0
                    }), l = pg(l));
                    ig().destination[l] = {
                        state: 1,
                        context: c,
                        parent: Cg()
                    };
                    jg({
                        ctid: l,
                        isDestination: !0
                    });
                    Xb(h)
                }
        };

    function er() {
        if (mj()) {
            return !0
        }
        return !1
    };
    var Jr = !1,
        Kr = 0,
        Lr = [];

    function Mr(a) {
        if (!Jr) {
            var b = F.createEventObject,
                c = "complete" == F.readyState,
                d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Jr = !0;
                for (var e = 0; e < Lr.length; e++) G(Lr[e])
            }
            Lr.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function Nr() {
        if (!Jr && 140 > Kr) {
            Kr++;
            try {
                F.documentElement.doScroll("left"), Mr()
            } catch (a) {
                E.setTimeout(Nr, 50)
            }
        }
    }
    var Or = function(a) {
        Jr ? a() : Lr.push(a)
    };
    var Pr = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: ug()
        }
    };
    var Rr = function(a, b) {
            this.h = !1;
            this.J = [];
            this.K = {
                tags: []
            };
            this.T = !1;
            this.s = this.C = 0;
            Qr(this, a, b)
        },
        Sr = function(a, b, c, d) {
            if (Ae.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Za(d) && (e = z(d, e));
            e.id = c;
            e.status = "timeout";
            return a.K.tags.push(e) - 1
        },
        Tr = function(a, b, c, d) {
            var e = a.K.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Ur = function(a) {
            if (!a.h) {
                for (var b = a.J, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.J.length = 0
            }
        },
        Qr = function(a, b, c) {
            void 0 !== b && Vr(a, b);
            c && E.setTimeout(function() {
                return Ur(a)
            }, Number(c))
        },
        Vr =
        function(a, b) {
            var c = Na(function() {
                return G(function() {
                    b(ug(), a.K)
                })
            });
            a.h ? c() : a.J.push(c)
        },
        Wr = function(a) {
            a.C++;
            return Na(function() {
                a.s++;
                a.T && a.s >= a.C && Ur(a)
            })
        },
        Xr = function(a) {
            a.T = !0;
            a.s >= a.C && Ur(a)
        };
    var Yr = {},
        $r = function() {
            return E[Zr()]
        },
        as = !1;
    var bs = function(a) {
            E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
            var b = E.GoogleAnalyticsObject;
            if (E[b]) E.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ka());
                E[b] = c
            }
            return E[b]
        },
        cs = function(a) {
            if (Hf()) {
                var b = $r();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Zr() {
        return E.GoogleAnalyticsObject || "ga"
    }
    var ds = function(a) {},
        es = function(a, b) {
            return function() {
                var c = $r(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var h = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > h.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var js = ["es", "1"],
        ks = {},
        ls = {};

    function ms(a, b) {
        if (Og) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            ks[a] = [
                ["e", c],
                ["eid", a]
            ];
            Zg(a)
        }
    }

    function ns(a) {
        var b = a.eventId,
            c = a.Vb;
        if (!ks[b]) return [];
        var d = [];
        ls[b] || d.push(js);
        d.push.apply(d, ka(ks[b]));
        c && (ls[b] = !0);
        return d
    };
    var os = {};

    function ps(a, b) {
        Og && (os[a] = os[a] || {}, os[a][b] = (os[a][b] || 0) + 1)
    }

    function qs(a) {
        var b = a.eventId,
            c = a.Vb,
            d = os[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete os[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    };
    var rs = {},
        ss = {};

    function ts(a, b, c) {
        if (Og && b) {
            var d = gg(b);
            rs[a] = rs[a] || [];
            rs[a].push(c + d);
            var e = ($c(b) ? "1" : "2") + d;
            ss[a] = ss[a] || [];
            ss[a].push(e);
            Zg(a)
        }
    }

    function us(a) {
        var b = a.eventId,
            c = a.Vb,
            d = [],
            e = rs[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = ss[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete rs[b], delete ss[b]);
        return d
    };

    function vs(a, b, c, d) {
        var e = Nc[a],
            f = ws(a, b, c, d);
        if (!f) return null;
        var h = Xc(e[mc.Uh], c, []);
        if (h && h.length) {
            var l = h[0];
            f = vs(l.index, {
                onSuccess: f,
                onFailure: 1 === l.ki ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function ws(a, b, c, d) {
        function e() {
            if (f[mc.dk]) l();
            else {
                var w = Yc(f, c, []),
                    x = w[mc.Xi];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Q(x[y])) {
                            l();
                            return
                        }
                var A = Sr(c.Jb, String(f[mc.ka]), Number(f[mc.qd]), w[mc.ek]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var D = La() - H;
                        ts(c.id, Nc[a], "5");
                        Tr(c.Jb, A, "success", D);
                        P(16) && nq(c, f, xp.D.Xh);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var D = La() - H;
                        ts(c.id, Nc[a], "6");
                        Tr(c.Jb, A, "failure", D);
                        P(16) && nq(c, f, xp.D.Wh);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                ts(c.id, f, "1");
                var C = function() {
                    jf(3);
                    var D = La() - H;
                    ts(c.id, f, "7");
                    Tr(c.Jb, A, "exception", D);
                    P(16) && nq(c, f, xp.D.Vh);
                    B || (B = !0, l())
                };
                P(16) && mq(c, f);
                var H = La();
                try {
                    Wc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    C(D)
                }
                P(16) && nq(c, f, xp.D.Yh)
            }
        }
        var f = Nc[a],
            h = b.onSuccess,
            l = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = Xc(f[mc.Zh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = vs(p.index, {
                    onSuccess: h,
                    onFailure: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            h = q;
            l = 2 ===
                p.ki ? m : q
        }
        if (f[mc.Ph] || f[mc.gk]) {
            var r = f[mc.Ph] ? Oc : c.mm,
                t = h,
                u = l;
            if (!r[a]) {
                e = Na(e);
                var v = xs(a, r, e);
                h = v.onSuccess;
                l = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function xs(a, b, c) {
        var d = [],
            e = [];
        b[a] = ys(d, e, c);
        return {
            onSuccess: function() {
                b[a] = zs;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = As;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function ys(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function zs(a) {
        a()
    }

    function As(a, b) {
        b()
    };
    var Cs = function(a, b) {
            return 1 === arguments.length ? Bs("config", a) : Bs("config", a, b)
        },
        Ds = function(a, b, c) {
            c = c || {};
            c[K.g.Gb] = a;
            return Bs("event", b, c)
        };

    function Bs(a) {
        return arguments
    }
    var Es = function() {
        this.h = [];
        this.s = []
    };
    Es.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++) try {
            this.s[f](e)
        } catch (h) {}
    };
    Es.prototype.listen = function(a) {
        this.s.push(a)
    };
    Es.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Es.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Gs = function(a, b, c) {
            c.eventMetadata = c.eventMetadata || {};
            c.eventMetadata.source_canonical_id = ng.Ge;
            Fs().enqueue(a, b, c)
        },
        Is = function() {
            var a = Hs;
            Fs().listen(a)
        };

    function Fs() {
        var a = xe.mb;
        a || (a = new Es, xe.mb = a);
        return a
    }
    var Qs = function(a) {
            var b = xe.zones;
            return b ? b.getIsAllowedFn(qg(), a) : function() {
                return !0
            }
        },
        Rs = function(a) {
            var b = xe.zones;
            return b ? b.isActive(qg(), a) : !0
        },
        Ss = function() {
            P(87) ? Tq(function(a) {
                return Rs(a.originalEventData["gtm.uniqueEventId"])
            }) : Tq(function(a, b) {
                return Rs(b)
            });
            P(88) && P(89) && Rq(function(a) {
                var b = a.entityId,
                    c = a.securityGroups;
                return Qs(a.originalEventData["gtm.uniqueEventId"])(b, c)
            })
        };
    var Vs = function(a, b) {
        for (var c = [], d = 0; d < Nc.length; d++)
            if (a[d]) {
                var e = Nc[d];
                var f = Wr(b.Jb);
                try {
                    var h = vs(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (h) {
                        var l = e[mc.ka];
                        if (!l) throw "Error: No function name given for function call.";
                        var m = Pc[l];
                        c.push({
                            Ni: d,
                            Ai: (m ? m.priorityOverride || 0 : 0) || Nq(e[mc.ka], 1) || 0,
                            execute: h
                        })
                    } else Ts(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Us);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function Us(a, b) {
        var c, d = b.Ai,
            e = a.Ai;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var h = a.Ni,
                l = b.Ni;
            f = h > l ? 1 : h < l ? -1 : 0
        }
        return f
    }

    function Ts(a, b) {
        if (Og) {
            var c = function(d) {
                var e = b.isBlocked(Nc[d]) ? "3" : "4",
                    f = Xc(Nc[d][mc.Uh], b, []);
                f && f.length && c(f[0].index);
                ts(b.id, Nc[d], e);
                var h = Xc(Nc[d][mc.Zh], b, []);
                h && h.length && c(h[0].index)
            };
            c(a)
        }
    }
    var Ys = !1,
        Ws;
    var ct = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (P(16)) {}
        if ("gtm.js" === d) {
            if (Ys) return !1;
            Ys = !0
        }
        var e, f = !1,
            h = Uq(),
            l;
        if (P(87)) {
            var m = z(a);
            l = h.every(function(w) {
                return w({
                    originalEventData: m
                })
            })
        } else l = h.every(function(w) {
            return w(d, b)
        });
        if (l) e = Qs(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !==
                d) return !1;
            f = !0;
            e = Qs(Number.MAX_SAFE_INTEGER)
        }
        ms(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = z(a),
            r = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: Zs(e, q, f),
                mm: [],
                logMacroError: function() {
                    J(6);
                    jf(0)
                },
                cachedModelValues: $s(),
                Jb: new Rr(function() {
                    if (P(16)) {}
                    n &&
                        n.apply(n, [].slice.call(arguments, 0))
                }, p),
                originalEventData: q
            };
        P(29) && (r.reportMacroDiscrepancy = ps);
        P(16) && iq(r.id, r.name);
        var t = cd(r);
        P(16) && jq(r.id, r.name);
        f && (t = at(t));
        if (P(16)) {}
        var u = Vs(t, r),
            v = !1;
        Xr(r.Jb);
        "gtm.js" !== d && "gtm.sync" !== d || ds(ug());
        return bt(t, u) || v
    };

    function $s() {
        var a = {};
        a.event = $e("event", 1);
        a.ecommerce = $e("ecommerce", 1);
        a.gtm = $e("gtm");
        a.eventModel = $e("eventModel");
        return a
    }

    function Zs(a, b, c) {
        var d = cr(a);
        return P(88) ? function(e) {
            if (d(e)) return !0;
            var f = e && e[mc.ka];
            if (!f || "string" != typeof f) return !0;
            f = f.replace(/^_*/, "");
            var h = Sq(),
                l = b;
            c && (l = z(b), l["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = Ne[f] || [], n = ia(h), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                            entityId: f,
                            securityGroups: m,
                            originalEventData: l
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        } : d
    }

    function at(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Nc[c][mc.ka]);
                if (ze[d] || void 0 !== Nc[c][mc.hk] || Nq(d, 2)) b[c] = !0
            }
        return b
    }

    function bt(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Nc[c] && !Ae[String(Nc[c][mc.ka])]) return !0;
        return !1
    }
    var dt = {},
        et = {},
        ft = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    qg: void 0,
                    Vf: void 0
                }, f++) {
                var h = a[f];
                if (0 <= h.indexOf("-")) {
                    if (e.qg = dg(h, b), e.qg) {
                        var l = sg();
                        Aa(l, function(r) {
                            return function(t) {
                                return r.qg.Z === t
                            }
                        }(e)) ? c.push(h) : d.push(h)
                    }
                } else {
                    var m = dt[h] || [];
                    e.Vf = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.Vf[t] = !0
                        }
                    }(e));
                    for (var n = qg(), p = 0; p < n.length; p++)
                        if (e.Vf[n[p]]) {
                            c = c.concat(sg());
                            break
                        }
                    var q = et[h] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Jl: c,
                Ll: d
            }
        },
        gt = function(a) {
            k(dt, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        ht = function(a) {
            k(et, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var it = "HA GF G UA AW DC MC".split(" "),
        jt = !1,
        kt = !1;

    function lt(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Oe()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var mt = void 0,
        nt = void 0;

    function ot(a, b, c) {
        var d = z(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && J(136);
        var e = z(b);
        z(c, e);
        Gs(Cs(qg()[0], e), a.eventId, d)
    }

    function pt(a) {
        for (var b = ia([K.g.Xc, K.g.Hb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || $h.C[d];
            if (e) return e
        }
    }
    var qt = {
            config: function(a, b) {
                var c = P(30),
                    d = lt(a, b);
                if (!(2 > a.length) && g(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Za(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = dg(a[1], b.isGtmEvent);
                    if (f) {
                        var h, l, m;
                        a: {
                            if (!lg.ld) {
                                var n = wg(Cg());
                                if (Gg(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        Ql: wg(p),
                                        Il: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (h = r.Ql, l = r.Il);
                        ms(d.eventId, "gtag.config");
                        var t = f.Z,
                            u = f.id !== t;
                        if (u ? -1 === sg().indexOf(t) : -1 === qg().indexOf(t)) {
                            if (!(c && b.inheritParentConfig || e[K.g.rb])) {
                                var v = pt(e);
                                if (u) Ir(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                                    var w = e;
                                    mt ? ot(b, w, mt) : nt || (nt = z(w))
                                } else Br(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (h && (J(128), l && J(130), c && b.inheritParentConfig)) {
                                var x;
                                var y = e;
                                nt ? (ot(b, nt, y), x = !1) : (!y[K.g.Ib] && Ce && mt || (mt = z(y)), x = !0);
                                x && h.containers && h.containers.join(",");
                                return
                            }
                            if (Ce && !u && !e[K.g.Ib]) {
                                var A = kt;
                                kt = !0;
                                if (A) return
                            }
                            jt || J(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    ht(f.id);
                                    var B = f.id,
                                        C = e[K.g.me] ||
                                        "default";
                                    C = String(C).split(",");
                                    for (var H = 0; H < C.length; H++) {
                                        var D = et[C[H]] || [];
                                        et[C[H]] = D;
                                        0 > D.indexOf(B) && D.push(B)
                                    }
                                } else {
                                    gt(f.id);
                                    var I = f.id,
                                        M = e[K.g.me] || "default";
                                    M = M.toString().split(",");
                                    for (var L = 0; L < M.length; L++) {
                                        var O = dt[M[L]] || [];
                                        dt[M[L]] = O;
                                        0 > O.indexOf(I) && O.push(I)
                                    }
                                }
                            delete e[K.g.me];
                            var T = b.eventMetadata || {};
                            T.hasOwnProperty("is_external_event") || (T.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = T;
                            delete e[K.g.Qc];
                            for (var R = u ? [f.id] : sg(), S = 0; S < R.length; S++) {
                                var da = e,
                                    ca = R[S],
                                    Z = z(b),
                                    va = dg(ca, Z.isGtmEvent);
                                va && $h.push("config", [da], va, Z)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    J(39);
                    var c = lt(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[K.g.M] && J(139), e[K.g.ya] && J(140));
                    "default" === d ? Uf(e) : "update" === d ? Vf(e, c) : "declare" === d ? b.fromContainerExecution && Tf(e) : P(61) && "core_platform_services" === d && Wf(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && g(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Za(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        h = (f.event = c, f);
                    e && (h.eventModel =
                        z(e), e[K.g.Qc] && (h.eventCallback = e[K.g.Qc]), e[K.g.he] && (h.eventTimeout = e[K.g.he]));
                    var l = lt(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    h["gtm.uniqueEventId"] = m;
                    n && (h["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
                    var p;
                    var q = d,
                        r = q && q[K.g.Gb];
                    void 0 === r && (r = We(K.g.Gb, 2), void 0 === r && (r = "default"));
                    if (g(r) || za(r)) {
                        var t;
                        b.isGtmEvent ? t = g(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = ft(t, b.isGtmEvent),
                            v = u.Jl,
                            w = u.Ll;
                        if (w.length)
                            for (var x = pt(q), y = 0; y < w.length; y++) {
                                var A =
                                    dg(w[y], b.isGtmEvent);
                                A && Ir(A.Z, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = fg(v, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        ms(m, c);
                        for (var C = [], H = 0; H < B.length; H++) {
                            var D = B[H],
                                I = z(b);
                            if (-1 !== it.indexOf(xg(D.prefix))) {
                                var M = z(d),
                                    L = I.eventMetadata || {};
                                L.hasOwnProperty("is_external_event") || (L.is_external_event = !I.fromContainerExecution);
                                I.eventMetadata = L;
                                delete M[K.g.Qc];
                                ai(c, M, D.id, I)
                            }
                            C.push(D.id)
                        }
                        h.eventModel = h.eventModel || {};
                        0 < B.length ? h.eventModel[K.g.Gb] = C.join() : delete h.eventModel[K.g.Gb];
                        jt || J(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        h.eventModel[K.g.qb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : h
                    }
                }
            },
            get: function(a, b) {
                J(53);
                if (4 === a.length && g(a[1]) && g(a[2]) && xa(a[3])) {
                    var c = dg(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        jt || J(43);
                        var f = pt();
                        if (!Aa(sg(), function(l) {
                                return c.Z === l
                            })) Ir(c.Z, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== it.indexOf(xg(c.prefix))) {
                            lt(a, b);
                            var h = {};
                            Qf(z((h[K.g.eb] = d, h[K.g.ob] =
                                e, h)));
                            bi(d, function(l) {
                                G(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    jt = !0;
                    var c = lt(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Za(a[1]) ? c = z(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Za(a[2]) || za(a[2]) ? c[a[1]] = z(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = lt(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    z(c);
                    var h = z(c);
                    $h.push("set", [h],
                        void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    P(9) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        rt = {
            policy: !0
        };
    var st = function(a) {
            var b = E[we.aa].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        tt = function(a) {
            var b = E[we.aa],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var ut = !1,
        vt = [];

    function wt() {
        if (!ut) {
            ut = !0;
            for (var a = 0; a < vt.length; a++) G(vt[a])
        }
    }
    var xt = function(a) {
        ut ? G(a) : vt.push(a)
    };
    var Pt = function(a) {
        if (Ot(a)) return a;
        this.h = a
    };
    Pt.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Ot = function(a) {
        return !a || "object" !== Wa(a) || Za(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Pt.prototype.getUntrustedMessageValue = Pt.prototype.getUntrustedMessageValue;
    var Qt = 0,
        Rt = {},
        St = [],
        Tt = [],
        Ut = !1,
        Vt = !1;

    function Wt(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Xt = function(a) {
            return E[we.aa].push(a)
        },
        Yt = function(a, b) {
            if (!ya(b) || 0 > b) b = 0;
            var c = xe[we.aa],
                d = 0,
                e = !1,
                f = void 0;
            f = E.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var h = c ? c.subscribers : 1;
                ++d === h && (f && (E.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function Zt(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && Ze(e), Ze(e, f))
        });
        Ke || (Ke = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Oe(), a["gtm.uniqueEventId"] = d, Ze("gtm.uniqueEventId", d));
        return ct(a)
    }

    function $t(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ea(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function au() {
        var a;
        if (Tt.length) a = Tt.shift();
        else if (St.length) a = St.shift();
        else return;
        var b;
        var c = a;
        if (Ut || !$t(c.message)) b = c;
        else {
            Ut = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Oe());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                h = {},
                l = {
                    message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            St.unshift(l, c);
            if (Og) {
                var m = ng.ctid;
                if (m) {
                    var n, p = wg(Cg());
                    n = p && p.context;
                    var q, r = rh(E.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = ng.Ge,
                        w = lg.ld;
                    Og && (ch || (ch = q), dh.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function bu() {
        for (var a = !1, b; !Vt && (b = au());) {
            Vt = !0;
            delete Te.eventModel;
            Ve();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Vt = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
                        var l = f[h],
                            m = We(l, 1);
                        if (za(m) || Za(m)) m = z(m);
                        Ue[l] = m
                    }
                try {
                    if (xa(d)) try {
                        d.call(Xe)
                    } catch (C) {} else if (za(d)) {
                        var n = d;
                        if (g(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                t = We(p.join("."), 2);
                            if (null != t) try {
                                t[q].apply(t, r)
                            } catch (C) {}
                        }
                    } else {
                        var u =
                            void 0,
                            v = !1;
                        if (Ea(d)) {
                            a: {
                                if (d.length && g(d[0])) {
                                    var w = qt[d[0]];
                                    if (w && (!e.fromContainerExecution || !rt[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && J(101)
                        }
                        else u = d;
                        if (u) {
                            var x = Zt(u, e);
                            a = x || a;
                            v && x && J(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Ve(!0);
                    var y = d["gtm.uniqueEventId"];
                    if ("number" === typeof y) {
                        for (var A = Rt[String(y)] || [], B = 0; B < A.length; B++) Tt.push(cu(A[B]));
                        A.length && Tt.sort(Wt);
                        delete Rt[String(y)];
                        y > Qt && (Qt = y)
                    }
                    Vt = !1
                }
            }
        }
        return !a
    }

    function du() {
        if (P(16)) {
            var a = eu();
        }
        var b = bu();
        if (P(16)) {}
        try {
            st(ug())
        } catch (c) {}
        return b
    }

    function Hs(a) {
        if (Qt < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Rt[b] = Rt[b] || [];
            Rt[b].push(a)
        } else Tt.push(cu(a)), Tt.sort(Wt), G(function() {
            Vt || bu()
        })
    }

    function cu(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var fu = function() {
            function a(f) {
                var h = {};
                if (Ot(f)) {
                    var l = f;
                    f = Ot(l) ? l.getUntrustedMessageValue() : void 0;
                    h.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: h
                }
            }
            var b = Sb(we.aa, []),
                c = xe[we.aa] = xe[we.aa] || {};
            !0 === c.pruned && J(83);
            Rt = Fs().get();
            Is();
            Or(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            xt(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < xe.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var h = 0; h < arguments.length; h++) f[h] = new Pt(arguments[h])
                } else f = [].slice.call(arguments, 0);
                var l = f.map(function(q) {
                    return a(q)
                });
                St.push.apply(St, l);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (J(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return bu() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            St.push.apply(St, e);
            if (eu()) {
                if (P(16)) {}
                G(du)
            }
        },
        eu = function() {
            var a = !0;
            return a
        };

    function gu(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = La();
        return b < c + 3E5 && b > c - 9E5
    }

    function hu(a) {
        return a && 0 === a.indexOf("pending:") ? gu(a.substr(8)) : !1
    };
    var Cu = function() {};
    var Du = function() {};
    Du.prototype.toString = function() {
        return "undefined"
    };
    var Eu = new Du;
    var Gu = function() {
            (xe.rm = xe.rm || {})[vg()] = function(a) {
                if (Fu.hasOwnProperty(a)) return Fu[a]
            }
        },
        Ju = function(a, b, c) {
            if (a instanceof Hu) {
                var d = a,
                    e = d.h,
                    f = b,
                    h = Oe();
                Iu[h] = [f, c];
                a = e.call(d, h);
                b = wa
            }
            return {
                pl: a,
                onSuccess: b
            }
        },
        Ku = function(a) {
            var b = a ? 0 : 1;
            return function(c) {
                J(a ? 134 : 135);
                var d = Iu[c];
                if (d && "function" === typeof d[b]) d[b]();
                Iu[c] = void 0
            }
        },
        Hu = function(a) {
            this.h = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Eu ? b : a[d]);
                return c.join("")
            }
        };
    Hu.prototype.toString = function() {
        return this.h("undefined")
    };
    Hu.prototype.valueOf = Hu.prototype.toString;
    var Fu = {},
        Iu = {};
    var Lu = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": hc(a, "className"),
                "gtm.elementId": a["for"] || cc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || hc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || hc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Mu = function(a) {
            xe.hasOwnProperty("autoEventsSettings") || (xe.autoEventsSettings = {});
            var b = xe.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Nu = function(a, b, c) {
            Mu(a)[b] = c
        },
        Ou = function(a, b, c, d) {
            var e = Mu(a),
                f = Ma(e, b, d);
            e[b] = c(f)
        },
        Pu = function(a, b, c) {
            var d = Mu(a);
            return Ma(d, b, c)
        };
    var iv = E.clearTimeout,
        jv = E.setTimeout,
        V = function(a, b, c, d) {
            if (mj()) {
                b && G(b)
            } else return Xb(a, b, c, d)
        },
        kv = function() {
            return new Date
        },
        lv = function() {
            return E.location.href
        },
        mv = function(a) {
            return mh(rh(a), "fragment")
        },
        nv = function(a) {
            return nh(rh(a))
        },
        ov = function(a, b) {
            return We(a, b || 2)
        },
        pv = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Xt(a)) : d = Xt(a);
            return d
        },
        qv = function(a, b) {
            E[a] = b
        },
        W = function(a, b, c) {
            b &&
                (void 0 === E[a] || c && !E[a]) && (E[a] = b);
            return E[a]
        },
        rv = function(a, b, c) {
            return tj(a, b, void 0 === c ? !0 : !!c)
        },
        sv = function(a, b, c) {
            return 0 === Cj(a, b, c)
        },
        tv = function(a, b) {
            if (mj()) {
                b && G(b)
            } else Zb(a, b)
        },
        uv = function(a) {
            return !!Pu(a, "init", !1)
        },
        vv = function(a) {
            Nu(a, "init", !0)
        };

    function Sv(a, b) {
        function c(h) {
            var l = rh(h),
                m = mh(l, "protocol"),
                n = mh(l, "host", !0),
                p = mh(l, "port"),
                q = mh(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Tv(a) {
        return Uv(a) ? 1 : 0
    }

    function Uv(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = z(a, {});
                z({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Tv(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var h = 0; h < td.length; h++) {
                            var l = td[h];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (v) {}
                    f = !1
                }
                return f;
            case "_ew":
                var m, n;
                m = String(b);
                n = String(c);
                var p = m.length - n.length;
                return 0 <= p && m.indexOf(n, p) === p;
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var q;
                var r = a.ignore_case ? "i" : void 0;
                try {
                    var t = String(c) + r,
                        u = ud.get(t);
                    u || (u = new RegExp(c, r), ud.set(t, u));
                    q = u.test(b)
                } catch (v) {
                    q = !1
                }
                return q;
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Sv(b, c)
        }
        return !1
    };

    function Vv() {
        var a = [
            ["cv", "4"],
            ["rv", we.Gf],
            ["tc", Nc.filter(function(b) {
                return b
            }).length]
        ];
        we.od && a.push(["x", we.od]);
        Qe.h && a.push(["tag_exp", Qe.h]);
        return a
    };

    function Wv() {
        var a = lf();
        return a.length ? [
            ["exp_geo", a]
        ] : []
    }
    var Xv;

    function Yv() {
        try {
            null != Xv || (Xv = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return (null == (a = Xv) ? 0 : a.length) ? [
            ["exp_tz", Xv]
        ] : []
    };
    var Bw = function() {
        var a = !0;
        Xi(7) && Xi(9) && Xi(10) || (a = !1);
        return a
    };
    var Fw = function(a, b) {
            if (!b.isGtmEvent) {
                var c = U(b, K.g.eb),
                    d = U(b, K.g.ob),
                    e = U(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    Cw.hasOwnProperty(c) ? f = Cw[c] : Dw.hasOwnProperty(c) && (f = Dw[c]);
                    1 === f && (f = Ew(c));
                    g(f) ? $r()(function() {
                        var h = $r().getByName(a).get(f);
                        d(h)
                    }) : d(void 0)
                } else d(e)
            }
        },
        Gw = function(a, b) {
            var c = a[K.g.nc],
                d = b + ".",
                e = a[K.g.R] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                h = !!a[K.g.Eb];
            e = String(e).replace(/\s+/g, "").split(",");
            var l = $r();
            l(d + "require", "linker");
            l(d + "linker:autoLink", e, f, h)
        },
        Kw = function(a,
            b, c) {
            if (Hf() || P(24))
                if (!c.isGtmEvent || !Hw[a]) {
                    var d = !Q(K.g.O),
                        e = function(f) {
                            var h, l, m = $r(),
                                n = Iw(b, "", c),
                                p, q = n.createOnlyFields._useUp;
                            if (c.isGtmEvent || Jw(b, n.createOnlyFields)) {
                                c.isGtmEvent && (h = "gtm" + Oe(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = h));
                                m(function() {
                                    var t = m.getByName(b);
                                    t && (p = t.get("clientId"));
                                    c.isGtmEvent || m.remove(b)
                                });
                                m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
                                d && Q(K.g.O) && (d = !1, m(function() {
                                    var t = $r().getByName(c.isGtmEvent ? h : b);
                                    !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = re[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = re[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                                }));
                                c.isGtmEvent && m(function() {
                                    m.remove(h)
                                })
                            }
                        };
                    Xf(function() {
                        return e(K.g.O)
                    }, K.g.O);
                    Xf(function() {
                            return e(K.g.F)
                        },
                        K.g.F);
                    c.isGtmEvent && (Hw[a] = !0)
                }
        },
        Lw = function(a, b) {
            wm() && b && (a[K.g.cb] = b)
        },
        Uw = function(a, b, c) {
            function d() {
                var L = U(c, K.g.Mc);
                l(function() {
                    if (!c.isGtmEvent && Za(L)) {
                        var O = u.fieldsToSend,
                            T = m().getByName(n),
                            R;
                        for (R in L)
                            if (L.hasOwnProperty(R) && /^(dimension|metric)\d+$/.test(R) && void 0 != L[R]) {
                                var S = T.get(Ew(L[R]));
                                Mw(O, R, S)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var L = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: L
                    })
                }
            }
            var f = a,
                h, l = c.isGtmEvent ? bs(U(c, "gaFunctionName")) :
                bs();
            if (xa(l)) {
                var m = $r,
                    n;
                c.isGtmEvent ? n = U(c, "name") || U(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(L) {
                        var O = [].slice.call(arguments, 0);
                        O[0] = n ? n + "." + O[0] : "" + O[0];
                        l.apply(window, O)
                    },
                    q = function(L) {
                        var O = function(Z, va) {
                                for (var ea = 0; va && ea < va.length; ea++) p(Z, va[ea])
                            },
                            T = c.isGtmEvent,
                            R = T ? Nw(u) : Ow(b, c);
                        if (R) {
                            var S = {};
                            Lw(S, L);
                            p("require", "ec", "ec.js", S);
                            T && R.Nf && p("set", "&cu", R.Nf);
                            var da = R.action;
                            if (T || "impressions" === da)
                                if (O("ec:addImpression", R.ri), !T) return;
                            if ("promo_click" ===
                                da || "promo_view" === da || T && R.Nd) {
                                var ca = R.Nd;
                                O("ec:addPromo", ca);
                                if (ca && 0 < ca.length && "promo_click" === da) {
                                    T ? p("ec:setAction", da, R.Ta) : p("ec:setAction", da);
                                    return
                                }
                                if (!T) return
                            }
                            "promo_view" !== da && "impressions" !== da && (O("ec:addProduct", R.Rb), p("ec:setAction", da, R.Ta))
                        }
                    },
                    r = function(L) {
                        if (L) {
                            var O = {};
                            if (Za(L))
                                for (var T in Pw) Pw.hasOwnProperty(T) && Qw(Pw[T], T, L[T], O);
                            Lw(O, y);
                            p("require", "linkid", O)
                        }
                    },
                    t = function() {
                        if (mj()) {} else {
                            var L =
                                U(c, K.g.Mj);
                            L && (p("require", L, {
                                dataLayer: we.aa
                            }), p("require", "render"))
                        }
                    },
                    u = Iw(n, b, c),
                    v = function(L, O, T) {
                        T && (O = "" + O);
                        u.fieldsToSend[L] = O
                    };
                !c.isGtmEvent && Jw(n, u.createOnlyFields) && (l(function() {
                    m() && m().remove(n)
                }), Rw[n] = !1);
                l("create", f, u.createOnlyFields);
                var w = c.isGtmEvent && u.fieldsToSet[K.g.cb] && P(86);
                if (!c.isGtmEvent && u.createOnlyFields[K.g.cb] || w) {
                    var x = vm() ? um(c.isGtmEvent ? u.fieldsToSet[K.g.cb] : u.createOnlyFields[K.g.cb], "/analytics.js") : void 0;
                    x && (h = x)
                }
                var y = c.isGtmEvent ? u.fieldsToSet[K.g.cb] :
                    u.createOnlyFields[K.g.cb];
                if (y) {
                    var A = c.isGtmEvent ? u.fieldsToSet[K.g.ie] : u.createOnlyFields[K.g.ie];
                    A && !Rw[n] && (Rw[n] = !0, l(es(n, A)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var B = u[K.g.Ha];
                B && B[K.g.R] && Gw(B, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var C = {};
                        Lw(C, y);
                        p("require", "linkid", "linkid.js", C)
                    }
                    Kw(f, n, c)
                }
                if (b === K.g.bc)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var H = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require",
                                "adfeatures", {
                                    cookieName: H
                                })
                        }
                        q(y);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && cs(n + ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === K.g.oa ? (t(), nm(f, c), U(c, K.g.vb) && (hl(["aw", "dc"]), cs(n + ".")), jl(["aw", "dc"]), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), Kw(f, n, c)) : b === K.g.La ? Fw(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) :
                    v("timingVar", u.name, !0), v("timingValue", Fa(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || Sw[b]) && q(y), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", Fa(u.value))), p("send", u.fieldsToSend));
                var D = h && P(86) && !c.eventMetadata.suppress_script_load;
                if (!Tw && (!c.isGtmEvent || D)) {
                    h = h || "https://www.google-analytics.com/analytics.js";
                    Tw = !0;
                    var I = function() {
                            c.onFailure()
                        },
                        M = function() {
                            m().loaded || I()
                        };
                    mj() ? G(M) : Xb(h, M, I)
                }
            } else G(c.onFailure)
        },
        Vw = function(a, b, c, d) {
            Yf(function() {
                Uw(a, b, d)
            }, [K.g.O, K.g.F])
        },
        Xw = function(a) {
            function b(e) {
                function f(l,
                    m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            h[l] = e[p];
                            break
                        }
                    }
                }
                var h = z(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) h.category = e.category;
                    else {
                        for (var l = "", m = 0; m < Ww.length; m++) void 0 !== e[Ww[m]] && (l && (l += "/"), l += e[Ww[m]]);
                        l && (h.category = l)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return h
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Za(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        Yw = function(a) {
            return Q(a)
        },
        Zw = !1;
    var Tw, Rw = {},
        Hw = {},
        $w = {},
        ax = Object.freeze(($w.page_hostname = 1, $w[K.g.ja] = 1, $w[K.g.Xa] = 1, $w[K.g.Za] = 1, $w[K.g.Ma] = 1, $w[K.g.ab] = 1, $w[K.g.ic] =
            1, $w[K.g.Lc] = 1, $w[K.g.Ra] = 1, $w[K.g.jc] = 1, $w[K.g.za] = 1, $w[K.g.Vc] = 1, $w[K.g.Ia] = 1, $w[K.g.sb] = 1, $w)),
        bx = {},
        Cw = Object.freeze((bx.client_storage = "storage", bx.sample_rate = 1, bx.site_speed_sample_rate = 1, bx.store_gac = 1, bx.use_amp_client_id = 1, bx[K.g.lb] = 1, bx[K.g.Ea] = "storeGac", bx[K.g.Za] = 1, bx[K.g.Ma] = 1, bx[K.g.ab] = 1, bx[K.g.ic] = 1, bx[K.g.Lc] = 1, bx[K.g.jc] = 1, bx)),
        cx = {},
        dx = Object.freeze((cx._cs = 1, cx._useUp = 1, cx.allowAnchor = 1, cx.allowLinker = 1, cx.alwaysSendReferrer = 1, cx.clientId = 1, cx.cookieDomain = 1, cx.cookieExpires =
            1, cx.cookieFlags = 1, cx.cookieName = 1, cx.cookiePath = 1, cx.cookieUpdate = 1, cx.legacyCookieDomain = 1, cx.legacyHistoryImport = 1, cx.name = 1, cx.sampleRate = 1, cx.siteSpeedSampleRate = 1, cx.storage = 1, cx.storeGac = 1, cx.useAmpClientId = 1, cx._cd2l = 1, cx)),
        ex = Object.freeze({
            anonymize_ip: 1
        }),
        fx = {},
        Dw = Object.freeze((fx.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, fx.app_id = 1, fx.app_installer_id = 1, fx.app_name = 1, fx.app_version =
            1, fx.description = "exDescription", fx.fatal = "exFatal", fx.language = 1, fx.page_hostname = "hostname", fx.transport_type = "transport", fx[K.g.ra] = "currencyCode", fx[K.g.ph] = 1, fx[K.g.za] = "location", fx[K.g.Vc] = "page", fx[K.g.Ia] = "referrer", fx[K.g.sb] = "title", fx[K.g.yf] = 1, fx[K.g.Na] = 1, fx)),
        gx = {},
        hx = Object.freeze((gx.content_id = 1, gx.event_action = 1, gx.event_category = 1, gx.event_label = 1, gx.link_attribution = 1, gx.name = 1, gx[K.g.Ha] = 1, gx[K.g.oh] = 1, gx[K.g.Ja] = 1, gx[K.g.ba] = 1, gx)),
        ix = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        Ww = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        jx = {},
        Pw = Object.freeze((jx.levels = 1, jx[K.g.Ma] = "duration", jx[K.g.ic] = 1, jx)),
        kx = {},
        lx = Object.freeze((kx.anonymize_ip = 1, kx.fatal = 1, kx.send_page_view = 1, kx.store_gac = 1, kx.use_amp_client_id = 1,
            kx[K.g.Ea] = 1, kx[K.g.ph] = 1, kx)),
        Qw = function(a, b, c, d) {
            if (void 0 !== c)
                if (lx[b] && (c = Ga(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Ew(b)] = c;
                else if (g(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        Ew = function(a) {
            return a && g(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        mx = {},
        Sw = Object.freeze((mx.checkout_progress = 1, mx.select_content = 1, mx.set_checkout_option = 1, mx[K.g.Xb] = 1, mx[K.g.Yb] = 1, mx[K.g.Ab] = 1, mx[K.g.Zb] = 1, mx[K.g.Va] = 1, mx[K.g.jb] = 1, mx[K.g.Wa] =
            1, mx[K.g.na] = 1, mx[K.g.ac] = 1, mx[K.g.Ca] = 1, mx)),
        nx = {},
        ox = Object.freeze((nx.checkout_progress = 1, nx.set_checkout_option = 1, nx[K.g.Lg] = 1, nx[K.g.Mg] = 1, nx[K.g.Xb] = 1, nx[K.g.Yb] = 1, nx[K.g.Ng] = 1, nx[K.g.Ab] = 1, nx[K.g.na] = 1, nx[K.g.ac] = 1, nx[K.g.Og] = 1, nx)),
        px = {},
        qx = Object.freeze((px.generate_lead = 1, px.login = 1, px.search = 1, px.select_content = 1, px.share = 1, px.sign_up = 1, px.view_search_results = 1, px[K.g.Zb] = 1, px[K.g.Va] = 1, px[K.g.jb] = 1, px[K.g.Wa] = 1, px[K.g.Ca] = 1, px)),
        rx = function(a) {
            var b = "general";
            ox[a] ? b = "ecommerce" : qx[a] ?
                b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        sx = {},
        tx = Object.freeze((sx.view_search_results = 1, sx[K.g.Va] = 1, sx[K.g.Wa] = 1, sx[K.g.Ca] = 1, sx)),
        Mw = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        ux = function(a) {
            if (za(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        Iw = function(a, b, c) {
            var d = function(L) {
                    return U(c, L)
                },
                e = {},
                f = {},
                h = {},
                l = {},
                m = ux(d(K.g.Kj));
            !c.isGtmEvent && m &&
                Mw(f, "exp", m);
            h["&gtm"] = oj(c.eventMetadata.source_canonical_id, !0);
            c.isGtmEvent || (h._no_slc = !0);
            Hf() && (l._cs = Yw);
            var n = d(K.g.Mc);
            if (!c.isGtmEvent && Za(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && Mw(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = Ih(c), u = 0; u < t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    ix.hasOwnProperty(v) ? e[v] = w : dx.hasOwnProperty(v) ? l[v] = w : h[v] = w
                } else {
                    var x = void 0;
                    x = v !== K.g.X ? d(v) : Jh(c, v);
                    if (hx.hasOwnProperty(v)) Qw(hx[v],
                        v, x, e);
                    else if (ex.hasOwnProperty(v)) Qw(ex[v], v, x, h);
                    else if (Dw.hasOwnProperty(v)) Qw(Dw[v], v, x, f);
                    else if (Cw.hasOwnProperty(v)) Qw(Cw[v], v, x, l);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) Qw(1, v, x, f);
                    else if (v === K.g.X) {
                        if (!Zw) {
                            var y = Ta(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === K.g.oa ? A = Ta(Jh(c, v), ".") : (A = Ta(Jh(c, v, 1), "."), B = Ta(Jh(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === K.g.Ra && 0 > t.indexOf(K.g.ic) && (l.cookieName = x + "_ga");
                    P(22) && ax[v] && (c.C.hasOwnProperty(v) || b === K.g.oa &&
                        c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            P(22) && r && (f["&jsscut"] = "1");
            !1 !== d(K.g.hf) && !1 !== d(K.g.Xa) && Bw() || (h.allowAdFeatures = !1);
            bj(c) ? P(26) && (h.allowAdPersonalizationSignals = !0) : h.allowAdPersonalizationSignals = !1;
            !c.isGtmEvent && d(K.g.vb) && (l._useUp = !0);
            if (c.isGtmEvent) {
                l.name = l.name || e.gtmTrackerName;
                var C = h.hitCallback;
                h.hitCallback = function() {
                    xa(C) && C();
                    c.onSuccess()
                }
            } else {
                Mw(l, "cookieDomain", "auto");
                Mw(h, "forceSSL", !0);
                Mw(e, "eventCategory", rx(b));
                tx[b] && Mw(f, "nonInteraction", !0);
                "login" === b || "sign_up" ===
                    b || "share" === b ? Mw(e, "eventLabel", d(K.g.oh)) : "search" === b || "view_search_results" === b ? Mw(e, "eventLabel", d(K.g.Sj)) : "select_content" === b && Mw(e, "eventLabel", d(K.g.Bj));
                var H = e[K.g.Ha] || {},
                    D = H[K.g.Tc];
                D || 0 != D && H[K.g.R] ? l.allowLinker = !0 : !1 === D && Mw(l, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                l.name = a
            }
            cj() && (h["&gcs"] = dj());
            h["&gcd"] = hj(c);
            Hf() && (Q(K.g.O) || (l.storage = "none"), Q(K.g.F) || (h.allowAdFeatures = !1, l.storeGac = !1));
            kj() && (h["&dma_cps"] = ij());
            h["&dma"] = jj();
            Hi(Pi()) && (h["&tcfd"] = lj());
            Qe.h && (h["&tag_exp"] =
                Qe.h);
            var I = xm(c) || d(K.g.cb),
                M = d(K.g.ie);
            I && (c.isGtmEvent || (l[K.g.cb] = I), l._cd2l = !0);
            M && !c.isGtmEvent && (l[K.g.ie] = M);
            e.fieldsToSend = f;
            e.fieldsToSet = h;
            e.createOnlyFields = l;
            return e
        },
        Nw = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Nf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.ri = "impressions" === b.translateIfKeyEquals ? Xw(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Nd = "promoView" === b.translateIfKeyEquals ?
                    Xw(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Nd = "promoClick" === b.translateIfKeyEquals ? Xw(f) : f;
                c.Ta = b.promoClick.actionField;
                return c
            }
            for (var h in b)
                if (b.hasOwnProperty(h) && "translateIfKeyEquals" !== h && "impressions" !== h && "promoView" !== h && "promoClick" !== h && "currencyCode" !== h) {
                    c.action = h;
                    var l = b[h].products;
                    c.Rb = "products" === b.translateIfKeyEquals ? Xw(l) : l;
                    c.Ta = b[h].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        Ow = function(a, b) {
            function c(u) {
                return {
                    id: d(K.g.sa),
                    affiliation: d(K.g.Sg),
                    revenue: d(K.g.ba),
                    tax: d(K.g.nf),
                    shipping: d(K.g.Pc),
                    coupon: d(K.g.Tg),
                    list: d(K.g.lf) || d(K.g.Oc) || u
                }
            }
            for (var d = function(u) {
                    return U(b, u)
                }, e = d(K.g.W), f, h = 0; e && h < e.length && !(f = e[h][K.g.lf] || e[h][K.g.Oc]); h++);
            var l = d(K.g.Mc);
            if (Za(l))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Mw(n, p, n[l[p]])
                }
            var q = null,
                r = d(K.g.Fj);
            if (a === K.g.na || a === K.g.ac) q = {
                action: a,
                Ta: c(),
                Rb: Xw(e)
            };
            else if (a === K.g.Xb) q = {
                action: "add",
                Ta: c(),
                Rb: Xw(e)
            };
            else if (a === K.g.Yb) q = {
                action: "remove",
                Ta: c(),
                Rb: Xw(e)
            };
            else if (a === K.g.Ca) q = {
                action: "detail",
                Ta: c(f),
                Rb: Xw(e)
            };
            else if (a === K.g.Va) q = {
                action: "impressions",
                ri: Xw(e)
            };
            else if (a === K.g.Wa) q = {
                action: "promo_view",
                Nd: Xw(r) || Xw(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === K.g.jb) q = {
                action: "promo_click",
                Nd: Xw(r) || Xw(e)
            };
            else if ("select_content" === a || a === K.g.Zb) q = {
                action: "click",
                Ta: {
                    list: d(K.g.lf) || d(K.g.Oc) || f
                },
                Rb: Xw(e)
            };
            else if (a === K.g.Ab || "checkout_progress" === a) {
                var t = {
                    step: a ===
                        K.g.Ab ? 1 : d(K.g.kf),
                    option: d(K.g.ae)
                };
                q = {
                    action: "checkout",
                    Rb: Xw(e),
                    Ta: z(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Ta: {
                    step: d(K.g.kf),
                    option: d(K.g.ae)
                }
            });
            q && (q.Nf = d(K.g.ra));
            return q
        },
        vx = {},
        Jw = function(a, b) {
            var c = vx[a];
            vx[a] = z(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        }; of ();

    function Bx() {
        return E.gaGlobal = E.gaGlobal || {}
    }
    var Cx = function() {
            var a = Bx();
            a.hid = a.hid || Ba();
            return a.hid
        },
        Dx = function(a, b) {
            var c = Bx();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var ky = function(a) {
            this.s = a;
            this.C = "";
            this.h = this.s
        },
        ly = function(a, b) {
            a.h = b;
            return a
        };

    function my(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function ny(a, b, c) {
        if (a) {
            var d = a || [],
                e = Za(b) ? b : {};
            if (Array.isArray(d))
                for (var f = 0; f < d.length; f++) c(d[f], e)
        }
    };
    var Cy = window,
        Dy = document,
        Ey = function(a) {
            var b = Cy._gaUserPrefs;
            if (b && b.ioo && b.ioo() || Dy.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Cy["ga-disable-" + a]) return !0;
            try {
                var c = Cy.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = qj("AMP_TOKEN", String(Dy.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Dy.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Ny(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[K.g.Sa] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var Vy = function(a, b) {};

    function Uy(a, b) {
        var c = function() {};
        return c
    }

    function Wy(a, b, c) {};
    var Xy = Uy;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Zy = encodeURI,
        X = encodeURIComponent,
        $y = function(a, b, c) {
            $b(a, b, c)
        },
        az = function(a, b) {
            if (!a) return !1;
            var c = mh(rh(a),
                "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        bz = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Y = {
        securityGroups: {}
    };

    Y.securityGroups.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(m("horiz.pix")).length || Object.keys(m("horiz.pct")).length || Object.keys(m("vert.pix")).length || Object.keys(m("vert.pct")).length)
            }

            function b(y) {
                for (var A = [], B = y.split(","), C = 0; C < B.length; C++) {
                    var H = Number(B[C]);
                    if (isNaN(H)) return [];
                    p.test(B[C]) || A.push(H)
                }
                return A
            }

            function c() {
                var y = 0,
                    A = 0;
                return function() {
                    var B = Bm(),
                        C = B.height;
                    y = Math.max(v.scrollLeft + B.width, y);
                    A = Math.max(v.scrollTop + C, A);
                    return {
                        Hk: y,
                        Ik: A
                    }
                }
            }

            function d() {
                t =
                    W("self");
                u = t.document;
                v = u.scrollingElement || u.body && u.body.parentNode;
                x = c()
            }

            function e(y, A, B, C) {
                var H = m(A),
                    D = {},
                    I;
                for (I in H)
                    if (D = {
                            Ac: D.Ac
                        }, D.Ac = I, H.hasOwnProperty(D.Ac)) {
                        var M = Number(D.Ac);
                        y < M || (pv({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": M,
                            "gtm.scrollUnits": B.toLowerCase(),
                            "gtm.scrollDirection": C,
                            "gtm.triggers": H[D.Ac].join(",")
                        }), Ou("sdl", A, function(L) {
                            return function(O) {
                                delete O[L.Ac];
                                return O
                            }
                        }(D), {}))
                    }
            }

            function f() {
                var y = x(),
                    A = y.Hk,
                    B = y.Ik,
                    C = A / v.scrollWidth * 100,
                    H = B / v.scrollHeight * 100;
                e(A, "horiz.pix", q.Ae, r.Ih);
                e(C, "horiz.pct", q.ze, r.Ih);
                e(B, "vert.pix", q.Ae, r.ai);
                e(H, "vert.pct", q.ze, r.ai);
                Nu("sdl", "pending", !1)
            }

            function h() {
                var y = 250,
                    A = !1;
                u.scrollingElement && u.documentElement && t.addEventListener && (y = 50, A = !0);
                var B = 0,
                    C = !1,
                    H = function() {
                        C ? B = jv(H, y) : (B = 0, f(), uv("sdl") && !a() && (bc(t, "scroll", D), bc(t, "resize", D), Nu("sdl", "init", !1)));
                        C = !1
                    },
                    D = function() {
                        A && x();
                        B ? C = !0 : (B = jv(H, y), Nu("sdl", "pending", !0))
                    };
                return D
            }

            function l(y, A, B) {
                if (A) {
                    var C = b(String(y));
                    Ou("sdl", B, function(H) {
                        for (var D =
                                0; D < C.length; D++) {
                            var I = String(C[D]);
                            H.hasOwnProperty(I) || (H[I] = []);
                            H[I].push(A)
                        }
                        return H
                    }, {})
                }
            }

            function m(y) {
                return Pu("sdl", y, {})
            }

            function n(y) {
                G(y.vtp_gtmOnSuccess);
                var A = y.vtp_uniqueTriggerId,
                    B = y.vtp_horizontalThresholdsPixels,
                    C = y.vtp_horizontalThresholdsPercent,
                    H = y.vtp_verticalThresholdUnits,
                    D = y.vtp_verticalThresholdsPixels,
                    I = y.vtp_verticalThresholdsPercent;
                switch (y.vtp_horizontalThresholdUnits) {
                    case q.Ae:
                        l(B, A, "horiz.pix");
                        break;
                    case q.ze:
                        l(C, A, "horiz.pct")
                }
                switch (H) {
                    case q.Ae:
                        l(D, A, "vert.pix");
                        break;
                    case q.ze:
                        l(I, A, "vert.pct")
                }
                uv("sdl") ? Pu("sdl", "pending") || (w || (d(), w = !0), G(function() {
                    return f()
                })) : (d(), w = !0, v && (vv("sdl"), Nu("sdl", "pending", !0), G(function() {
                    f();
                    if (a()) {
                        var M = h();
                        ac(t, "scroll", M);
                        ac(t, "resize", M)
                    } else Nu("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    ze: "PERCENT",
                    Ae: "PIXELS"
                },
                r = {
                    ai: "vertical",
                    Ih: "horizontal"
                },
                t, u, v, w = !1,
                x;
            (function(y) {
                Y.__sdl = y;
                Y.__sdl.m = "sdl";
                Y.__sdl.isVendorTemplate = !0;
                Y.__sdl.priorityOverride = 0;
                Y.__sdl.isInfrastructure = !1;
                Y.__sdl.runInSiloedMode = !1
            })(function(y) {
                y.vtp_triggerStartOption ?
                    n(y) : xt(function() {
                        n(y)
                    })
            })
        }();
    Y.securityGroups.jsm = ["customScripts"],
        function() {
            (function(a) {
                Y.__jsm = a;
                Y.__jsm.m = "jsm";
                Y.__jsm.isVendorTemplate = !0;
                Y.__jsm.priorityOverride = 0;
                Y.__jsm.isInfrastructure = !1;
                Y.__jsm.runInSiloedMode = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = W("google_tag_manager");
                        return c && c.e && c.e(b)
                    } catch (d) {}
                }
            })
        }();
    Y.securityGroups.e = ["google"],
        function() {
            (function(a) {
                Y.__e = a;
                Y.__e.m = "e";
                Y.__e.isVendorTemplate = !0;
                Y.__e.priorityOverride = 0;
                Y.__e.isInfrastructure = !0;
                Y.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Y.securityGroups.f = ["google"],
        function() {
            (function(a) {
                Y.__f = a;
                Y.__f.m = "f";
                Y.__f.isVendorTemplate = !0;
                Y.__f.priorityOverride = 0;
                Y.__f.isInfrastructure = !0;
                Y.__f.runInSiloedMode = !1
            })(function(a) {
                var b = ov("gtm.referrer", 1) || F.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? mh(rh(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : nv(String(b)) : String(b)
            })
        }();
    Y.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Y.__u = b;
                Y.__u.m = "u";
                Y.__u.isVendorTemplate = !0;
                Y.__u.priorityOverride = 0;
                Y.__u.isInfrastructure = !0;
                Y.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : ov("gtm.url", 1)) || lv();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return nv(String(c));
                var e = rh(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var h = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;h ? za(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = mh(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = mh(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Y.securityGroups.v = ["google"],
        function() {
            (function(a) {
                Y.__v = a;
                Y.__v.m = "v";
                Y.__v.isVendorTemplate = !0;
                Y.__v.priorityOverride = 0;
                Y.__v.isInfrastructure = !0;
                Y.__v.runInSiloedMode = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = ov(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();




    Y.securityGroups.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(lv());
                za(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !az(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return mh(rh(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, h);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return l(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return l(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return l(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return cc(r, "value");
                    case "button":
                        return dc(r);
                    default:
                        return null
                }
            }

            function h(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) Su(r.elements[u]) && t++;
                    return t
                }
            }

            function l(r, t, u) {
                var v = r.interactedFormField;
                return v && cc(v, t) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Y.__aev = r;
                Y.__aev.m = "aev";
                Y.__aev.isVendorTemplate = !0;
                Y.__aev.priorityOverride = 0;
                Y.__aev.isInfrastructure = !0;
                Y.__aev.runInSiloedMode = !1
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, dc) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                B = rh(A),
                                C = String(r.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = mh(B, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var H;
                        if (void 0 ===
                            r.vtp_attribute) H = b(w, v, u);
                        else {
                            var D = w.element;
                            H = D && cc(D, r.vtp_attribute) || u || ""
                        }
                        return H;
                    case "MD":
                        var I = r.vtp_mdValue,
                            M = a(w, t, "MD", dv);
                        return I && M ? gv(M, I) || u : M || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        return b(w, v, u)
                }
            })
        }();

    Y.securityGroups.hl = ["google"],
        function() {
            function a(f) {
                return f.target && f.target.location && f.target.location.href ? f.target.location.href : lv()
            }

            function b(f, h) {
                ac(f, "hashchange", function(l) {
                    var m = a(l);
                    h({
                        source: "hashchange",
                        state: null,
                        url: nv(m),
                        wa: mv(m)
                    })
                })
            }

            function c(f, h) {
                ac(f, "popstate", function(l) {
                    var m = a(l);
                    h({
                        source: "popstate",
                        state: l.state,
                        url: nv(m),
                        wa: mv(m)
                    })
                })
            }

            function d(f, h, l) {
                var m = h.history,
                    n = m[f];
                if (xa(n)) try {
                    m[f] = function(p, q, r) {
                        n.apply(m, [].slice.call(arguments, 0));
                        l({
                            source: f,
                            state: p,
                            url: nv(lv()),
                            wa: mv(lv())
                        })
                    }
                } catch (p) {}
            }

            function e() {
                var f = {
                    source: null,
                    state: W("history").state || null,
                    url: nv(lv()),
                    wa: mv(lv())
                };
                return function(h) {
                    var l = f,
                        m = {};
                    m[l.source] = !0;
                    m[h.source] = !0;
                    if (!m.popstate || !m.hashchange || l.wa != h.wa) {
                        var n = {
                            event: "gtm.historyChange",
                            "gtm.historyChangeSource": h.source,
                            "gtm.oldUrlFragment": f.wa,
                            "gtm.newUrlFragment": h.wa,
                            "gtm.oldHistoryState": f.state,
                            "gtm.newHistoryState": h.state,
                            "gtm.oldUrl": f.url,
                            "gtm.newUrl": h.url
                        };
                        f = h;
                        pv(n)
                    }
                }
            }(function(f) {
                Y.__hl = f;
                Y.__hl.m = "hl";
                Y.__hl.isVendorTemplate = !0;
                Y.__hl.priorityOverride = 0;
                Y.__hl.isInfrastructure = !1;
                Y.__hl.runInSiloedMode = !1
            })(function(f) {
                var h = W("self");
                if (!uv("hl")) {
                    var l = e();
                    b(h, l);
                    c(h, l);
                    d("pushState", h, l);
                    d("replaceState", h, l);
                    vv("hl")
                }
                G(f.vtp_gtmOnSuccess)
            })
        }();




    Y.securityGroups.lcl = [],
        function() {
            function a() {
                var e = W("document"),
                    f = 0,
                    h = P(64),
                    l = function(m) {
                        var n = m.target;
                        if (n && 3 !== m.which && !(m.wl || m.timeStamp && m.timeStamp === f)) {
                            f = m.timeStamp;
                            n = fc(n, ["a", "area"], 100);
                            if (!n) return m.returnValue;
                            var p = m.defaultPrevented || !1 === m.returnValue,
                                q = Pu("lcl", p ? "nv.mwt" : "mwt", 0),
                                r;
                            r = p ? Pu("lcl", "nv.ids", []) : Pu("lcl", "ids", []);
                            if (h) {
                                for (var t = [], u = Pu("lcl", "aff.map", {}), v = ia(r), w = v.next(); !w.done; w = v.next()) {
                                    var x = w.value,
                                        y = u[x];
                                    y && !b(m, y, n) || t.push(x)
                                }
                                r = t
                            }
                            if (r.length) {
                                var A =
                                    Lu(n, "gtm.linkClick", r),
                                    B = c(m, n, e);
                                h && (A["gtm.elementText"] = dc(n), A["gtm.willOpenInNewWindow"] = !B);
                                if (B && !p && q && n.href) {
                                    var C = !!Aa(String(hc(n, "rel") || "").split(" "), function(M) {
                                            return "noreferrer" === M.toLowerCase()
                                        }),
                                        H = W((hc(n, "target") || "_self").substring(1)),
                                        D = !0,
                                        I = Yt(function() {
                                            var M;
                                            if (M = D && H) {
                                                var L;
                                                a: if (C) {
                                                    var O;
                                                    try {
                                                        O = new MouseEvent(m.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (T) {
                                                        if (!e.createEvent) {
                                                            L = !1;
                                                            break a
                                                        }
                                                        O = e.createEvent("MouseEvents");
                                                        O.initEvent(m.type, !0, !0)
                                                    }
                                                    O.wl = !0;
                                                    m.target.dispatchEvent(O);
                                                    L = !0
                                                } else L = !1;
                                                M = !L
                                            }
                                            M && (H.location.href = hc(n, "href"))
                                        }, q);
                                    if (pv(A, I, q)) D = !1;
                                    else return m.preventDefault && m.preventDefault(), m.returnValue = !1
                                } else pv(A, function() {}, q || 2E3);
                                return !0
                            }
                        }
                    };
                ac(e, "click", l, !1);
                ac(e, "auxclick", l, !1)
            }

            function b(e, f, h) {
                for (var l = mh(rh((h.attributes && h.attributes.formaction ? h.formAction : "") || h.action || hc(h, "href") || h.src || h.code || h.codebase || ""), "host"), m = 0; m < f.length; m++) try {
                    if ((new RegExp(f[m])).test(l)) return !1
                } catch (n) {}
                return !0
            }

            function c(e, f, h) {
                if (2 === e.which || e.ctrlKey || e.shiftKey ||
                    e.altKey || e.metaKey) return !1;
                var l = hc(f, "href");
                if (-1 !== l.indexOf(":") && !d.some(function(r) {
                        return 0 === l.indexOf(r)
                    })) return !1;
                var m = l.indexOf("#"),
                    n = hc(f, "target");
                if (n && "_self" !== n && "_parent" !== n && "_top" !== n || 0 === m) return !1;
                if (0 < m) {
                    var p = nv(l),
                        q = nv(h.location);
                    return p !== q
                }
                return !0
            }
            var d = ["http://", "https://", "javascript:", "file://"];
            (function(e) {
                Y.__lcl = e;
                Y.__lcl.m = "lcl";
                Y.__lcl.isVendorTemplate = !0;
                Y.__lcl.priorityOverride = 0;
                Y.__lcl.isInfrastructure = !1;
                Y.__lcl.runInSiloedMode = !1
            })(function(e) {
                var f =
                    void 0 === e.vtp_waitForTags ? !0 : e.vtp_waitForTags,
                    h = void 0 === e.vtp_checkValidation ? !0 : e.vtp_checkValidation,
                    l = Number(e.vtp_waitForTagsTimeout);
                if (!l || 0 >= l) l = 2E3;
                var m = e.vtp_uniqueTriggerId || "0";
                if (f) {
                    var n = function(q) {
                        return Math.max(l, q)
                    };
                    Ou("lcl", "mwt", n, 0);
                    h || Ou("lcl", "nv.mwt", n, 0)
                }
                var p = function(q) {
                    q.push(m);
                    return q
                };
                Ou("lcl", "ids", p, []);
                h || Ou("lcl", "nv.ids", p, []);
                uv("lcl") || (a(), vv("lcl"));
                G(e.vtp_gtmOnSuccess)
            })
        }();



    Y.securityGroups.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!l[p] && m.hasOwnProperty(p)) {
                        var q = h[p] ? Ga(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && z(bz(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                z(bz(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Ga(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!(f || P(86) && vm() && n._x_19 && !m.vtp_useDebugVersion && !m.vtp_useInternalVersion)) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = vm() ? um(n._x_19, "/analytics.js") : void 0,
                        t = cm("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    V("analytics.js" === p && r ? r : t, function() {
                            var u = $r();
                            u && u.loaded || q();
                        },
                        q)
                }
            }
            var f, h = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                l = {
                    urlPassthrough: !0
                };
            (function(m) {
                Y.__ua = m;
                Y.__ua.m = "ua";
                Y.__ua.isVendorTemplate = !0;
                Y.__ua.priorityOverride = 0;
                Y.__ua.isInfrastructure = !1;
                Y.__ua.runInSiloedMode = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var t = m.vtp_gaSettings;
                    z(bz(t.vtp_contentGroup, "index", "group"), p);
                    z(bz(t.vtp_dimension, "index", "dimension"), q);
                    z(bz(t.vtp_metric, "index", "metric"), r);
                    var u = z(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = z(m, u)
                }
                z(bz(m.vtp_contentGroup, "index", "group"), p);
                z(bz(m.vtp_dimension, "index",
                    "dimension"), q);
                z(bz(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    x = "",
                    y = "",
                    A = "";
                m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + Oe(), y = A + ".");
                var B = function(ca, Z) {
                    for (var va in Z) Z.hasOwnProperty(va) && (v[ca + va] = Z[va])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event",
                    n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel), v.value = c(Fa, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = K.g.bc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var C = {};
                        C[K.g.R] = m.vtp_autoLinkDomains;
                        C.use_anchor = m.vtp_useHashAutoLink;
                        C[K.g.Eb] = m.vtp_decorateFormsAutoLink;
                        v[K.g.Ha] = C
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ?
                    (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) : "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Fa(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var H = {};
                a(v, H);
                v.name || (H.gtmTrackerName = A);
                H.gaFunctionName =
                    m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (H.nonInteraction = m.vtp_nonInteraction);
                var D = Wh(Vh(Uh(Th(Mh(new Lh(m.vtp_gtmEventId, m.vtp_gtmPriorityId), H), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
                P(86) && m.vtp_useDebugVersion && m.vtp_useInternalVersion && (D.eventMetadata.suppress_script_load = !0);
                Vw(w, x, Date.now(), D);
                var I = bs(m.vtp_functionName);
                if (xa(I)) {
                    var M = function(ca) {
                        var Z = [].slice.call(arguments, 0);
                        Z[0] = y + Z[0];
                        I.apply(window, Z)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" ==
                        m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else G(m.vtp_gtmOnFailure)
            })
        }();



    Y.securityGroups.gas = ["google"],
        function() {
            (function(a) {
                Y.__gas = a;
                Y.__gas.m = "gas";
                Y.__gas.isVendorTemplate = !0;
                Y.__gas.priorityOverride = 0;
                Y.__gas.isInfrastructure = !1;
                Y.__gas.runInSiloedMode = !1
            })(function(a) {
                var b = z(a),
                    c = b;
                c[mc.ka] = null;
                c[mc.Ff] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();






    var xA = {};
    xA.onHtmlSuccess = Ku(!0), xA.onHtmlFailure = Ku(!1);
    xA.dataLayer = Xe;
    xA.callback = function(a) {
        Me.hasOwnProperty(a) && xa(Me[a]) && Me[a]();
        delete Me[a]
    };
    xA.bootstrap = 0;
    xA._spx = !1;

    function yA() {
        xe[ug()] = xe[ug()] || xA;
        Ag();
        Eg() || k(Fg(), function(d, e) {
            Ir(d, e.transportUrl, e.context);
            J(92)
        });
        Oa(Ne, Y.securityGroups);
        var a = wg(Cg()),
            b, c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
        2 !== c && 4 !== c && 3 !== c || J(142);
        Gu(), Sc({
            xl: function(d) {
                return d === Eu
            },
            Fk: function(d) {
                return new Hu(d)
            },
            yl: function(d) {
                for (var e = !1, f = !1, h = 2; h < d.length; h++) e = e || 8 === d[h], f = f || 16 === d[h];
                return e && f
            },
            Vl: function(d) {
                var e;
                if (d === Eu) e = d;
                else {
                    var f = Oe();
                    Fu[f] = d;
                    e = 'google_tag_manager["rm"]["' +
                        vg() + '"](' + f + ")"
                }
                return e
            }
        });
        Uc = dd
    }
    (function(a) {
        function b() {
            m = F.documentElement.getAttribute("data-tag-assistant-present");
            gu(m) && (l = h.Uj)
        }
        if (!E["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (F.referrer) {
                var d = rh(F.referrer);
                c = "cct.google" === lh(d, "host")
            }
            if (!c) {
                var e = tj("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (E["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"))
        }
        if (He) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    De ? (v = "OGT", w = "GTAG") : He && (w = v = "OPT");
                    var x = E["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        E["google.tagmanager.debugui2.queue"] = x, Xb("https://" + we.Cc + "/debug/bootstrap?id=" + ng.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + oj()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Rb,
                            containerProduct: v,
                            debug: !1,
                            id: ng.ctid,
                            targetRef: {
                                ctid: ng.ctid,
                                isDestination: lg.ld
                            },
                            aliases: og(),
                            destinations: rg()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    we.Yi && (y.data.initialPublish = !0);
                    x.push(y)
                },
                h = {
                    Qm: 1,
                    Vj: 2,
                    jk: 3,
                    aj: 4,
                    Uj: 5
                },
                l = void 0,
                m = void 0,
                n = mh(E.location, "query", !1, void 0, "gtm_debug");
            gu(n) && (l = h.Vj);
            if (!l && F.referrer) {
                var p = rh(F.referrer);
                "tagassistant.google.com" === lh(p, "host") && (l = h.jk)
            }
            if (!l) {
                var q = tj("__TAG_ASSISTANT");
                q.length && q[0].length && (l = h.aj)
            }
            l || b();
            if (!l && hu(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        l && Rb ? f(l) : a()
                    },
                    t = !1;
                ac(F, "TADebugSignal", function() {
                    r()
                }, !1);
                E.setTimeout(function() {
                    r()
                }, 200)
            } else l && Rb ? f(l) : a()
        }
    })(function() {
        try {
            yg();
            if (P(16)) {}
            tf().s();
            Vi();
            (P(92) || P(93) || P(94)) &&
            ag();
            var a = vg();
            if (ig().canonical[a]) {
                var b = xe.zones;
                b && b.unregisterChild(qg());
                if (Oq()) Pq().removeExternalRestrictions(vg());
                else {
                    var c = Qq(vg());
                    c._event && (c._event.external = []);
                    c._entity && (c._entity.external = [])
                }
            } else {
                Qe.h = "";
                Qe.C = "";
                Qe.K = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Qe.J = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                dr();
                for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Jc.push(e[f]);
                for (var h = d.tags || [], l = 0; l < h.length; l++) Nc.push(h[l]);
                for (var m = d.predicates || [], n = 0; n < m.length; n++) Mc.push(m[n]);
                for (var p = d.rules || [], q = 0; q < p.length; q++) {
                    for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
                        var v = r[u][0];
                        t[v] = Array.prototype.slice.call(r[u], 1);
                        "if" !== v && "unless" !== v || Tc(t[v])
                    }
                    Lc.push(t)
                }
                Pc = Y;
                Qc = Tv;
                yA();
                if (P(24) && !He)
                    for (var w = !1 !== kf["6"] ? Re(Qe.J) : Re(Qe.K), x = 0; x < Sf.length; x++) {
                        var y = Sf[x],
                            A = y,
                            B = w[y] ? "granted" : "denied";
                        yf().implicit(A, B)
                    }
                fu();
                Jr = !1;
                Kr = 0;
                if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) Mr();
                else {
                    ac(F, "DOMContentLoaded", Mr);
                    ac(F, "readystatechange", Mr);
                    if (F.createEventObject && F.documentElement.doScroll) {
                        var C = !0;
                        try {
                            C = !E.frameElement
                        } catch (L) {}
                        C && Nr()
                    }
                    ac(E, "load", Mr)
                }
                ut = !1;
                "complete" === F.readyState ? wt() : ac(E, "load", wt);
                Og && (Jg(bh), E.setInterval(ah, 864E5));
                Jg(Vv);
                Jg(ns);
                Jg(yp);
                Jg(Zh);
                Jg(us);
                Jg(gh);
                Jg(bo);
                Jg(eh);
                P(29) && Jg(qs);
                P(102) && (Jg(Wv), Jg(Yv));
                Cu();
                jf(1);
                Ss();
                Le = La();
                xA.bootstrap = Le;
                if (P(16)) {}
            }
        } catch (L) {
            if (jf(4),
                Og) {
                var M = Wg(!0, !0);
                $b(M)
            }
        }
    });

})()