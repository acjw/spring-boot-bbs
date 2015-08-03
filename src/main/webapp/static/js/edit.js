!
    function(e) {
        function t(e) {
            return e = C ? e.replace("Ctrl", "Cmd") : e.replace("Cmd", "Ctrl")
        }
        function r(e, r) {
            r = r || {};
            var n = document.createElement("a"),
                i = r.shortcut || w[e];
            return i && (i = t(i), n.title = i, n.title = n.title.replace("Cmd", "⌘"), C && (n.title = n.title.replace("Alt", "⌥"))),
                n.className = r.className || "eicon-" + e,
                n
        }
        function n() {
            return el = document.createElement("i"),
                el.className = "separator",
                el.innerHTML = "|",
                el
        }
        function i(e, t) {
            t = t || e.getCursor("start");
            var r = e.getTokenAt(t);
            if (!r.type) return {};
            for (var n, i, o = r.type.split(" "), l = {},
                     a = 0; a < o.length; a++) n = o[a],
                "strong" === n ? l.bold = !0 : "variable-2" === n ? (i = e.getLine(t.line), /^\s*\d+\.\s/.test(i) ? l["ordered-list"] = !0 : l["unordered-list"] = !0) : "atom" === n ? l.quote = !0 : "em" === n && (l.italic = !0);
            return l
        }
        function o(e) {
            var t = e.codemirror.getWrapperElement(),
                r = document,
                n = r.fullScreen || r.mozFullScreen || r.webkitFullScreen,
                i = function() {
                    t.requestFullScreen ? t.requestFullScreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen && t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                },
                o = function() {
                    r.cancelFullScreen ? r.cancelFullScreen() : r.mozCancelFullScreen ? r.mozCancelFullScreen() : r.webkitCancelFullScreen && r.webkitCancelFullScreen()
                };
            n ? o && o() : i()
        }
        function l(e) {
            var t, r = e.codemirror,
                n = i(r),
                o = "**",
                l = "**",
                a = r.getCursor("start"),
                s = r.getCursor("end");
            n.bold ? (t = r.getLine(a.line), o = t.slice(0, a.ch), l = t.slice(a.ch), o = o.replace(/^(.*)?(\*|\_){2}(\S+.*)?$/, "$1$3"), l = l.replace(/^(.*\S+)?(\*|\_){2}(\s+.*)?$/, "$1$3"), a.ch -= 2, s.ch -= 2, r.setLine(a.line, o + l)) : (t = r.getSelection(), r.replaceSelection(o + t + l), a.ch += 2, s.ch += 2),
                r.setSelection(a, s),
                r.focus()
        }
        function a(e) {
            var t, r = e.codemirror,
                n = i(r),
                o = "*",
                l = "*",
                a = r.getCursor("start"),
                s = r.getCursor("end");
            n.italic ? (t = r.getLine(a.line), o = t.slice(0, a.ch), l = t.slice(a.ch), o = o.replace(/^(.*)?(\*|\_)(\S+.*)?$/, "$1$3"), l = l.replace(/^(.*\S+)?(\*|\_)(\s+.*)?$/, "$1$3"), a.ch -= 1, s.ch -= 1, r.setLine(a.line, o + l)) : (t = r.getSelection(), r.replaceSelection(o + t + l), a.ch += 1, s.ch += 1),
                r.setSelection(a, s),
                r.focus()
        }
        function s(e) {
            var t = e.codemirror;
            v(t, "quote")
        }
        function c(e) {
            var t = e.codemirror;
            v(t, "unordered-list")
        }
        function u(e) {
            var t = e.codemirror;
            v(t, "ordered-list")
        }
        function f(e) {
            var t = e.codemirror,
                r = i(t);
            g(t, r.link, "[", "](http://)")
        }
        function h(e) {
            var t = e.codemirror,
                r = i(t);
            g(t, r.image, "![", "](http://)")
        }
        function d(e) {
            var t = e.codemirror;
            t.undo(),
                t.focus()
        }
        function p(e) {
            var t = e.codemirror;
            t.redo(),
                t.focus()
        }
        function m(e) {
            var t = e.toolbar.preview,
                r = e.constructor.markdown,
                n = e.codemirror,
                i = n.getWrapperElement(),
                o = i.lastChild;
            /editor-preview/.test(o.className) || (o = document.createElement("div"), o.className = "editor-preview", i.appendChild(o)),
                /editor-preview-active/.test(o.className) ? (o.className = o.className.replace(/\s*editor-preview-active\s*/g, ""), t.className = t.className.replace(/\s*active\s*/g, "")) : (setTimeout(function() {
                        o.className += " editor-preview-active"
                    },
                    1), t.className += " active");
            var l = n.getValue();
            o.innerHTML = r(l)
        }
        function g(e, t, r, n) {
            var i, o = e.getCursor("start"),
                l = e.getCursor("end");
            t ? (i = e.getLine(o.line), r = i.slice(0, o.ch), n = i.slice(o.ch), e.setLine(o.line, r + n)) : (i = e.getSelection(), e.replaceSelection(r + i + n), o.ch += r.length, l.ch += r.length),
                e.setSelection(o, l),
                e.focus()
        }
        function v(e, t) {
            for (var r = i(e), n = e.getCursor("start"), o = e.getCursor("end"), l = {
                    quote: /^(\s*)\>\s+/,
                    "unordered-list": /^(\s*)(\*|\-|\+)\s+/,
                    "ordered-list": /^(\s*)\d+\.\s+/
                },
                     a = {
                         quote: "> ",
                         "unordered-list": "* ",
                         "ordered-list": "1. "
                     },
                     s = n.line; s <= o.line; s++) !
                function(n) {
                    var i = e.getLine(n);
                    i = r[t] ? i.replace(l[t], "$1") : a[t] + i,
                        e.setLine(n, i)
                } (s);
            e.focus()
        }
        function y(e) {
            var t = /[a-zA-Z0-9_\u0392-\u03c9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,
                r = e.match(t),
                n = 0;
            if (null === r) return n;
            for (var i = 0; i < r.length; i++) n += r[i].charCodeAt(0) >= 19968 ? r[i].length: 1;
            return n
        }
        function b(e) {
            e = e || {},
            e.element && (this.element = e.element),
                e.toolbar = e.toolbar || b.toolbar,
            e.hasOwnProperty("status") || (e.status = ["lines", "words", "cursor"]),
                this.options = e,
            this.element && this.render()
        }
        var x = function() {
            "use strict";
            function e(r, n) {
                if (! (this instanceof e)) return new e(r, n);
                this.options = n = n || {};
                for (var i in no) ! n.hasOwnProperty(i) && no.hasOwnProperty(i) && (n[i] = no[i]);
                h(n);
                var o = "string" == typeof n.value ? 0 : n.value.first,
                    l = this.display = t(r, o);
                l.wrapper.CodeMirror = this,
                    c(this),
                n.autofocus && !Fi && dt(this),
                    this.state = {
                        keyMaps: [],
                        overlays: [],
                        modeGen: 0,
                        overwrite: !1,
                        focused: !1,
                        suppressEdits: !1,
                        pasteIncoming: !1,
                        draggingText: !1,
                        highlight: new Un
                    },
                    a(this),
                n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap");
                var s = n.value;
                "string" == typeof s && (s = new yo(n.value, n.mode)),
                    ot(this, un)(this, s),
                ki && setTimeout(ei(ht, this, !0), 20),
                    mt(this);
                var u;
                try {
                    u = document.activeElement == l.input
                } catch(f) {}
                u || n.autofocus && !Fi ? setTimeout(ei(Wt, this), 20) : Dt(this),
                    ot(this,
                        function() {
                            for (var e in ro) ro.propertyIsEnumerable(e) && ro[e](this, n[e], io);
                            for (var t = 0; t < so.length; ++t) so[t](this)
                        })()
            }
            function t(e, t) {
                var r = {},
                    n = r.input = ni("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none; font-size: 4px;");
                return Ti ? n.style.width = "1000px": n.setAttribute("wrap", "off"),
                Ii && (n.style.border = "1px solid black"),
                    n.setAttribute("autocorrect", "off"),
                    n.setAttribute("autocapitalize", "off"),
                    n.setAttribute("spellcheck", "false"),
                    r.inputDiv = ni("div", [n], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"),
                    r.scrollbarH = ni("div", [ni("div", null, null, "height: 1px")], "CodeMirror-hscrollbar"),
                    r.scrollbarV = ni("div", [ni("div", null, null, "width: 1px")], "CodeMirror-vscrollbar"),
                    r.scrollbarFiller = ni("div", null, "CodeMirror-scrollbar-filler"),
                    r.gutterFiller = ni("div", null, "CodeMirror-gutter-filler"),
                    r.lineDiv = ni("div", null, "CodeMirror-code"),
                    r.selectionDiv = ni("div", null, null, "position: relative; z-index: 1"),
                    r.cursor = ni("div", " ", "CodeMirror-cursor"),
                    r.otherCursor = ni("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"),
                    r.measure = ni("div", null, "CodeMirror-measure"),
                    r.lineSpace = ni("div", [r.measure, r.selectionDiv, r.lineDiv, r.cursor, r.otherCursor], null, "position: relative; outline: none"),
                    r.mover = ni("div", [ni("div", [r.lineSpace], "CodeMirror-lines")], null, "position: relative"),
                    r.sizer = ni("div", [r.mover], "CodeMirror-sizer"),
                    r.heightForcer = ni("div", null, null, "position: absolute; height: " + Lo + "px; width: 1px;"),
                    r.gutters = ni("div", null, "CodeMirror-gutters"),
                    r.lineGutter = null,
                    r.scroller = ni("div", [r.sizer, r.heightForcer, r.gutters], "CodeMirror-scroll"),
                    r.scroller.setAttribute("tabIndex", "-1"),
                    r.wrapper = ni("div", [r.inputDiv, r.scrollbarH, r.scrollbarV, r.scrollbarFiller, r.gutterFiller, r.scroller], "CodeMirror"),
                Si && (r.gutters.style.zIndex = -1, r.scroller.style.paddingRight = 0),
                    e.appendChild ? e.appendChild(r.wrapper) : e(r.wrapper),
                Ii && (n.style.width = "0px"),
                Ti || (r.scroller.draggable = !0),
                    Di ? (r.inputDiv.style.height = "1px", r.inputDiv.style.position = "absolute") : Si && (r.scrollbarH.style.minWidth = r.scrollbarV.style.minWidth = "18px"),
                    r.viewOffset = r.lastSizeC = 0,
                    r.showingFrom = r.showingTo = t,
                    r.lineNumWidth = r.lineNumInnerWidth = r.lineNumChars = null,
                    r.prevInput = "",
                    r.alignWidgets = !1,
                    r.pollingFast = !1,
                    r.poll = new Un,
                    r.cachedCharWidth = r.cachedTextHeight = null,
                    r.measureLineCache = [],
                    r.measureLineCachePos = 0,
                    r.inaccurateSelection = !1,
                    r.maxLine = null,
                    r.maxLineLength = 0,
                    r.maxLineChanged = !1,
                    r.wheelDX = r.wheelDY = r.wheelStartX = r.wheelStartY = null,
                    r
            }
            function r(t) {
                t.doc.mode = e.getMode(t.options, t.doc.modeOption),
                    t.doc.iter(function(e) {
                        e.stateAfter && (e.stateAfter = null),
                        e.styles && (e.styles = null)
                    }),
                    t.doc.frontier = t.doc.first,
                    D(t, 100),
                    t.state.modeGen++,
                t.curOp && st(t)
            }
            function n(e) {
                e.options.lineWrapping ? (e.display.wrapper.className += " CodeMirror-wrap", e.display.sizer.style.minWidth = "") : (e.display.wrapper.className = e.display.wrapper.className.replace(" CodeMirror-wrap", ""), f(e)),
                    o(e),
                    st(e),
                    U(e),
                    setTimeout(function() {
                            d(e)
                        },
                        100)
            }
            function i(e) {
                var t = tt(e.display),
                    r = e.options.lineWrapping,
                    n = r && Math.max(5, e.display.scroller.clientWidth / rt(e.display) - 3);
                return function(i) {
                    return Br(e.doc, i) ? 0 : r ? (Math.ceil(i.text.length / n) || 1) * t: t
                }
            }
            function o(e) {
                var t = e.doc,
                    r = i(e);
                t.iter(function(e) {
                    var t = r(e);
                    t != e.height && pn(e, t)
                })
            }
            function l(e) {
                var t = fo[e.options.keyMap],
                    r = t.style;
                e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") + (r ? " cm-keymap-" + r: ""),
                    e.state.disableInput = t.disableInput
            }
            function a(e) {
                e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
                    U(e)
            }
            function s(e) {
                c(e),
                    st(e),
                    setTimeout(function() {
                            m(e)
                        },
                        20)
            }
            function c(e) {
                var t = e.display.gutters,
                    r = e.options.gutters;
                ii(t);
                for (var n = 0; n < r.length; ++n) {
                    var i = r[n],
                        o = t.appendChild(ni("div", null, "CodeMirror-gutter " + i));
                    "CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px")
                }
                t.style.display = n ? "": "none"
            }
            function u(e, t) {
                if (0 == t.height) return 0;
                for (var r, n = t.text.length,
                         i = t; r = Ir(i);) {
                    var o = r.find();
                    i = fn(e, o.from.line),
                        n += o.from.ch - o.to.ch
                }
                for (i = t; r = Fr(i);) {
                    var o = r.find();
                    n -= i.text.length - o.from.ch,
                        i = fn(e, o.to.line),
                        n += i.text.length - o.to.ch
                }
                return n
            }
            function f(e) {
                var t = e.display,
                    r = e.doc;
                t.maxLine = fn(r, r.first),
                    t.maxLineLength = u(r, t.maxLine),
                    t.maxLineChanged = !0,
                    r.iter(function(e) {
                        var n = u(r, e);
                        n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
                    })
            }
            function h(e) {
                for (var t = !1,
                         r = 0; r < e.gutters.length; ++r)"CodeMirror-linenumbers" == e.gutters[r] && (e.lineNumbers ? t = !0 : e.gutters.splice(r--, 1)); ! t && e.lineNumbers && e.gutters.push("CodeMirror-linenumbers")
            }
            function d(e) {
                var t = e.display,
                    r = e.doc.height,
                    n = r + F(t);
                t.sizer.style.minHeight = t.heightForcer.style.top = n + "px",
                    t.gutters.style.height = Math.max(n, t.scroller.clientHeight - Lo) + "px";
                var i = Math.max(n, t.scroller.scrollHeight),
                    o = t.scroller.scrollWidth > t.scroller.clientWidth + 1,
                    l = i > t.scroller.clientHeight + 1;
                l ? (t.scrollbarV.style.display = "block", t.scrollbarV.style.bottom = o ? ci(t.measure) + "px": "0", t.scrollbarV.firstChild.style.height = i - t.scroller.clientHeight + t.scrollbarV.clientHeight + "px") : t.scrollbarV.style.display = "",
                    o ? (t.scrollbarH.style.display = "block", t.scrollbarH.style.right = l ? ci(t.measure) + "px": "0", t.scrollbarH.firstChild.style.width = t.scroller.scrollWidth - t.scroller.clientWidth + t.scrollbarH.clientWidth + "px") : t.scrollbarH.style.display = "",
                    o && l ? (t.scrollbarFiller.style.display = "block", t.scrollbarFiller.style.height = t.scrollbarFiller.style.width = ci(t.measure) + "px") : t.scrollbarFiller.style.display = "",
                    o && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (t.gutterFiller.style.display = "block", t.gutterFiller.style.height = ci(t.measure) + "px", t.gutterFiller.style.width = t.gutters.offsetWidth + "px") : t.gutterFiller.style.display = "",
                Oi && 0 === ci(t.measure) && (t.scrollbarV.style.minWidth = t.scrollbarH.style.minHeight = Ei ? "18px": "12px")
            }
            function p(e, t, r) {
                var n = e.scroller.scrollTop,
                    i = e.wrapper.clientHeight;
                "number" == typeof r ? n = r: r && (n = r.top, i = r.bottom - r.top),
                    n = Math.floor(n - I(e));
                var o = Math.ceil(n + i);
                return {
                    from: gn(t, n),
                    to: gn(t, o)
                }
            }
            function m(e) {
                var t = e.display;
                if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                    for (var r = y(t) - t.scroller.scrollLeft + e.doc.scrollLeft, n = t.gutters.offsetWidth, i = r + "px", o = t.lineDiv.firstChild; o; o = o.nextSibling) if (o.alignable) for (var l = 0,
                                                                                                                                                                                                     a = o.alignable; l < a.length; ++l) a[l].style.left = i;
                    e.options.fixedGutter && (t.gutters.style.left = r + n + "px")
                }
            }
            function g(e) {
                if (!e.options.lineNumbers) return ! 1;
                var t = e.doc,
                    r = v(e.options, t.first + t.size - 1),
                    n = e.display;
                if (r.length != n.lineNumChars) {
                    var i = n.measure.appendChild(ni("div", [ni("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                        o = i.firstChild.offsetWidth,
                        l = i.offsetWidth - o;
                    return n.lineGutter.style.width = "",
                        n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l),
                        n.lineNumWidth = n.lineNumInnerWidth + l,
                        n.lineNumChars = n.lineNumInnerWidth ? r.length: -1,
                        n.lineGutter.style.width = n.lineNumWidth + "px",
                        !0
                }
                return ! 1
            }
            function v(e, t) {
                return String(e.lineNumberFormatter(t + e.firstLineNumber))
            }
            function y(e) {
                return ai(e.scroller).left - ai(e.sizer).left
            }
            function b(e, t, r, n) {
                for (var i, o = e.display.showingFrom,
                         l = e.display.showingTo,
                         a = p(e.display, e.doc, r); x(e, t, a, n) && (n = !1, i = !0, N(e), d(e), r && (r = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, "number" == typeof r ? r: r.top)), a = p(e.display, e.doc, r), !(a.from >= e.display.showingFrom && a.to <= e.display.showingTo));) t = [];
                return i && (Rn(e, "update", e), (e.display.showingFrom != o || e.display.showingTo != l) && Rn(e, "viewportChange", e, e.display.showingFrom, e.display.showingTo)),
                    i
            }
            function x(e, t, r, n) {
                var i = e.display,
                    o = e.doc;
                if (!i.wrapper.clientWidth) return i.showingFrom = i.showingTo = o.first,
                    i.viewOffset = 0,
                    void 0;
                if (! (!n && 0 == t.length && r.from > i.showingFrom && r.to < i.showingTo)) {
                    g(e) && (t = [{
                        from: o.first,
                        to: o.first + o.size
                    }]);
                    var l = i.sizer.style.marginLeft = i.gutters.offsetWidth + "px";
                    i.scrollbarH.style.left = e.options.fixedGutter ? l: "0";
                    var a = 1 / 0;
                    if (e.options.lineNumbers) for (var s = 0; s < t.length; ++s) if (t[s].diff) {
                        a = t[s].from;
                        break
                    }
                    var c = o.first + o.size,
                        u = Math.max(r.from - e.options.viewportMargin, o.first),
                        f = Math.min(c, r.to + e.options.viewportMargin);
                    if (i.showingFrom < u && u - i.showingFrom < 20 && (u = Math.max(o.first, i.showingFrom)), i.showingTo > f && i.showingTo - f < 20 && (f = Math.min(c, i.showingTo)), $i) for (u = mn(Pr(o, fn(o, u))); c > f && Br(o, fn(o, f));)++f;
                    var h = [{
                        from: Math.max(i.showingFrom, o.first),
                        to: Math.min(i.showingTo, c)
                    }];
                    if (h = h[0].from >= h[0].to ? [] : L(h, t), $i) for (var s = 0; s < h.length; ++s) for (var d, p = h[s]; d = Fr(fn(o, p.to - 1));) {
                        var m = d.find().from.line;
                        if (! (m > p.from)) {
                            h.splice(s--, 1);
                            break
                        }
                        p.to = m
                    }
                    for (var v = 0,
                             s = 0; s < h.length; ++s) {
                        var p = h[s];
                        p.from < u && (p.from = u),
                        p.to > f && (p.to = f),
                            p.from >= p.to ? h.splice(s--, 1) : v += p.to - p.from
                    }
                    if (!n && v == f - u && u == i.showingFrom && f == i.showingTo) return w(e),
                        void 0;
                    h.sort(function(e, t) {
                        return e.from - t.from
                    });
                    try {
                        var y = document.activeElement
                    } catch(b) {}.7 * (f - u) > v && (i.lineDiv.style.display = "none"),
                        S(e, u, f, h, a),
                        i.lineDiv.style.display = "",
                    y && document.activeElement != y && y.offsetHeight && y.focus();
                    var x = u != i.showingFrom || f != i.showingTo || i.lastSizeC != i.wrapper.clientHeight;
                    return x && (i.lastSizeC = i.wrapper.clientHeight, D(e, 400)),
                        i.showingFrom = u,
                        i.showingTo = f,
                        C(e),
                        w(e),
                        !0
                }
            }
            function C(e) {
                for (var t, r = e.display,
                         n = r.lineDiv.offsetTop,
                         i = r.lineDiv.firstChild; i; i = i.nextSibling) if (i.lineObj) {
                    if (Si) {
                        var o = i.offsetTop + i.offsetHeight;
                        t = o - n,
                            n = o
                    } else {
                        var l = ai(i);
                        t = l.bottom - l.top
                    }
                    var a = i.lineObj.height - t;
                    if (2 > t && (t = tt(r)), a > .001 || -.001 > a) {
                        pn(i.lineObj, t);
                        var s = i.lineObj.widgets;
                        if (s) for (var c = 0; c < s.length; ++c) s[c].height = s[c].node.offsetHeight
                    }
                }
            }
            function w(e) {
                var t = e.display.viewOffset = vn(e, fn(e.doc, e.display.showingFrom));
                e.display.mover.style.top = t + "px"
            }
            function L(e, t) {
                for (var r = 0,
                         n = t.length || 0; n > r; ++r) {
                    for (var i = t[r], o = [], l = i.diff || 0, a = 0, s = e.length; s > a; ++a) {
                        var c = e[a];
                        i.to <= c.from && i.diff ? o.push({
                            from: c.from + l,
                            to: c.to + l
                        }) : i.to <= c.from || i.from >= c.to ? o.push(c) : (i.from > c.from && o.push({
                            from: c.from,
                            to: i.from
                        }), i.to < c.to && o.push({
                            from: i.to + l,
                            to: c.to + l
                        }))
                    }
                    e = o
                }
                return e
            }
            function k(e) {
                for (var t = e.display,
                         r = {},
                         n = {},
                         i = t.gutters.firstChild,
                         o = 0; i; i = i.nextSibling, ++o) r[e.options.gutters[o]] = i.offsetLeft,
                    n[e.options.gutters[o]] = i.offsetWidth;
                return {
                    fixedPos: y(t),
                    gutterTotalWidth: t.gutters.offsetWidth,
                    gutterLeft: r,
                    gutterWidth: n,
                    wrapperWidth: t.wrapper.clientWidth
                }
            }
            function S(e, t, r, n, i) {
                function o(t) {
                    var r = t.nextSibling;
                    return Ti && Pi && e.display.currentWheelTarget == t ? (t.style.display = "none", t.lineObj = null) : t.parentNode.removeChild(t),
                        r
                }
                var l = k(e),
                    a = e.display,
                    s = e.options.lineNumbers;
                n.length || Ti && e.display.currentWheelTarget || ii(a.lineDiv);
                var c = a.lineDiv,
                    u = c.firstChild,
                    f = n.shift(),
                    h = t;
                for (e.doc.iter(t, r,
                    function(t) {
                        if (f && f.to == h && (f = n.shift()), Br(e.doc, t)) {
                            if (0 != t.height && pn(t, 0), t.widgets && u.previousSibling) for (var r = 0; r < t.widgets.length; ++r) {
                                var a = t.widgets[r];
                                if (a.showIfHidden) {
                                    var d = u.previousSibling;
                                    if (/pre/i.test(d.nodeName)) {
                                        var p = ni("div", null, null, "position: relative");
                                        d.parentNode.replaceChild(p, d),
                                            p.appendChild(d),
                                            d = p
                                    }
                                    var m = d.appendChild(ni("div", [a.node], "CodeMirror-linewidget"));
                                    a.handleMouseEvents || (m.ignoreEvents = !0),
                                        T(a, m, d, l)
                                }
                            }
                        } else if (f && f.from <= h && f.to > h) {
                            for (; u.lineObj != t;) u = o(u);
                            s && h >= i && u.lineNumber && li(u.lineNumber, v(e.options, h)),
                                u = u.nextSibling
                        } else {
                            if (t.widgets) for (var g, y = 0,
                                                    b = u; b && 20 > y; ++y, b = b.nextSibling) if (b.lineObj == t && /div/i.test(b.nodeName)) {
                                g = b;
                                break
                            }
                            var x = M(e, t, h, l, g);
                            if (x != g) c.insertBefore(x, u);
                            else {
                                for (; u != g;) u = o(u);
                                u = u.nextSibling
                            }
                            x.lineObj = t
                        }++h
                    }); u;) u = o(u)
            }
            function M(e, t, r, n, i) {
                var o, l = Qr(e, t),
                    a = t.gutterMarkers,
                    s = e.display;
                if (! (e.options.lineNumbers || a || t.bgClass || t.wrapClass || t.widgets)) return l;
                if (i) {
                    i.alignable = null;
                    for (var c, u = !0,
                             f = 0,
                             h = null,
                             d = i.firstChild; d; d = c) if (c = d.nextSibling, /\bCodeMirror-linewidget\b/.test(d.className)) {
                        for (var p = 0; p < t.widgets.length; ++p) {
                            var m = t.widgets[p];
                            if (m.node == d.firstChild) {
                                m.above || h || (h = d),
                                    T(m, d, i, n),
                                    ++f;
                                break
                            }
                        }
                        if (p == t.widgets.length) {
                            u = !1;
                            break
                        }
                    } else i.removeChild(d);
                    i.insertBefore(l, h),
                    u && f == t.widgets.length && (o = i, i.className = t.wrapClass || "")
                }
                if (o || (o = ni("div", null, t.wrapClass, "position: relative"), o.appendChild(l)), t.bgClass && o.insertBefore(ni("div", null, t.bgClass + " CodeMirror-linebackground"), o.firstChild), e.options.lineNumbers || a) {
                    var g = o.insertBefore(ni("div", null, null, "position: absolute; left: " + (e.options.fixedGutter ? n.fixedPos: -n.gutterTotalWidth) + "px"), o.firstChild);
                    if (e.options.fixedGutter && (o.alignable || (o.alignable = [])).push(g), !e.options.lineNumbers || a && a["CodeMirror-linenumbers"] || (o.lineNumber = g.appendChild(ni("div", v(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + s.lineNumInnerWidth + "px"))), a) for (var y = 0; y < e.options.gutters.length; ++y) {
                        var b = e.options.gutters[y],
                            x = a.hasOwnProperty(b) && a[b];
                        x && g.appendChild(ni("div", [x], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[b] + "px; width: " + n.gutterWidth[b] + "px"))
                    }
                }
                if (Si && (o.style.zIndex = 2), t.widgets && o != i) for (var p = 0,
                                                                              C = t.widgets; p < C.length; ++p) {
                    var m = C[p],
                        w = ni("div", [m.node], "CodeMirror-linewidget");
                    m.handleMouseEvents || (w.ignoreEvents = !0),
                        T(m, w, o, n),
                        m.above ? o.insertBefore(w, e.options.lineNumbers && 0 != t.height ? g: l) : o.appendChild(w),
                        Rn(m, "redraw")
                }
                return o
            }
            function T(e, t, r, n) {
                if (e.noHScroll) { (r.alignable || (r.alignable = [])).push(t);
                    var i = n.wrapperWidth;
                    t.style.left = n.fixedPos + "px",
                    e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"),
                        t.style.width = i + "px"
                }
                e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
            }
            function N(e) {
                var t = e.display,
                    r = Ut(e.doc.sel.from, e.doc.sel.to);
                if (r || e.options.showCursorWhenSelecting ? A(e) : t.cursor.style.display = t.otherCursor.style.display = "none", r ? t.selectionDiv.style.display = "none": H(e), e.options.moveInputWithCursor) {
                    var n = Z(e, e.doc.sel.head, "div"),
                        i = ai(t.wrapper),
                        o = ai(t.lineDiv);
                    t.inputDiv.style.top = Math.max(0, Math.min(t.wrapper.clientHeight - 10, n.top + o.top - i.top)) + "px",
                        t.inputDiv.style.left = Math.max(0, Math.min(t.wrapper.clientWidth - 10, n.left + o.left - i.left)) + "px"
                }
            }
            function A(e) {
                var t = e.display,
                    r = Z(e, e.doc.sel.head, "div");
                t.cursor.style.left = r.left + "px",
                    t.cursor.style.top = r.top + "px",
                    t.cursor.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px",
                    t.cursor.style.display = "",
                    r.other ? (t.otherCursor.style.display = "", t.otherCursor.style.left = r.other.left + "px", t.otherCursor.style.top = r.other.top + "px", t.otherCursor.style.height = .85 * (r.other.bottom - r.other.top) + "px") : t.otherCursor.style.display = "none"
            }
            function H(e) {
                function t(e, t, r, n) {
                    0 > t && (t = 0),
                        l.appendChild(ni("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == r ? a - e: r) + "px; height: " + (n - t) + "px"))
                }
                function r(r, n, o) {
                    function l(t, n) {
                        return Y(e, Kt(r, t), "div", f, n)
                    }
                    var c, u, f = fn(i, r),
                        h = f.text.length;
                    return fi(yn(f), n || 0, null == o ? h: o,
                        function(e, r, i) {
                            var f, d, p, m = l(e, "left");
                            if (e == r) f = m,
                                d = p = m.left;
                            else {
                                if (f = l(r - 1, "right"), "rtl" == i) {
                                    var g = m;
                                    m = f,
                                        f = g
                                }
                                d = m.left,
                                    p = f.right
                            }
                            null == n && 0 == e && (d = s),
                            f.top - m.top > 3 && (t(d, m.top, null, m.bottom), d = s, m.bottom < f.top && t(d, m.bottom, null, f.top)),
                            null == o && r == h && (p = a),
                            (!c || m.top < c.top || m.top == c.top && m.left < c.left) && (c = m),
                            (!u || f.bottom > u.bottom || f.bottom == u.bottom && f.right > u.right) && (u = f),
                            s + 1 > d && (d = s),
                                t(d, f.top, p - d, f.bottom)
                        }),
                    {
                        start: c,
                        end: u
                    }
                }
                var n = e.display,
                    i = e.doc,
                    o = e.doc.sel,
                    l = document.createDocumentFragment(),
                    a = n.lineSpace.offsetWidth,
                    s = P(e.display);
                if (o.from.line == o.to.line) r(o.from.line, o.from.ch, o.to.ch);
                else {
                    var c = fn(i, o.from.line),
                        u = fn(i, o.to.line),
                        f = Pr(i, c) == Pr(i, u),
                        h = r(o.from.line, o.from.ch, f ? c.text.length: null).end,
                        d = r(o.to.line, f ? 0 : null, o.to.ch).start;
                    f && (h.top < d.top - 2 ? (t(h.right, h.top, null, h.bottom), t(s, d.top, d.left, d.bottom)) : t(h.right, h.top, d.left - h.right, h.bottom)),
                    h.bottom < d.top && t(s, h.bottom, null, d.top)
                }
                oi(n.selectionDiv, l),
                    n.selectionDiv.style.display = ""
            }
            function W(e) {
                if (e.state.focused) {
                    var t = e.display;
                    clearInterval(t.blinker);
                    var r = !0;
                    t.cursor.style.visibility = t.otherCursor.style.visibility = "",
                        t.blinker = setInterval(function() {
                                t.cursor.style.visibility = t.otherCursor.style.visibility = (r = !r) ? "": "hidden"
                            },
                            e.options.cursorBlinkRate)
                }
            }
            function D(e, t) {
                e.doc.mode.startState && e.doc.frontier < e.display.showingTo && e.state.highlight.set(t, ei(O, e))
            }
            function O(e) {
                var t = e.doc;
                if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.showingTo)) {
                    var r, n = +new Date + e.options.workTime,
                        i = gr(t.mode, z(e, t.frontier)),
                        o = [];
                    t.iter(t.frontier, Math.min(t.first + t.size, e.display.showingTo + 500),
                        function(l) {
                            if (t.frontier >= e.display.showingFrom) {
                                var a = l.styles;
                                l.styles = Xr(e, l, i);
                                for (var s = !a || a.length != l.styles.length,
                                         c = 0; ! s && c < a.length; ++c) s = a[c] != l.styles[c];
                                s && (r && r.end == t.frontier ? r.end++:o.push(r = {
                                    start: t.frontier,
                                    end: t.frontier + 1
                                })),
                                    l.stateAfter = gr(t.mode, i)
                            } else Zr(e, l, i),
                                l.stateAfter = t.frontier % 5 == 0 ? gr(t.mode, i) : null;
                            return++t.frontier,
                                +new Date > n ? (D(e, e.options.workDelay), !0) : void 0
                        }),
                    o.length && ot(e,
                        function() {
                            for (var e = 0; e < o.length; ++e) st(this, o[e].start, o[e].end)
                        })()
                }
            }
            function E(e, t, r) {
                for (var n, i, o = e.doc,
                         l = t,
                         a = t - 100; l > a; --l) {
                    if (l <= o.first) return o.first;
                    var s = fn(o, l - 1);
                    if (s.stateAfter && (!r || l <= o.frontier)) return l;
                    var c = qn(s.text, null, e.options.tabSize); (null == i || n > c) && (i = l - 1, n = c)
                }
                return i
            }
            function z(e, t, r) {
                var n = e.doc,
                    i = e.display;
                if (!n.mode.startState) return ! 0;
                var o = E(e, t, r),
                    l = o > n.first && fn(n, o - 1).stateAfter;
                return l = l ? gr(n.mode, l) : vr(n.mode),
                    n.iter(o, t,
                        function(r) {
                            Zr(e, r, l);
                            var a = o == t - 1 || o % 5 == 0 || o >= i.showingFrom && o < i.showingTo;
                            r.stateAfter = a ? gr(n.mode, l) : null,
                                ++o
                        }),
                    l
            }
            function I(e) {
                return e.lineSpace.offsetTop
            }
            function F(e) {
                return e.mover.offsetHeight - e.lineSpace.offsetHeight
            }
            function P(e) {
                var t = oi(e.measure, ni("pre", null, null, "text-align: left")).appendChild(ni("span", "x"));
                return t.offsetLeft
            }
            function B(e, t, r, n, i) {
                var o = -1;
                n = n || V(e, t);
                for (var l = r;; l += o) {
                    var a = n[l];
                    if (a) break;
                    0 > o && 0 == l && (o = 1)
                }
                return i = l > r ? "left": r > l ? "right": i,
                    "left" == i && a.leftSide ? a = a.leftSide: "right" == i && a.rightSide && (a = a.rightSide),
                {
                    left: r > l ? a.right: a.left,
                    right: l > r ? a.left: a.right,
                    top: a.top,
                    bottom: a.bottom
                }
            }
            function R(e, t) {
                for (var r = e.display.measureLineCache,
                         n = 0; n < r.length; ++n) {
                    var i = r[n];
                    if (i.text == t.text && i.markedSpans == t.markedSpans && e.display.scroller.clientWidth == i.width && i.classes == t.textClass + "|" + t.bgClass + "|" + t.wrapClass) return i
                }
            }
            function G(e, t) {
                var r = R(e, t);
                r && (r.text = r.measure = r.markedSpans = null)
            }
            function V(e, t) {
                var r = R(e, t);
                if (r) return r.measure;
                var n = _(e, t),
                    i = e.display.measureLineCache,
                    o = {
                        text: t.text,
                        width: e.display.scroller.clientWidth,
                        markedSpans: t.markedSpans,
                        measure: n,
                        classes: t.textClass + "|" + t.bgClass + "|" + t.wrapClass
                    };
                return 16 == i.length ? i[++e.display.measureLineCachePos % 16] = o: i.push(o),
                    n
            }
            function _(e, t) {
                function r(e) {
                    var t = e.top - p.top,
                        r = e.bottom - p.top;
                    r > v && (r = v),
                    0 > t && (t = 0);
                    for (var n = m.length - 2; n >= 0; n -= 2) {
                        var i = m[n],
                            o = m[n + 1];
                        if (! (i > r || t > o) && (t >= i && o >= r || i >= t && r >= o || Math.min(r, o) - Math.max(t, i) >= r - t >> 1)) {
                            m[n] = Math.min(t, i),
                                m[n + 1] = Math.max(r, o);
                            break
                        }
                    }
                    return 0 > n && (n = m.length, m.push(t, r)),
                    {
                        left: e.left - p.left,
                        right: e.right - p.left,
                        top: n,
                        bottom: null
                    }
                }
                function n(e) {
                    e.bottom = m[e.top + 1],
                        e.top = m[e.top]
                }
                var i = e.display,
                    o = Qn(t.text.length),
                    l = Qr(e, t, o, !0);
                if (ki && !Si && !e.options.lineWrapping && l.childNodes.length > 100) {
                    for (var a = document.createDocumentFragment(), s = 10, c = l.childNodes.length, u = 0, f = Math.ceil(c / s); f > u; ++u) {
                        for (var h = ni("div", null, null, "display: inline-block"), d = 0; s > d && c; ++d) h.appendChild(l.firstChild),
                            --c;
                        a.appendChild(h)
                    }
                    l.appendChild(a)
                }
                oi(i.measure, l);
                var p = ai(i.lineDiv),
                    m = [],
                    g = Qn(t.text.length),
                    v = l.offsetHeight;
                Mi && i.measure.first != l && oi(i.measure, l);
                for (var y, u = 0; u < o.length; ++u) if (y = o[u]) {
                    var b = y,
                        x = null;
                    if (/\bCodeMirror-widget\b/.test(y.className) && y.getClientRects) {
                        1 == y.firstChild.nodeType && (b = y.firstChild);
                        var C = b.getClientRects();
                        C.length > 1 && (x = g[u] = r(C[0]), x.rightSide = r(C[C.length - 1]))
                    }
                    x || (x = g[u] = r(ai(b))),
                    y.measureRight && (x.right = ai(y.measureRight).left),
                    y.leftSide && (x.leftSide = r(ai(y.leftSide)))
                }
                for (var y, u = 0; u < g.length; ++u)(y = g[u]) && (n(y), y.leftSide && n(y.leftSide), y.rightSide && n(y.rightSide));
                return g
            }
            function K(e, t) {
                var r = !1;
                if (t.markedSpans) for (var n = 0; n < t.markedSpans; ++n) {
                    var i = t.markedSpans[n]; ! i.collapsed || null != i.to && i.to != t.text.length || (r = !0)
                }
                var o = !r && R(e, t);
                if (o) return B(e, t, t.text.length, o.measure, "right").right;
                var l = Qr(e, t, null, !0),
                    a = l.appendChild(ui(e.display.measure));
                return oi(e.display.measure, l),
                ai(a).right - ai(e.display.lineDiv).left
            }
            function U(e) {
                e.display.measureLineCache.length = e.display.measureLineCachePos = 0,
                    e.display.cachedCharWidth = e.display.cachedTextHeight = null,
                e.options.lineWrapping || (e.display.maxLineChanged = !0),
                    e.display.lineNumChars = null
            }
            function q() {
                return window.pageXOffset || (document.documentElement || document.body).scrollLeft
            }
            function $() {
                return window.pageYOffset || (document.documentElement || document.body).scrollTop
            }
            function j(e, t, r, n) {
                if (t.widgets) for (var i = 0; i < t.widgets.length; ++i) if (t.widgets[i].above) {
                    var o = Kr(t.widgets[i]);
                    r.top += o,
                        r.bottom += o
                }
                if ("line" == n) return r;
                n || (n = "local");
                var l = vn(e, t);
                if ("local" == n ? l += I(e.display) : l -= e.display.viewOffset, "page" == n || "window" == n) {
                    var a = ai(e.display.lineSpace);
                    l += a.top + ("window" == n ? 0 : $());
                    var s = a.left + ("window" == n ? 0 : q());
                    r.left += s,
                        r.right += s
                }
                return r.top += l,
                    r.bottom += l,
                    r
            }
            function X(e, t, r) {
                if ("div" == r) return t;
                var n = t.left,
                    i = t.top;
                if ("page" == r) n -= q(),
                    i -= $();
                else if ("local" == r || !r) {
                    var o = ai(e.display.sizer);
                    n += o.left,
                        i += o.top
                }
                var l = ai(e.display.lineSpace);
                return {
                    left: n - l.left,
                    top: i - l.top
                }
            }
            function Y(e, t, r, n, i) {
                return n || (n = fn(e.doc, t.line)),
                    j(e, n, B(e, n, t.ch, null, i), r)
            }
            function Z(e, t, r, n, i) {
                function o(t, o) {
                    var l = B(e, n, t, i, o ? "right": "left");
                    return o ? l.left = l.right: l.right = l.left,
                        j(e, n, l, r)
                }
                function l(e, t) {
                    var r = a[t],
                        n = r.level % 2;
                    return e == hi(r) && t && r.level < a[t - 1].level ? (r = a[--t], e = di(r) - (r.level % 2 ? 0 : 1), n = !0) : e == di(r) && t < a.length - 1 && r.level < a[t + 1].level && (r = a[++t], e = hi(r) - r.level % 2, n = !1),
                        n && e == r.to && e > r.from ? o(e - 1) : o(e, n)
                }
                n = n || fn(e.doc, t.line),
                i || (i = V(e, n));
                var a = yn(n),
                    s = t.ch;
                if (!a) return o(s);
                var c = bi(a, s),
                    u = l(s, c);
                return null != zo && (u.other = l(s, zo)),
                    u
            }
            function J(e, t, r, n) {
                var i = new Kt(e, t);
                return i.xRel = n,
                r && (i.outside = !0),
                    i
            }
            function Q(e, t, r) {
                var n = e.doc;
                if (r += e.display.viewOffset, 0 > r) return J(n.first, 0, !0, -1);
                var i = gn(n, r),
                    o = n.first + n.size - 1;
                if (i > o) return J(n.first + n.size - 1, fn(n, o).text.length, !0, 1);
                for (0 > t && (t = 0);;) {
                    var l = fn(n, i),
                        a = et(e, l, i, t, r),
                        s = Fr(l),
                        c = s && s.find();
                    if (!s || !(a.ch > c.from.ch || a.ch == c.from.ch && a.xRel > 0)) return a;
                    i = c.to.line
                }
            }
            function et(e, t, r, n, i) {
                function o(n) {
                    var i = Z(e, Kt(r, n), "line", t, c);
                    return a = !0,
                        l > i.bottom ? i.left - s: l < i.top ? i.left + s: (a = !1, i.left)
                }
                var l = i - vn(e, t),
                    a = !1,
                    s = 2 * e.display.wrapper.clientWidth,
                    c = V(e, t),
                    u = yn(t),
                    f = t.text.length,
                    h = pi(t),
                    d = mi(t),
                    p = o(h),
                    m = a,
                    g = o(d),
                    v = a;
                if (n > g) return J(r, d, v, 1);
                for (;;) {
                    if (u ? d == h || d == Ci(t, h, 1) : 1 >= d - h) {
                        for (var y = p > n || g - n >= n - p ? h: d, b = n - (y == h ? p: g); To.test(t.text.charAt(y));)++y;
                        var x = J(r, y, y == h ? m: v, 0 > b ? -1 : b ? 1 : 0);
                        return x
                    }
                    var C = Math.ceil(f / 2),
                        w = h + C;
                    if (u) {
                        w = h;
                        for (var L = 0; C > L; ++L) w = Ci(t, w, 1)
                    }
                    var k = o(w);
                    k > n ? (d = w, g = k, (v = a) && (g += 1e3), f = C) : (h = w, p = k, m = a, f -= C)
                }
            }
            function tt(e) {
                if (null != e.cachedTextHeight) return e.cachedTextHeight;
                if (null == Gi) {
                    Gi = ni("pre");
                    for (var t = 0; 49 > t; ++t) Gi.appendChild(document.createTextNode("x")),
                        Gi.appendChild(ni("br"));
                    Gi.appendChild(document.createTextNode("x"))
                }
                oi(e.measure, Gi);
                var r = Gi.offsetHeight / 50;
                return r > 3 && (e.cachedTextHeight = r),
                    ii(e.measure),
                r || 1
            }
            function rt(e) {
                if (null != e.cachedCharWidth) return e.cachedCharWidth;
                var t = ni("span", "x"),
                    r = ni("pre", [t]);
                oi(e.measure, r);
                var n = t.offsetWidth;
                return n > 2 && (e.cachedCharWidth = n),
                n || 10
            }
            function nt(e) {
                e.curOp = {
                    changes: [],
                    forceUpdate: !1,
                    updateInput: null,
                    userSelChange: null,
                    textChanged: null,
                    selectionChanged: !1,
                    cursorActivity: !1,
                    updateMaxLine: !1,
                    updateScrollPos: !1,
                    id: ++ji
                },
                wo++||(Co = [])
            }
            function it(e) {
                var t = e.curOp,
                    r = e.doc,
                    n = e.display;
                if (e.curOp = null, t.updateMaxLine && f(e), n.maxLineChanged && !e.options.lineWrapping && n.maxLine) {
                    var i = K(e, n.maxLine);
                    n.sizer.style.minWidth = Math.max(0, i + 3 + Lo) + "px",
                        n.maxLineChanged = !1;
                    var o = Math.max(0, n.sizer.offsetLeft + n.sizer.offsetWidth - n.scroller.clientWidth);
                    o < r.scrollLeft && !t.updateScrollPos && Lt(e, Math.min(n.scroller.scrollLeft, o), !0)
                }
                var l, a;
                if (t.updateScrollPos) l = t.updateScrollPos;
                else if (t.selectionChanged && n.scroller.clientHeight) {
                    var s = Z(e, r.sel.head);
                    l = lr(e, s.left, s.top, s.left, s.bottom)
                } (t.changes.length || t.forceUpdate || l && null != l.scrollTop) && (a = b(e, t.changes, l && l.scrollTop, t.forceUpdate), e.display.scroller.offsetHeight && (e.doc.scrollTop = e.display.scroller.scrollTop)),
                !a && t.selectionChanged && N(e),
                    t.updateScrollPos ? (n.scroller.scrollTop = n.scrollbarV.scrollTop = r.scrollTop = l.scrollTop, n.scroller.scrollLeft = n.scrollbarH.scrollLeft = r.scrollLeft = l.scrollLeft, m(e), t.scrollToPos && ir(e, Xt(e.doc, t.scrollToPos), t.scrollToPosMargin)) : l && nr(e),
                t.selectionChanged && W(e),
                e.state.focused && t.updateInput && ht(e, t.userSelChange);
                var c = t.maybeHiddenMarkers,
                    u = t.maybeUnhiddenMarkers;
                if (c) for (var h = 0; h < c.length; ++h) c[h].lines.length || Bn(c[h], "hide");
                if (u) for (var h = 0; h < u.length; ++h) u[h].lines.length && Bn(u[h], "unhide");
                var d;
                if (--wo || (d = Co, Co = null), t.textChanged && Bn(e, "change", e, t.textChanged), t.cursorActivity && Bn(e, "cursorActivity", e), d) for (var h = 0; h < d.length; ++h) d[h]()
            }
            function ot(e, t) {
                return function() {
                    var r = e || this,
                        n = !r.curOp;
                    n && nt(r);
                    try {
                        var i = t.apply(r, arguments)
                    } finally {
                        n && it(r)
                    }
                    return i
                }
            }
            function lt(e) {
                return function() {
                    var t, r = this.cm && !this.cm.curOp;
                    r && nt(this.cm);
                    try {
                        t = e.apply(this, arguments)
                    } finally {
                        r && it(this.cm)
                    }
                    return t
                }
            }
            function at(e, t) {
                var r, n = !e.curOp;
                n && nt(e);
                try {
                    r = t()
                } finally {
                    n && it(e)
                }
                return r
            }
            function st(e, t, r, n) {
                null == t && (t = e.doc.first),
                null == r && (r = e.doc.first + e.doc.size),
                    e.curOp.changes.push({
                        from: t,
                        to: r,
                        diff: n
                    })
            }
            function ct(e) {
                e.display.pollingFast || e.display.poll.set(e.options.pollInterval,
                    function() {
                        ft(e),
                        e.state.focused && ct(e)
                    })
            }
            function ut(e) {
                function t() {
                    var n = ft(e);
                    n || r ? (e.display.pollingFast = !1, ct(e)) : (r = !0, e.display.poll.set(60, t))
                }
                var r = !1;
                e.display.pollingFast = !0,
                    e.display.poll.set(20, t)
            }
            function ft(e) {
                var t = e.display.input,
                    r = e.display.prevInput,
                    n = e.doc,
                    i = n.sel;
                if (!e.state.focused || Do(t) || pt(e) || e.state.disableInput) return ! 1;
                var o = t.value;
                if (o == r && Ut(i.from, i.to)) return ! 1;
                if (ki && !Mi && e.display.inputHasSelection === o) return ht(e, !0),
                    !1;
                var l = !e.curOp;
                l && nt(e),
                    i.shift = !1;
                for (var a = 0,
                         s = Math.min(r.length, o.length); s > a && r.charCodeAt(a) == o.charCodeAt(a);)++a;
                var c = i.from,
                    u = i.to;
                a < r.length ? c = Kt(c.line, c.ch - (r.length - a)) : e.state.overwrite && Ut(c, u) && !e.state.pasteIncoming && (u = Kt(u.line, Math.min(fn(n, u.line).text.length, u.ch + (o.length - a))));
                var f = e.curOp.updateInput,
                    h = {
                        from: c,
                        to: u,
                        text: Wo(o.slice(a)),
                        origin: e.state.pasteIncoming ? "paste": "+input"
                    };
                return Ft(e.doc, h, "end"),
                    e.curOp.updateInput = f,
                    Rn(e, "inputRead", e, h),
                    o.length > 1e3 || o.indexOf("\n") > -1 ? t.value = e.display.prevInput = "": e.display.prevInput = o,
                l && it(e),
                    e.state.pasteIncoming = !1,
                    !0
            }
            function ht(e, t) {
                var r, n, i = e.doc;
                if (Ut(i.sel.from, i.sel.to)) t && (e.display.prevInput = e.display.input.value = "", ki && !Mi && (e.display.inputHasSelection = null));
                else {
                    e.display.prevInput = "",
                        r = Oo && (i.sel.to.line - i.sel.from.line > 100 || (n = e.getSelection()).length > 1e3);
                    var o = r ? "-": n || e.getSelection();
                    e.display.input.value = o,
                    e.state.focused && Xn(e.display.input),
                    ki && !Mi && (e.display.inputHasSelection = o)
                }
                e.display.inaccurateSelection = r
            }
            function dt(e) {
                "nocursor" == e.options.readOnly || Fi && document.activeElement == e.display.input || e.display.input.focus()
            }
            function pt(e) {
                return e.options.readOnly || e.doc.cantEdit
            }
            function mt(e) {
                function t() {
                    e.state.focused && setTimeout(ei(dt, e), 0)
                }
                function r() {
                    null == a && (a = setTimeout(function() {
                            a = null,
                                l.cachedCharWidth = l.cachedTextHeight = Ao = null,
                                U(e),
                                at(e, ei(st, e))
                        },
                        100))
                }
                function n() {
                    for (var e = l.wrapper.parentNode; e && e != document.body; e = e.parentNode);
                    e ? setTimeout(n, 5e3) : Pn(window, "resize", r)
                }
                function i(t) {
                    Gn(e, t) || e.options.onDragEvent && e.options.onDragEvent(e, Hn(t)) || En(t)
                }
                function o() {
                    l.inaccurateSelection && (l.prevInput = "", l.inaccurateSelection = !1, l.input.value = e.getSelection(), Xn(l.input))
                }
                var l = e.display;
                Fn(l.scroller, "mousedown", ot(e, yt)),
                    ki ? Fn(l.scroller, "dblclick", ot(e,
                        function(t) {
                            if (!Gn(e, t)) {
                                var r = vt(e, t);
                                if (r && !bt(e, t) && !gt(e.display, t)) {
                                    Wn(t);
                                    var n = dr(fn(e.doc, r.line).text, r);
                                    Jt(e.doc, n.from, n.to)
                                }
                            }
                        })) : Fn(l.scroller, "dblclick",
                        function(t) {
                            Gn(e, t) || Wn(t)
                        }),
                    Fn(l.lineSpace, "selectstart",
                        function(e) {
                            gt(l, e) || Wn(e)
                        }),
                Ui || Fn(l.scroller, "contextmenu",
                    function(t) {
                        Ot(e, t)
                    }),
                    Fn(l.scroller, "scroll",
                        function() {
                            l.scroller.clientHeight && (wt(e, l.scroller.scrollTop), Lt(e, l.scroller.scrollLeft, !0), Bn(e, "scroll", e))
                        }),
                    Fn(l.scrollbarV, "scroll",
                        function() {
                            l.scroller.clientHeight && wt(e, l.scrollbarV.scrollTop)
                        }),
                    Fn(l.scrollbarH, "scroll",
                        function() {
                            l.scroller.clientHeight && Lt(e, l.scrollbarH.scrollLeft)
                        }),
                    Fn(l.scroller, "mousewheel",
                        function(t) {
                            kt(e, t)
                        }),
                    Fn(l.scroller, "DOMMouseScroll",
                        function(t) {
                            kt(e, t)
                        }),
                    Fn(l.scrollbarH, "mousedown", t),
                    Fn(l.scrollbarV, "mousedown", t),
                    Fn(l.wrapper, "scroll",
                        function() {
                            l.wrapper.scrollTop = l.wrapper.scrollLeft = 0
                        });
                var a;
                Fn(window, "resize", r),
                    setTimeout(n, 5e3),
                    Fn(l.input, "keyup", ot(e,
                        function(t) {
                            Gn(e, t) || e.options.onKeyEvent && e.options.onKeyEvent(e, Hn(t)) || 16 == t.keyCode && (e.doc.sel.shift = !1)
                        })),
                    Fn(l.input, "input", ei(ut, e)),
                    Fn(l.input, "keydown", ot(e, At)),
                    Fn(l.input, "keypress", ot(e, Ht)),
                    Fn(l.input, "focus", ei(Wt, e)),
                    Fn(l.input, "blur", ei(Dt, e)),
                e.options.dragDrop && (Fn(l.scroller, "dragstart",
                    function(t) {
                        Ct(e, t)
                    }), Fn(l.scroller, "dragenter", i), Fn(l.scroller, "dragover", i), Fn(l.scroller, "drop", ot(e, xt))),
                    Fn(l.scroller, "paste",
                        function(t) {
                            gt(l, t) || (dt(e), ut(e))
                        }),
                    Fn(l.input, "paste",
                        function() {
                            e.state.pasteIncoming = !0,
                                ut(e)
                        }),
                    Fn(l.input, "cut", o),
                    Fn(l.input, "copy", o),
                Di && Fn(l.sizer, "mouseup",
                    function() {
                        document.activeElement == l.input && l.input.blur(),
                            dt(e)
                    })
            }
            function gt(e, t) {
                for (var r = zn(t); r != e.wrapper; r = r.parentNode) if (!r || r.ignoreEvents || r.parentNode == e.sizer && r != e.mover) return ! 0
            }
            function vt(e, t, r) {
                var n = e.display;
                if (!r) {
                    var i = zn(t);
                    if (i == n.scrollbarH || i == n.scrollbarH.firstChild || i == n.scrollbarV || i == n.scrollbarV.firstChild || i == n.scrollbarFiller || i == n.gutterFiller) return null
                }
                var o, l, a = ai(n.lineSpace);
                try {
                    o = t.clientX,
                        l = t.clientY
                } catch(t) {
                    return null
                }
                return Q(e, o - a.left, l - a.top)
            }
            function yt(e) {
                function t(e) {
                    if (!Ut(v, e)) {
                        if (v = e, "single" == u) return Jt(i.doc, Xt(l, s), e),
                            void 0;
                        if (m = Xt(l, m), g = Xt(l, g), "double" == u) {
                            var t = dr(fn(l, e.line).text, e);
                            qt(e, m) ? Jt(i.doc, t.from, g) : Jt(i.doc, m, t.to)
                        } else "triple" == u && (qt(e, m) ? Jt(i.doc, g, Xt(l, Kt(e.line, 0))) : Jt(i.doc, m, Xt(l, Kt(e.line + 1, 0))))
                    }
                }
                function r(e) {
                    var n = ++b,
                        a = vt(i, e, !0);
                    if (a) if (Ut(a, h)) {
                        var s = e.clientY < y.top ? -20 : e.clientY > y.bottom ? 20 : 0;
                        s && setTimeout(ot(i,
                            function() {
                                b == n && (o.scroller.scrollTop += s, r(e))
                            }), 50)
                    } else {
                        i.state.focused || Wt(i),
                            h = a,
                            t(a);
                        var c = p(o, l); (a.line >= c.to || a.line < c.from) && setTimeout(ot(i,
                            function() {
                                b == n && r(e)
                            }), 150)
                    }
                }
                function n(e) {
                    b = 1 / 0,
                        Wn(e),
                        dt(i),
                        Pn(document, "mousemove", x),
                        Pn(document, "mouseup", C)
                }
                if (!Gn(this, e)) {
                    var i = this,
                        o = i.display,
                        l = i.doc,
                        a = l.sel;
                    if (a.shift = e.shiftKey, gt(o, e)) return Ti || (o.scroller.draggable = !1, setTimeout(function() {
                            o.scroller.draggable = !0
                        },
                        100)),
                        void 0;
                    if (!bt(i, e)) {
                        var s = vt(i, e);
                        switch (In(e)) {
                            case 3:
                                return Ui && Ot.call(i, i, e),
                                    void 0;
                            case 2:
                                return s && Jt(i.doc, s),
                                    setTimeout(ei(dt, i), 20),
                                    Wn(e),
                                    void 0
                        }
                        if (!s) return zn(e) == o.scroller && Wn(e),
                            void 0;
                        i.state.focused || Wt(i);
                        var c = +new Date,
                            u = "single";
                        if (_i && _i.time > c - 400 && Ut(_i.pos, s)) u = "triple",
                            Wn(e),
                            setTimeout(ei(dt, i), 20),
                            pr(i, s.line);
                        else if (Vi && Vi.time > c - 400 && Ut(Vi.pos, s)) {
                            u = "double",
                                _i = {
                                    time: c,
                                    pos: s
                                },
                                Wn(e);
                            var f = dr(fn(l, s.line).text, s);
                            Jt(i.doc, f.from, f.to)
                        } else Vi = {
                            time: c,
                            pos: s
                        };
                        var h = s;
                        if (i.options.dragDrop && No && !pt(i) && !Ut(a.from, a.to) && !qt(s, a.from) && !qt(a.to, s) && "single" == u) {
                            var d = ot(i,
                                function(t) {
                                    Ti && (o.scroller.draggable = !1),
                                        i.state.draggingText = !1,
                                        Pn(document, "mouseup", d),
                                        Pn(o.scroller, "drop", d),
                                    Math.abs(e.clientX - t.clientX) + Math.abs(e.clientY - t.clientY) < 10 && (Wn(t), Jt(i.doc, s), dt(i))
                                });
                            return Ti && (o.scroller.draggable = !0),
                                i.state.draggingText = d,
                            o.scroller.dragDrop && o.scroller.dragDrop(),
                                Fn(document, "mouseup", d),
                                Fn(o.scroller, "drop", d),
                                void 0
                        }
                        Wn(e),
                        "single" == u && Jt(i.doc, Xt(l, s));
                        var m = a.from,
                            g = a.to,
                            v = s,
                            y = ai(o.wrapper),
                            b = 0,
                            x = ot(i,
                                function(e) {
                                    ki || In(e) ? r(e) : n(e)
                                }),
                            C = ot(i, n);
                        Fn(document, "mousemove", x),
                            Fn(document, "mouseup", C)
                    }
                }
            }
            function bt(e, t) {
                var r = e.display;
                try {
                    var n = t.clientX,
                        i = t.clientY
                } catch(t) {
                    return ! 1
                }
                if (n >= Math.floor(ai(r.gutters).right)) return ! 1;
                if (Wn(t), !_n(e, "gutterClick")) return ! 0;
                var o = ai(r.lineDiv);
                if (i > o.bottom) return ! 0;
                i -= o.top - r.viewOffset;
                for (var l = 0; l < e.options.gutters.length; ++l) {
                    var a = r.gutters.childNodes[l];
                    if (a && ai(a).right >= n) {
                        var s = gn(e.doc, i),
                            c = e.options.gutters[l];
                        Rn(e, "gutterClick", e, s, c, t);
                        break
                    }
                }
                return ! 0
            }
            function xt(e) {
                var t = this;
                if (! (Gn(t, e) || gt(t.display, e) || t.options.onDragEvent && t.options.onDragEvent(t, Hn(e)))) {
                    Wn(e),
                    ki && (Xi = +new Date);
                    var r = vt(t, e, !0),
                        n = e.dataTransfer.files;
                    if (r && !pt(t)) if (n && n.length && window.FileReader && window.File) for (var i = n.length,
                                                                                                     o = Array(i), l = 0, a = function(e, n) {
                            var a = new FileReader;
                            a.onload = function() {
                                o[n] = a.result,
                                ++l == i && (r = Xt(t.doc, r), Ft(t.doc, {
                                        from: r,
                                        to: r,
                                        text: Wo(o.join("\n")),
                                        origin: "paste"
                                    },
                                    "around"))
                            },
                                a.readAsText(e)
                        },
                                                                                                     s = 0; i > s; ++s) a(n[s], s);
                    else {
                        if (t.state.draggingText && !qt(r, t.doc.sel.from) && !qt(t.doc.sel.to, r)) return t.state.draggingText(e),
                            setTimeout(ei(dt, t), 20),
                            void 0;
                        try {
                            var o = e.dataTransfer.getData("Text");
                            if (o) {
                                var c = t.doc.sel.from,
                                    u = t.doc.sel.to;
                                er(t.doc, r, r),
                                t.state.draggingText && _t(t.doc, "", c, u, "paste"),
                                    t.replaceSelection(o, null, "paste"),
                                    dt(t),
                                    Wt(t)
                            }
                        } catch(e) {}
                    }
                }
            }
            function Ct(e, t) {
                if (ki && (!e.state.draggingText || +new Date - Xi < 100)) return En(t),
                    void 0;
                if (!Gn(e, t) && !gt(e.display, t)) {
                    var r = e.getSelection();
                    if (t.dataTransfer.setData("Text", r), t.dataTransfer.setDragImage && !Wi) {
                        var n = ni("img", null, null, "position: fixed; left: 0; top: 0;");
                        Hi && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop),
                            t.dataTransfer.setDragImage(n, 0, 0),
                        Hi && n.parentNode.removeChild(n)
                    }
                }
            }
            function wt(e, t) {
                Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, Li || b(e, [], t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbarV.scrollTop != t && (e.display.scrollbarV.scrollTop = t), Li && b(e, []), D(e, 100))
            }
            function Lt(e, t, r) { (r ? t == e.doc.scrollLeft: Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, m(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbarH.scrollLeft != t && (e.display.scrollbarH.scrollLeft = t))
            }
            function kt(e, t) {
                var r = t.wheelDeltaX,
                    n = t.wheelDeltaY;
                null == r && t.detail && t.axis == t.HORIZONTAL_AXIS && (r = t.detail),
                    null == n && t.detail && t.axis == t.VERTICAL_AXIS ? n = t.detail: null == n && (n = t.wheelDelta);
                var i = e.display,
                    o = i.scroller;
                if (r && o.scrollWidth > o.clientWidth || n && o.scrollHeight > o.clientHeight) {
                    if (n && Pi && Ti) for (var l = t.target; l != o; l = l.parentNode) if (l.lineObj) {
                        e.display.currentWheelTarget = l;
                        break
                    }
                    if (r && !Li && !Hi && null != Zi) return n && wt(e, Math.max(0, Math.min(o.scrollTop + n * Zi, o.scrollHeight - o.clientHeight))),
                        Lt(e, Math.max(0, Math.min(o.scrollLeft + r * Zi, o.scrollWidth - o.clientWidth))),
                        Wn(t),
                        i.wheelStartX = null,
                        void 0;
                    if (n && null != Zi) {
                        var a = n * Zi,
                            s = e.doc.scrollTop,
                            c = s + i.wrapper.clientHeight;
                        0 > a ? s = Math.max(0, s + a - 50) : c = Math.min(e.doc.height, c + a + 50),
                            b(e, [], {
                                top: s,
                                bottom: c
                            })
                    }
                    20 > Yi && (null == i.wheelStartX ? (i.wheelStartX = o.scrollLeft, i.wheelStartY = o.scrollTop, i.wheelDX = r, i.wheelDY = n, setTimeout(function() {
                            if (null != i.wheelStartX) {
                                var e = o.scrollLeft - i.wheelStartX,
                                    t = o.scrollTop - i.wheelStartY,
                                    r = t && i.wheelDY && t / i.wheelDY || e && i.wheelDX && e / i.wheelDX;
                                i.wheelStartX = i.wheelStartY = null,
                                r && (Zi = (Zi * Yi + r) / (Yi + 1), ++Yi)
                            }
                        },
                        200)) : (i.wheelDX += r, i.wheelDY += n))
                }
            }
            function St(e, t, r) {
                if ("string" == typeof t && (t = uo[t], !t)) return ! 1;
                e.display.pollingFast && ft(e) && (e.display.pollingFast = !1);
                var n = e.doc,
                    i = n.sel.shift,
                    o = !1;
                try {
                    pt(e) && (e.state.suppressEdits = !0),
                    r && (n.sel.shift = !1),
                        o = t(e) != ko
                } finally {
                    n.sel.shift = i,
                        e.state.suppressEdits = !1
                }
                return o
            }
            function Mt(e) {
                var t = e.state.keyMaps.slice(0);
                return e.options.extraKeys && t.push(e.options.extraKeys),
                    t.push(e.options.keyMap),
                    t
            }
            function Tt(e, t) {
                var r = yr(e.options.keyMap),
                    n = r.auto;
                clearTimeout(Ji),
                n && !xr(t) && (Ji = setTimeout(function() {
                        yr(e.options.keyMap) == r && (e.options.keyMap = n.call ? n.call(null, e) : n, l(e))
                    },
                    50));
                var i = Cr(t, !0),
                    o = !1;
                if (!i) return ! 1;
                var a = Mt(e);
                return o = t.shiftKey ? br("Shift-" + i, a,
                    function(t) {
                        return St(e, t, !0)
                    }) || br(i, a,
                    function(t) {
                        return ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) ? St(e, t) : void 0
                    }) : br(i, a,
                    function(t) {
                        return St(e, t)
                    }),
                o && (Wn(t), W(e), Mi && (t.oldKeyCode = t.keyCode, t.keyCode = 0), Rn(e, "keyHandled", e, i, t)),
                    o
            }
            function Nt(e, t, r) {
                var n = br("'" + r + "'", Mt(e),
                    function(t) {
                        return St(e, t, !0)
                    });
                return n && (Wn(t), W(e), Rn(e, "keyHandled", e, "'" + r + "'", t)),
                    n
            }
            function At(e) {
                var t = this;
                if (t.state.focused || Wt(t), ki && 27 == e.keyCode && (e.returnValue = !1), !(Gn(t, e) || t.options.onKeyEvent && t.options.onKeyEvent(t, Hn(e)))) {
                    var r = e.keyCode;
                    t.doc.sel.shift = 16 == r || e.shiftKey;
                    var n = Tt(t, e);
                    Hi && (eo = n ? r: null, !n && 88 == r && !Oo && (Pi ? e.metaKey: e.ctrlKey) && t.replaceSelection(""))
                }
            }
            function Ht(e) {
                var t = this;
                if (! (Gn(t, e) || t.options.onKeyEvent && t.options.onKeyEvent(t, Hn(e)))) {
                    var r = e.keyCode,
                        n = e.charCode;
                    if (Hi && r == eo) return eo = null,
                        Wn(e),
                        void 0;
                    if (! (Hi && (!e.which || e.which < 10) || Di) || !Tt(t, e)) {
                        var i = String.fromCharCode(null == n ? r: n);
                        this.options.electricChars && this.doc.mode.electricChars && this.options.smartIndent && !pt(this) && this.doc.mode.electricChars.indexOf(i) > -1 && setTimeout(ot(t,
                            function() {
                                cr(t, t.doc.sel.to.line, "smart")
                            }), 75),
                        Nt(t, e, i) || (ki && !Mi && (t.display.inputHasSelection = null), ut(t))
                    }
                }
            }
            function Wt(e) {
                "nocursor" != e.options.readOnly && (e.state.focused || (Bn(e, "focus", e), e.state.focused = !0, -1 == e.display.wrapper.className.search(/\bCodeMirror-focused\b/) && (e.display.wrapper.className += " CodeMirror-focused"), ht(e, !0)), ct(e), W(e))
            }
            function Dt(e) {
                e.state.focused && (Bn(e, "blur", e), e.state.focused = !1, e.display.wrapper.className = e.display.wrapper.className.replace(" CodeMirror-focused", "")),
                    clearInterval(e.display.blinker),
                    setTimeout(function() {
                            e.state.focused || (e.doc.sel.shift = !1)
                        },
                        150)
            }
            function Ot(e, t) {
                function r() {
                    if (null != i.input.selectionStart) {
                        var e = i.input.value = " " + (Ut(o.from, o.to) ? "": i.input.value);
                        i.prevInput = " ",
                            i.input.selectionStart = 1,
                            i.input.selectionEnd = e.length
                    }
                }
                function n() {
                    if (i.inputDiv.style.position = "relative", i.input.style.cssText = s, Mi && (i.scrollbarV.scrollTop = i.scroller.scrollTop = a), ct(e), null != i.input.selectionStart) { (!ki || Mi) && r(),
                        clearTimeout(Qi);
                        var t = 0,
                            n = function() {
                                " " == i.prevInput && 0 == i.input.selectionStart ? ot(e, uo.selectAll)(e) : t++<10 ? Qi = setTimeout(n, 500) : ht(e)
                            };
                        Qi = setTimeout(n, 200)
                    }
                }
                if (!Gn(e, t, "contextmenu")) {
                    var i = e.display,
                        o = e.doc.sel;
                    if (!gt(i, t)) {
                        var l = vt(e, t),
                            a = i.scroller.scrollTop;
                        if (l && !Hi) { (Ut(o.from, o.to) || qt(l, o.from) || !qt(l, o.to)) && ot(e, er)(e.doc, l, l);
                            var s = i.input.style.cssText;
                            if (i.inputDiv.style.position = "absolute", i.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (t.clientY - 5) + "px; left: " + (t.clientX - 5) + "px; z-index: 1000; background: white; outline: none;border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);", dt(e), ht(e, !0), Ut(o.from, o.to) && (i.input.value = i.prevInput = " "), ki && !Mi && r(), Ui) {
                                En(t);
                                var c = function() {
                                    Pn(window, "mouseup", c),
                                        setTimeout(n, 20)
                                };
                                Fn(window, "mouseup", c)
                            } else setTimeout(n, 50)
                        }
                    }
                }
            }
            function Et(e, t, r) {
                if (!qt(t.from, r)) return Xt(e, r);
                var n = t.text.length - 1 - (t.to.line - t.from.line);
                if (r.line > t.to.line + n) {
                    var i = r.line - n,
                        o = e.first + e.size - 1;
                    return i > o ? Kt(o, fn(e, o).text.length) : Yt(r, fn(e, i).text.length)
                }
                if (r.line == t.to.line + n) return Yt(r, jn(t.text).length + (1 == t.text.length ? t.from.ch: 0) + fn(e, t.to.line).text.length - t.to.ch);
                var l = r.line - t.from.line;
                return Yt(r, t.text[l].length + (l ? 0 : t.from.ch))
            }
            function zt(e, t, r) {
                if (r && "object" == typeof r) return {
                    anchor: Et(e, t, r.anchor),
                    head: Et(e, t, r.head)
                };
                if ("start" == r) return {
                    anchor: t.from,
                    head: t.from
                };
                var n = to(t);
                if ("around" == r) return {
                    anchor: t.from,
                    head: n
                };
                if ("end" == r) return {
                    anchor: n,
                    head: n
                };
                var i = function(e) {
                    if (qt(e, t.from)) return e;
                    if (!qt(t.to, e)) return n;
                    var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                        i = e.ch;
                    return e.line == t.to.line && (i += n.ch - t.to.ch),
                        Kt(r, i)
                };
                return {
                    anchor: i(e.sel.anchor),
                    head: i(e.sel.head)
                }
            }
            function It(e, t, r) {
                var n = {
                    canceled: !1,
                    from: t.from,
                    to: t.to,
                    text: t.text,
                    origin: t.origin,
                    cancel: function() {
                        this.canceled = !0
                    }
                };
                return r && (n.update = function(t, r, n, i) {
                    t && (this.from = Xt(e, t)),
                    r && (this.to = Xt(e, r)),
                    n && (this.text = n),
                    void 0 !== i && (this.origin = i)
                }),
                    Bn(e, "beforeChange", e, n),
                e.cm && Bn(e.cm, "beforeChange", e.cm, n),
                    n.canceled ? null: {
                        from: n.from,
                        to: n.to,
                        text: n.text,
                        origin: n.origin
                    }
            }
            function Ft(e, t, r, n) {
                if (e.cm) {
                    if (!e.cm.curOp) return ot(e.cm, Ft)(e, t, r, n);
                    if (e.cm.state.suppressEdits) return
                }
                if (! (_n(e, "beforeChange") || e.cm && _n(e.cm, "beforeChange")) || (t = It(e, t, !0))) {
                    var i = qi && !n && Er(e, t.from, t.to);
                    if (i) {
                        for (var o = i.length - 1; o >= 1; --o) Pt(e, {
                            from: i[o].from,
                            to: i[o].to,
                            text: [""]
                        });
                        i.length && Pt(e, {
                                from: i[0].from,
                                to: i[0].to,
                                text: t.text
                            },
                            r)
                    } else Pt(e, t, r)
                }
            }
            function Pt(e, t, r) {
                var n = zt(e, t, r);
                wn(e, t, n, e.cm ? e.cm.curOp.id: 0 / 0),
                    Gt(e, t, n, Dr(e, t));
                var i = [];
                cn(e,
                    function(e, r) {
                        r || -1 != Yn(i, e.history) || (Nn(e.history, t), i.push(e.history)),
                            Gt(e, t, null, Dr(e, t))
                    })
            }
            function Bt(e, t) {
                if (!e.cm || !e.cm.state.suppressEdits) {
                    var r = e.history,
                        n = ("undo" == t ? r.done: r.undone).pop();
                    if (n) {
                        var i = {
                            changes: [],
                            anchorBefore: n.anchorAfter,
                            headBefore: n.headAfter,
                            anchorAfter: n.anchorBefore,
                            headAfter: n.headBefore,
                            generation: r.generation
                        }; ("undo" == t ? r.undone: r.done).push(i),
                            r.generation = n.generation || ++r.maxGeneration;
                        for (var o = _n(e, "beforeChange") || e.cm && _n(e.cm, "beforeChange"), l = n.changes.length - 1; l >= 0; --l) {
                            var a = n.changes[l];
                            if (a.origin = t, o && !It(e, a, !1)) return ("undo" == t ? r.done: r.undone).length = 0,
                                void 0;
                            i.changes.push(Cn(e, a));
                            var s = l ? zt(e, a, null) : {
                                anchor: n.anchorBefore,
                                head: n.headBefore
                            };
                            Gt(e, a, s, Or(e, a));
                            var c = [];
                            cn(e,
                                function(e, t) {
                                    t || -1 != Yn(c, e.history) || (Nn(e.history, a), c.push(e.history)),
                                        Gt(e, a, null, Or(e, a))
                                })
                        }
                    }
                }
            }
            function Rt(e, t) {
                function r(e) {
                    return Kt(e.line + t, e.ch)
                }
                e.first += t,
                e.cm && st(e.cm, e.first, e.first, t),
                    e.sel.head = r(e.sel.head),
                    e.sel.anchor = r(e.sel.anchor),
                    e.sel.from = r(e.sel.from),
                    e.sel.to = r(e.sel.to)
            }
            function Gt(e, t, r, n) {
                if (e.cm && !e.cm.curOp) return ot(e.cm, Gt)(e, t, r, n);
                if (t.to.line < e.first) return Rt(e, t.text.length - 1 - (t.to.line - t.from.line)),
                    void 0;
                if (! (t.from.line > e.lastLine())) {
                    if (t.from.line < e.first) {
                        var i = t.text.length - 1 - (e.first - t.from.line);
                        Rt(e, i),
                            t = {
                                from: Kt(e.first, 0),
                                to: Kt(t.to.line + i, t.to.ch),
                                text: [jn(t.text)],
                                origin: t.origin
                            }
                    }
                    var o = e.lastLine();
                    t.to.line > o && (t = {
                        from: t.from,
                        to: Kt(o, fn(e, o).text.length),
                        text: [t.text[0]],
                        origin: t.origin
                    }),
                        t.removed = hn(e, t.from, t.to),
                    r || (r = zt(e, t, null)),
                        e.cm ? Vt(e.cm, t, n, r) : ln(e, t, n, r)
                }
            }
            function Vt(e, t, r, n) {
                var o = e.doc,
                    l = e.display,
                    a = t.from,
                    s = t.to,
                    c = !1,
                    f = a.line;
                e.options.lineWrapping || (f = mn(Pr(o, fn(o, a.line))), o.iter(f, s.line + 1,
                    function(e) {
                        return e == l.maxLine ? (c = !0, !0) : void 0
                    })),
                qt(o.sel.head, t.from) || qt(t.to, o.sel.head) || (e.curOp.cursorActivity = !0),
                    ln(o, t, r, n, i(e)),
                e.options.lineWrapping || (o.iter(f, a.line + t.text.length,
                    function(e) {
                        var t = u(o, e);
                        t > l.maxLineLength && (l.maxLine = e, l.maxLineLength = t, l.maxLineChanged = !0, c = !1)
                    }), c && (e.curOp.updateMaxLine = !0)),
                    o.frontier = Math.min(o.frontier, a.line),
                    D(e, 400);
                var h = t.text.length - (s.line - a.line) - 1;
                if (st(e, a.line, s.line + 1, h), _n(e, "change")) {
                    var d = {
                        from: a,
                        to: s,
                        text: t.text,
                        removed: t.removed,
                        origin: t.origin
                    };
                    if (e.curOp.textChanged) {
                        for (var p = e.curOp.textChanged; p.next; p = p.next);
                        p.next = d
                    } else e.curOp.textChanged = d
                }
            }
            function _t(e, t, r, n, i) {
                if (n || (n = r), qt(n, r)) {
                    var o = n;
                    n = r,
                        r = o
                }
                "string" == typeof t && (t = Wo(t)),
                    Ft(e, {
                            from: r,
                            to: n,
                            text: t,
                            origin: i
                        },
                        null)
            }
            function Kt(e, t) {
                return this instanceof Kt ? (this.line = e, this.ch = t, void 0) : new Kt(e, t)
            }
            function Ut(e, t) {
                return e.line == t.line && e.ch == t.ch
            }
            function qt(e, t) {
                return e.line < t.line || e.line == t.line && e.ch < t.ch
            }
            function $t(e) {
                return Kt(e.line, e.ch)
            }
            function jt(e, t) {
                return Math.max(e.first, Math.min(t, e.first + e.size - 1))
            }
            function Xt(e, t) {
                if (t.line < e.first) return Kt(e.first, 0);
                var r = e.first + e.size - 1;
                return t.line > r ? Kt(r, fn(e, r).text.length) : Yt(t, fn(e, t.line).text.length)
            }
            function Yt(e, t) {
                var r = e.ch;
                return null == r || r > t ? Kt(e.line, t) : 0 > r ? Kt(e.line, 0) : e
            }
            function Zt(e, t) {
                return t >= e.first && t < e.first + e.size
            }
            function Jt(e, t, r, n) {
                if (e.sel.shift || e.sel.extend) {
                    var i = e.sel.anchor;
                    if (r) {
                        var o = qt(t, i);
                        o != qt(r, i) ? (i = t, t = r) : o != qt(t, r) && (t = r)
                    }
                    er(e, i, t, n)
                } else er(e, t, r || t, n);
                e.cm && (e.cm.curOp.userSelChange = !0)
            }
            function Qt(e, t, r) {
                var n = {
                    anchor: t,
                    head: r
                };
                return Bn(e, "beforeSelectionChange", e, n),
                e.cm && Bn(e.cm, "beforeSelectionChange", e.cm, n),
                    n.anchor = Xt(e, n.anchor),
                    n.head = Xt(e, n.head),
                    n
            }
            function er(e, t, r, n, i) {
                if (!i && _n(e, "beforeSelectionChange") || e.cm && _n(e.cm, "beforeSelectionChange")) {
                    var o = Qt(e, t, r);
                    r = o.head,
                        t = o.anchor
                }
                var l = e.sel;
                if (l.goalColumn = null, (i || !Ut(t, l.anchor)) && (t = rr(e, t, n, "push" != i)), (i || !Ut(r, l.head)) && (r = rr(e, r, n, "push" != i)), !Ut(l.anchor, t) || !Ut(l.head, r)) {
                    l.anchor = t,
                        l.head = r;
                    var a = qt(r, t);
                    l.from = a ? r: t,
                        l.to = a ? t: r,
                    e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = e.cm.curOp.cursorActivity = !0),
                        Rn(e, "cursorActivity", e)
                }
            }
            function tr(e) {
                er(e.doc, e.doc.sel.from, e.doc.sel.to, null, "push")
            }
            function rr(e, t, r, n) {
                var i = !1,
                    o = t,
                    l = r || 1;
                e.cantEdit = !1;
                e: for (;;) {
                    var a = fn(e, o.line);
                    if (a.markedSpans) for (var s = 0; s < a.markedSpans.length; ++s) {
                        var c = a.markedSpans[s],
                            u = c.marker;
                        if ((null == c.from || (u.inclusiveLeft ? c.from <= o.ch: c.from < o.ch)) && (null == c.to || (u.inclusiveRight ? c.to >= o.ch: c.to > o.ch))) {
                            if (n && (Bn(u, "beforeCursorEnter"), u.explicitlyCleared)) {
                                if (a.markedSpans) {--s;
                                    continue
                                }
                                break
                            }
                            if (!u.atomic) continue;
                            var f = u.find()[0 > l ? "from": "to"];
                            if (Ut(f, o) && (f.ch += l, f.ch < 0 ? f = f.line > e.first ? Xt(e, Kt(f.line - 1)) : null: f.ch > a.text.length && (f = f.line < e.first + e.size - 1 ? Kt(f.line + 1, 0) : null), !f)) {
                                if (i) return n ? (e.cantEdit = !0, Kt(e.first, 0)) : rr(e, t, r, !0);
                                i = !0,
                                    f = t,
                                    l = -l
                            }
                            o = f;
                            continue e
                        }
                    }
                    return o
                }
            }
            function nr(e) {
                var t = ir(e, e.doc.sel.head, e.options.cursorScrollMargin);
                if (e.state.focused) {
                    var r = e.display,
                        n = ai(r.sizer),
                        i = null;
                    if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !zi) {
                        var o = "none" == r.cursor.style.display;
                        o && (r.cursor.style.display = "", r.cursor.style.left = t.left + "px", r.cursor.style.top = t.top - r.viewOffset + "px"),
                            r.cursor.scrollIntoView(i),
                        o && (r.cursor.style.display = "none")
                    }
                }
            }
            function ir(e, t, r) {
                for (null == r && (r = 0);;) {
                    var n = !1,
                        i = Z(e, t),
                        o = lr(e, i.left, i.top - r, i.left, i.bottom + r),
                        l = e.doc.scrollTop,
                        a = e.doc.scrollLeft;
                    if (null != o.scrollTop && (wt(e, o.scrollTop), Math.abs(e.doc.scrollTop - l) > 1 && (n = !0)), null != o.scrollLeft && (Lt(e, o.scrollLeft), Math.abs(e.doc.scrollLeft - a) > 1 && (n = !0)), !n) return i
                }
            }
            function or(e, t, r, n, i) {
                var o = lr(e, t, r, n, i);
                null != o.scrollTop && wt(e, o.scrollTop),
                null != o.scrollLeft && Lt(e, o.scrollLeft)
            }
            function lr(e, t, r, n, i) {
                var o = e.display,
                    l = tt(e.display);
                0 > r && (r = 0);
                var a = o.scroller.clientHeight - Lo,
                    s = o.scroller.scrollTop,
                    c = {},
                    u = e.doc.height + F(o),
                    f = l > r,
                    h = i > u - l;
                if (s > r) c.scrollTop = f ? 0 : r;
                else if (i > s + a) {
                    var d = Math.min(r, (h ? u: i) - a);
                    d != s && (c.scrollTop = d)
                }
                var p = o.scroller.clientWidth - Lo,
                    m = o.scroller.scrollLeft;
                t += o.gutters.offsetWidth,
                    n += o.gutters.offsetWidth;
                var g = o.gutters.offsetWidth,
                    v = g + 10 > t;
                return m + g > t || v ? (v && (t = 0), c.scrollLeft = Math.max(0, t - 10 - g)) : n > p + m - 3 && (c.scrollLeft = n + 10 - p),
                    c
            }
            function ar(e, t, r) {
                e.curOp.updateScrollPos = {
                    scrollLeft: null == t ? e.doc.scrollLeft: t,
                    scrollTop: null == r ? e.doc.scrollTop: r
                }
            }
            function sr(e, t, r) {
                var n = e.curOp.updateScrollPos || (e.curOp.updateScrollPos = {
                            scrollLeft: e.doc.scrollLeft,
                            scrollTop: e.doc.scrollTop
                        }),
                    i = e.display.scroller;
                n.scrollTop = Math.max(0, Math.min(i.scrollHeight - i.clientHeight, n.scrollTop + r)),
                    n.scrollLeft = Math.max(0, Math.min(i.scrollWidth - i.clientWidth, n.scrollLeft + t))
            }
            function cr(e, t, r, n) {
                var i = e.doc;
                if (null == r && (r = "add"), "smart" == r) if (e.doc.mode.indent) var o = z(e, t);
                else r = "prev";
                var l, a = e.options.tabSize,
                    s = fn(i, t),
                    c = qn(s.text, null, a),
                    u = s.text.match(/^\s*/)[0];
                if ("smart" == r && (l = e.doc.mode.indent(o, s.text.slice(u.length), s.text), l == ko)) {
                    if (!n) return;
                    r = "prev"
                }
                "prev" == r ? l = t > i.first ? qn(fn(i, t - 1).text, null, a) : 0 : "add" == r ? l = c + e.options.indentUnit: "subtract" == r ? l = c - e.options.indentUnit: "number" == typeof r && (l = c + r),
                    l = Math.max(0, l);
                var f = "",
                    h = 0;
                if (e.options.indentWithTabs) for (var d = Math.floor(l / a); d; --d) h += a,
                    f += "	";
                l > h && (f += $n(l - h)),
                f != u && _t(e.doc, f, Kt(t, 0), Kt(t, u.length), "+input"),
                    s.stateAfter = null
            }
            function ur(e, t, r) {
                var n = t,
                    i = t,
                    o = e.doc;
                return "number" == typeof t ? i = fn(o, jt(o, t)) : n = mn(t),
                    null == n ? null: r(i, n) ? (st(e, n, n + 1), i) : null
            }
            function fr(e, t, r, n, i) {
                function o() {
                    var t = a + r;
                    return t < e.first || t >= e.first + e.size ? f = !1 : (a = t, u = fn(e, t))
                }
                function l(e) {
                    var t = (i ? Ci: wi)(u, s, r, !0);
                    if (null == t) {
                        if (e || !o()) return f = !1;
                        s = i ? (0 > r ? mi: pi)(u) : 0 > r ? u.text.length: 0
                    } else s = t;
                    return ! 0
                }
                var a = t.line,
                    s = t.ch,
                    c = r,
                    u = fn(e, a),
                    f = !0;
                if ("char" == n) l();
                else if ("column" == n) l(!0);
                else if ("word" == n || "group" == n) for (var h = null,
                                                               d = "group" == n,
                                                               p = !0; ! (0 > r) || l(!p); p = !1) {
                    var m = u.text.charAt(s) || "\n",
                        g = ti(m) ? "w": d ? /\s/.test(m) ? null: "p": null;
                    if (h && h != g) {
                        0 > r && (r = 1, l());
                        break
                    }
                    if (g && (h = g), r > 0 && !l(!p)) break
                }
                var v = rr(e, Kt(a, s), c, !0);
                return f || (v.hitSide = !0),
                    v
            }
            function hr(e, t, r, n) {
                var i, o = e.doc,
                    l = t.left;
                if ("page" == n) {
                    var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
                    i = t.top + r * (a - (0 > r ? 1.5 : .5) * tt(e.display))
                } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
                for (;;) {
                    var s = Q(e, l, i);
                    if (!s.outside) break;
                    if (0 > r ? 0 >= i: i >= o.height) {
                        s.hitSide = !0;
                        break
                    }
                    i += 5 * r
                }
                return s
            }
            function dr(e, t) {
                var r = t.ch,
                    n = t.ch;
                if (e) { (t.xRel < 0 || n == e.length) && r ? --r: ++n;
                    for (var i = e.charAt(r), o = ti(i) ? ti: /\s/.test(i) ?
                        function(e) {
                            return /\s/.test(e)
                        }: function(e) {
                        return ! /\s/.test(e) && !ti(e)
                    }; r > 0 && o(e.charAt(r - 1));)--r;
                    for (; n < e.length && o(e.charAt(n));)++n
                }
                return {
                    from: Kt(t.line, r),
                    to: Kt(t.line, n)
                }
            }
            function pr(e, t) {
                Jt(e.doc, Kt(t, 0), Xt(e.doc, Kt(t + 1, 0)))
            }
            function mr(t, r, n, i) {
                e.defaults[t] = r,
                n && (ro[t] = i ?
                    function(e, t, r) {
                        r != io && n(e, t, r)
                    }: n)
            }
            function gr(e, t) {
                if (t === !0) return t;
                if (e.copyState) return e.copyState(t);
                var r = {};
                for (var n in t) {
                    var i = t[n];
                    i instanceof Array && (i = i.concat([])),
                        r[n] = i
                }
                return r
            }
            function vr(e, t, r) {
                return e.startState ? e.startState(t, r) : !0
            }
            function yr(e) {
                return "string" == typeof e ? fo[e] : e
            }
            function br(e, t, r) {
                function n(t) {
                    t = yr(t);
                    var i = t[e];
                    if (i === !1) return "stop";
                    if (null != i && r(i)) return ! 0;
                    if (t.nofallthrough) return "stop";
                    var o = t.fallthrough;
                    if (null == o) return ! 1;
                    if ("[object Array]" != Object.prototype.toString.call(o)) return n(o);
                    for (var l = 0,
                             a = o.length; a > l; ++l) {
                        var s = n(o[l]);
                        if (s) return s
                    }
                    return ! 1
                }
                for (var i = 0; i < t.length; ++i) {
                    var o = n(t[i]);
                    if (o) return "stop" != o
                }
            }
            function xr(e) {
                var t = Eo[e.keyCode];
                return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
            }
            function Cr(e, t) {
                if (Hi && 34 == e.keyCode && e["char"]) return ! 1;
                var r = Eo[e.keyCode];
                return null == r || e.altGraphKey ? !1 : (e.altKey && (r = "Alt-" + r), (Ki ? e.metaKey: e.ctrlKey) && (r = "Ctrl-" + r), (Ki ? e.ctrlKey: e.metaKey) && (r = "Cmd-" + r), !t && e.shiftKey && (r = "Shift-" + r), r)
            }
            function wr(e, t) {
                this.pos = this.start = 0,
                    this.string = e,
                    this.tabSize = t || 8,
                    this.lastColumnPos = this.lastColumnValue = 0
            }
            function Lr(e, t) {
                this.lines = [],
                    this.type = t,
                    this.doc = e
            }
            function kr(e, t, r, n, i) {
                if (n && n.shared) return Mr(e, t, r, n, i);
                if (e.cm && !e.cm.curOp) return ot(e.cm, kr)(e, t, r, n, i);
                var o = new Lr(e, i);
                if ("range" == i && !qt(t, r)) return o;
                n && Jn(n, o),
                o.replacedWith && (o.collapsed = !0, o.replacedWith = ni("span", [o.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || (o.replacedWith.ignoreEvents = !0)),
                o.collapsed && ($i = !0),
                o.addToHistory && wn(e, {
                        from: t,
                        to: r,
                        origin: "markText"
                    },
                    {
                        head: e.sel.head,
                        anchor: e.sel.anchor
                    },
                    0 / 0);
                var l, a, s, c = t.line,
                    u = 0,
                    f = e.cm;
                if (e.iter(c, r.line + 1,
                        function(n) {
                            f && o.collapsed && !f.options.lineWrapping && Pr(e, n) == f.display.maxLine && (s = !0);
                            var i = {
                                from: null,
                                to: null,
                                marker: o
                            };
                            u += n.text.length,
                            c == t.line && (i.from = t.ch, u -= t.ch),
                            c == r.line && (i.to = r.ch, u -= n.text.length - r.ch),
                            o.collapsed && (c == r.line && (a = zr(n, r.ch)), c == t.line ? l = zr(n, t.ch) : pn(n, 0)),
                                Ar(n, i),
                                ++c
                        }), o.collapsed && e.iter(t.line, r.line + 1,
                        function(t) {
                            Br(e, t) && pn(t, 0)
                        }), o.clearOnEnter && Fn(o, "beforeCursorEnter",
                        function() {
                            o.clear()
                        }), o.readOnly && (qi = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed) {
                    if (l != a) throw new Error("Inserting collapsed marker overlapping an existing one");
                    o.size = u,
                        o.atomic = !0
                }
                return f && (s && (f.curOp.updateMaxLine = !0), (o.className || o.title || o.startStyle || o.endStyle || o.collapsed) && st(f, t.line, r.line + 1), o.atomic && tr(f)),
                    o
            }
            function Sr(e, t) {
                this.markers = e,
                    this.primary = t;
                for (var r = 0,
                         n = this; r < e.length; ++r) e[r].parent = this,
                    Fn(e[r], "clear",
                        function() {
                            n.clear()
                        })
            }
            function Mr(e, t, r, n, i) {
                n = Jn(n),
                    n.shared = !1;
                var o = [kr(e, t, r, n, i)],
                    l = o[0],
                    a = n.replacedWith;
                return cn(e,
                    function(e) {
                        a && (n.replacedWith = a.cloneNode(!0)),
                            o.push(kr(e, Xt(e, t), Xt(e, r), n, i));
                        for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
                        l = jn(o)
                    }),
                    new Sr(o, l)
            }
            function Tr(e, t) {
                if (e) for (var r = 0; r < e.length; ++r) {
                    var n = e[r];
                    if (n.marker == t) return n
                }
            }
            function Nr(e, t) {
                for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
                return r
            }
            function Ar(e, t) {
                e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t],
                    t.marker.attachLine(e)
            }
            function Hr(e, t, r) {
                if (e) for (var n, i = 0; i < e.length; ++i) {
                    var o = e[i],
                        l = o.marker,
                        a = null == o.from || (l.inclusiveLeft ? o.from <= t: o.from < t);
                    if (a || "bookmark" == l.type && o.from == t && (!r || !o.marker.insertLeft)) {
                        var s = null == o.to || (l.inclusiveRight ? o.to >= t: o.to > t); (n || (n = [])).push({
                            from: o.from,
                            to: s ? null: o.to,
                            marker: l
                        })
                    }
                }
                return n
            }
            function Wr(e, t, r) {
                if (e) for (var n, i = 0; i < e.length; ++i) {
                    var o = e[i],
                        l = o.marker,
                        a = null == o.to || (l.inclusiveRight ? o.to >= t: o.to > t);
                    if (a || "bookmark" == l.type && o.from == t && (!r || o.marker.insertLeft)) {
                        var s = null == o.from || (l.inclusiveLeft ? o.from <= t: o.from < t); (n || (n = [])).push({
                            from: s ? null: o.from - t,
                            to: null == o.to ? null: o.to - t,
                            marker: l
                        })
                    }
                }
                return n
            }
            function Dr(e, t) {
                var r = Zt(e, t.from.line) && fn(e, t.from.line).markedSpans,
                    n = Zt(e, t.to.line) && fn(e, t.to.line).markedSpans;
                if (!r && !n) return null;
                var i = t.from.ch,
                    o = t.to.ch,
                    l = Ut(t.from, t.to),
                    a = Hr(r, i, l),
                    s = Wr(n, o, l),
                    c = 1 == t.text.length,
                    u = jn(t.text).length + (c ? i: 0);
                if (a) for (var f = 0; f < a.length; ++f) {
                    var h = a[f];
                    if (null == h.to) {
                        var d = Tr(s, h.marker);
                        d ? c && (h.to = null == d.to ? null: d.to + u) : h.to = i
                    }
                }
                if (s) for (var f = 0; f < s.length; ++f) {
                    var h = s[f];
                    if (null != h.to && (h.to += u), null == h.from) {
                        var d = Tr(a, h.marker);
                        d || (h.from = u, c && (a || (a = [])).push(h))
                    } else h.from += u,
                    c && (a || (a = [])).push(h)
                }
                if (c && a) {
                    for (var f = 0; f < a.length; ++f) null != a[f].from && a[f].from == a[f].to && "bookmark" != a[f].marker.type && a.splice(f--, 1);
                    a.length || (a = null)
                }
                var p = [a];
                if (!c) {
                    var m, g = t.text.length - 2;
                    if (g > 0 && a) for (var f = 0; f < a.length; ++f) null == a[f].to && (m || (m = [])).push({
                        from: null,
                        to: null,
                        marker: a[f].marker
                    });
                    for (var f = 0; g > f; ++f) p.push(m);
                    p.push(s)
                }
                return p
            }
            function Or(e, t) {
                var r = kn(e, t),
                    n = Dr(e, t);
                if (!r) return n;
                if (!n) return r;
                for (var i = 0; i < r.length; ++i) {
                    var o = r[i],
                        l = n[i];
                    if (o && l) e: for (var a = 0; a < l.length; ++a) {
                        for (var s = l[a], c = 0; c < o.length; ++c) if (o[c].marker == s.marker) continue e;
                        o.push(s)
                    } else l && (r[i] = l)
                }
                return r
            }
            function Er(e, t, r) {
                var n = null;
                if (e.iter(t.line, r.line + 1,
                        function(e) {
                            if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
                                var r = e.markedSpans[t].marker; ! r.readOnly || n && -1 != Yn(n, r) || (n || (n = [])).push(r)
                            }
                        }), !n) return null;
                for (var i = [{
                    from: t,
                    to: r
                }], o = 0; o < n.length; ++o) for (var l = n[o], a = l.find(), s = 0; s < i.length; ++s) {
                    var c = i[s];
                    if (!qt(c.to, a.from) && !qt(a.to, c.from)) {
                        var u = [s, 1]; (qt(c.from, a.from) || !l.inclusiveLeft && Ut(c.from, a.from)) && u.push({
                            from: c.from,
                            to: a.from
                        }),
                        (qt(a.to, c.to) || !l.inclusiveRight && Ut(c.to, a.to)) && u.push({
                            from: a.to,
                            to: c.to
                        }),
                            i.splice.apply(i, u),
                            s += u.length - 1
                    }
                }
                return i
            }
            function zr(e, t) {
                var r, n = $i && e.markedSpans;
                if (n) for (var i, o = 0; o < n.length; ++o) i = n[o],
                i.marker.collapsed && (null == i.from || i.from < t) && (null == i.to || i.to > t) && (!r || r.width < i.marker.width) && (r = i.marker);
                return r
            }
            function Ir(e) {
                return zr(e, -1)
            }
            function Fr(e) {
                return zr(e, e.text.length + 1)
            }
            function Pr(e, t) {
                for (var r; r = Ir(t);) t = fn(e, r.find().from.line);
                return t
            }
            function Br(e, t) {
                var r = $i && t.markedSpans;
                if (r) for (var n, i = 0; i < r.length; ++i) if (n = r[i], n.marker.collapsed) {
                    if (null == n.from) return ! 0;
                    if (!n.marker.replacedWith && 0 == n.from && n.marker.inclusiveLeft && Rr(e, t, n)) return ! 0
                }
            }
            function Rr(e, t, r) {
                if (null == r.to) {
                    var n = r.marker.find().to,
                        i = fn(e, n.line);
                    return Rr(e, i, Tr(i.markedSpans, r.marker))
                }
                if (r.marker.inclusiveRight && r.to == t.text.length) return ! 0;
                for (var o, l = 0; l < t.markedSpans.length; ++l) if (o = t.markedSpans[l], o.marker.collapsed && !o.marker.replacedWith && o.from == r.to && (o.marker.inclusiveLeft || r.marker.inclusiveRight) && Rr(e, t, o)) return ! 0
            }
            function Gr(e) {
                var t = e.markedSpans;
                if (t) {
                    for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
                    e.markedSpans = null
                }
            }
            function Vr(e, t) {
                if (t) {
                    for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
                    e.markedSpans = t
                }
            }
            function _r(e) {
                return function() {
                    var t = !this.cm.curOp;
                    t && nt(this.cm);
                    try {
                        var r = e.apply(this, arguments)
                    } finally {
                        t && it(this.cm)
                    }
                    return r
                }
            }
            function Kr(e) {
                return null != e.height ? e.height: (e.node.parentNode && 1 == e.node.parentNode.nodeType || oi(e.cm.display.measure, ni("div", [e.node], null, "position: relative")), e.height = e.node.offsetHeight)
            }
            function Ur(e, t, r, n) {
                var i = new ho(e, r, n);
                return i.noHScroll && (e.display.alignWidgets = !0),
                    ur(e, t,
                        function(t) {
                            var r = t.widgets || (t.widgets = []);
                            if (null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, !Br(e.doc, t) || i.showIfHidden) {
                                var n = vn(e, t) < e.doc.scrollTop;
                                pn(t, t.height + Kr(i)),
                                n && sr(e, 0, i.height)
                            }
                            return ! 0
                        }),
                    i
            }
            function qr(e, t, r, n) {
                e.text = t,
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null),
                null != e.order && (e.order = null),
                    Gr(e),
                    Vr(e, r);
                var i = n ? n(e) : 1;
                i != e.height && pn(e, i)
            }
            function $r(e) {
                e.parent = null,
                    Gr(e)
            }
            function jr(e, t, r, n, i) {
                var o = r.flattenSpans;
                null == o && (o = e.options.flattenSpans);
                var l, a = 0,
                    s = null,
                    c = new wr(t, e.options.tabSize);
                for ("" == t && r.blankLine && r.blankLine(n); ! c.eol();) c.pos > e.options.maxHighlightLength ? (o = !1, c.pos = Math.min(t.length, c.start + 5e4), l = null) : l = r.token(c, n),
                o && s == l || (a < c.start && i(c.start, s), a = c.start, s = l),
                    c.start = c.pos;
                a < c.pos && i(c.pos, s)
            }
            function Xr(e, t, r) {
                var n = [e.state.modeGen];
                jr(e, t.text, e.doc.mode, r,
                    function(e, t) {
                        n.push(e, t)
                    });
                for (var i = 0; i < e.state.overlays.length; ++i) {
                    var o = e.state.overlays[i],
                        l = 1,
                        a = 0;
                    jr(e, t.text, o.mode, !0,
                        function(e, t) {
                            for (var r = l; e > a;) {
                                var i = n[l];
                                i > e && n.splice(l, 1, e, n[l + 1], i),
                                    l += 2,
                                    a = Math.min(e, i)
                            }
                            if (t) if (o.opaque) n.splice(r, l - r, e, t),
                                l = r + 2;
                            else for (; l > r; r += 2) {
                                    var s = n[r + 1];
                                    n[r + 1] = s ? s + " " + t: t
                                }
                        })
                }
                return n
            }
            function Yr(e, t) {
                return t.styles && t.styles[0] == e.state.modeGen || (t.styles = Xr(e, t, t.stateAfter = z(e, mn(t)))),
                    t.styles
            }
            function Zr(e, t, r) {
                var n = e.doc.mode,
                    i = new wr(t.text, e.options.tabSize);
                for ("" == t.text && n.blankLine && n.blankLine(r); ! i.eol() && i.pos <= e.options.maxHighlightLength;) n.token(i, r),
                    i.start = i.pos
            }
            function Jr(e) {
                return e ? mo[e] || (mo[e] = "cm-" + e.replace(/ +/g, " cm-")) : null
            }
            function Qr(e, t, r, n) {
                for (var i, o = t,
                         l = !0; i = Ir(o);) o = fn(e.doc, i.find().from.line);
                var a = {
                    pre: ni("pre"),
                    col: 0,
                    pos: 0,
                    measure: null,
                    measuredSomething: !1,
                    cm: e,
                    copyWidgets: n
                };
                o.textClass && (a.pre.className = o.textClass);
                do {
                    o.text && (l = !1), a.measure = o == t && r, a.pos = 0, a.addToken = a.measure ? tn: en, (ki || Ti) && e.getOption("lineWrapping") && (a.addToken = rn(a.addToken));
                    var s = on(o, a, Yr(e, o));
                    r && o == t && !a.measuredSomething && (r[0] = a.pre.appendChild(ui(e.display.measure)), a.measuredSomething = !0), s && (o = fn(e.doc, s.to.line))
                } while ( s ); ! r || a.measuredSomething || r[0] || (r[0] = a.pre.appendChild(l ? ni("span", " ") : ui(e.display.measure))),
                a.pre.firstChild || Br(e.doc, t) || a.pre.appendChild(document.createTextNode(" "));
                var c;
                if (r && ki && (c = yn(o))) {
                    var u = c.length - 1;
                    c[u].from == c[u].to && --u;
                    var f = c[u],
                        h = c[u - 1];
                    if (f.from + 1 == f.to && h && f.level < h.level) {
                        var d = r[a.pos - 1];
                        d && d.parentNode.insertBefore(d.measureRight = ui(e.display.measure), d.nextSibling)
                    }
                }
                return Bn(e, "renderLine", e, t, a.pre),
                    a.pre
            }
            function en(e, t, r, n, i, o) {
                if (t) {
                    if (go.test(t)) for (var l = document.createDocumentFragment(), a = 0;;) {
                        go.lastIndex = a;
                        var s = go.exec(t),
                            c = s ? s.index - a: t.length - a;
                        if (c && (l.appendChild(document.createTextNode(t.slice(a, a + c))), e.col += c), !s) break;
                        if (a += c + 1, "	" == s[0]) {
                            var u = e.cm.options.tabSize,
                                f = u - e.col % u;
                            l.appendChild(ni("span", $n(f), "cm-tab")),
                                e.col += f
                        } else {
                            var h = ni("span", "•", "cm-invalidchar");
                            h.title = "\\u" + s[0].charCodeAt(0).toString(16),
                                l.appendChild(h),
                                e.col += 1
                        }
                    } else {
                        e.col += t.length;
                        var l = document.createTextNode(t)
                    }
                    if (r || n || i || e.measure) {
                        var d = r || "";
                        n && (d += n),
                        i && (d += i);
                        var h = ni("span", [l], d);
                        return o && (h.title = o),
                            e.pre.appendChild(h)
                    }
                    e.pre.appendChild(l)
                }
            }
            function tn(e, t, r, n, i) {
                for (var o = e.cm.options.lineWrapping,
                         l = 0; l < t.length; ++l) {
                    var a = t.charAt(l),
                        s = 0 == l;
                    a >= "���" && "���" > a && l < t.length - 1 ? (a = t.slice(l, l + 2), ++l) : l && o && si(t, l) && e.pre.appendChild(ni("wbr"));
                    var c = e.measure[e.pos],
                        u = e.measure[e.pos] = en(e, a, r, s && n, l == t.length - 1 && i);
                    c && (u.leftSide = c.leftSide || c),
                    ki && o && " " == a && l && !/\s/.test(t.charAt(l - 1)) && l < t.length - 1 && !/\s/.test(t.charAt(l + 1)) && (u.style.whiteSpace = "normal"),
                        e.pos += a.length
                }
                t.length && (e.measuredSomething = !0)
            }
            function rn(e) {
                function t(e) {
                    for (var t = " ",
                             r = 0; r < e.length - 2; ++r) t += r % 2 ? " ": " ";
                    return t += " "
                }
                return function(r, n, i, o, l, a) {
                    return e(r, n.replace(/ {3,}/, t), i, o, l, a)
                }
            }
            function nn(e, t, r, n) {
                var i = !n && r.replacedWith;
                if (i && (e.copyWidgets && (i = i.cloneNode(!0)), e.pre.appendChild(i), e.measure)) {
                    if (t) e.measure[e.pos] = i;
                    else {
                        var o = e.measure[e.pos] = ui(e.cm.display.measure);
                        "bookmark" != r.type || r.insertLeft ? e.pre.insertBefore(o, i) : e.pre.appendChild(o)
                    }
                    e.measuredSomething = !0
                }
                e.pos += t
            }
            function on(e, t, r) {
                var n = e.markedSpans,
                    i = e.text,
                    o = 0;
                if (n) for (var l, a, s, c, u, f, h = i.length,
                                d = 0,
                                p = 1,
                                m = "",
                                g = 0;;) {
                    if (g == d) {
                        a = s = c = u = "",
                            f = null,
                            g = 1 / 0;
                        for (var v = null,
                                 y = 0; y < n.length; ++y) {
                            var b = n[y],
                                x = b.marker;
                            b.from <= d && (null == b.to || b.to > d) ? (null != b.to && g > b.to && (g = b.to, s = ""), x.className && (a += " " + x.className), x.startStyle && b.from == d && (c += " " + x.startStyle), x.endStyle && b.to == g && (s += " " + x.endStyle), x.title && !u && (u = x.title), x.collapsed && (!f || f.marker.size < x.size) && (f = b)) : b.from > d && g > b.from && (g = b.from),
                            "bookmark" == x.type && b.from == d && x.replacedWith && (v = x)
                        }
                        if (f && (f.from || 0) == d && (nn(t, (null == f.to ? h: f.to) - d, f.marker, null == f.from), null == f.to)) return f.marker.find();
                        v && !f && nn(t, 0, v)
                    }
                    if (d >= h) break;
                    for (var C = Math.min(h, g);;) {
                        if (m) {
                            var w = d + m.length;
                            if (!f) {
                                var L = w > C ? m.slice(0, C - d) : m;
                                t.addToken(t, L, l ? l + a: a, c, d + L.length == g ? s: "", u)
                            }
                            if (w >= C) {
                                m = m.slice(C - d),
                                    d = C;
                                break
                            }
                            d = w,
                                c = ""
                        }
                        m = i.slice(o, o = r[p++]),
                            l = Jr(r[p++])
                    }
                } else for (var p = 1; p < r.length; p += 2) t.addToken(t, i.slice(o, o = r[p]), Jr(r[p + 1]))
            }
            function ln(e, t, r, n, i) {
                function o(e) {
                    return r ? r[e] : null
                }
                function l(e, r, n) {
                    qr(e, r, n, i),
                        Rn(e, "change", e, t)
                }
                var a = t.from,
                    s = t.to,
                    c = t.text,
                    u = fn(e, a.line),
                    f = fn(e, s.line),
                    h = jn(c),
                    d = o(c.length - 1),
                    p = s.line - a.line;
                if (0 == a.ch && 0 == s.ch && "" == h) {
                    for (var m = 0,
                             g = c.length - 1,
                             v = []; g > m; ++m) v.push(new po(c[m], o(m), i));
                    l(f, f.text, d),
                    p && e.remove(a.line, p),
                    v.length && e.insert(a.line, v)
                } else if (u == f) if (1 == c.length) l(u, u.text.slice(0, a.ch) + h + u.text.slice(s.ch), d);
                else {
                    for (var v = [], m = 1, g = c.length - 1; g > m; ++m) v.push(new po(c[m], o(m), i));
                    v.push(new po(h + u.text.slice(s.ch), d, i)),
                        l(u, u.text.slice(0, a.ch) + c[0], o(0)),
                        e.insert(a.line + 1, v)
                } else if (1 == c.length) l(u, u.text.slice(0, a.ch) + c[0] + f.text.slice(s.ch), o(0)),
                    e.remove(a.line + 1, p);
                else {
                    l(u, u.text.slice(0, a.ch) + c[0], o(0)),
                        l(f, h + f.text.slice(s.ch), d);
                    for (var m = 1,
                             g = c.length - 1,
                             v = []; g > m; ++m) v.push(new po(c[m], o(m), i));
                    p > 1 && e.remove(a.line + 1, p - 1),
                        e.insert(a.line + 1, v)
                }
                Rn(e, "change", e, t),
                    er(e, n.anchor, n.head, null, !0)
            }
            function an(e) {
                this.lines = e,
                    this.parent = null;
                for (var t = 0,
                         r = e.length,
                         n = 0; r > t; ++t) e[t].parent = this,
                    n += e[t].height;
                this.height = n
            }
            function sn(e) {
                this.children = e;
                for (var t = 0,
                         r = 0,
                         n = 0,
                         i = e.length; i > n; ++n) {
                    var o = e[n];
                    t += o.chunkSize(),
                        r += o.height,
                        o.parent = this
                }
                this.size = t,
                    this.height = r,
                    this.parent = null
            }
            function cn(e, t, r) {
                function n(e, i, o) {
                    if (e.linked) for (var l = 0; l < e.linked.length; ++l) {
                        var a = e.linked[l];
                        if (a.doc != i) {
                            var s = o && a.sharedHist; (!r || s) && (t(a.doc, s), n(a.doc, e, s))
                        }
                    }
                }
                n(e, null, !0)
            }
            function un(e, t) {
                if (t.cm) throw new Error("This document is already in use.");
                e.doc = t,
                    t.cm = e,
                    o(e),
                    r(e),
                e.options.lineWrapping || f(e),
                    e.options.mode = t.modeOption,
                    st(e)
            }
            function fn(e, t) {
                for (t -= e.first; ! e.lines;) for (var r = 0;; ++r) {
                    var n = e.children[r],
                        i = n.chunkSize();
                    if (i > t) {
                        e = n;
                        break
                    }
                    t -= i
                }
                return e.lines[t]
            }
            function hn(e, t, r) {
                var n = [],
                    i = t.line;
                return e.iter(t.line, r.line + 1,
                    function(e) {
                        var o = e.text;
                        i == r.line && (o = o.slice(0, r.ch)),
                        i == t.line && (o = o.slice(t.ch)),
                            n.push(o),
                            ++i
                    }),
                    n
            }
            function dn(e, t, r) {
                var n = [];
                return e.iter(t, r,
                    function(e) {
                        n.push(e.text)
                    }),
                    n
            }
            function pn(e, t) {
                for (var r = t - e.height,
                         n = e; n; n = n.parent) n.height += r
            }
            function mn(e) {
                if (null == e.parent) return null;
                for (var t = e.parent,
                         r = Yn(t.lines, e), n = t.parent; n; t = n, n = n.parent) for (var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize();
                return r + t.first
            }
            function gn(e, t) {
                var r = e.first;
                e: do {
                    for (var n = 0,
                             i = e.children.length; i > n; ++n) {
                        var o = e.children[n],
                            l = o.height;
                        if (l > t) {
                            e = o;
                            continue e
                        }
                        t -= l,
                            r += o.chunkSize()
                    }
                    return r
                } while (! e . lines );
                for (var n = 0,
                         i = e.lines.length; i > n; ++n) {
                    var a = e.lines[n],
                        s = a.height;
                    if (s > t) break;
                    t -= s
                }
                return r + n
            }
            function vn(e, t) {
                t = Pr(e.doc, t);
                for (var r = 0,
                         n = t.parent,
                         i = 0; i < n.lines.length; ++i) {
                    var o = n.lines[i];
                    if (o == t) break;
                    r += o.height
                }
                for (var l = n.parent; l; n = l, l = n.parent) for (var i = 0; i < l.children.length; ++i) {
                    var a = l.children[i];
                    if (a == n) break;
                    r += a.height
                }
                return r
            }
            function yn(e) {
                var t = e.order;
                return null == t && (t = e.order = Io(e.text)),
                    t
            }
            function bn(e) {
                return {
                    done: [],
                    undone: [],
                    undoDepth: 1 / 0,
                    lastTime: 0,
                    lastOp: null,
                    lastOrigin: null,
                    generation: e || 1,
                    maxGeneration: e || 1
                }
            }
            function xn(e, t, r, n) {
                var i = t["spans_" + e.id],
                    o = 0;
                e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n),
                    function(r) {
                        r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans),
                            ++o
                    })
            }
            function Cn(e, t) {
                var r = {
                        line: t.from.line,
                        ch: t.from.ch
                    },
                    n = {
                        from: r,
                        to: to(t),
                        text: hn(e, t.from, t.to)
                    };
                return xn(e, n, t.from.line, t.to.line + 1),
                    cn(e,
                        function(e) {
                            xn(e, n, t.from.line, t.to.line + 1)
                        },
                        !0),
                    n
            }
            function wn(e, t, r, n) {
                var i = e.history;
                i.undone.length = 0;
                var o = +new Date,
                    l = jn(i.done);
                if (l && (i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastTime > o - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0)))) {
                    var a = jn(l.changes);
                    Ut(t.from, t.to) && Ut(t.from, a.to) ? a.to = to(t) : l.changes.push(Cn(e, t)),
                        l.anchorAfter = r.anchor,
                        l.headAfter = r.head
                } else for (l = {
                    changes: [Cn(e, t)],
                    generation: i.generation,
                    anchorBefore: e.sel.anchor,
                    headBefore: e.sel.head,
                    anchorAfter: r.anchor,
                    headAfter: r.head
                },
                                i.done.push(l), i.generation = ++i.maxGeneration; i.done.length > i.undoDepth;) i.done.shift();
                i.lastTime = o,
                    i.lastOp = n,
                    i.lastOrigin = t.origin
            }
            function Ln(e) {
                if (!e) return null;
                for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
                return t ? t.length ? t: null: e
            }
            function kn(e, t) {
                var r = t["spans_" + e.id];
                if (!r) return null;
                for (var n = 0,
                         i = []; n < t.text.length; ++n) i.push(Ln(r[n]));
                return i
            }
            function Sn(e, t) {
                for (var r = 0,
                         n = []; r < e.length; ++r) {
                    var i = e[r],
                        o = i.changes,
                        l = [];
                    n.push({
                        changes: l,
                        anchorBefore: i.anchorBefore,
                        headBefore: i.headBefore,
                        anchorAfter: i.anchorAfter,
                        headAfter: i.headAfter
                    });
                    for (var a = 0; a < o.length; ++a) {
                        var s, c = o[a];
                        if (l.push({
                                from: c.from,
                                to: c.to,
                                text: c.text
                            }), t) for (var u in c)(s = u.match(/^spans_(\d+)$/)) && Yn(t, Number(s[1])) > -1 && (jn(l)[u] = c[u], delete c[u])
                    }
                }
                return n
            }
            function Mn(e, t, r, n) {
                r < e.line ? e.line += n: t < e.line && (e.line = t, e.ch = 0)
            }
            function Tn(e, t, r, n) {
                for (var i = 0; i < e.length; ++i) {
                    for (var o = e[i], l = !0, a = 0; a < o.changes.length; ++a) {
                        var s = o.changes[a];
                        if (o.copied || (s.from = $t(s.from), s.to = $t(s.to)), r < s.from.line) s.from.line += n,
                            s.to.line += n;
                        else if (t <= s.to.line) {
                            l = !1;
                            break
                        }
                    }
                    o.copied || (o.anchorBefore = $t(o.anchorBefore), o.headBefore = $t(o.headBefore), o.anchorAfter = $t(o.anchorAfter), o.readAfter = $t(o.headAfter), o.copied = !0),
                        l ? (Mn(o.anchorBefore), Mn(o.headBefore), Mn(o.anchorAfter), Mn(o.headAfter)) : (e.splice(0, i + 1), i = 0)
                }
            }
            function Nn(e, t) {
                var r = t.from.line,
                    n = t.to.line,
                    i = t.text.length - (n - r) - 1;
                Tn(e.done, r, n, i),
                    Tn(e.undone, r, n, i)
            }
            function An() {
                En(this)
            }
            function Hn(e) {
                return e.stop || (e.stop = An),
                    e
            }
            function Wn(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }
            function Dn(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
            }
            function On(e) {
                return null != e.defaultPrevented ? e.defaultPrevented: 0 == e.returnValue
            }
            function En(e) {
                Wn(e),
                    Dn(e)
            }
            function zn(e) {
                return e.target || e.srcElement
            }
            function In(e) {
                var t = e.which;
                return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)),
                Pi && e.ctrlKey && 1 == t && (t = 3),
                    t
            }
            function Fn(e, t, r) {
                if (e.addEventListener) e.addEventListener(t, r, !1);
                else if (e.attachEvent) e.attachEvent("on" + t, r);
                else {
                    var n = e._handlers || (e._handlers = {}),
                        i = n[t] || (n[t] = []);
                    i.push(r)
                }
            }
            function Pn(e, t, r) {
                if (e.removeEventListener) e.removeEventListener(t, r, !1);
                else if (e.detachEvent) e.detachEvent("on" + t, r);
                else {
                    var n = e._handlers && e._handlers[t];
                    if (!n) return;
                    for (var i = 0; i < n.length; ++i) if (n[i] == r) {
                        n.splice(i, 1);
                        break
                    }
                }
            }
            function Bn(e, t) {
                var r = e._handlers && e._handlers[t];
                if (r) for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n)
            }
            function Rn(e, t) {
                function r(e) {
                    return function() {
                        e.apply(null, i)
                    }
                }
                var n = e._handlers && e._handlers[t];
                if (n) {
                    var i = Array.prototype.slice.call(arguments, 2);
                    Co || (++wo, Co = [], setTimeout(Vn, 0));
                    for (var o = 0; o < n.length; ++o) Co.push(r(n[o]))
                }
            }
            function Gn(e, t, r) {
                return Bn(e, r || t.type, e, t),
                On(t) || t.codemirrorIgnore
            }
            function Vn() {--wo;
                var e = Co;
                Co = null;
                for (var t = 0; t < e.length; ++t) e[t]()
            }
            function _n(e, t) {
                var r = e._handlers && e._handlers[t];
                return r && r.length > 0
            }
            function Kn(e) {
                e.prototype.on = function(e, t) {
                    Fn(this, e, t)
                },
                    e.prototype.off = function(e, t) {
                        Pn(this, e, t)
                    }
            }
            function Un() {
                this.id = null
            }
            function qn(e, t, r, n, i) {
                null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));
                for (var o = n || 0,
                         l = i || 0; t > o; ++o)"	" == e.charAt(o) ? l += r - l % r: ++l;
                return l
            }
            function $n(e) {
                for (; So.length <= e;) So.push(jn(So) + " ");
                return So[e]
            }
            function jn(e) {
                return e[e.length - 1]
            }
            function Xn(e) {
                if (Ii) e.selectionStart = 0,
                    e.selectionEnd = e.value.length;
                else try {
                    e.select()
                } catch(t) {}
            }
            function Yn(e, t) {
                if (e.indexOf) return e.indexOf(t);
                for (var r = 0,
                         n = e.length; n > r; ++r) if (e[r] == t) return r;
                return - 1
            }
            function Zn(e, t) {
                function r() {}
                r.prototype = e;
                var n = new r;
                return t && Jn(t, n),
                    n
            }
            function Jn(e, t) {
                t || (t = {});
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                return t
            }
            function Qn(e) {
                for (var t = [], r = 0; e > r; ++r) t.push(void 0);
                return t
            }
            function ei(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return e.apply(null, t)
                }
            }
            function ti(e) {
                return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Mo.test(e))
            }
            function ri(e) {
                for (var t in e) if (e.hasOwnProperty(t) && e[t]) return ! 1;
                return ! 0
            }
            function ni(e, t, r, n) {
                var i = document.createElement(e);
                if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) li(i, t);
                else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
                return i
            }
            function ii(e) {
                for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                return e
            }
            function oi(e, t) {
                return ii(e).appendChild(t)
            }
            function li(e, t) {
                Mi ? (e.innerHTML = "", e.appendChild(document.createTextNode(t))) : e.textContent = t
            }
            function ai(e) {
                return e.getBoundingClientRect()
            }
            function si() {
                return ! 1
            }
            function ci(e) {
                if (null != Ao) return Ao;
                var t = ni("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
                return oi(e, t),
                t.offsetWidth && (Ao = t.offsetHeight - t.clientHeight),
                Ao || 0
            }
            function ui(e) {
                if (null == Ho) {
                    var t = ni("span", "​");
                    oi(e, ni("span", [t, document.createTextNode("x")])),
                    0 != e.firstChild.offsetHeight && (Ho = t.offsetWidth <= 1 && t.offsetHeight > 2 && !Si)
                }
                return Ho ? ni("span", "​") : ni("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px")
            }
            function fi(e, t, r, n) {
                if (!e) return n(t, r, "ltr");
                for (var i = !1,
                         o = 0; o < e.length; ++o) {
                    var l = e[o]; (l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl": "ltr"), i = !0)
                }
                i || n(t, r, "ltr")
            }
            function hi(e) {
                return e.level % 2 ? e.to: e.from
            }
            function di(e) {
                return e.level % 2 ? e.from: e.to
            }
            function pi(e) {
                var t = yn(e);
                return t ? hi(t[0]) : 0
            }
            function mi(e) {
                var t = yn(e);
                return t ? di(jn(t)) : e.text.length
            }
            function gi(e, t) {
                var r = fn(e.doc, t),
                    n = Pr(e.doc, r);
                n != r && (t = mn(n));
                var i = yn(n),
                    o = i ? i[0].level % 2 ? mi(n) : pi(n) : 0;
                return Kt(t, o)
            }
            function vi(e, t) {
                for (var r, n; r = Fr(n = fn(e.doc, t));) t = r.find().to.line;
                var i = yn(n),
                    o = i ? i[0].level % 2 ? pi(n) : mi(n) : n.text.length;
                return Kt(t, o)
            }
            function yi(e, t, r) {
                var n = e[0].level;
                return t == n ? !0 : r == n ? !1 : r > t
            }
            function bi(e, t) {
                for (var r, n = 0; n < e.length; ++n) {
                    var i = e[n];
                    if (i.from < t && i.to > t) return zo = null,
                        n;
                    if (i.from == t || i.to == t) {
                        if (null != r) return yi(e, i.level, e[r].level) ? (zo = r, n) : (zo = n, r);
                        r = n
                    }
                }
                return zo = null,
                    r
            }
            function xi(e, t, r, n) {
                if (!n) return t + r;
                do t += r;
                while (t > 0 && To.test(e.text.charAt(t)));
                return t
            }
            function Ci(e, t, r, n) {
                var i = yn(e);
                if (!i) return wi(e, t, r, n);
                for (var o = bi(i, t), l = i[o], a = xi(e, t, l.level % 2 ? -r: r, n);;) {
                    if (a > l.from && a < l.to) return a;
                    if (a == l.from || a == l.to) return bi(i, a) == o ? a: (l = i[o += r], r > 0 == l.level % 2 ? l.to: l.from);
                    if (l = i[o += r], !l) return null;
                    a = r > 0 == l.level % 2 ? xi(e, l.to, -1, n) : xi(e, l.from, 1, n)
                }
            }
            function wi(e, t, r, n) {
                var i = t + r;
                if (n) for (; i > 0 && To.test(e.text.charAt(i));) i += r;
                return 0 > i || i > e.text.length ? null: i
            }
            var Li = /gecko\/\d/i.test(navigator.userAgent),
                ki = /MSIE \d/.test(navigator.userAgent),
                Si = ki && (null == document.documentMode || document.documentMode < 8),
                Mi = ki && (null == document.documentMode || document.documentMode < 9),
                Ti = /WebKit\//.test(navigator.userAgent),
                Ni = Ti && /Qt\/\d+\.\d+/.test(navigator.userAgent),
                Ai = /Chrome\//.test(navigator.userAgent),
                Hi = /Opera\//.test(navigator.userAgent),
                Wi = /Apple Computer/.test(navigator.vendor),
                Di = /KHTML\//.test(navigator.userAgent),
                Oi = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent),
                Ei = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),
                zi = /PhantomJS/.test(navigator.userAgent),
                Ii = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent),
                Fi = Ii || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),
                Pi = Ii || /Mac/.test(navigator.platform),
                Bi = /windows/i.test(navigator.platform),
                Ri = Hi && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
            Ri && (Ri = Number(Ri[1])),
            Ri && Ri >= 15 && (Hi = !1, Ti = !0);
            var Gi, Vi, _i, Ki = Pi && (Ni || Hi && (null == Ri || 12.11 > Ri)),
                Ui = Li || ki && !Mi,
                qi = !1,
                $i = !1,
                ji = 0,
                Xi = 0,
                Yi = 0,
                Zi = null;
            ki ? Zi = -.53 : Li ? Zi = 15 : Ai ? Zi = -.7 : Wi && (Zi = -1 / 3);
            var Ji, Qi, eo = null,
                to = e.changeEnd = function(e) {
                    return e.text ? Kt(e.from.line + e.text.length - 1, jn(e.text).length + (1 == e.text.length ? e.from.ch: 0)) : e.to
                };
            e.Pos = Kt,
                e.prototype = {
                    constructor: e,
                    focus: function() {
                        window.focus(),
                            dt(this),
                            Wt(this),
                            ut(this)
                    },
                    setOption: function(e, t) {
                        var r = this.options,
                            n = r[e]; (r[e] != t || "mode" == e) && (r[e] = t, ro.hasOwnProperty(e) && ot(this, ro[e])(this, t, n))
                    },
                    getOption: function(e) {
                        return this.options[e]
                    },
                    getDoc: function() {
                        return this.doc
                    },
                    addKeyMap: function(e, t) {
                        this.state.keyMaps[t ? "push": "unshift"](e)
                    },
                    removeKeyMap: function(e) {
                        for (var t = this.state.keyMaps,
                                 r = 0; r < t.length; ++r) if (t[r] == e || "string" != typeof t[r] && t[r].name == e) return t.splice(r, 1),
                            !0
                    },
                    addOverlay: ot(null,
                        function(t, r) {
                            var n = t.token ? t: e.getMode(this.options, t);
                            if (n.startState) throw new Error("Overlays may not be stateful.");
                            this.state.overlays.push({
                                mode: n,
                                modeSpec: t,
                                opaque: r && r.opaque
                            }),
                                this.state.modeGen++,
                                st(this)
                        }),
                    removeOverlay: ot(null,
                        function(e) {
                            for (var t = this.state.overlays,
                                     r = 0; r < t.length; ++r) {
                                var n = t[r].modeSpec;
                                if (n == e || "string" == typeof e && n.name == e) return t.splice(r, 1),
                                    this.state.modeGen++,
                                    st(this),
                                    void 0
                            }
                        }),
                    indentLine: ot(null,
                        function(e, t, r) {
                            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart": "prev": t ? "add": "subtract"),
                            Zt(this.doc, e) && cr(this, e, t, r)
                        }),
                    indentSelection: ot(null,
                        function(e) {
                            var t = this.doc.sel;
                            if (Ut(t.from, t.to)) return cr(this, t.from.line, e);
                            for (var r = t.to.line - (t.to.ch ? 0 : 1), n = t.from.line; r >= n; ++n) cr(this, n, e)
                        }),
                    getTokenAt: function(e, t) {
                        var r = this.doc;
                        e = Xt(r, e);
                        for (var n = z(this, e.line, t), i = this.doc.mode, o = fn(r, e.line), l = new wr(o.text, this.options.tabSize); l.pos < e.ch && !l.eol();) {
                            l.start = l.pos;
                            var a = i.token(l, n)
                        }
                        return {
                            start: l.start,
                            end: l.pos,
                            string: l.current(),
                            className: a || null,
                            type: a || null,
                            state: n
                        }
                    },
                    getTokenTypeAt: function(e) {
                        e = Xt(this.doc, e);
                        var t = Yr(this, fn(this.doc, e.line)),
                            r = 0,
                            n = (t.length - 1) / 2,
                            i = e.ch;
                        if (0 == i) return t[2];
                        for (;;) {
                            var o = r + n >> 1;
                            if ((o ? t[2 * o - 1] : 0) >= i) n = o;
                            else {
                                if (! (t[2 * o + 1] < i)) return t[2 * o + 2];
                                r = o + 1
                            }
                        }
                    },
                    getModeAt: function(t) {
                        var r = this.doc.mode;
                        return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode: r
                    },
                    getHelper: function(e, t) {
                        if (co.hasOwnProperty(t)) {
                            var r = co[t],
                                n = this.getModeAt(e);
                            return n[t] && r[n[t]] || n.helperType && r[n.helperType] || r[n.name]
                        }
                    },
                    getStateAfter: function(e, t) {
                        var r = this.doc;
                        return e = jt(r, null == e ? r.first + r.size - 1 : e),
                            z(this, e + 1, t)
                    },
                    cursorCoords: function(e, t) {
                        var r, n = this.doc.sel;
                        return r = null == e ? n.head: "object" == typeof e ? Xt(this.doc, e) : e ? n.from: n.to,
                            Z(this, r, t || "page")
                    },
                    charCoords: function(e, t) {
                        return Y(this, Xt(this.doc, e), t || "page")
                    },
                    coordsChar: function(e, t) {
                        return e = X(this, e, t || "page"),
                            Q(this, e.left, e.top)
                    },
                    lineAtHeight: function(e, t) {
                        return e = X(this, {
                                top: e,
                                left: 0
                            },
                            t || "page").top,
                            gn(this.doc, e + this.display.viewOffset)
                    },
                    heightAtLine: function(e, t) {
                        var r = !1,
                            n = this.doc.first + this.doc.size - 1;
                        e < this.doc.first ? e = this.doc.first: e > n && (e = n, r = !0);
                        var i = fn(this.doc, e);
                        return j(this, fn(this.doc, e), {
                                    top: 0,
                                    left: 0
                                },
                                t || "page").top + (r ? i.height: 0)
                    },
                    defaultTextHeight: function() {
                        return tt(this.display)
                    },
                    defaultCharWidth: function() {
                        return rt(this.display)
                    },
                    setGutterMarker: ot(null,
                        function(e, t, r) {
                            return ur(this, e,
                                function(e) {
                                    var n = e.gutterMarkers || (e.gutterMarkers = {});
                                    return n[t] = r,
                                    !r && ri(n) && (e.gutterMarkers = null),
                                        !0
                                })
                        }),
                    clearGutter: ot(null,
                        function(e) {
                            var t = this,
                                r = t.doc,
                                n = r.first;
                            r.iter(function(r) {
                                r.gutterMarkers && r.gutterMarkers[e] && (r.gutterMarkers[e] = null, st(t, n, n + 1), ri(r.gutterMarkers) && (r.gutterMarkers = null)),
                                    ++n
                            })
                        }),
                    addLineClass: ot(null,
                        function(e, t, r) {
                            return ur(this, e,
                                function(e) {
                                    var n = "text" == t ? "textClass": "background" == t ? "bgClass": "wrapClass";
                                    if (e[n]) {
                                        if (new RegExp("(?:^|\\s)" + r + "(?:$|\\s)").test(e[n])) return ! 1;
                                        e[n] += " " + r
                                    } else e[n] = r;
                                    return ! 0
                                })
                        }),
                    removeLineClass: ot(null,
                        function(e, t, r) {
                            return ur(this, e,
                                function(e) {
                                    var n = "text" == t ? "textClass": "background" == t ? "bgClass": "wrapClass",
                                        i = e[n];
                                    if (!i) return ! 1;
                                    if (null == r) e[n] = null;
                                    else {
                                        var o = i.match(new RegExp("(?:^|\\s+)" + r + "(?:$|\\s+)"));
                                        if (!o) return ! 1;
                                        var l = o.index + o[0].length;
                                        e[n] = i.slice(0, o.index) + (o.index && l != i.length ? " ": "") + i.slice(l) || null
                                    }
                                    return ! 0
                                })
                        }),
                    addLineWidget: ot(null,
                        function(e, t, r) {
                            return Ur(this, e, t, r)
                        }),
                    removeLineWidget: function(e) {
                        e.clear()
                    },
                    lineInfo: function(e) {
                        if ("number" == typeof e) {
                            if (!Zt(this.doc, e)) return null;
                            var t = e;
                            if (e = fn(this.doc, e), !e) return null
                        } else {
                            var t = mn(e);
                            if (null == t) return null
                        }
                        return {
                            line: t,
                            handle: e,
                            text: e.text,
                            gutterMarkers: e.gutterMarkers,
                            textClass: e.textClass,
                            bgClass: e.bgClass,
                            wrapClass: e.wrapClass,
                            widgets: e.widgets
                        }
                    },
                    getViewport: function() {
                        return {
                            from: this.display.showingFrom,
                            to: this.display.showingTo
                        }
                    },
                    addWidget: function(e, t, r, n, i) {
                        var o = this.display;
                        e = Z(this, Xt(this.doc, e));
                        var l = e.bottom,
                            a = e.left;
                        if (t.style.position = "absolute", o.sizer.appendChild(t), "over" == n) l = e.top;
                        else if ("above" == n || "near" == n) {
                            var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                                c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth); ("above" == n || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight: e.bottom + t.offsetHeight <= s && (l = e.bottom),
                            a + t.offsetWidth > c && (a = c - t.offsetWidth)
                        }
                        t.style.top = l + "px",
                            t.style.left = t.style.right = "",
                            "right" == i ? (a = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? a = 0 : "middle" == i && (a = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = a + "px"),
                        r && or(this, a, l, a + t.offsetWidth, l + t.offsetHeight)
                    },
                    triggerOnKeyDown: ot(null, At),
                    execCommand: function(e) {
                        return uo[e](this)
                    },
                    findPosH: function(e, t, r, n) {
                        var i = 1;
                        0 > t && (i = -1, t = -t);
                        for (var o = 0,
                                 l = Xt(this.doc, e); t > o && (l = fr(this.doc, l, i, r, n), !l.hitSide); ++o);
                        return l
                    },
                    moveH: ot(null,
                        function(e, t) {
                            var r, n = this.doc.sel;
                            r = n.shift || n.extend || Ut(n.from, n.to) ? fr(this.doc, n.head, e, t, this.options.rtlMoveVisually) : 0 > e ? n.from: n.to,
                                Jt(this.doc, r, r, e)
                        }),
                    deleteH: ot(null,
                        function(e, t) {
                            var r = this.doc.sel;
                            Ut(r.from, r.to) ? _t(this.doc, "", r.from, fr(this.doc, r.head, e, t, !1), "+delete") : _t(this.doc, "", r.from, r.to, "+delete"),
                                this.curOp.userSelChange = !0
                        }),
                    findPosV: function(e, t, r, n) {
                        var i = 1,
                            o = n;
                        0 > t && (i = -1, t = -t);
                        for (var l = 0,
                                 a = Xt(this.doc, e); t > l; ++l) {
                            var s = Z(this, a, "div");
                            if (null == o ? o = s.left: s.left = o, a = hr(this, s, i, r), a.hitSide) break
                        }
                        return a
                    },
                    moveV: ot(null,
                        function(e, t) {
                            var r = this.doc.sel,
                                n = Z(this, r.head, "div");
                            null != r.goalColumn && (n.left = r.goalColumn);
                            var i = hr(this, n, e, t);
                            "page" == t && sr(this, 0, Y(this, i, "div").top - n.top),
                                Jt(this.doc, i, i, e),
                                r.goalColumn = n.left
                        }),
                    toggleOverwrite: function(e) { (null == e || e != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? this.display.cursor.className += " CodeMirror-overwrite": this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", ""))
                    },
                    hasFocus: function() {
                        return this.state.focused
                    },
                    scrollTo: ot(null,
                        function(e, t) {
                            ar(this, e, t)
                        }),
                    getScrollInfo: function() {
                        var e = this.display.scroller,
                            t = Lo;
                        return {
                            left: e.scrollLeft,
                            top: e.scrollTop,
                            height: e.scrollHeight - t,
                            width: e.scrollWidth - t,
                            clientHeight: e.clientHeight - t,
                            clientWidth: e.clientWidth - t
                        }
                    },
                    scrollIntoView: ot(null,
                        function(e, t) {
                            "number" == typeof e && (e = Kt(e, 0)),
                            t || (t = 0);
                            var r = e;
                            e && null == e.line || (this.curOp.scrollToPos = e ? Xt(this.doc, e) : this.doc.sel.head, this.curOp.scrollToPosMargin = t, r = Z(this, this.curOp.scrollToPos));
                            var n = lr(this, r.left, r.top - t, r.right, r.bottom + t);
                            ar(this, n.scrollLeft, n.scrollTop)
                        }),
                    setSize: ot(null,
                        function(e, t) {
                            function r(e) {
                                return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px": e
                            }
                            null != e && (this.display.wrapper.style.width = r(e)),
                            null != t && (this.display.wrapper.style.height = r(t)),
                            this.options.lineWrapping && (this.display.measureLineCache.length = this.display.measureLineCachePos = 0),
                                this.curOp.forceUpdate = !0
                        }),
                    operation: function(e) {
                        return at(this, e)
                    },
                    refresh: ot(null,
                        function() {
                            U(this),
                                ar(this, this.doc.scrollLeft, this.doc.scrollTop),
                                st(this)
                        }),
                    swapDoc: ot(null,
                        function(e) {
                            var t = this.doc;
                            return t.cm = null,
                                un(this, e),
                                U(this),
                                ht(this, !0),
                                ar(this, e.scrollLeft, e.scrollTop),
                                t
                        }),
                    getInputField: function() {
                        return this.display.input
                    },
                    getWrapperElement: function() {
                        return this.display.wrapper
                    },
                    getScrollerElement: function() {
                        return this.display.scroller
                    },
                    getGutterElement: function() {
                        return this.display.gutters
                    }
                },
                Kn(e);
            var ro = e.optionHandlers = {},
                no = e.defaults = {},
                io = e.Init = {
                    toString: function() {
                        return "CodeMirror.Init"
                    }
                };
            mr("value", "",
                function(e, t) {
                    e.setValue(t)
                },
                !0),
                mr("mode", null,
                    function(e, t) {
                        e.doc.modeOption = t,
                            r(e)
                    },
                    !0),
                mr("indentUnit", 2, r, !0),
                mr("indentWithTabs", !1),
                mr("smartIndent", !0),
                mr("tabSize", 4,
                    function(e) {
                        r(e),
                            U(e),
                            st(e)
                    },
                    !0),
                mr("electricChars", !0),
                mr("rtlMoveVisually", !Bi),
                mr("theme", "default",
                    function(e) {
                        a(e),
                            s(e)
                    },
                    !0),
                mr("keyMap", "default", l),
                mr("extraKeys", null),
                mr("onKeyEvent", null),
                mr("onDragEvent", null),
                mr("lineWrapping", !1, n, !0),
                mr("gutters", [],
                    function(e) {
                        h(e.options),
                            s(e)
                    },
                    !0),
                mr("fixedGutter", !0,
                    function(e, t) {
                        e.display.gutters.style.left = t ? y(e.display) + "px": "0",
                            e.refresh()
                    },
                    !0),
                mr("coverGutterNextToScrollbar", !1, d, !0),
                mr("lineNumbers", !1,
                    function(e) {
                        h(e.options),
                            s(e)
                    },
                    !0),
                mr("firstLineNumber", 1, s, !0),
                mr("lineNumberFormatter",
                    function(e) {
                        return e
                    },
                    s, !0),
                mr("showCursorWhenSelecting", !1, N, !0),
                mr("readOnly", !1,
                    function(e, t) {
                        "nocursor" == t ? (Dt(e), e.display.input.blur()) : t || ht(e, !0)
                    }),
                mr("dragDrop", !0),
                mr("cursorBlinkRate", 530),
                mr("cursorScrollMargin", 0),
                mr("cursorHeight", 1),
                mr("workTime", 100),
                mr("workDelay", 100),
                mr("flattenSpans", !0),
                mr("pollInterval", 100),
                mr("undoDepth", 40,
                    function(e, t) {
                        e.doc.history.undoDepth = t
                    }),
                mr("historyEventDelay", 500),
                mr("viewportMargin", 10,
                    function(e) {
                        e.refresh()
                    },
                    !0),
                mr("maxHighlightLength", 1e4,
                    function(e) {
                        r(e),
                            e.refresh()
                    },
                    !0),
                mr("moveInputWithCursor", !0,
                    function(e, t) {
                        t || (e.display.inputDiv.style.top = e.display.inputDiv.style.left = 0)
                    }),
                mr("tabindex", null,
                    function(e, t) {
                        e.display.input.tabIndex = t || ""
                    }),
                mr("autofocus", null);
            var oo = e.modes = {},
                lo = e.mimeModes = {};
            e.defineMode = function(t, r) {
                if (e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2) {
                    r.dependencies = [];
                    for (var n = 2; n < arguments.length; ++n) r.dependencies.push(arguments[n])
                }
                oo[t] = r
            },
                e.defineMIME = function(e, t) {
                    lo[e] = t
                },
                e.resolveMode = function(t) {
                    if ("string" == typeof t && lo.hasOwnProperty(t)) t = lo[t];
                    else if (t && "string" == typeof t.name && lo.hasOwnProperty(t.name)) {
                        var r = lo[t.name];
                        t = Zn(r, t),
                            t.name = r.name
                    } else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml");
                    return "string" == typeof t ? {
                        name: t
                    }: t || {
                        name: "null"
                    }
                },
                e.getMode = function(t, r) {
                    var r = e.resolveMode(r),
                        n = oo[r.name];
                    if (!n) return e.getMode(t, "text/plain");
                    var i = n(t, r);
                    if (ao.hasOwnProperty(r.name)) {
                        var o = ao[r.name];
                        for (var l in o) o.hasOwnProperty(l) && (i.hasOwnProperty(l) && (i["_" + l] = i[l]), i[l] = o[l])
                    }
                    return i.name = r.name,
                        i
                },
                e.defineMode("null",
                    function() {
                        return {
                            token: function(e) {
                                e.skipToEnd()
                            }
                        }
                    }),
                e.defineMIME("text/plain", "null");
            var ao = e.modeExtensions = {};
            e.extendMode = function(e, t) {
                var r = ao.hasOwnProperty(e) ? ao[e] : ao[e] = {};
                Jn(t, r)
            },
                e.defineExtension = function(t, r) {
                    e.prototype[t] = r
                },
                e.defineDocExtension = function(e, t) {
                    yo.prototype[e] = t
                },
                e.defineOption = mr;
            var so = [];
            e.defineInitHook = function(e) {
                so.push(e)
            };
            var co = e.helpers = {};
            e.registerHelper = function(t, r, n) {
                co.hasOwnProperty(t) || (co[t] = e[t] = {}),
                    co[t][r] = n
            },
                e.isWordChar = ti,
                e.copyState = gr,
                e.startState = vr,
                e.innerMode = function(e, t) {
                    for (; e.innerMode;) {
                        var r = e.innerMode(t);
                        if (!r || r.mode == e) break;
                        t = r.state,
                            e = r.mode
                    }
                    return r || {
                            mode: e,
                            state: t
                        }
                };
            var uo = e.commands = {
                    selectAll: function(e) {
                        e.setSelection(Kt(e.firstLine(), 0), Kt(e.lastLine()))
                    },
                    killLine: function(e) {
                        var t = e.getCursor(!0),
                            r = e.getCursor(!1),
                            n = !Ut(t, r);
                        n || e.getLine(t.line).length != t.ch ? e.replaceRange("", t, n ? r: Kt(t.line), "+delete") : e.replaceRange("", t, Kt(t.line + 1, 0), "+delete")
                    },
                    deleteLine: function(e) {
                        var t = e.getCursor().line;
                        e.replaceRange("", Kt(t, 0), Kt(t), "+delete")
                    },
                    delLineLeft: function(e) {
                        var t = e.getCursor();
                        e.replaceRange("", Kt(t.line, 0), t, "+delete")
                    },
                    undo: function(e) {
                        e.undo()
                    },
                    redo: function(e) {
                        e.redo()
                    },
                    goDocStart: function(e) {
                        e.extendSelection(Kt(e.firstLine(), 0))
                    },
                    goDocEnd: function(e) {
                        e.extendSelection(Kt(e.lastLine()))
                    },
                    goLineStart: function(e) {
                        e.extendSelection(gi(e, e.getCursor().line))
                    },
                    goLineStartSmart: function(e) {
                        var t = e.getCursor(),
                            r = gi(e, t.line),
                            n = e.getLineHandle(r.line),
                            i = yn(n);
                        if (i && 0 != i[0].level) e.extendSelection(r);
                        else {
                            var o = Math.max(0, n.text.search(/\S/)),
                                l = t.line == r.line && t.ch <= o && t.ch;
                            e.extendSelection(Kt(r.line, l ? 0 : o))
                        }
                    },
                    goLineEnd: function(e) {
                        e.extendSelection(vi(e, e.getCursor().line))
                    },
                    goLineRight: function(e) {
                        var t = e.charCoords(e.getCursor(), "div").top + 5;
                        e.extendSelection(e.coordsChar({
                                left: e.display.lineDiv.offsetWidth + 100,
                                top: t
                            },
                            "div"))
                    },
                    goLineLeft: function(e) {
                        var t = e.charCoords(e.getCursor(), "div").top + 5;
                        e.extendSelection(e.coordsChar({
                                left: 0,
                                top: t
                            },
                            "div"))
                    },
                    goLineUp: function(e) {
                        e.moveV( - 1, "line")
                    },
                    goLineDown: function(e) {
                        e.moveV(1, "line")
                    },
                    goPageUp: function(e) {
                        e.moveV( - 1, "page")
                    },
                    goPageDown: function(e) {
                        e.moveV(1, "page")
                    },
                    goCharLeft: function(e) {
                        e.moveH( - 1, "char")
                    },
                    goCharRight: function(e) {
                        e.moveH(1, "char")
                    },
                    goColumnLeft: function(e) {
                        e.moveH( - 1, "column")
                    },
                    goColumnRight: function(e) {
                        e.moveH(1, "column")
                    },
                    goWordLeft: function(e) {
                        e.moveH( - 1, "word")
                    },
                    goGroupRight: function(e) {
                        e.moveH(1, "group")
                    },
                    goGroupLeft: function(e) {
                        e.moveH( - 1, "group")
                    },
                    goWordRight: function(e) {
                        e.moveH(1, "word")
                    },
                    delCharBefore: function(e) {
                        e.deleteH( - 1, "char")
                    },
                    delCharAfter: function(e) {
                        e.deleteH(1, "char")
                    },
                    delWordBefore: function(e) {
                        e.deleteH( - 1, "word")
                    },
                    delWordAfter: function(e) {
                        e.deleteH(1, "word")
                    },
                    delGroupBefore: function(e) {
                        e.deleteH( - 1, "group")
                    },
                    delGroupAfter: function(e) {
                        e.deleteH(1, "group")
                    },
                    indentAuto: function(e) {
                        e.indentSelection("smart")
                    },
                    indentMore: function(e) {
                        e.indentSelection("add")
                    },
                    indentLess: function(e) {
                        e.indentSelection("subtract")
                    },
                    insertTab: function(e) {
                        e.replaceSelection("	", "end", "+input")
                    },
                    defaultTab: function(e) {
                        e.somethingSelected() ? e.indentSelection("add") : e.replaceSelection("	", "end", "+input")
                    },
                    transposeChars: function(e) {
                        var t = e.getCursor(),
                            r = e.getLine(t.line);
                        t.ch > 0 && t.ch < r.length - 1 && e.replaceRange(r.charAt(t.ch) + r.charAt(t.ch - 1), Kt(t.line, t.ch - 1), Kt(t.line, t.ch + 1))
                    },
                    newlineAndIndent: function(e) {
                        ot(e,
                            function() {
                                e.replaceSelection("\n", "end", "+input"),
                                    e.indentLine(e.getCursor().line, null, !0)
                            })()
                    },
                    toggleOverwrite: function(e) {
                        e.toggleOverwrite()
                    }
                },
                fo = e.keyMap = {};
            fo.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite"
            },
                fo.pcDefault = {
                    "Ctrl-A": "selectAll",
                    "Ctrl-D": "deleteLine",
                    "Ctrl-Z": "undo",
                    "Shift-Ctrl-Z": "redo",
                    "Ctrl-Y": "redo",
                    "Ctrl-Home": "goDocStart",
                    "Alt-Up": "goDocStart",
                    "Ctrl-End": "goDocEnd",
                    "Ctrl-Down": "goDocEnd",
                    "Ctrl-Left": "goGroupLeft",
                    "Ctrl-Right": "goGroupRight",
                    "Alt-Left": "goLineStart",
                    "Alt-Right": "goLineEnd",
                    "Ctrl-Backspace": "delGroupBefore",
                    "Ctrl-Delete": "delGroupAfter",
                    "Ctrl-S": "save",
                    "Ctrl-F": "find",
                    "Ctrl-G": "findNext",
                    "Shift-Ctrl-G": "findPrev",
                    "Shift-Ctrl-F": "replace",
                    "Shift-Ctrl-R": "replaceAll",
                    "Ctrl-[": "indentLess",
                    "Ctrl-]": "indentMore",
                    fallthrough: "basic"
                },
                fo.macDefault = {
                    "Cmd-A": "selectAll",
                    "Cmd-D": "deleteLine",
                    "Cmd-Z": "undo",
                    "Shift-Cmd-Z": "redo",
                    "Cmd-Y": "redo",
                    "Cmd-Up": "goDocStart",
                    "Cmd-End": "goDocEnd",
                    "Cmd-Down": "goDocEnd",
                    "Alt-Left": "goGroupLeft",
                    "Alt-Right": "goGroupRight",
                    "Cmd-Left": "goLineStart",
                    "Cmd-Right": "goLineEnd",
                    "Alt-Backspace": "delGroupBefore",
                    "Ctrl-Alt-Backspace": "delGroupAfter",
                    "Alt-Delete": "delGroupAfter",
                    "Cmd-S": "save",
                    "Cmd-F": "find",
                    "Cmd-G": "findNext",
                    "Shift-Cmd-G": "findPrev",
                    "Cmd-Alt-F": "replace",
                    "Shift-Cmd-Alt-F": "replaceAll",
                    "Cmd-[": "indentLess",
                    "Cmd-]": "indentMore",
                    "Cmd-Backspace": "delLineLeft",
                    fallthrough: ["basic", "emacsy"]
                },
                fo["default"] = Pi ? fo.macDefault: fo.pcDefault,
                fo.emacsy = {
                    "Ctrl-F": "goCharRight",
                    "Ctrl-B": "goCharLeft",
                    "Ctrl-P": "goLineUp",
                    "Ctrl-N": "goLineDown",
                    "Alt-F": "goWordRight",
                    "Alt-B": "goWordLeft",
                    "Ctrl-A": "goLineStart",
                    "Ctrl-E": "goLineEnd",
                    "Ctrl-V": "goPageDown",
                    "Shift-Ctrl-V": "goPageUp",
                    "Ctrl-D": "delCharAfter",
                    "Ctrl-H": "delCharBefore",
                    "Alt-D": "delWordAfter",
                    "Alt-Backspace": "delWordBefore",
                    "Ctrl-K": "killLine",
                    "Ctrl-T": "transposeChars"
                },
                e.lookupKey = br,
                e.isModifierKey = xr,
                e.keyName = Cr,
                e.fromTextArea = function(t, r) {
                    function n() {
                        t.value = c.getValue()
                    }
                    if (r || (r = {}), r.value = t.value, !r.tabindex && t.tabindex && (r.tabindex = t.tabindex), !r.placeholder && t.placeholder && (r.placeholder = t.placeholder), null == r.autofocus) {
                        var i = document.body;
                        try {
                            i = document.activeElement
                        } catch(o) {}
                        r.autofocus = i == t || null != t.getAttribute("autofocus") && i == document.body
                    }
                    if (t.form && (Fn(t.form, "submit", n), !r.leaveSubmitMethodAlone)) {
                        var l = t.form,
                            a = l.submit;
                        try {
                            var s = l.submit = function() {
                                n(),
                                    l.submit = a,
                                    l.submit(),
                                    l.submit = s
                            }
                        } catch(o) {}
                    }
                    t.style.display = "none";
                    var c = e(function(e) {
                            t.parentNode.insertBefore(e, t.nextSibling)
                        },
                        r);
                    return c.save = n,
                        c.getTextArea = function() {
                            return t
                        },
                        c.toTextArea = function() {
                            n(),
                                t.parentNode.removeChild(c.getWrapperElement()),
                                t.style.display = "",
                            t.form && (Pn(t.form, "submit", n), "function" == typeof t.form.submit && (t.form.submit = a))
                        },
                        c
                },
                wr.prototype = {
                    eol: function() {
                        return this.pos >= this.string.length
                    },
                    sol: function() {
                        return 0 == this.pos
                    },
                    peek: function() {
                        return this.string.charAt(this.pos) || void 0
                    },
                    next: function() {
                        return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
                    },
                    eat: function(e) {
                        var t = this.string.charAt(this.pos);
                        if ("string" == typeof e) var r = t == e;
                        else var r = t && (e.test ? e.test(t) : e(t));
                        return r ? (++this.pos, t) : void 0
                    },
                    eatWhile: function(e) {
                        for (var t = this.pos; this.eat(e););
                        return this.pos > t
                    },
                    eatSpace: function() {
                        for (var e = this.pos;
                             /[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
                        return this.pos > e
                    },
                    skipToEnd: function() {
                        this.pos = this.string.length
                    },
                    skipTo: function(e) {
                        var t = this.string.indexOf(e, this.pos);
                        return t > -1 ? (this.pos = t, !0) : void 0
                    },
                    backUp: function(e) {
                        this.pos -= e
                    },
                    column: function() {
                        return this.lastColumnPos < this.start && (this.lastColumnValue = qn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start),
                            this.lastColumnValue
                    },
                    indentation: function() {
                        return qn(this.string, null, this.tabSize)
                    },
                    match: function(e, t, r) {
                        if ("string" != typeof e) {
                            var n = this.string.slice(this.pos).match(e);
                            return n && n.index > 0 ? null: (n && t !== !1 && (this.pos += n[0].length), n)
                        }
                        var i = function(e) {
                                return r ? e.toLowerCase() : e
                            },
                            o = this.string.substr(this.pos, e.length);
                        return i(o) == i(e) ? (t !== !1 && (this.pos += e.length), !0) : void 0
                    },
                    current: function() {
                        return this.string.slice(this.start, this.pos)
                    }
                },
                e.StringStream = wr,
                e.TextMarker = Lr,
                Kn(Lr),
                Lr.prototype.clear = function() {
                    if (!this.explicitlyCleared) {
                        var e = this.doc.cm,
                            t = e && !e.curOp;
                        if (t && nt(e), _n(this, "clear")) {
                            var r = this.find();
                            r && Rn(this, "clear", r.from, r.to)
                        }
                        for (var n = null,
                                 i = null,
                                 o = 0; o < this.lines.length; ++o) {
                            var l = this.lines[o],
                                a = Tr(l.markedSpans, this);
                            null != a.to && (i = mn(l)),
                                l.markedSpans = Nr(l.markedSpans, a),
                                null != a.from ? n = mn(l) : this.collapsed && !Br(this.doc, l) && e && pn(l, tt(e.display))
                        }
                        if (e && this.collapsed && !e.options.lineWrapping) for (var o = 0; o < this.lines.length; ++o) {
                            var s = Pr(e.doc, this.lines[o]),
                                c = u(e.doc, s);
                            c > e.display.maxLineLength && (e.display.maxLine = s, e.display.maxLineLength = c, e.display.maxLineChanged = !0)
                        }
                        null != n && e && st(e, n, i + 1),
                            this.lines.length = 0,
                            this.explicitlyCleared = !0,
                        this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && tr(e)),
                        t && it(e)
                    }
                },
                Lr.prototype.find = function() {
                    for (var e, t, r = 0; r < this.lines.length; ++r) {
                        var n = this.lines[r],
                            i = Tr(n.markedSpans, this);
                        if (null != i.from || null != i.to) {
                            var o = mn(n);
                            null != i.from && (e = Kt(o, i.from)),
                            null != i.to && (t = Kt(o, i.to))
                        }
                    }
                    return "bookmark" == this.type ? e: e && {
                        from: e,
                        to: t
                    }
                },
                Lr.prototype.changed = function() {
                    var e = this.find(),
                        t = this.doc.cm;
                    if (e && t) {
                        var r = fn(this.doc, e.from.line);
                        if (G(t, r), e.from.line >= t.display.showingFrom && e.from.line < t.display.showingTo) {
                            for (var n = t.display.lineDiv.firstChild; n; n = n.nextSibling) if (n.lineObj == r) {
                                n.offsetHeight != r.height && pn(r, n.offsetHeight);
                                break
                            }
                            at(t,
                                function() {
                                    t.curOp.selectionChanged = t.curOp.forceUpdate = t.curOp.updateMaxLine = !0
                                })
                        }
                    }
                },
                Lr.prototype.attachLine = function(e) {
                    if (!this.lines.length && this.doc.cm) {
                        var t = this.doc.cm.curOp;
                        t.maybeHiddenMarkers && -1 != Yn(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                    }
                    this.lines.push(e)
                },
                Lr.prototype.detachLine = function(e) {
                    if (this.lines.splice(Yn(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                        var t = this.doc.cm.curOp; (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                    }
                },
                e.SharedTextMarker = Sr,
                Kn(Sr),
                Sr.prototype.clear = function() {
                    if (!this.explicitlyCleared) {
                        this.explicitlyCleared = !0;
                        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                        Rn(this, "clear")
                    }
                },
                Sr.prototype.find = function() {
                    return this.primary.find()
                };
            var ho = e.LineWidget = function(e, t, r) {
                if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
                this.cm = e,
                    this.node = t
            };
            Kn(ho),
                ho.prototype.clear = _r(function() {
                    var e = this.line.widgets,
                        t = mn(this.line);
                    if (null != t && e) {
                        for (var r = 0; r < e.length; ++r) e[r] == this && e.splice(r--, 1);
                        e.length || (this.line.widgets = null);
                        var n = vn(this.cm, this.line) < this.cm.doc.scrollTop;
                        pn(this.line, Math.max(0, this.line.height - Kr(this))),
                        n && sr(this.cm, 0, -this.height),
                            st(this.cm, t, t + 1)
                    }
                }),
                ho.prototype.changed = _r(function() {
                    var e = this.height;
                    this.height = null;
                    var t = Kr(this) - e;
                    if (t) {
                        pn(this.line, this.line.height + t);
                        var r = mn(this.line);
                        st(this.cm, r, r + 1)
                    }
                });
            var po = e.Line = function(e, t, r) {
                this.text = e,
                    Vr(this, t),
                    this.height = r ? r(this) : 1
            };
            Kn(po);
            var mo = {},
                go = /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\uFEFF]/g;
            an.prototype = {
                chunkSize: function() {
                    return this.lines.length
                },
                removeInner: function(e, t) {
                    for (var r = e,
                             n = e + t; n > r; ++r) {
                        var i = this.lines[r];
                        this.height -= i.height,
                            $r(i),
                            Rn(i, "delete")
                    }
                    this.lines.splice(e, t)
                },
                collapse: function(e) {
                    e.splice.apply(e, [e.length, 0].concat(this.lines))
                },
                insertInner: function(e, t, r) {
                    this.height += r,
                        this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                    for (var n = 0,
                             i = t.length; i > n; ++n) t[n].parent = this
                },
                iterN: function(e, t, r) {
                    for (var n = e + t; n > e; ++e) if (r(this.lines[e])) return ! 0
                }
            },
                sn.prototype = {
                    chunkSize: function() {
                        return this.size
                    },
                    removeInner: function(e, t) {
                        this.size -= t;
                        for (var r = 0; r < this.children.length; ++r) {
                            var n = this.children[r],
                                i = n.chunkSize();
                            if (i > e) {
                                var o = Math.min(t, i - e),
                                    l = n.height;
                                if (n.removeInner(e, o), this.height -= l - n.height, i == o && (this.children.splice(r--, 1), n.parent = null), 0 == (t -= o)) break;
                                e = 0
                            } else e -= i
                        }
                        if (this.size - t < 25) {
                            var a = [];
                            this.collapse(a),
                                this.children = [new an(a)],
                                this.children[0].parent = this
                        }
                    },
                    collapse: function(e) {
                        for (var t = 0,
                                 r = this.children.length; r > t; ++t) this.children[t].collapse(e)
                    },
                    insertInner: function(e, t, r) {
                        this.size += t.length,
                            this.height += r;
                        for (var n = 0,
                                 i = this.children.length; i > n; ++n) {
                            var o = this.children[n],
                                l = o.chunkSize();
                            if (l >= e) {
                                if (o.insertInner(e, t, r), o.lines && o.lines.length > 50) {
                                    for (; o.lines.length > 50;) {
                                        var a = o.lines.splice(o.lines.length - 25, 25),
                                            s = new an(a);
                                        o.height -= s.height,
                                            this.children.splice(n + 1, 0, s),
                                            s.parent = this
                                    }
                                    this.maybeSpill()
                                }
                                break
                            }
                            e -= l
                        }
                    },
                    maybeSpill: function() {
                        if (! (this.children.length <= 10)) {
                            var e = this;
                            do {
                                var t = e.children.splice(e.children.length - 5, 5), r = new sn(t);
                                if (e.parent) {
                                    e.size -= r.size,
                                        e.height -= r.height;
                                    var n = Yn(e.parent.children, e);
                                    e.parent.children.splice(n + 1, 0, r)
                                } else {
                                    var i = new sn(e.children);
                                    i.parent = e,
                                        e.children = [i, r],
                                        e = i
                                }
                                r.parent = e.parent
                            } while ( e . children . length > 10 );
                            e.parent.maybeSpill()
                        }
                    },
                    iterN: function(e, t, r) {
                        for (var n = 0,
                                 i = this.children.length; i > n; ++n) {
                            var o = this.children[n],
                                l = o.chunkSize();
                            if (l > e) {
                                var a = Math.min(t, l - e);
                                if (o.iterN(e, a, r)) return ! 0;
                                if (0 == (t -= a)) break;
                                e = 0
                            } else e -= l
                        }
                    }
                };
            var vo = 0,
                yo = e.Doc = function(e, t, r) {
                    if (! (this instanceof yo)) return new yo(e, t, r);
                    null == r && (r = 0),
                        sn.call(this, [new an([new po("", null)])]),
                        this.first = r,
                        this.scrollTop = this.scrollLeft = 0,
                        this.cantEdit = !1,
                        this.history = bn(),
                        this.cleanGeneration = 1,
                        this.frontier = r;
                    var n = Kt(r, 0);
                    this.sel = {
                        from: n,
                        to: n,
                        head: n,
                        anchor: n,
                        shift: !1,
                        extend: !1,
                        goalColumn: null
                    },
                        this.id = ++vo,
                        this.modeOption = t,
                    "string" == typeof e && (e = Wo(e)),
                        ln(this, {
                                from: n,
                                to: n,
                                text: e
                            },
                            null, {
                                head: n,
                                anchor: n
                            })
                };
            yo.prototype = Zn(sn.prototype, {
                constructor: yo,
                iter: function(e, t, r) {
                    r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e)
                },
                insert: function(e, t) {
                    for (var r = 0,
                             n = 0,
                             i = t.length; i > n; ++n) r += t[n].height;
                    this.insertInner(e - this.first, t, r)
                },
                remove: function(e, t) {
                    this.removeInner(e - this.first, t)
                },
                getValue: function(e) {
                    var t = dn(this, this.first, this.first + this.size);
                    return e === !1 ? t: t.join(e || "\n")
                },
                setValue: function(e) {
                    var t = Kt(this.first, 0),
                        r = this.first + this.size - 1;
                    Ft(this, {
                            from: t,
                            to: Kt(r, fn(this, r).text.length),
                            text: Wo(e),
                            origin: "setValue"
                        },
                        {
                            head: t,
                            anchor: t
                        },
                        !0)
                },
                replaceRange: function(e, t, r, n) {
                    t = Xt(this, t),
                        r = r ? Xt(this, r) : t,
                        _t(this, e, t, r, n)
                },
                getRange: function(e, t, r) {
                    var n = hn(this, Xt(this, e), Xt(this, t));
                    return r === !1 ? n: n.join(r || "\n")
                },
                getLine: function(e) {
                    var t = this.getLineHandle(e);
                    return t && t.text
                },
                setLine: function(e, t) {
                    Zt(this, e) && _t(this, t, Kt(e, 0), Xt(this, Kt(e)))
                },
                removeLine: function(e) {
                    e ? _t(this, "", Xt(this, Kt(e - 1)), Xt(this, Kt(e))) : _t(this, "", Kt(0, 0), Xt(this, Kt(1, 0)))
                },
                getLineHandle: function(e) {
                    return Zt(this, e) ? fn(this, e) : void 0
                },
                getLineNumber: function(e) {
                    return mn(e)
                },
                getLineHandleVisualStart: function(e) {
                    return "number" == typeof e && (e = fn(this, e)),
                        Pr(this, e)
                },
                lineCount: function() {
                    return this.size
                },
                firstLine: function() {
                    return this.first
                },
                lastLine: function() {
                    return this.first + this.size - 1
                },
                clipPos: function(e) {
                    return Xt(this, e)
                },
                getCursor: function(e) {
                    var t, r = this.sel;
                    return t = null == e || "head" == e ? r.head: "anchor" == e ? r.anchor: "end" == e || e === !1 ? r.to: r.from,
                        $t(t)
                },
                somethingSelected: function() {
                    return ! Ut(this.sel.head, this.sel.anchor)
                },
                setCursor: lt(function(e, t, r) {
                    var n = Xt(this, "number" == typeof e ? Kt(e, t || 0) : e);
                    r ? Jt(this, n) : er(this, n, n)
                }),
                setSelection: lt(function(e, t) {
                    er(this, Xt(this, e), Xt(this, t || e))
                }),
                extendSelection: lt(function(e, t) {
                    Jt(this, Xt(this, e), t && Xt(this, t))
                }),
                getSelection: function(e) {
                    return this.getRange(this.sel.from, this.sel.to, e)
                },
                replaceSelection: function(e, t, r) {
                    Ft(this, {
                            from: this.sel.from,
                            to: this.sel.to,
                            text: Wo(e),
                            origin: r
                        },
                        t || "around")
                },
                undo: lt(function() {
                    Bt(this, "undo")
                }),
                redo: lt(function() {
                    Bt(this, "redo")
                }),
                setExtending: function(e) {
                    this.sel.extend = e
                },
                historySize: function() {
                    var e = this.history;
                    return {
                        undo: e.done.length,
                        redo: e.undone.length
                    }
                },
                clearHistory: function() {
                    this.history = bn(this.history.maxGeneration)
                },
                markClean: function() {
                    this.cleanGeneration = this.changeGeneration()
                },
                changeGeneration: function() {
                    return this.history.lastOp = this.history.lastOrigin = null,
                        this.history.generation
                },
                isClean: function(e) {
                    return this.history.generation == (e || this.cleanGeneration)
                },
                getHistory: function() {
                    return {
                        done: Sn(this.history.done),
                        undone: Sn(this.history.undone)
                    }
                },
                setHistory: function(e) {
                    var t = this.history = bn(this.history.maxGeneration);
                    t.done = e.done.slice(0),
                        t.undone = e.undone.slice(0)
                },
                markText: function(e, t, r) {
                    return kr(this, Xt(this, e), Xt(this, t), r, "range")
                },
                setBookmark: function(e, t) {
                    var r = {
                        replacedWith: t && (null == t.nodeType ? t.widget: t),
                        insertLeft: t && t.insertLeft
                    };
                    return e = Xt(this, e),
                        kr(this, e, e, r, "bookmark")
                },
                findMarksAt: function(e) {
                    e = Xt(this, e);
                    var t = [],
                        r = fn(this, e.line).markedSpans;
                    if (r) for (var n = 0; n < r.length; ++n) {
                        var i = r[n]; (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                    }
                    return t
                },
                getAllMarks: function() {
                    var e = [];
                    return this.iter(function(t) {
                        var r = t.markedSpans;
                        if (r) for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker)
                    }),
                        e
                },
                posFromIndex: function(e) {
                    var t, r = this.first;
                    return this.iter(function(n) {
                        var i = n.text.length + 1;
                        return i > e ? (t = e, !0) : (e -= i, ++r, void 0)
                    }),
                        Xt(this, Kt(r, t))
                },
                indexFromPos: function(e) {
                    e = Xt(this, e);
                    var t = e.ch;
                    return e.line < this.first || e.ch < 0 ? 0 : (this.iter(this.first, e.line,
                        function(e) {
                            t += e.text.length + 1
                        }), t)
                },
                copy: function(e) {
                    var t = new yo(dn(this, this.first, this.first + this.size), this.modeOption, this.first);
                    return t.scrollTop = this.scrollTop,
                        t.scrollLeft = this.scrollLeft,
                        t.sel = {
                            from: this.sel.from,
                            to: this.sel.to,
                            head: this.sel.head,
                            anchor: this.sel.anchor,
                            shift: this.sel.shift,
                            extend: !1,
                            goalColumn: this.sel.goalColumn
                        },
                    e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())),
                        t
                },
                linkedDoc: function(e) {
                    e || (e = {});
                    var t = this.first,
                        r = this.first + this.size;
                    null != e.from && e.from > t && (t = e.from),
                    null != e.to && e.to < r && (r = e.to);
                    var n = new yo(dn(this, t, r), e.mode || this.modeOption, t);
                    return e.sharedHist && (n.history = this.history),
                        (this.linked || (this.linked = [])).push({
                            doc: n,
                            sharedHist: e.sharedHist
                        }),
                        n.linked = [{
                            doc: this,
                            isParent: !0,
                            sharedHist: e.sharedHist
                        }],
                        n
                },
                unlinkDoc: function(t) {
                    if (t instanceof e && (t = t.doc), this.linked) for (var r = 0; r < this.linked.length; ++r) {
                        var n = this.linked[r];
                        if (n.doc == t) {
                            this.linked.splice(r, 1),
                                t.unlinkDoc(this);
                            break
                        }
                    }
                    if (t.history == this.history) {
                        var i = [t.id];
                        cn(t,
                            function(e) {
                                i.push(e.id)
                            },
                            !0),
                            t.history = bn(),
                            t.history.done = Sn(this.history.done, i),
                            t.history.undone = Sn(this.history.undone, i)
                    }
                },
                iterLinkedDocs: function(e) {
                    cn(this, e)
                },
                getMode: function() {
                    return this.mode
                },
                getEditor: function() {
                    return this.cm
                }
            }),
                yo.prototype.eachLine = yo.prototype.iter;
            var bo = "iter insert remove copy getEditor".split(" ");
            for (var xo in yo.prototype) yo.prototype.hasOwnProperty(xo) && Yn(bo, xo) < 0 && (e.prototype[xo] = function(e) {
                return function() {
                    return e.apply(this.doc, arguments)
                }
            } (yo.prototype[xo]));
            Kn(yo),
                e.e_stop = En,
                e.e_preventDefault = Wn,
                e.e_stopPropagation = Dn;
            var Co, wo = 0;
            e.on = Fn,
                e.off = Pn,
                e.signal = Bn;
            var Lo = 30,
                ko = e.Pass = {
                    toString: function() {
                        return "CodeMirror.Pass"
                    }
                };
            Un.prototype = {
                set: function(e, t) {
                    clearTimeout(this.id),
                        this.id = setTimeout(t, e)
                }
            },
                e.countColumn = qn;
            var So = [""],
                Mo = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
                To = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\uA670-\uA672\uA674-\uA67D\uA69F\udc00-\udfff]/;
            e.replaceGetRect = function(e) {
                ai = e
            };
            var No = function() {
                if (Mi) return ! 1;
                var e = ni("div");
                return "draggable" in e || "dragDrop" in e
            } ();
            Li ? si = function(e, t) {
                return 36 == e.charCodeAt(t - 1) && 39 == e.charCodeAt(t)
            }: Wi && !/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent) ? si = function(e, t) {
                return /\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(e.slice(t - 1, t + 1))
            }: Ti && !/Chrome\/(?:29|[3-9]\d|\d\d\d)\./.test(navigator.userAgent) && (si = function(e, t) {
                if (t > 1 && 45 == e.charCodeAt(t - 1)) {
                    if (/\w/.test(e.charAt(t - 2)) && /[^\-?\.]/.test(e.charAt(t))) return ! 0;
                    if (t > 2 && /[\d\.,]/.test(e.charAt(t - 2)) && /[\d\.,]/.test(e.charAt(t))) return ! 1
                }
                return /[~!#%&*)=+}\]|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|…[\w~`@#$%\^&*(_=+{[><]/.test(e.slice(t - 1, t + 1))
            });
            var Ao, Ho, Wo = 3 != "\n\nb".split(/\n/).length ?
                function(e) {
                    for (var t = 0,
                             r = [], n = e.length; n >= t;) {
                        var i = e.indexOf("\n", t); - 1 == i && (i = e.length);
                        var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                            l = o.indexOf("\r"); - 1 != l ? (r.push(o.slice(0, l)), t += l + 1) : (r.push(o), t = i + 1)
                    }
                    return r
                }: function(e) {
                return e.split(/\r\n?|\n/)
            };
            e.splitLines = Wo;
            var Do = window.getSelection ?
                    function(e) {
                        try {
                            return e.selectionStart != e.selectionEnd
                        } catch(t) {
                            return ! 1
                        }
                    }: function(e) {
                    try {
                        var t = e.ownerDocument.selection.createRange()
                    } catch(r) {}
                    return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1
                },
                Oo = function() {
                    var e = ni("div");
                    return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
                } (),
                Eo = {
                    3 : "Enter",
                    8 : "Backspace",
                    9 : "Tab",
                    13 : "Enter",
                    16 : "Shift",
                    17 : "Ctrl",
                    18 : "Alt",
                    19 : "Pause",
                    20 : "CapsLock",
                    27 : "Esc",
                    32 : "Space",
                    33 : "PageUp",
                    34 : "PageDown",
                    35 : "End",
                    36 : "Home",
                    37 : "Left",
                    38 : "Up",
                    39 : "Right",
                    40 : "Down",
                    44 : "PrintScrn",
                    45 : "Insert",
                    46 : "Delete",
                    59 : ";",
                    91 : "Mod",
                    92 : "Mod",
                    93 : "Mod",
                    109 : "-",
                    107 : "=",
                    127 : "Delete",
                    186 : ";",
                    187 : "=",
                    188 : ",",
                    189 : "-",
                    190 : ".",
                    191 : "/",
                    192 : "`",
                    219 : "[",
                    220 : "\\",
                    221 : "]",
                    222 : "'",
                    63276 : "PageUp",
                    63277 : "PageDown",
                    63275 : "End",
                    63273 : "Home",
                    63234 : "Left",
                    63232 : "Up",
                    63235 : "Right",
                    63233 : "Down",
                    63302 : "Insert",
                    63272 : "Delete"
                };
            e.keyNames = Eo,
                function() {
                    for (var e = 0; 10 > e; e++) Eo[e + 48] = String(e);
                    for (var e = 65; 90 >= e; e++) Eo[e] = String.fromCharCode(e);
                    for (var e = 1; 12 >= e; e++) Eo[e + 111] = Eo[e + 63235] = "F" + e
                } ();
            var zo, Io = function() {
                function e(e) {
                    return 255 >= e ? t.charAt(e) : e >= 1424 && 1524 >= e ? "R": e >= 1536 && 1791 >= e ? r.charAt(e - 1536) : e >= 1792 && 2220 >= e ? "r": "L"
                }
                var t = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL",
                    r = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr",
                    n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                    i = /[stwN]/,
                    o = /[LRr]/,
                    l = /[Lb1n]/,
                    a = /[1n]/,
                    s = "L";
                return function(t) {
                    if (!n.test(t)) return ! 1;
                    for (var r, c = t.length,
                             u = [], f = 0; c > f; ++f) u.push(r = e(t.charCodeAt(f)));
                    for (var f = 0,
                             h = s; c > f; ++f) {
                        var r = u[f];
                        "m" == r ? u[f] = h: h = r
                    }
                    for (var f = 0,
                             d = s; c > f; ++f) {
                        var r = u[f];
                        "1" == r && "r" == d ? u[f] = "n": o.test(r) && (d = r, "r" == r && (u[f] = "R"))
                    }
                    for (var f = 1,
                             h = u[0]; c - 1 > f; ++f) {
                        var r = u[f];
                        "+" == r && "1" == h && "1" == u[f + 1] ? u[f] = "1": "," != r || h != u[f + 1] || "1" != h && "n" != h || (u[f] = h),
                            h = r
                    }
                    for (var f = 0; c > f; ++f) {
                        var r = u[f];
                        if ("," == r) u[f] = "N";
                        else if ("%" == r) {
                            for (var p = f + 1; c > p && "%" == u[p]; ++p);
                            for (var m = f && "!" == u[f - 1] || c - 1 > p && "1" == u[p] ? "1": "N", g = f; p > g; ++g) u[g] = m;
                            f = p - 1
                        }
                    }
                    for (var f = 0,
                             d = s; c > f; ++f) {
                        var r = u[f];
                        "L" == d && "1" == r ? u[f] = "L": o.test(r) && (d = r)
                    }
                    for (var f = 0; c > f; ++f) if (i.test(u[f])) {
                        for (var p = f + 1; c > p && i.test(u[p]); ++p);
                        for (var v = "L" == (f ? u[f - 1] : s), y = "L" == (c - 1 > p ? u[p] : s), m = v || y ? "L": "R", g = f; p > g; ++g) u[g] = m;
                        f = p - 1
                    }
                    for (var b, x = [], f = 0; c > f;) if (l.test(u[f])) {
                        var C = f;
                        for (++f; c > f && l.test(u[f]); ++f);
                        x.push({
                            from: C,
                            to: f,
                            level: 0
                        })
                    } else {
                        var w = f,
                            L = x.length;
                        for (++f; c > f && "L" != u[f]; ++f);
                        for (var g = w; f > g;) if (a.test(u[g])) {
                            g > w && x.splice(L, 0, {
                                from: w,
                                to: g,
                                level: 1
                            });
                            var k = g;
                            for (++g; f > g && a.test(u[g]); ++g);
                            x.splice(L, 0, {
                                from: k,
                                to: g,
                                level: 2
                            }),
                                w = g
                        } else++g;
                        f > w && x.splice(L, 0, {
                            from: w,
                            to: f,
                            level: 1
                        })
                    }
                    return 1 == x[0].level && (b = t.match(/^\s+/)) && (x[0].from = b[0].length, x.unshift({
                        from: 0,
                        to: b[0].length,
                        level: 0
                    })),
                    1 == jn(x).level && (b = t.match(/\s+$/)) && (jn(x).to -= b[0].length, x.push({
                        from: c - b[0].length,
                        to: c,
                        level: 0
                    })),
                    x[0].level != jn(x).level && x.push({
                        from: c,
                        to: c,
                        level: x[0].level
                    }),
                        x
                }
            } ();
            return e.version = "3.15.0",
                e
        } (); !
            function() {
                "use strict";
                var e = /^(\s*)([*+-]|(\d+)\.)(\s*)/,
                    t = "*+-";
                x.commands.newlineAndIndentContinueMarkdownList = function(r) {
                    var n, i = r.getCursor(),
                        o = r.getStateAfter(i.line).list;
                    if (!o || !(n = r.getLine(i.line).match(e))) return r.execCommand("newlineAndIndent"),
                        void 0;
                    var l = n[1],
                        a = n[4],
                        s = t.indexOf(n[2]) >= 0 ? n[2] : parseInt(n[3], 10) + 1 + ".";
                    r.replaceSelection("\n" + l + s + a, "end")
                }
            } (),
            x.defineMode("xml",
                function(e, t) {
                    function r(e, t) {
                        function r(r) {
                            return t.tokenize = r,
                                r(e, t)
                        }
                        var i = e.next();
                        if ("<" == i) {
                            if (e.eat("!")) return e.eat("[") ? e.match("CDATA[") ? r(o("atom", "]]>")) : null: e.match("--") ? r(o("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), r(l(1))) : null;
                            if (e.eat("?")) return e.eatWhile(/[\w\._\-]/),
                                t.tokenize = o("meta", "?>"),
                                "meta";
                            var a = e.eat("/");
                            b = "";
                            for (var s; s = e.eat(/[^\s\u00a0=<>\"\'\/?]/);) b += s;
                            return b ? (x = a ? "closeTag": "openTag", t.tokenize = n, "tag") : "error"
                        }
                        if ("&" == i) {
                            var c;
                            return c = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"),
                                c ? "atom": "error"
                        }
                        return e.eatWhile(/[^&<]/),
                            null
                    }
                    function n(e, t) {
                        var n = e.next();
                        return ">" == n || "/" == n && e.eat(">") ? (t.tokenize = r, x = ">" == n ? "endTag": "selfcloseTag", "tag") : "=" == n ? (x = "equals", null) : "<" == n ? "error": /[\'\"]/.test(n) ? (t.tokenize = i(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.eatWhile(/[^\s\u00a0=<>\"\']/), "word")
                    }
                    function i(e) {
                        var t = function(t, r) {
                            for (; ! t.eol();) if (t.next() == e) {
                                r.tokenize = n;
                                break
                            }
                            return "string"
                        };
                        return t.isInAttribute = !0,
                            t
                    }
                    function o(e, t) {
                        return function(n, i) {
                            for (; ! n.eol();) {
                                if (n.match(t)) {
                                    i.tokenize = r;
                                    break
                                }
                                n.next()
                            }
                            return e
                        }
                    }
                    function l(e) {
                        return function(t, n) {
                            for (var i; null != (i = t.next());) {
                                if ("<" == i) return n.tokenize = l(e + 1),
                                    n.tokenize(t, n);
                                if (">" == i) {
                                    if (1 == e) {
                                        n.tokenize = r;
                                        break
                                    }
                                    return n.tokenize = l(e - 1),
                                        n.tokenize(t, n)
                                }
                            }
                            return "meta"
                        }
                    }
                    function a() {
                        for (var e = arguments.length - 1; e >= 0; e--) C.cc.push(arguments[e])
                    }
                    function s() {
                        return a.apply(null, arguments),
                            !0
                    }
                    function c(e, t) {
                        var r = T.doNotIndent.hasOwnProperty(e) || C.context && C.context.noIndent;
                        C.context = {
                            prev: C.context,
                            tagName: e,
                            indent: C.indented,
                            startOfLine: t,
                            noIndent: r
                        }
                    }
                    function u() {
                        C.context && (C.context = C.context.prev)
                    }
                    function f(e) {
                        if ("openTag" == e) return C.tagName = b,
                            C.tagStart = w.column(),
                            s(m, h(C.startOfLine));
                        if ("closeTag" == e) {
                            var t = !1;
                            return C.context ? C.context.tagName != b && (T.implicitlyClosed.hasOwnProperty(C.context.tagName.toLowerCase()) && u(), t = !C.context || C.context.tagName != b) : t = !0,
                            t && (L = "error"),
                                s(d(t))
                        }
                        return s()
                    }
                    function h(e) {
                        return function(t) {
                            var r = C.tagName;
                            return C.tagName = C.tagStart = null,
                                "selfcloseTag" == t || "endTag" == t && T.autoSelfClosers.hasOwnProperty(r.toLowerCase()) ? (p(r.toLowerCase()), s()) : "endTag" == t ? (p(r.toLowerCase()), c(r, e), s()) : s()
                        }
                    }
                    function d(e) {
                        return function(t) {
                            return e && (L = "error"),
                                "endTag" == t ? (u(), s()) : (L = "error", s(arguments.callee))
                        }
                    }
                    function p(e) {
                        for (var t;;) {
                            if (!C.context) return;
                            if (t = C.context.tagName.toLowerCase(), !T.contextGrabbers.hasOwnProperty(t) || !T.contextGrabbers[t].hasOwnProperty(e)) return;
                            u()
                        }
                    }
                    function m(e) {
                        return "word" == e ? (L = "attribute", s(g, m)) : "endTag" == e || "selfcloseTag" == e ? a() : (L = "error", s(m))
                    }
                    function g(e) {
                        return "equals" == e ? s(v, m) : (T.allowMissing ? "word" == e && (L = "attribute") : L = "error", "endTag" == e || "selfcloseTag" == e ? a() : s())
                    }
                    function v(e) {
                        return "string" == e ? s(y) : "word" == e && T.allowUnquoted ? (L = "string", s()) : (L = "error", "endTag" == e || "selfCloseTag" == e ? a() : s())
                    }
                    function y(e) {
                        return "string" == e ? s(y) : a()
                    }
                    var b, x, C, w, L, k = e.indentUnit,
                        S = t.multilineTagIndentFactor || 1,
                        M = t.multilineTagIndentPastTag || !0,
                        T = t.htmlMode ? {
                            autoSelfClosers: {
                                area: !0,
                                base: !0,
                                br: !0,
                                col: !0,
                                command: !0,
                                embed: !0,
                                frame: !0,
                                hr: !0,
                                img: !0,
                                input: !0,
                                keygen: !0,
                                link: !0,
                                meta: !0,
                                param: !0,
                                source: !0,
                                track: !0,
                                wbr: !0
                            },
                            implicitlyClosed: {
                                dd: !0,
                                li: !0,
                                optgroup: !0,
                                option: !0,
                                p: !0,
                                rp: !0,
                                rt: !0,
                                tbody: !0,
                                td: !0,
                                tfoot: !0,
                                th: !0,
                                tr: !0
                            },
                            contextGrabbers: {
                                dd: {
                                    dd: !0,
                                    dt: !0
                                },
                                dt: {
                                    dd: !0,
                                    dt: !0
                                },
                                li: {
                                    li: !0
                                },
                                option: {
                                    option: !0,
                                    optgroup: !0
                                },
                                optgroup: {
                                    optgroup: !0
                                },
                                p: {
                                    address: !0,
                                    article: !0,
                                    aside: !0,
                                    blockquote: !0,
                                    dir: !0,
                                    div: !0,
                                    dl: !0,
                                    fieldset: !0,
                                    footer: !0,
                                    form: !0,
                                    h1: !0,
                                    h2: !0,
                                    h3: !0,
                                    h4: !0,
                                    h5: !0,
                                    h6: !0,
                                    header: !0,
                                    hgroup: !0,
                                    hr: !0,
                                    menu: !0,
                                    nav: !0,
                                    ol: !0,
                                    p: !0,
                                    pre: !0,
                                    section: !0,
                                    table: !0,
                                    ul: !0
                                },
                                rp: {
                                    rp: !0,
                                    rt: !0
                                },
                                rt: {
                                    rp: !0,
                                    rt: !0
                                },
                                tbody: {
                                    tbody: !0,
                                    tfoot: !0
                                },
                                td: {
                                    td: !0,
                                    th: !0
                                },
                                tfoot: {
                                    tbody: !0
                                },
                                th: {
                                    td: !0,
                                    th: !0
                                },
                                thead: {
                                    tbody: !0,
                                    tfoot: !0
                                },
                                tr: {
                                    tr: !0
                                }
                            },
                            doNotIndent: {
                                pre: !0
                            },
                            allowUnquoted: !0,
                            allowMissing: !0
                        }: {
                            autoSelfClosers: {},
                            implicitlyClosed: {},
                            contextGrabbers: {},
                            doNotIndent: {},
                            allowUnquoted: !1,
                            allowMissing: !1
                        },
                        N = t.alignCDATA;
                    return {
                        startState: function() {
                            return {
                                tokenize: r,
                                cc: [],
                                indented: 0,
                                startOfLine: !0,
                                tagName: null,
                                tagStart: null,
                                context: null
                            }
                        },
                        token: function(e, t) {
                            if (!t.tagName && e.sol() && (t.startOfLine = !0, t.indented = e.indentation()), e.eatSpace()) return null;
                            L = x = b = null;
                            var r = t.tokenize(e, t);
                            if (t.type = x, (r || x) && "comment" != r) for (C = t, w = e;;) {
                                var n = t.cc.pop() || f;
                                if (n(x || r)) break
                            }
                            return t.startOfLine = !1,
                            L || r
                        },
                        indent: function(e, t, i) {
                            var o = e.context;
                            if (e.tokenize.isInAttribute) return e.stringStartCol + 1;
                            if (e.tokenize != n && e.tokenize != r || o && o.noIndent) return i ? i.match(/^(\s*)/)[0].length: 0;
                            if (e.tagName) return M ? e.tagStart + e.tagName.length + 2 : e.tagStart + k * S;
                            if (N && /<!\[CDATA\[/.test(t)) return 0;
                            for (o && /^<\//.test(t) && (o = o.prev); o && !o.startOfLine;) o = o.prev;
                            return o ? o.indent + k: 0
                        },
                        electricChars: "/",
                        blockCommentStart: "<!--",
                        blockCommentEnd: "-->",
                        configuration: t.htmlMode ? "html": "xml",
                        helperType: t.htmlMode ? "html": "xml"
                    }
                }),
            x.defineMIME("text/xml", "xml"),
            x.defineMIME("application/xml", "xml"),
        x.mimeModes.hasOwnProperty("text/html") || x.defineMIME("text/html", {
            name: "xml",
            htmlMode: !0
        }),
            x.defineMode("markdown",
                function(e, t) {
                    function r(e, t, r) {
                        return t.f = t.inline = r,
                            r(e, t)
                    }
                    function n(e, t, r) {
                        return t.f = t.block = r,
                            r(e, t)
                    }
                    function i(e) {
                        return e.linkTitle = !1,
                            e.em = !1,
                            e.strong = !1,
                            e.quote = 0,
                        g || e.f != l || (e.f = u, e.block = o),
                            e.trailingSpace = 0,
                            e.trailingSpaceNewLine = !1,
                            e.thisLineHasContent = !1,
                            null
                    }
                    function o(e, i) {
                        var o = i.list !== !1;
                        if (i.list !== !1 && i.indentationDiff >= 0 ? (i.indentationDiff < 4 && (i.indentation -= i.indentationDiff), i.list = null) : i.list !== !1 && i.indentation > 0 ? (i.list = null, i.listDepth = Math.floor(i.indentation / 4)) : i.list !== !1 && (i.list = !1, i.listDepth = 0), i.indentationDiff >= 4) return i.indentation -= 4,
                            e.skipToEnd(),
                            L;
                        if (e.eatSpace()) return null;
                        if ("#" === e.peek() || i.prevLineHasContent && e.match(G)) i.header = !0;
                        else if (e.eat(">")) for (i.indentation++, i.quote = 1, e.eatSpace(); e.eat(">");) e.eatSpace(),
                            i.quote++;
                        else {
                            if ("[" === e.peek()) return r(e, i, h);
                            if (e.match(F, !0)) return A;
                            if (i.prevLineHasContent && !o || !e.match(P, !0) && !e.match(B, !0)) {
                                if (t.fencedCodeBlocks && e.match(/^```([\w+#]*)/, !0)) return i.localMode = b(RegExp.$1),
                                i.localMode && (i.localState = i.localMode.startState()),
                                    n(e, i, a),
                                    L
                            } else i.indentation += 4,
                                i.list = !0,
                                i.listDepth++,
                            t.taskLists && e.match(R, !1) && (i.taskList = !0)
                        }
                        return r(e, i, i.inline)
                    }
                    function l(e, t) {
                        var r = v.token(e, t.htmlState);
                        return g && "tag" === r && "openTag" !== t.htmlState.type && !t.htmlState.context && (t.f = u, t.block = o),
                        t.md_inside && -1 != e.current().indexOf(">") && (t.f = u, t.block = o, t.htmlState.context = void 0),
                            r
                    }
                    function a(e, t) {
                        return e.sol() && e.match(/^```/, !0) ? (t.localMode = t.localState = null, t.f = u, t.block = o, L) : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), L)
                    }
                    function s(e) {
                        var t = [];
                        if (e.taskOpen) return "meta";
                        if (e.taskClosed) return "property";
                        if (e.strong && t.push(I), e.em && t.push(z), e.linkText && t.push(O), e.code && t.push(L), e.header && t.push(w), e.quote && t.push(e.quote % 2 ? k: S), e.list !== !1) {
                            var r = (e.listDepth - 1) % 3;
                            r ? 1 === r ? t.push(T) : t.push(N) : t.push(M)
                        }
                        return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a": "b")),
                            t.length ? t.join(" ") : null
                    }
                    function c(e, t) {
                        return e.match(V, !0) ? s(t) : void 0
                    }
                    function u(e, i) {
                        var o = i.text(e, i);
                        if ("undefined" != typeof o) return o;
                        if (i.list) return i.list = null,
                            s(i);
                        if (i.taskList) {
                            var a = "x" !== e.match(R, !0)[1];
                            return a ? i.taskOpen = !0 : i.taskClosed = !0,
                                i.taskList = !1,
                                s(i)
                        }
                        i.taskOpen = !1,
                            i.taskClosed = !1;
                        var c = e.next();
                        if ("\\" === c) return e.next(),
                            s(i);
                        if (i.linkTitle) {
                            i.linkTitle = !1;
                            var u = c;
                            "(" === c && (u = ")"),
                                u = (u + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                            var h = "^\\s*(?:[^" + u + "\\\\]+|\\\\\\\\|\\\\.)" + u;
                            if (e.match(new RegExp(h), !0)) return E
                        }
                        if ("`" === c) {
                            var d = s(i),
                                p = e.pos;
                            e.eatWhile("`");
                            var g = 1 + e.pos - p;
                            return i.code ? g === C ? (i.code = !1, d) : s(i) : (C = g, i.code = !0, s(i))
                        }
                        if (i.code) return s(i);
                        if ("!" === c && e.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return e.match(/\[[^\]]*\]/),
                            i.inline = i.f = f,
                            H;
                        if ("[" === c && e.match(/.*\](\(| ?\[)/, !1)) return i.linkText = !0,
                            s(i);
                        if ("]" === c && i.linkText) {
                            var v = s(i);
                            return i.linkText = !1,
                                i.inline = i.f = f,
                                v
                        }
                        if ("<" === c && e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) return r(e, i, m(W, ">"));
                        if ("<" === c && e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) return r(e, i, m(D, ">"));
                        if ("<" === c && e.match(/^\w/, !1)) {
                            if ( - 1 != e.string.indexOf(">")) {
                                var y = e.string.substring(1, e.string.indexOf(">"));
                                /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(y) && (i.md_inside = !0)
                            }
                            return e.backUp(1),
                                n(e, i, l)
                        }
                        if ("<" === c && e.match(/^\/\w*?>/)) return i.md_inside = !1,
                            "tag";
                        var b = !1;
                        if (!t.underscoresBreakWords && "_" === c && "_" !== e.peek() && e.match(/(\w)/, !1)) {
                            var x = e.pos - 2;
                            if (x >= 0) {
                                var w = e.string.charAt(x);
                                "_" !== w && w.match(/(\w)/, !1) && (b = !0)
                            }
                        }
                        var d = s(i);
                        if ("*" === c || "_" === c && !b) {
                            if (i.strong === c && e.eat(c)) return i.strong = !1,
                                d;
                            if (!i.strong && e.eat(c)) return i.strong = c,
                                s(i);
                            if (i.em === c) return i.em = !1,
                                d;
                            if (!i.em) return i.em = c,
                                s(i)
                        } else if (" " === c && (e.eat("*") || e.eat("_"))) {
                            if (" " === e.peek()) return s(i);
                            e.backUp(1)
                        }
                        return " " === c && (e.match(/ +$/, !1) ? i.trailingSpace++:i.trailingSpace && (i.trailingSpaceNewLine = !0)),
                            s(i)
                    }
                    function f(e, t) {
                        if (e.eatSpace()) return null;
                        var n = e.next();
                        return "(" === n || "[" === n ? r(e, t, m(E, "(" === n ? ")": "]")) : "error"
                    }
                    function h(e, t) {
                        return e.match(/^[^\]]*\]:/, !0) ? (t.f = d, O) : r(e, t, u)
                    }
                    function d(e, t) {
                        return e.eatSpace() ? null: (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = u, E)
                    }
                    function p(e) {
                        return _[e] || (e = (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), _[e] = new RegExp("^(?:[^\\\\]|\\\\.)*?(" + e + ")")),
                            _[e]
                    }
                    function m(e, t, r) {
                        return r = r || u,
                            function(n, i) {
                                return n.match(p(t)),
                                    i.inline = i.f = r,
                                    e
                            }
                    }
                    var g = x.modes.hasOwnProperty("xml"),
                        v = x.getMode(e, g ? {
                            name: "xml",
                            htmlMode: !0
                        }: "text/plain"),
                        y = {
                            html: "htmlmixed",
                            js: "javascript",
                            json: "application/json",
                            c: "text/x-csrc",
                            "c++": "text/x-c++src",
                            java: "text/x-java",
                            csharp: "text/x-csharp",
                            "c#": "text/x-csharp",
                            scala: "text/x-scala"
                        },
                        b = function() {
                            var t, r, n = {},
                                i = {},
                                o = [];
                            for (var l in x.modes) x.modes.propertyIsEnumerable(l) && o.push(l);
                            for (t = 0; t < o.length; t++) n[o[t]] = o[t];
                            var a = [];
                            for (var l in x.mimeModes) x.mimeModes.propertyIsEnumerable(l) && a.push({
                                mime: l,
                                mode: x.mimeModes[l]
                            });
                            for (t = 0; t < a.length; t++) r = a[t].mime,
                                i[r] = a[t].mime;
                            for (var s in y)(y[s] in n || y[s] in i) && (n[s] = y[s]);
                            return function(t) {
                                return n[t] ? x.getMode(e, n[t]) : null
                            }
                        } ();
                    void 0 === t.underscoresBreakWords && (t.underscoresBreakWords = !0),
                    void 0 === t.fencedCodeBlocks && (t.fencedCodeBlocks = !1),
                    void 0 === t.taskLists && (t.taskLists = !1);
                    var C = 0,
                        w = "header",
                        L = "comment",
                        k = "atom",
                        S = "number",
                        M = "variable-2",
                        T = "variable-3",
                        N = "keyword",
                        A = "hr",
                        H = "tag",
                        W = "link",
                        D = "link",
                        O = "link",
                        E = "string",
                        z = "em",
                        I = "strong",
                        F = /^([*\-=_])(?:\s*\1){2,}\s*$/,
                        P = /^[*\-+]\s+/,
                        B = /^[0-9]+\.\s+/,
                        R = /^\[(x| )\](?=\s)/,
                        G = /^(?:\={1,}|-{1,})$/,
                        V = /^[^!\[\]*_\\<>` "'(]+/,
                        _ = [];
                    return {
                        startState: function() {
                            return {
                                f: o,
                                prevLineHasContent: !1,
                                thisLineHasContent: !1,
                                block: o,
                                htmlState: x.startState(v),
                                indentation: 0,
                                inline: u,
                                text: c,
                                linkText: !1,
                                linkTitle: !1,
                                em: !1,
                                strong: !1,
                                header: !1,
                                taskList: !1,
                                list: !1,
                                listDepth: 0,
                                quote: 0,
                                trailingSpace: 0,
                                trailingSpaceNewLine: !1
                            }
                        },
                        copyState: function(e) {
                            return {
                                f: e.f,
                                prevLineHasContent: e.prevLineHasContent,
                                thisLineHasContent: e.thisLineHasContent,
                                block: e.block,
                                htmlState: x.copyState(v, e.htmlState),
                                indentation: e.indentation,
                                localMode: e.localMode,
                                localState: e.localMode ? x.copyState(e.localMode, e.localState) : null,
                                inline: e.inline,
                                text: e.text,
                                linkTitle: e.linkTitle,
                                em: e.em,
                                strong: e.strong,
                                header: e.header,
                                taskList: e.taskList,
                                list: e.list,
                                listDepth: e.listDepth,
                                quote: e.quote,
                                trailingSpace: e.trailingSpace,
                                trailingSpaceNewLine: e.trailingSpaceNewLine,
                                md_inside: e.md_inside
                            }
                        },
                        token: function(e, t) {
                            if (e.sol()) {
                                if (e.match(/^\s*$/, !0)) return t.prevLineHasContent = !1,
                                    i(t);
                                t.prevLineHasContent = t.thisLineHasContent,
                                    t.thisLineHasContent = !0,
                                    t.header = !1,
                                    t.taskList = !1,
                                    t.code = !1,
                                    t.trailingSpace = 0,
                                    t.trailingSpaceNewLine = !1,
                                    t.f = t.block;
                                var r = e.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length,
                                    n = 4 * Math.floor((r - t.indentation) / 4);
                                n > 4 && (n = 4);
                                var o = t.indentation + n;
                                if (t.indentationDiff = o - t.indentation, t.indentation = o, r > 0) return null
                            }
                            return t.f(e, t)
                        },
                        blankLine: i,
                        getType: s
                    }
                },
                "xml"),
            x.defineMIME("text/x-markdown", "markdown");
        var C = /Mac/.test(navigator.platform),
            w = {
                "Cmd-B": l,
                "Cmd-I": a,
                "Cmd-K": f,
                "Cmd-Alt-I": h,
                "Cmd-'": s,
                "Cmd-Alt-L": u,
                "Cmd-L": c
            },
            L = [{
                name: "bold",
                action: l
            },
                {
                    name: "italic",
                    action: a
                },
                "|", {
                    name: "quote",
                    action: s
                },
                {
                    name: "unordered-list",
                    action: c
                },
                {
                    name: "ordered-list",
                    action: u
                },
                "|", {
                    name: "link",
                    action: f
                },
                {
                    name: "image",
                    action: h
                },
                "|", {
                    name: "info",
                    action: "http://lab.lepture.com/editor/markdown"
                },
                {
                    name: "preview",
                    action: m
                },
                {
                    name: "fullscreen",
                    action: o
                }];
        b.toolbar = L,
            b.markdown = function(e) {
                return window.remarkable ? remarkable.render(e) : void 0
            },
            b.prototype.render = function(e) {
                if (e || (e = this.element || document.getElementsByTagName("textarea")[0]), !this._rendered || this._rendered !== e) {
                    this.element = e;
                    var r = this.options,
                        n = this,
                        i = {};
                    for (var o in w) !
                        function(e) {
                            i[t(e)] = function() {
                                w[e](n)
                            }
                        } (o);
                    i.Enter = "newlineAndIndentContinueMarkdownList",
                        this.codemirror = x.fromTextArea(e, {
                            mode: "markdown",
                            theme: "paper",
                            indentWithTabs: !0,
                            lineNumbers: !1,
                            extraKeys: i
                        }),
                    r.toolbar !== !1 && this.createToolbar(),
                    r.status !== !1 && this.createStatusbar(),
                        this._rendered = this.element
                }
            },
            b.prototype.createToolbar = function(e) {
                if (e = e || this.options.toolbar, e && 0 !== e.length) {
                    var t = document.createElement("div");
                    t.className = "editor-toolbar";
                    var o = this;
                    o.toolbar = {};
                    for (var l = 0; l < e.length; l++) !
                        function(e) {
                            var i;
                            i = e.name ? r(e.name, e) : "|" === e ? n() : r(e),
                            e.action && ("function" == typeof e.action ? i.onclick = function() {
                                e.action(o)
                            }: "string" == typeof e.action && (i.href = e.action, i.target = "_blank")),
                                o.toolbar[e.name || e] = i,
                                t.appendChild(i)
                        } (e[l]);
                    var a = this.codemirror;
                    a.on("cursorActivity",
                        function() {
                            var e = i(a);
                            for (var t in o.toolbar) !
                                function(t) {
                                    var r = o.toolbar[t];
                                    e[t] ? r.className += " active": r.className = r.className.replace(/\s*active\s*/g, "")
                                } (t)
                        });
                    var s = a.getWrapperElement();
                    return s.parentNode.insertBefore(t, s),
                        t
                }
            },
            b.prototype.createStatusbar = function(e) {
                if (e = e || this.options.status, e && 0 !== e.length) {
                    var t = document.createElement("div");
                    t.className = "editor-statusbar";
                    for (var r, n = this.codemirror,
                             i = 0; i < e.length; i++) !
                        function(e) {
                            var i = document.createElement("span");
                            i.className = e,
                                "words" === e ? (i.innerHTML = "0", n.on("update",
                                    function() {
                                        i.innerHTML = y(n.getValue())
                                    })) : "lines" === e ? (i.innerHTML = "0", n.on("update",
                                    function() {
                                        i.innerHTML = n.lineCount()
                                    })) : "cursor" === e && (i.innerHTML = "0:0", n.on("cursorActivity",
                                    function() {
                                        r = n.getCursor(),
                                            i.innerHTML = r.line + ":" + r.ch
                                    })),
                                t.appendChild(i)
                        } (e[i]);
                    var o = this.codemirror.getWrapperElement();
                    return o.parentNode.insertBefore(t, o.nextSibling),
                        t
                }
            },
            b.toggleBold = l,
            b.toggleItalic = a,
            b.toggleBlockquote = s,
            b.toggleUnOrderedList = c,
            b.toggleOrderedList = u,
            b.drawLink = f,
            b.drawImage = h,
            b.undo = d,
            b.redo = p,
            b.toggleFullScreen = o,
            b.prototype.toggleBold = function() {
                l(this)
            },
            b.prototype.toggleItalic = function() {
                a(this)
            },
            b.prototype.toggleBlockquote = function() {
                s(this)
            },
            b.prototype.toggleUnOrderedList = function() {
                c(this)
            },
            b.prototype.toggleOrderedList = function() {
                u(this)
            },
            b.prototype.drawLink = function() {
                f(this)
            },
            b.prototype.drawImage = function() {
                h(this)
            },
            b.prototype.undo = function() {
                d(this)
            },
            b.prototype.redo = function() {
                p(this)
            },
            b.prototype.toggleFullScreen = function() {
                o(this)
            },
            e.Editor = b,
            e.CodeMirror = x
    } (this); !
    function(e, t) {
        var n, i = {},
            r = function(e, t) {
                var n, i, r;
                if ("string" == typeof e) return a(e);
                for (n = [], i = e.length, r = 0; i > r; r++) n.push(a(e[r]));
                return t.apply(null, n)
            },
            s = function(e, t, n) {
                2 === arguments.length && (n = t, t = null),
                    r(t || [],
                        function() {
                            o(e, n, arguments)
                        })
            },
            o = function(e, t, n) {
                var s, o = {
                    exports: t
                };
                "function" == typeof t && (n.length || (n = [r, o.exports, o]), s = t.apply(null, n), void 0 !== s && (o.exports = s)),
                    i[e] = o.exports
            },
            a = function(t) {
                var n = i[t] || e[t];
                if (!n) throw new Error("`" + t + "` is undefined");
                return n
            },
            u = function(e) {
                var t, n, r, s, o, a;
                a = function(e) {
                    return e && e.charAt(0).toUpperCase() + e.substr(1)
                };
                for (t in i) if (n = e, i.hasOwnProperty(t)) {
                    for (r = t.split("/"), o = a(r.pop()); s = a(r.shift());) n[s] = n[s] || {},
                        n = n[s];
                    n[o] = i[t]
                }
                return e
            },
            c = function(n) {
                return e.__dollar = n,
                    u(t(e, s, r))
            };
        "object" == typeof module && "object" == typeof module.exports ? module.exports = c() : "function" == typeof define && define.amd ? define("webuploader", ["jquery"], c) : (n = e.WebUploader, e.WebUploader = c(), e.WebUploader.noConflict = function() {
            e.WebUploader = n
        })
    } (window,
        function(e, t, n) {
            return t("dollar-third", [],
                function() {
                    var t = e.__dollar || e.jQuery || e.Zepto;
                    if (!t) throw new Error("jQuery or Zepto not found!");
                    return t
                }),
                t("dollar", ["dollar-third"],
                    function(e) {
                        return e
                    }),
                t("promise-third", ["dollar"],
                    function(e) {
                        return {
                            Deferred: e.Deferred,
                            when: e.when,
                            isPromise: function(e) {
                                return e && "function" == typeof e.then
                            }
                        }
                    }),
                t("promise", ["promise-third"],
                    function(e) {
                        return e
                    }),
                t("base", ["dollar", "promise"],
                    function(t, n) {
                        function i(e) {
                            return function() {
                                return a.apply(e, arguments)
                            }
                        }
                        function r(e, t) {
                            return function() {
                                return e.apply(t, arguments)
                            }
                        }
                        function s(e) {
                            var t;
                            return Object.create ? Object.create(e) : (t = function() {},
                                t.prototype = e, new t)
                        }
                        var o = function() {},
                            a = Function.call;
                        return {
                            version: "0.1.5",
                            $: t,
                            Deferred: n.Deferred,
                            isPromise: n.isPromise,
                            when: n.when,
                            browser: function(e) {
                                var t = {},
                                    n = e.match(/WebKit\/([\d.]+)/),
                                    i = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                                    r = e.match(/MSIE\s([\d\.]+)/) || e.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
                                    s = e.match(/Firefox\/([\d.]+)/),
                                    o = e.match(/Safari\/([\d.]+)/),
                                    a = e.match(/OPR\/([\d.]+)/);
                                return n && (t.webkit = parseFloat(n[1])),
                                i && (t.chrome = parseFloat(i[1])),
                                r && (t.ie = parseFloat(r[1])),
                                s && (t.firefox = parseFloat(s[1])),
                                o && (t.safari = parseFloat(o[1])),
                                a && (t.opera = parseFloat(a[1])),
                                    t
                            } (navigator.userAgent),
                            os: function(e) {
                                var t = {},
                                    n = e.match(/(?:Android);?[\s\/]+([\d.]+)?/),
                                    i = e.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
                                return n && (t.android = parseFloat(n[1])),
                                i && (t.ios = parseFloat(i[1].replace(/_/g, "."))),
                                    t
                            } (navigator.userAgent),
                            inherits: function(e, n, i) {
                                var r;
                                return "function" == typeof n ? (r = n, n = null) : r = n && n.hasOwnProperty("constructor") ? n.constructor: function() {
                                    return e.apply(this, arguments)
                                },
                                    t.extend(!0, r, e, i || {}),
                                    r.__super__ = e.prototype,
                                    r.prototype = s(e.prototype),
                                n && t.extend(!0, r.prototype, n),
                                    r
                            },
                            noop: o,
                            bindFn: r,
                            log: function() {
                                return e.console ? r(console.log, console) : o
                            } (),
                            nextTick: function() {
                                return function(e) {
                                    setTimeout(e, 1)
                                }
                            } (),
                            slice: i([].slice),
                            guid: function() {
                                var e = 0;
                                return function(t) {
                                    for (var n = ( + new Date).toString(32), i = 0; 5 > i; i++) n += Math.floor(65535 * Math.random()).toString(32);
                                    return (t || "wu_") + n + (e++).toString(32)
                                }
                            } (),
                            formatSize: function(e, t, n) {
                                var i;
                                for (n = n || ["B", "K", "M", "G", "TB"]; (i = n.shift()) && e > 1024;) e /= 1024;
                                return ("B" === i ? e: e.toFixed(t || 2)) + i
                            }
                        }
                    }),
                t("mediator", ["base"],
                    function(e) {
                        function t(e, t, n, i) {
                            return s.grep(e,
                                function(e) {
                                    return ! (!e || t && e.e !== t || n && e.cb !== n && e.cb._cb !== n || i && e.ctx !== i)
                                })
                        }
                        function n(e, t, n) {
                            s.each((e || "").split(a),
                                function(e, i) {
                                    n(i, t)
                                })
                        }
                        function i(e, t) {
                            for (var n, i = !1,
                                     r = -1,
                                     s = e.length; ++r < s;) if (n = e[r], n.cb.apply(n.ctx2, t) === !1) {
                                i = !0;
                                break
                            }
                            return ! i
                        }
                        var r, s = e.$,
                            o = [].slice,
                            a = /\s+/;
                        return r = {
                            on: function(e, t, i) {
                                var r, s = this;
                                return t ? (r = this._events || (this._events = []), n(e, t,
                                    function(e, t) {
                                        var n = {
                                            e: e
                                        };
                                        n.cb = t,
                                            n.ctx = i,
                                            n.ctx2 = i || s,
                                            n.id = r.length,
                                            r.push(n)
                                    }), this) : this
                            },
                            once: function(e, t, i) {
                                var r = this;
                                return t ? (n(e, t,
                                    function(e, t) {
                                        var n = function() {
                                            return r.off(e, n),
                                                t.apply(i || r, arguments)
                                        };
                                        n._cb = t,
                                            r.on(e, n, i)
                                    }), r) : r
                            },
                            off: function(e, i, r) {
                                var o = this._events;
                                return o ? e || i || r ? (n(e, i,
                                    function(e, n) {
                                        s.each(t(o, e, n, r),
                                            function() {
                                                delete o[this.id]
                                            })
                                    }), this) : (this._events = [], this) : this
                            },
                            trigger: function(e) {
                                var n, r, s;
                                return this._events && e ? (n = o.call(arguments, 1), r = t(this._events, e), s = t(this._events, "all"), i(r, n) && i(s, arguments)) : this
                            }
                        },
                            s.extend({
                                    installTo: function(e) {
                                        return s.extend(e, r)
                                    }
                                },
                                r)
                    }),
                t("uploader", ["base", "mediator"],
                    function(e, t) {
                        function n(e) {
                            this.options = i.extend(!0, {},
                                n.options, e),
                                this._init(this.options)
                        }
                        var i = e.$;
                        return n.options = {},
                            t.installTo(n.prototype),
                            i.each({
                                    upload: "start-upload",
                                    stop: "stop-upload",
                                    getFile: "get-file",
                                    getFiles: "get-files",
                                    addFile: "add-file",
                                    addFiles: "add-file",
                                    sort: "sort-files",
                                    removeFile: "remove-file",
                                    skipFile: "skip-file",
                                    retry: "retry",
                                    isInProgress: "is-in-progress",
                                    makeThumb: "make-thumb",
                                    md5File: "md5-file",
                                    getDimension: "get-dimension",
                                    addButton: "add-btn",
                                    getRuntimeType: "get-runtime-type",
                                    refresh: "refresh",
                                    disable: "disable",
                                    enable: "enable",
                                    reset: "reset"
                                },
                                function(e, t) {
                                    n.prototype[e] = function() {
                                        return this.request(t, arguments)
                                    }
                                }),
                            i.extend(n.prototype, {
                                state: "pending",
                                _init: function(e) {
                                    var t = this;
                                    t.request("init", e,
                                        function() {
                                            t.state = "ready",
                                                t.trigger("ready")
                                        })
                                },
                                option: function(e, t) {
                                    var n = this.options;
                                    return arguments.length > 1 ? (i.isPlainObject(t) && i.isPlainObject(n[e]) ? i.extend(n[e], t) : n[e] = t, void 0) : e ? n[e] : n
                                },
                                getStats: function() {
                                    var e = this.request("get-stats");
                                    return {
                                        successNum: e.numOfSuccess,
                                        progressNum: e.numOfProgress,
                                        cancelNum: e.numOfCancel,
                                        invalidNum: e.numOfInvalid,
                                        uploadFailNum: e.numOfUploadFailed,
                                        queueNum: e.numOfQueue
                                    }
                                },
                                trigger: function(e) {
                                    var n = [].slice.call(arguments, 1),
                                        r = this.options,
                                        s = "on" + e.substring(0, 1).toUpperCase() + e.substring(1);
                                    return t.trigger.apply(this, arguments) === !1 || i.isFunction(r[s]) && r[s].apply(this, n) === !1 || i.isFunction(this[s]) && this[s].apply(this, n) === !1 || t.trigger.apply(t, [this, e].concat(n)) === !1 ? !1 : !0
                                },
                                request: e.noop
                            }),
                            e.create = n.create = function(e) {
                                return new n(e)
                            },
                            e.Uploader = n,
                            n
                    }),
                t("runtime/runtime", ["base", "mediator"],
                    function(e, t) {
                        function n(t) {
                            this.options = i.extend({
                                    container: document.body
                                },
                                t),
                                this.uid = e.guid("rt_")
                        }
                        var i = e.$,
                            r = {},
                            s = function(e) {
                                for (var t in e) if (e.hasOwnProperty(t)) return t;
                                return null
                            };
                        return i.extend(n.prototype, {
                            getContainer: function() {
                                var e, t, n = this.options;
                                return this._container ? this._container: (e = i(n.container || document.body), t = i(document.createElement("div")), t.attr("id", "rt_" + this.uid), t.css({
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: e.width() || "1px",
                                    height: e.height() || "1px",
                                    overflow: "hidden"
                                }), e.append(t), e.addClass("webuploader-container"), this._container = t, t)
                            },
                            init: e.noop,
                            exec: e.noop,
                            destroy: function() {
                                this._container && this._container.parentNode.removeChild(this.__container),
                                    this.off()
                            }
                        }),
                            n.orders = "html5,flash",
                            n.addRuntime = function(e, t) {
                                r[e] = t
                            },
                            n.hasRuntime = function(e) {
                                return !! (e ? r[e] : s(r))
                            },
                            n.create = function(e, t) {
                                var o, a;
                                if (t = t || n.orders, i.each(t.split(/\s*,\s*/g),
                                        function() {
                                            return r[this] ? (o = this, !1) : void 0
                                        }), o = o || s(r), !o) throw alert("程序需要 Flash 11 以上版本才能正常运行，请前往：http://get.adobe.com/cn/flashplayer/ 安装"),
                                    new Error("Runtime Error");
                                return a = new r[o](e)
                            },
                            t.installTo(n.prototype),
                            n
                    }),
                t("runtime/client", ["base", "mediator", "runtime/runtime"],
                    function(e, t, n) {
                        function i(t, i) {
                            var s, o = e.Deferred();
                            this.uid = e.guid("client_"),
                                this.runtimeReady = function(e) {
                                    return o.done(e)
                                },
                                this.connectRuntime = function(t, a) {
                                    if (s) throw new Error("already connected!");
                                    return o.done(a),
                                    "string" == typeof t && r.get(t) && (s = r.get(t)),
                                        s = s || r.get(null, i),
                                        s ? (e.$.extend(s.options, t), s.__promise.then(o.resolve), s.__client++) : (s = n.create(t, t.runtimeOrder), s.__promise = o.promise(), s.once("ready", o.resolve), s.init(), r.add(s), s.__client = 1),
                                    i && (s.__standalone = i),
                                        s
                                },
                                this.getRuntime = function() {
                                    return s
                                },
                                this.disconnectRuntime = function() {
                                    s && (s.__client--, s.__client <= 0 && (r.remove(s), delete s.__promise, s.destroy()), s = null)
                                },
                                this.exec = function() {
                                    if (s) {
                                        var n = e.slice(arguments);
                                        return t && n.unshift(t),
                                            s.exec.apply(this, n)
                                    }
                                },
                                this.getRuid = function() {
                                    return s && s.uid
                                },
                                this.destroy = function(e) {
                                    return function() {
                                        e && e.apply(this, arguments),
                                            this.trigger("destroy"),
                                            this.off(),
                                            this.exec("destroy"),
                                            this.disconnectRuntime()
                                    }
                                } (this.destroy)
                        }
                        var r;
                        return r = function() {
                            var e = {};
                            return {
                                add: function(t) {
                                    e[t.uid] = t
                                },
                                get: function(t, n) {
                                    var i;
                                    if (t) return e[t];
                                    for (i in e) if (!n || !e[i].__standalone) return e[i];
                                    return null
                                },
                                remove: function(t) {
                                    delete e[t.uid]
                                }
                            }
                        } (),
                            t.installTo(i.prototype),
                            i
                    }),
                t("lib/dnd", ["base", "mediator", "runtime/client"],
                    function(e, t, n) {
                        function i(e) {
                            e = this.options = r.extend({},
                                i.options, e),
                                e.container = r(e.container),
                            e.container.length && n.call(this, "DragAndDrop")
                        }
                        var r = e.$;
                        return i.options = {
                            accept: null,
                            disableGlobalDnd: !1
                        },
                            e.inherits(n, {
                                constructor: i,
                                init: function() {
                                    var e = this;
                                    e.connectRuntime(e.options,
                                        function() {
                                            e.exec("init"),
                                                e.trigger("ready")
                                        })
                                },
                                destroy: function() {
                                    this.disconnectRuntime()
                                }
                            }),
                            t.installTo(i.prototype),
                            i
                    }),
                t("widgets/widget", ["base", "uploader"],
                    function(e, t) {
                        function n(e) {
                            if (!e) return ! 1;
                            var t = e.length,
                                n = r.type(e);
                            return 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && "string" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                        }
                        function i(e) {
                            this.owner = e,
                                this.options = e.options
                        }
                        var r = e.$,
                            s = t.prototype._init,
                            o = {},
                            a = [];
                        return r.extend(i.prototype, {
                            init: e.noop,
                            invoke: function(e, t) {
                                var n = this.responseMap;
                                return n && e in n && n[e] in this && r.isFunction(this[n[e]]) ? this[n[e]].apply(this, t) : o
                            },
                            request: function() {
                                return this.owner.request.apply(this.owner, arguments)
                            }
                        }),
                            r.extend(t.prototype, {
                                _init: function() {
                                    var e = this,
                                        t = e._widgets = [];
                                    return r.each(a,
                                        function(n, i) {
                                            t.push(new i(e))
                                        }),
                                        s.apply(e, arguments)
                                },
                                request: function(t, i, r) {
                                    var s, a, u, c, l = 0,
                                        d = this._widgets,
                                        p = d.length,
                                        h = [],
                                        f = [];
                                    for (i = n(i) ? i: [i]; p > l; l++) s = d[l],
                                        a = s.invoke(t, i),
                                    a !== o && (e.isPromise(a) ? f.push(a) : h.push(a));
                                    return r || f.length ? (u = e.when.apply(e, f), c = u.pipe ? "pipe": "then", u[c](function() {
                                        var t = e.Deferred(),
                                            n = arguments;
                                        return 1 === n.length && (n = n[0]),
                                            setTimeout(function() {
                                                    t.resolve(n)
                                                },
                                                1),
                                            t.promise()
                                    })[r ? c: "done"](r || e.noop)) : h[0]
                                }
                            }),
                            t.register = i.register = function(t, n) {
                                var s, o = {
                                    init: "init"
                                };
                                return 1 === arguments.length ? (n = t, n.responseMap = o) : n.responseMap = r.extend(o, t),
                                    s = e.inherits(i, n),
                                    a.push(s),
                                    s
                            },
                            i
                    }),
                t("widgets/filednd", ["base", "uploader", "lib/dnd", "widgets/widget"],
                    function(e, t, n) {
                        var i = e.$;
                        return t.options.dnd = "",
                            t.register({
                                init: function(t) {
                                    if (t.dnd && "html5" === this.request("predict-runtime-type")) {
                                        var r, s = this,
                                            o = e.Deferred(),
                                            a = i.extend({},
                                                {
                                                    disableGlobalDnd: t.disableGlobalDnd,
                                                    container: t.dnd,
                                                    accept: t.accept
                                                });
                                        return r = new n(a),
                                            r.once("ready", o.resolve),
                                            r.on("drop",
                                                function(e) {
                                                    s.request("add-file", [e])
                                                }),
                                            r.on("accept",
                                                function(e) {
                                                    return s.owner.trigger("dndAccept", e)
                                                }),
                                            r.init(),
                                            o.promise()
                                    }
                                }
                            })
                    }),
                t("lib/filepaste", ["base", "mediator", "runtime/client"],
                    function(e, t, n) {
                        function i(e) {
                            e = this.options = r.extend({},
                                e),
                                e.container = r(e.container || document.body),
                                n.call(this, "FilePaste")
                        }
                        var r = e.$;
                        return e.inherits(n, {
                            constructor: i,
                            init: function() {
                                var e = this;
                                e.connectRuntime(e.options,
                                    function() {
                                        e.exec("init"),
                                            e.trigger("ready")
                                    })
                            },
                            destroy: function() {
                                this.exec("destroy"),
                                    this.disconnectRuntime(),
                                    this.off()
                            }
                        }),
                            t.installTo(i.prototype),
                            i
                    }),
                t("widgets/filepaste", ["base", "uploader", "lib/filepaste", "widgets/widget"],
                    function(e, t, n) {
                        var i = e.$;
                        return t.register({
                            init: function(t) {
                                if (t.paste && "html5" === this.request("predict-runtime-type")) {
                                    var r, s = this,
                                        o = e.Deferred(),
                                        a = i.extend({},
                                            {
                                                container: t.paste,
                                                accept: t.accept
                                            });
                                    return r = new n(a),
                                        r.once("ready", o.resolve),
                                        r.on("paste",
                                            function(e) {
                                                s.owner.request("add-file", [e])
                                            }),
                                        r.init(),
                                        o.promise()
                                }
                            }
                        })
                    }),
                t("lib/blob", ["base", "runtime/client"],
                    function(e, t) {
                        function n(e, n) {
                            var i = this;
                            i.source = n,
                                i.ruid = e,
                                this.size = n.size || 0,
                                this.type = !n.type && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? "image/" + ("jpg" === this.ext ? "jpeg": this.ext) : n.type || "application/octet-stream",
                                t.call(i, "Blob"),
                                this.uid = n.uid || this.uid,
                            e && i.connectRuntime(e)
                        }
                        return e.inherits(t, {
                            constructor: n,
                            slice: function(e, t) {
                                return this.exec("slice", e, t)
                            },
                            getSource: function() {
                                return this.source
                            }
                        }),
                            n
                    }),
                t("lib/file", ["base", "lib/blob"],
                    function(e, t) {
                        function n(e, n) {
                            var s;
                            this.name = n.name || "untitled" + i++,
                                s = r.exec(n.name) ? RegExp.$1.toLowerCase() : "",
                            !s && n.type && (s = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(n.type) ? RegExp.$1.toLowerCase() : "", this.name += "." + s),
                                this.ext = s,
                                this.lastModifiedDate = n.lastModifiedDate || (new Date).toLocaleString(),
                                t.apply(this, arguments)
                        }
                        var i = 1,
                            r = /\.([^.]+)$/;
                        return e.inherits(t, n)
                    }),
                t("lib/filepicker", ["base", "runtime/client", "lib/file"],
                    function(t, n, i) {
                        function r(e) {
                            if (e = this.options = s.extend({},
                                    r.options, e), e.container = s(e.id), !e.container.length) throw new Error("按钮指定错误");
                            e.innerHTML = e.innerHTML || e.label || e.container.html() || "",
                                e.button = s(e.button || document.createElement("div")),
                                e.button.html(e.innerHTML),
                                e.container.html(e.button),
                                n.call(this, "FilePicker", !0)
                        }
                        var s = t.$;
                        return r.options = {
                            button: null,
                            container: null,
                            label: null,
                            innerHTML: null,
                            multiple: !0,
                            accept: null,
                            name: "file"
                        },
                            t.inherits(n, {
                                constructor: r,
                                init: function() {
                                    var t = this,
                                        n = t.options,
                                        r = n.button;
                                    r.addClass("webuploader-pick"),
                                        t.on("all",
                                            function(e) {
                                                var o;
                                                switch (e) {
                                                    case "mouseenter":
                                                        r.addClass("webuploader-pick-hover");
                                                        break;
                                                    case "mouseleave":
                                                        r.removeClass("webuploader-pick-hover");
                                                        break;
                                                    case "change":
                                                        o = t.exec("getFiles"),
                                                            t.trigger("select", s.map(o,
                                                                function(e) {
                                                                    return e = new i(t.getRuid(), e),
                                                                        e._refer = n.container,
                                                                        e
                                                                }), n.container)
                                                }
                                            }),
                                        t.connectRuntime(n,
                                            function() {
                                                t.refresh(),
                                                    t.exec("init", n),
                                                    t.trigger("ready")
                                            }),
                                        s(e).on("resize",
                                            function() {
                                                t.refresh()
                                            })
                                },
                                refresh: function() {
                                    var e = this.getRuntime().getContainer(),
                                        t = this.options.button,
                                        n = t.outerWidth ? t.outerWidth() : t.width(),
                                        i = t.outerHeight ? t.outerHeight() : t.height(),
                                        r = t.offset();
                                    n < e.width() && (n = e.width()),
                                    i < e.height() && (i = e.height()),
                                    n && i && e.css({
                                        bottom: "auto",
                                        right: "auto",
                                        width: n + "px",
                                        height: i + "px"
                                    }).offset(r)
                                },
                                enable: function() {
                                    var e = this.options.button;
                                    e.removeClass("webuploader-pick-disable"),
                                        this.refresh()
                                },
                                disable: function() {
                                    var e = this.options.button;
                                    this.getRuntime().getContainer().css({
                                        top: "-99999px"
                                    }),
                                        e.addClass("webuploader-pick-disable")
                                },
                                destroy: function() {
                                    this.runtime && (this.exec("destroy"), this.disconnectRuntime())
                                }
                            }),
                            r
                    }),
                t("widgets/filepicker", ["base", "uploader", "lib/filepicker", "widgets/widget"],
                    function(e, t, n) {
                        var i = e.$;
                        return i.extend(t.options, {
                            pick: null,
                            accept: null
                        }),
                            t.register({
                                    "add-btn": "addButton",
                                    refresh: "refresh",
                                    disable: "disable",
                                    enable: "enable"
                                },
                                {
                                    init: function(e) {
                                        return this.pickers = [],
                                        e.pick && this.addButton(e.pick)
                                    },
                                    refresh: function() {
                                        i.each(this.pickers,
                                            function() {
                                                this.refresh()
                                            })
                                    },
                                    addButton: function(t) {
                                        var r = this,
                                            s = r.options,
                                            o = s.accept,
                                            a = [];
                                        if (t) return i.isPlainObject(t) || (t = {
                                            id: t
                                        }),
                                            i(t.id).each(function() {
                                                var u, c, l;
                                                l = e.Deferred(),
                                                    u = i.extend({},
                                                        t, {
                                                            accept: i.isPlainObject(o) ? [o] : o,
                                                            swf: s.swf,
                                                            runtimeOrder: s.runtimeOrder,
                                                            id: this
                                                        }),
                                                    c = new n(u),
                                                    c.once("ready", l.resolve),
                                                    c.on("select",
                                                        function(e) {
                                                            r.owner.request("add-file", [e])
                                                        }),
                                                    c.init(),
                                                    r.pickers.push(c),
                                                    a.push(l.promise())
                                            }),
                                            e.when.apply(e, a)
                                    },
                                    disable: function() {
                                        i.each(this.pickers,
                                            function() {
                                                this.disable()
                                            })
                                    },
                                    enable: function() {
                                        i.each(this.pickers,
                                            function() {
                                                this.enable()
                                            })
                                    }
                                })
                    }),
                t("file", ["base", "mediator"],
                    function(e, t) {
                        function n() {
                            return s + o++
                        }
                        function i(e) {
                            this.name = e.name || "Untitled",
                                this.size = e.size || 0,
                                this.type = e.type || "application",
                                this.lastModifiedDate = e.lastModifiedDate || 1 * new Date,
                                this.id = n(),
                                this.ext = a.exec(this.name) ? RegExp.$1: "",
                                this.statusText = "",
                                u[this.id] = i.Status.INITED,
                                this.source = e,
                                this.loaded = 0,
                                this.on("error",
                                    function(e) {
                                        this.setStatus(i.Status.ERROR, e)
                                    })
                        }
                        var r = e.$,
                            s = "WU_FILE_",
                            o = 0,
                            a = /\.([^.]+)$/,
                            u = {};
                        return r.extend(i.prototype, {
                            setStatus: function(e, t) {
                                var n = u[this.id];
                                "undefined" != typeof t && (this.statusText = t),
                                e !== n && (u[this.id] = e, this.trigger("statuschange", e, n))
                            },
                            getStatus: function() {
                                return u[this.id]
                            },
                            getSource: function() {
                                return this.source
                            },
                            destory: function() {
                                delete u[this.id]
                            }
                        }),
                            t.installTo(i.prototype),
                            i.Status = {
                                INITED: "inited",
                                QUEUED: "queued",
                                PROGRESS: "progress",
                                ERROR: "error",
                                COMPLETE: "complete",
                                CANCELLED: "cancelled",
                                INTERRUPT: "interrupt",
                                INVALID: "invalid"
                            },
                            i
                    }),
                t("queue", ["base", "mediator", "file"],
                    function(e, t, n) {
                        function i() {
                            this.stats = {
                                numOfQueue: 0,
                                numOfSuccess: 0,
                                numOfCancel: 0,
                                numOfProgress: 0,
                                numOfUploadFailed: 0,
                                numOfInvalid: 0
                            },
                                this._queue = [],
                                this._map = {}
                        }
                        var r = e.$,
                            s = n.Status;
                        return r.extend(i.prototype, {
                            append: function(e) {
                                return this._queue.push(e),
                                    this._fileAdded(e),
                                    this
                            },
                            prepend: function(e) {
                                return this._queue.unshift(e),
                                    this._fileAdded(e),
                                    this
                            },
                            getFile: function(e) {
                                return "string" != typeof e ? e: this._map[e]
                            },
                            fetch: function(e) {
                                var t, n, i = this._queue.length;
                                for (e = e || s.QUEUED, t = 0; i > t; t++) if (n = this._queue[t], e === n.getStatus()) return n;
                                return null
                            },
                            sort: function(e) {
                                "function" == typeof e && this._queue.sort(e)
                            },
                            getFiles: function() {
                                for (var e, t = [].slice.call(arguments, 0), n = [], i = 0, s = this._queue.length; s > i; i++) e = this._queue[i],
                                (!t.length || ~r.inArray(e.getStatus(), t)) && n.push(e);
                                return n
                            },
                            _fileAdded: function(e) {
                                var t = this,
                                    n = this._map[e.id];
                                n || (this._map[e.id] = e, e.on("statuschange",
                                    function(e, n) {
                                        t._onFileStatusChange(e, n)
                                    })),
                                    e.setStatus(s.QUEUED)
                            },
                            _onFileStatusChange: function(e, t) {
                                var n = this.stats;
                                switch (t) {
                                    case s.PROGRESS:
                                        n.numOfProgress--;
                                        break;
                                    case s.QUEUED:
                                        n.numOfQueue--;
                                        break;
                                    case s.ERROR:
                                        n.numOfUploadFailed--;
                                        break;
                                    case s.INVALID:
                                        n.numOfInvalid--
                                }
                                switch (e) {
                                    case s.QUEUED:
                                        n.numOfQueue++;
                                        break;
                                    case s.PROGRESS:
                                        n.numOfProgress++;
                                        break;
                                    case s.ERROR:
                                        n.numOfUploadFailed++;
                                        break;
                                    case s.COMPLETE:
                                        n.numOfSuccess++;
                                        break;
                                    case s.CANCELLED:
                                        n.numOfCancel++;
                                        break;
                                    case s.INVALID:
                                        n.numOfInvalid++
                                }
                            }
                        }),
                            t.installTo(i.prototype),
                            i
                    }),
                t("widgets/queue", ["base", "uploader", "queue", "file", "lib/file", "runtime/client", "widgets/widget"],
                    function(e, t, n, i, r, s) {
                        var o = e.$,
                            a = /\.\w+$/,
                            u = i.Status;
                        return t.register({
                                "sort-files": "sortFiles",
                                "add-file": "addFiles",
                                "get-file": "getFile",
                                "fetch-file": "fetchFile",
                                "get-stats": "getStats",
                                "get-files": "getFiles",
                                "remove-file": "removeFile",
                                retry: "retry",
                                reset: "reset",
                                "accept-file": "acceptFile"
                            },
                            {
                                init: function(t) {
                                    var i, r, a, u, c, l, d, p = this;
                                    if (o.isPlainObject(t.accept) && (t.accept = [t.accept]), t.accept) {
                                        for (c = [], a = 0, r = t.accept.length; r > a; a++) u = t.accept[a].extensions,
                                        u && c.push(u);
                                        c.length && (l = "\\." + c.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"),
                                            p.accept = new RegExp(l, "i")
                                    }
                                    return p.queue = new n,
                                        p.stats = p.queue.stats,
                                        "html5" === this.request("predict-runtime-type") ? (i = e.Deferred(), d = new s("Placeholder"), d.connectRuntime({
                                                runtimeOrder: "html5"
                                            },
                                            function() {
                                                p._ruid = d.getRuid(),
                                                    i.resolve()
                                            }), i.promise()) : void 0
                                },
                                _wrapFile: function(e) {
                                    if (! (e instanceof i)) {
                                        if (! (e instanceof r)) {
                                            if (!this._ruid) throw new Error("Can't add external files.");
                                            e = new r(this._ruid, e)
                                        }
                                        e = new i(e)
                                    }
                                    return e
                                },
                                acceptFile: function(e) {
                                    var t = !e || e.size < 6 || this.accept && a.exec(e.name) && !this.accept.test(e.name);
                                    return ! t
                                },
                                _addFile: function(e) {
                                    var t = this;
                                    return e = t._wrapFile(e),
                                        t.owner.trigger("beforeFileQueued", e) ? t.acceptFile(e) ? (t.queue.append(e), t.owner.trigger("fileQueued", e), e) : (t.owner.trigger("error", "Q_TYPE_DENIED", e), void 0) : void 0
                                },
                                getFile: function(e) {
                                    return this.queue.getFile(e)
                                },
                                addFiles: function(e) {
                                    var t = this;
                                    e.length || (e = [e]),
                                        e = o.map(e,
                                            function(e) {
                                                return t._addFile(e)
                                            }),
                                        t.owner.trigger("filesQueued", e),
                                    t.options.auto && setTimeout(function() {
                                            t.request("start-upload")
                                        },
                                        20)
                                },
                                getStats: function() {
                                    return this.stats
                                },
                                removeFile: function(e) {
                                    var t = this;
                                    e = e.id ? e: t.queue.getFile(e),
                                        e.setStatus(u.CANCELLED),
                                        t.owner.trigger("fileDequeued", e)
                                },
                                getFiles: function() {
                                    return this.queue.getFiles.apply(this.queue, arguments)
                                },
                                fetchFile: function() {
                                    return this.queue.fetch.apply(this.queue, arguments)
                                },
                                retry: function(e, t) {
                                    var n, i, r, s = this;
                                    if (e) return e = e.id ? e: s.queue.getFile(e),
                                        e.setStatus(u.QUEUED),
                                    t || s.request("start-upload"),
                                        void 0;
                                    for (n = s.queue.getFiles(u.ERROR), i = 0, r = n.length; r > i; i++) e = n[i],
                                        e.setStatus(u.QUEUED);
                                    s.request("start-upload")
                                },
                                sortFiles: function() {
                                    return this.queue.sort.apply(this.queue, arguments)
                                },
                                reset: function() {
                                    this.owner.trigger("reset"),
                                        this.queue = new n,
                                        this.stats = this.queue.stats
                                }
                            })
                    }),
                t("widgets/runtime", ["uploader", "runtime/runtime", "widgets/widget"],
                    function(e, t) {
                        return e.support = function() {
                            return t.hasRuntime.apply(t, arguments)
                        },
                            e.register({
                                    "predict-runtime-type": "predictRuntmeType"
                                },
                                {
                                    init: function() {
                                        if (!this.predictRuntmeType()) throw Error("Runtime Error")
                                    },
                                    predictRuntmeType: function() {
                                        var e, n, i = this.options.runtimeOrder || t.orders,
                                            r = this.type;
                                        if (!r) for (i = i.split(/\s*,\s*/g), e = 0, n = i.length; n > e; e++) if (t.hasRuntime(i[e])) {
                                            this.type = r = i[e];
                                            break
                                        }
                                        return r
                                    }
                                })
                    }),
                t("lib/transport", ["base", "runtime/client", "mediator"],
                    function(e, t, n) {
                        function i(e) {
                            var n = this;
                            e = n.options = r.extend(!0, {},
                                i.options, e || {}),
                                t.call(this, "Transport"),
                                this._blob = null,
                                this._formData = e.formData || {},
                                this._headers = e.headers || {},
                                this.on("progress", this._timeout),
                                this.on("load error",
                                    function() {
                                        n.trigger("progress", 1),
                                            clearTimeout(n._timer)
                                    })
                        }
                        var r = e.$;
                        return i.options = {
                            server: "",
                            method: "POST",
                            withCredentials: !1,
                            fileVal: "file",
                            timeout: 12e4,
                            formData: {},
                            headers: {},
                            sendAsBinary: !1
                        },
                            r.extend(i.prototype, {
                                appendBlob: function(e, t, n) {
                                    var i = this,
                                        r = i.options;
                                    i.getRuid() && i.disconnectRuntime(),
                                        i.connectRuntime(t.ruid,
                                            function() {
                                                i.exec("init")
                                            }),
                                        i._blob = t,
                                        r.fileVal = e || r.fileVal,
                                        r.filename = n || r.filename
                                },
                                append: function(e, t) {
                                    "object" == typeof e ? r.extend(this._formData, e) : this._formData[e] = t
                                },
                                setRequestHeader: function(e, t) {
                                    "object" == typeof e ? r.extend(this._headers, e) : this._headers[e] = t
                                },
                                send: function(e) {
                                    this.exec("send", e),
                                        this._timeout()
                                },
                                abort: function() {
                                    return clearTimeout(this._timer),
                                        this.exec("abort")
                                },
                                destroy: function() {
                                    this.trigger("destroy"),
                                        this.off(),
                                        this.exec("destroy"),
                                        this.disconnectRuntime()
                                },
                                getResponse: function() {
                                    return this.exec("getResponse")
                                },
                                getResponseAsJson: function() {
                                    return this.exec("getResponseAsJson")
                                },
                                getStatus: function() {
                                    return this.exec("getStatus")
                                },
                                _timeout: function() {
                                    var e = this,
                                        t = e.options.timeout;
                                    t && (clearTimeout(e._timer), e._timer = setTimeout(function() {
                                            e.abort(),
                                                e.trigger("error", "timeout")
                                        },
                                        t))
                                }
                            }),
                            n.installTo(i.prototype),
                            i
                    }),
                t("widgets/upload", ["base", "uploader", "file", "lib/transport", "widgets/widget"],
                    function(e, t, n, i) {
                        function r(e, t) {
                            for (var n, i = [], r = e.source, s = r.size, o = t ? Math.ceil(s / t) : 1, a = 0, u = 0; o > u;) n = Math.min(t, s - a),
                                i.push({
                                    file: e,
                                    start: a,
                                    end: t ? a + n: s,
                                    total: s,
                                    chunks: o,
                                    chunk: u++
                                }),
                                a += n;
                            return e.blocks = i.concat(),
                                e.remaning = i.length,
                            {
                                file: e,
                                has: function() {
                                    return !! i.length
                                },
                                fetch: function() {
                                    return i.shift()
                                }
                            }
                        }
                        var s = e.$,
                            o = e.isPromise,
                            a = n.Status;
                        s.extend(t.options, {
                            prepareNextFile: !1,
                            chunked: !1,
                            chunkSize: 5242880,
                            chunkRetry: 2,
                            threads: 3,
                            formData: null
                        }),
                            t.register({
                                    "start-upload": "start",
                                    "stop-upload": "stop",
                                    "skip-file": "skipFile",
                                    "is-in-progress": "isInProgress"
                                },
                                {
                                    init: function() {
                                        var t = this.owner;
                                        this.runing = !1,
                                            this.pool = [],
                                            this.pending = [],
                                            this.remaning = 0,
                                            this.__tick = e.bindFn(this._tick, this),
                                            t.on("uploadComplete",
                                                function(e) {
                                                    e.blocks && s.each(e.blocks,
                                                        function(e, t) {
                                                            t.transport && (t.transport.abort(), t.transport.destroy()),
                                                                delete t.transport
                                                        }),
                                                        delete e.blocks,
                                                        delete e.remaning
                                                })
                                    },
                                    start: function() {
                                        var t = this;
                                        s.each(t.request("get-files", a.INVALID),
                                            function() {
                                                t.request("remove-file", this)
                                            }),
                                        t.runing || (t.runing = !0, s.each(t.pool,
                                            function(e, n) {
                                                var i = n.file;
                                                i.getStatus() === a.INTERRUPT && (i.setStatus(a.PROGRESS), t._trigged = !1, n.transport && n.transport.send())
                                            }), t._trigged = !1, t.owner.trigger("startUpload"), e.nextTick(t.__tick))
                                    },
                                    stop: function(e) {
                                        var t = this;
                                        t.runing !== !1 && (t.runing = !1, e && s.each(t.pool,
                                            function(e, t) {
                                                t.transport && t.transport.abort(),
                                                    t.file.setStatus(a.INTERRUPT)
                                            }), t.owner.trigger("stopUpload"))
                                    },
                                    isInProgress: function() {
                                        return !! this.runing
                                    },
                                    getStats: function() {
                                        return this.request("get-stats")
                                    },
                                    skipFile: function(e, t) {
                                        e = this.request("get-file", e),
                                            e.setStatus(t || a.COMPLETE),
                                            e.skipped = !0,
                                        e.blocks && s.each(e.blocks,
                                            function(e, t) {
                                                var n = t.transport;
                                                n && (n.abort(), n.destroy(), delete t.transport)
                                            }),
                                            this.owner.trigger("uploadSkip", e)
                                    },
                                    _tick: function() {
                                        var t, n, i = this,
                                            r = i.options;
                                        return i._promise ? i._promise.always(i.__tick) : (i.pool.length < r.threads && (n = i._nextBlock()) ? (i._trigged = !1, t = function(t) {
                                            i._promise = null,
                                            t && t.file && i._startSend(t),
                                                e.nextTick(i.__tick)
                                        },
                                            i._promise = o(n) ? n.always(t) : t(n)) : i.remaning || i.getStats().numOfQueue || (i.runing = !1, i._trigged || e.nextTick(function() {
                                            i.owner.trigger("uploadFinished")
                                        }), i._trigged = !0), void 0)
                                    },
                                    _nextBlock: function() {
                                        var e, t, n = this,
                                            i = n._act,
                                            s = n.options;
                                        return i && i.has() && i.file.getStatus() === a.PROGRESS ? (s.prepareNextFile && !n.pending.length && n._prepareNextFile(), i.fetch()) : n.runing ? (!n.pending.length && n.getStats().numOfQueue && n._prepareNextFile(), e = n.pending.shift(), t = function(e) {
                                            return e ? (i = r(e, s.chunked ? s.chunkSize: 0), n._act = i, i.fetch()) : null
                                        },
                                            o(e) ? e[e.pipe ? "pipe": "then"](t) : t(e)) : void 0
                                    },
                                    _prepareNextFile: function() {
                                        var e, t = this,
                                            n = t.request("fetch-file"),
                                            i = t.pending;
                                        n && (e = t.request("before-send-file", n,
                                            function() {
                                                return n.getStatus() === a.QUEUED ? (t.owner.trigger("uploadStart", n), n.setStatus(a.PROGRESS), n) : t._finishFile(n)
                                            }), e.done(function() {
                                            var t = s.inArray(e, i);~t && i.splice(t, 1, n)
                                        }), e.fail(function(e) {
                                            n.setStatus(a.ERROR, e),
                                                t.owner.trigger("uploadError", n, e),
                                                t.owner.trigger("uploadComplete", n)
                                        }), i.push(e))
                                    },
                                    _popBlock: function(e) {
                                        var t = s.inArray(e, this.pool);
                                        this.pool.splice(t, 1),
                                            e.file.remaning--,
                                            this.remaning--
                                    },
                                    _startSend: function(t) {
                                        var n, i = this,
                                            r = t.file;
                                        i.pool.push(t),
                                            i.remaning++,
                                            t.blob = 1 === t.chunks ? r.source: r.source.slice(t.start, t.end),
                                            n = i.request("before-send", t,
                                                function() {
                                                    r.getStatus() === a.PROGRESS ? i._doSend(t) : (i._popBlock(t), e.nextTick(i.__tick))
                                                }),
                                            n.fail(function() {
                                                1 === r.remaning ? i._finishFile(r).always(function() {
                                                    t.percentage = 1,
                                                        i._popBlock(t),
                                                        i.owner.trigger("uploadComplete", r),
                                                        e.nextTick(i.__tick)
                                                }) : (t.percentage = 1, i._popBlock(t), e.nextTick(i.__tick))
                                            })
                                    },
                                    _doSend: function(t) {
                                        var n, r, o = this,
                                            u = o.owner,
                                            c = o.options,
                                            l = t.file,
                                            d = new i(c),
                                            p = s.extend({},
                                                c.formData),
                                            h = s.extend({},
                                                c.headers);
                                        t.transport = d,
                                            d.on("destroy",
                                                function() {
                                                    delete t.transport,
                                                        o._popBlock(t),
                                                        e.nextTick(o.__tick)
                                                }),
                                            d.on("progress",
                                                function(e) {
                                                    var n = 0,
                                                        i = 0;
                                                    n = t.percentage = e,
                                                    t.chunks > 1 && (s.each(l.blocks,
                                                        function(e, t) {
                                                            i += (t.percentage || 0) * (t.end - t.start)
                                                        }), n = i / l.size),
                                                        u.trigger("uploadProgress", l, n || 0)
                                                }),
                                            n = function(e) {
                                                var n;
                                                return r = d.getResponseAsJson() || {},
                                                    r._raw = d.getResponse(),
                                                    n = function(t) {
                                                        e = t
                                                    },
                                                u.trigger("uploadAccept", t, r, n) || (e = e || "server"),
                                                    e
                                            },
                                            d.on("error",
                                                function(e, i) {
                                                    t.retried = t.retried || 0,
                                                        t.chunks > 1 && ~"http,abort".indexOf(e) && t.retried < c.chunkRetry ? (t.retried++, d.send()) : (i || "server" !== e || (e = n(e)), l.setStatus(a.ERROR, e), u.trigger("uploadError", l, e), u.trigger("uploadComplete", l))
                                                }),
                                            d.on("load",
                                                function() {
                                                    var e;
                                                    return (e = n()) ? (d.trigger("error", e, !0), void 0) : (1 === l.remaning ? o._finishFile(l, r) : d.destroy(), void 0)
                                                }),
                                            p = s.extend(p, {
                                                id: l.id,
                                                name: l.name,
                                                type: l.type,
                                                lastModifiedDate: l.lastModifiedDate,
                                                size: l.size
                                            }),
                                        t.chunks > 1 && s.extend(p, {
                                            chunks: t.chunks,
                                            chunk: t.chunk
                                        }),
                                            u.trigger("uploadBeforeSend", t, p, h),
                                            d.appendBlob(c.fileVal, t.blob, l.name),
                                            d.append(p),
                                            d.setRequestHeader(h),
                                            d.send()
                                    },
                                    _finishFile: function(e, t, n) {
                                        var i = this.owner;
                                        return i.request("after-send-file", arguments,
                                            function() {
                                                e.setStatus(a.COMPLETE),
                                                    i.trigger("uploadSuccess", e, t, n)
                                            }).fail(function(t) {
                                                e.getStatus() === a.PROGRESS && e.setStatus(a.ERROR, t),
                                                    i.trigger("uploadError", e, t)
                                            }).always(function() {
                                                i.trigger("uploadComplete", e)
                                            })
                                    }
                                })
                    }),
                t("widgets/validator", ["base", "uploader", "file", "widgets/widget"],
                    function(e, t, n) {
                        var i, r = e.$,
                            s = {};
                        return i = {
                            addValidator: function(e, t) {
                                s[e] = t
                            },
                            removeValidator: function(e) {
                                delete s[e]
                            }
                        },
                            t.register({
                                init: function() {
                                    var t = this;
                                    e.nextTick(function() {
                                        r.each(s,
                                            function() {
                                                this.call(t.owner)
                                            })
                                    })
                                }
                            }),
                            i.addValidator("fileNumLimit",
                                function() {
                                    var e = this,
                                        t = e.options,
                                        n = 0,
                                        i = parseInt(t.fileNumLimit, 10),
                                        r = !0;
                                    i && (e.on("beforeFileQueued",
                                        function(e) {
                                            return n >= i && r && (r = !1, this.trigger("error", "Q_EXCEED_NUM_LIMIT", i, e), setTimeout(function() {
                                                    r = !0
                                                },
                                                1)),
                                                n >= i ? !1 : !0
                                        }), e.on("fileQueued",
                                        function() {
                                            n++
                                        }), e.on("fileDequeued",
                                        function() {
                                            n--
                                        }), e.on("uploadFinished reset",
                                        function() {
                                            n = 0
                                        }))
                                }),
                            i.addValidator("fileSizeLimit",
                                function() {
                                    var e = this,
                                        t = e.options,
                                        n = 0,
                                        i = t.fileSizeLimit >> 0,
                                        r = !0;
                                    i && (e.on("beforeFileQueued",
                                        function(e) {
                                            var t = n + e.size > i;
                                            return t && r && (r = !1, this.trigger("error", "Q_EXCEED_SIZE_LIMIT", i, e), setTimeout(function() {
                                                    r = !0
                                                },
                                                1)),
                                                t ? !1 : !0
                                        }), e.on("fileQueued",
                                        function(e) {
                                            n += e.size
                                        }), e.on("fileDequeued",
                                        function(e) {
                                            n -= e.size
                                        }), e.on("uploadFinished reset",
                                        function() {
                                            n = 0
                                        }))
                                }),
                            i.addValidator("fileSingleSizeLimit",
                                function() {
                                    var e = this,
                                        t = e.options,
                                        i = t.fileSingleSizeLimit;
                                    i && e.on("beforeFileQueued",
                                        function(e) {
                                            return e.size > i ? (e.setStatus(n.Status.INVALID, "exceed_size"), this.trigger("error", "F_EXCEED_SIZE", e), !1) : void 0
                                        })
                                }),
                            i.addValidator("duplicate",
                                function() {
                                    function e(e) {
                                        for (var t, n = 0,
                                                 i = 0,
                                                 r = e.length; r > i; i++) t = e.charCodeAt(i),
                                            n = t + (n << 6) + (n << 16) - n;
                                        return n
                                    }
                                    var t = this,
                                        n = t.options,
                                        i = {};
                                    n.duplicate || (t.on("beforeFileQueued",
                                        function(t) {
                                            var n = t.__hash || (t.__hash = e(t.name + t.size + t.lastModifiedDate));
                                            return i[n] ? (this.trigger("error", "F_DUPLICATE", t), !1) : void 0
                                        }), t.on("fileQueued",
                                        function(e) {
                                            var t = e.__hash;
                                            t && (i[t] = !0)
                                        }), t.on("fileDequeued",
                                        function(e) {
                                            var t = e.__hash;
                                            t && delete i[t]
                                        }), t.on("reset",
                                        function() {
                                            i = {}
                                        }))
                                }),
                            i
                    }),
                t("runtime/compbase", [],
                    function() {
                        function e(e, t) {
                            this.owner = e,
                                this.options = e.options,
                                this.getRuntime = function() {
                                    return t
                                },
                                this.getRuid = function() {
                                    return t.uid
                                },
                                this.trigger = function() {
                                    return e.trigger.apply(e, arguments)
                                }
                        }
                        return e
                    }),
                t("runtime/html5/runtime", ["base", "runtime/runtime", "runtime/compbase"],
                    function(t, n, i) {
                        function r() {
                            var e = {},
                                i = this,
                                r = this.destory;
                            n.apply(i, arguments),
                                i.type = s,
                                i.exec = function(n, r) {
                                    var s, a = this,
                                        u = a.uid,
                                        c = t.slice(arguments, 2);
                                    return o[n] && (s = e[u] = e[u] || new o[n](a, i), s[r]) ? s[r].apply(s, c) : void 0
                                },
                                i.destory = function() {
                                    return r && r.apply(this, arguments)
                                }
                        }
                        var s = "html5",
                            o = {};
                        return t.inherits(n, {
                            constructor: r,
                            init: function() {
                                var e = this;
                                setTimeout(function() {
                                        e.trigger("ready")
                                    },
                                    1)
                            }
                        }),
                            r.register = function(e, n) {
                                var r = o[e] = t.inherits(i, n);
                                return r
                            },
                        e.Blob && e.FileReader && e.DataView && n.addRuntime(s, r),
                            r
                    }),
                t("runtime/html5/blob", ["runtime/html5/runtime", "lib/blob"],
                    function(e, t) {
                        return e.register("Blob", {
                            slice: function(e, n) {
                                var i = this.owner.source,
                                    r = i.slice || i.webkitSlice || i.mozSlice;
                                return i = r.call(i, e, n),
                                    new t(this.getRuid(), i)
                            }
                        })
                    }),
                t("runtime/html5/dnd", ["base", "runtime/html5/runtime", "lib/file"],
                    function(e, t, n) {
                        var i = e.$,
                            r = "webuploader-dnd-";
                        return t.register("DragAndDrop", {
                            init: function() {
                                var t = this.elem = this.options.container;
                                this.dragEnterHandler = e.bindFn(this._dragEnterHandler, this),
                                    this.dragOverHandler = e.bindFn(this._dragOverHandler, this),
                                    this.dragLeaveHandler = e.bindFn(this._dragLeaveHandler, this),
                                    this.dropHandler = e.bindFn(this._dropHandler, this),
                                    this.dndOver = !1,
                                    t.on("dragenter", this.dragEnterHandler),
                                    t.on("dragover", this.dragOverHandler),
                                    t.on("dragleave", this.dragLeaveHandler),
                                    t.on("drop", this.dropHandler),
                                this.options.disableGlobalDnd && (i(document).on("dragover", this.dragOverHandler), i(document).on("drop", this.dropHandler))
                            },
                            _dragEnterHandler: function(e) {
                                var t, n = this,
                                    i = n._denied || !1;
                                return e = e.originalEvent || e,
                                n.dndOver || (n.dndOver = !0, t = e.dataTransfer.items, t && t.length && (n._denied = i = !n.trigger("accept", t)), n.elem.addClass(r + "over"), n.elem[i ? "addClass": "removeClass"](r + "denied")),
                                    e.dataTransfer.dropEffect = i ? "none": "copy",
                                    !1
                            },
                            _dragOverHandler: function(e) {
                                var t = this.elem.parent().get(0);
                                return t && !i.contains(t, e.currentTarget) ? !1 : (clearTimeout(this._leaveTimer), this._dragEnterHandler.call(this, e), !1)
                            },
                            _dragLeaveHandler: function() {
                                var e, t = this;
                                return e = function() {
                                    t.dndOver = !1,
                                        t.elem.removeClass(r + "over " + r + "denied")
                                },
                                    clearTimeout(t._leaveTimer),
                                    t._leaveTimer = setTimeout(e, 100),
                                    !1
                            },
                            _dropHandler: function(e) {
                                var t, s, o = this,
                                    a = o.getRuid(),
                                    u = o.elem.parent().get(0);
                                if (u && !i.contains(u, e.currentTarget)) return ! 1;
                                e = e.originalEvent || e,
                                    t = e.dataTransfer;
                                try {
                                    s = t.getData("text/html")
                                } catch(c) {}
                                return s ? void 0 : (o._getTansferFiles(t,
                                    function(e) {
                                        o.trigger("drop", i.map(e,
                                            function(e) {
                                                return new n(a, e)
                                            }))
                                    }), o.dndOver = !1, o.elem.removeClass(r + "over"), !1)
                            },
                            _getTansferFiles: function(t, n) {
                                var i, r, s, o, a, u, c, l = [],
                                    d = [];
                                for (i = t.items, r = t.files, c = !(!i || !i[0].webkitGetAsEntry), a = 0, u = r.length; u > a; a++) s = r[a],
                                    o = i && i[a],
                                    c && o.webkitGetAsEntry().isDirectory ? d.push(this._traverseDirectoryTree(o.webkitGetAsEntry(), l)) : l.push(s);
                                e.when.apply(e, d).done(function() {
                                    l.length && n(l)
                                })
                            },
                            _traverseDirectoryTree: function(t, n) {
                                var i = e.Deferred(),
                                    r = this;
                                return t.isFile ? t.file(function(e) {
                                    n.push(e),
                                        i.resolve()
                                }) : t.isDirectory && t.createReader().readEntries(function(t) {
                                    var s, o = t.length,
                                        a = [],
                                        u = [];
                                    for (s = 0; o > s; s++) a.push(r._traverseDirectoryTree(t[s], u));
                                    e.when.apply(e, a).then(function() {
                                            n.push.apply(n, u),
                                                i.resolve()
                                        },
                                        i.reject)
                                }),
                                    i.promise()
                            },
                            destroy: function() {
                                var e = this.elem;
                                e.off("dragenter", this.dragEnterHandler),
                                    e.off("dragover", this.dragEnterHandler),
                                    e.off("dragleave", this.dragLeaveHandler),
                                    e.off("drop", this.dropHandler),
                                this.options.disableGlobalDnd && (i(document).off("dragover", this.dragOverHandler), i(document).off("drop", this.dropHandler))
                            }
                        })
                    }),
                t("runtime/html5/filepaste", ["base", "runtime/html5/runtime", "lib/file"],
                    function(e, t, n) {
                        return t.register("FilePaste", {
                            init: function() {
                                var t, n, i, r, s = this.options,
                                    o = this.elem = s.container,
                                    a = ".*";
                                if (s.accept) {
                                    for (t = [], n = 0, i = s.accept.length; i > n; n++) r = s.accept[n].mimeTypes,
                                    r && t.push(r);
                                    t.length && (a = t.join(","), a = a.replace(/,/g, "|").replace(/\*/g, ".*"))
                                }
                                this.accept = a = new RegExp(a, "i"),
                                    this.hander = e.bindFn(this._pasteHander, this),
                                    o.on("paste", this.hander)
                            },
                            _pasteHander: function(e) {
                                var t, i, r, s, o, a = [],
                                    u = this.getRuid();
                                for (e = e.originalEvent || e, t = e.clipboardData.items, s = 0, o = t.length; o > s; s++) i = t[s],
                                "file" === i.kind && (r = i.getAsFile()) && a.push(new n(u, r));
                                a.length && (e.preventDefault(), e.stopPropagation(), this.trigger("paste", a))
                            },
                            destroy: function() {
                                this.elem.off("paste", this.hander)
                            }
                        })
                    }),
                t("runtime/html5/filepicker", ["base", "runtime/html5/runtime"],
                    function(e, t) {
                        var n = e.$;
                        return t.register("FilePicker", {
                            init: function() {
                                var e, t, i, r, s = this.getRuntime().getContainer(),
                                    o = this,
                                    a = o.owner,
                                    u = o.options,
                                    c = n(document.createElement("label")),
                                    l = n(document.createElement("input"));
                                if (l.attr("type", "file"), l.attr("name", u.name), l.addClass("webuploader-element-invisible"), c.on("click",
                                        function() {
                                            l.trigger("click")
                                        }), c.css({
                                        opacity: 0,
                                        width: "100%",
                                        height: "100%",
                                        display: "block",
                                        cursor: "pointer",
                                        background: "#ffffff"
                                    }), u.multiple && l.attr("multiple", "multiple"), u.accept && u.accept.length > 0) {
                                    for (e = [], t = 0, i = u.accept.length; i > t; t++) e.push(u.accept[t].mimeTypes);
                                    l.attr("accept", e.join(","))
                                }
                                s.append(l),
                                    s.append(c),
                                    r = function(e) {
                                        a.trigger(e.type)
                                    },
                                    l.on("change",
                                        function(e) {
                                            var t, i = arguments.callee;
                                            o.files = e.target.files,
                                                t = this.cloneNode(!0),
                                                t.value = null,
                                                this.parentNode.replaceChild(t, this),
                                                l.off(),
                                                l = n(t).on("change", i).on("mouseenter mouseleave", r),
                                                a.trigger("change")
                                        }),
                                    c.on("mouseenter mouseleave", r)
                            },
                            getFiles: function() {
                                return this.files
                            },
                            destroy: function() {}
                        })
                    }),
                t("runtime/html5/transport", ["base", "runtime/html5/runtime"],
                    function(e, t) {
                        var n = e.noop,
                            i = e.$;
                        return t.register("Transport", {
                            init: function() {
                                this._status = 0,
                                    this._response = null
                            },
                            send: function() {
                                var t, n, r, s = this.owner,
                                    o = this.options,
                                    a = this._initAjax(),
                                    u = s._blob,
                                    c = o.server;
                                o.sendAsBinary ? (c += (/\?/.test(c) ? "&": "?") + i.param(s._formData), n = u.getSource()) : (t = new FormData, i.each(s._formData,
                                    function(e, n) {
                                        t.append(e, n)
                                    }), t.append(o.fileVal, u.getSource(), o.filename || s._formData.name || "")),
                                    o.withCredentials && "withCredentials" in a ? (a.open(o.method, c, !0), a.withCredentials = !0) : a.open(o.method, c),
                                    this._setRequestHeader(a, o.headers),
                                    n ? (a.overrideMimeType("application/octet-stream"), e.os.android ? (r = new FileReader, r.onload = function() {
                                        a.send(this.result),
                                            r = r.onload = null
                                    },
                                        r.readAsArrayBuffer(n)) : a.send(n)) : a.send(t)
                            },
                            getResponse: function() {
                                return this._response
                            },
                            getResponseAsJson: function() {
                                return this._parseJson(this._response)
                            },
                            getStatus: function() {
                                return this._status
                            },
                            abort: function() {
                                var e = this._xhr;
                                e && (e.upload.onprogress = n, e.onreadystatechange = n, e.abort(), this._xhr = e = null)
                            },
                            destroy: function() {
                                this.abort()
                            },
                            _initAjax: function() {
                                var e = this,
                                    t = new XMLHttpRequest,
                                    i = this.options;
                                return ! i.withCredentials || "withCredentials" in t || "undefined" == typeof XDomainRequest || (t = new XDomainRequest),
                                    t.upload.onprogress = function(t) {
                                        var n = 0;
                                        return t.lengthComputable && (n = t.loaded / t.total),
                                            e.trigger("progress", n)
                                    },
                                    t.onreadystatechange = function() {
                                        return 4 === t.readyState ? (t.upload.onprogress = n, t.onreadystatechange = n, e._xhr = null, e._status = t.status, t.status >= 200 && t.status < 300 ? (e._response = t.responseText, e.trigger("load")) : t.status >= 500 && t.status < 600 ? (e._response = t.responseText, e.trigger("error", "server")) : e.trigger("error", e._status ? "http": "abort")) : void 0
                                    },
                                    e._xhr = t,
                                    t
                            },
                            _setRequestHeader: function(e, t) {
                                i.each(t,
                                    function(t, n) {
                                        e.setRequestHeader(t, n)
                                    })
                            },
                            _parseJson: function(e) {
                                var t;
                                try {
                                    t = JSON.parse(e)
                                } catch(n) {
                                    t = {}
                                }
                                return t
                            }
                        })
                    }),
                t("runtime/flash/runtime", ["base", "runtime/runtime", "runtime/compbase"],
                    function(t, n, i) {
                        function r() {
                            var e;
                            try {
                                e = navigator.plugins["Shockwave Flash"],
                                    e = e.description
                            } catch(t) {
                                try {
                                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                                } catch(n) {
                                    e = "0.0"
                                }
                            }
                            return e = e.match(/\d+/g),
                                parseFloat(e[0] + "." + e[1], 10)
                        }
                        function s() {
                            function i(e, t) {
                                var n, i, r = e.type || e;
                                n = r.split("::"),
                                    i = n[0],
                                    r = n[1],
                                    "Ready" === r && i === c.uid ? c.trigger("ready") : s[i] && s[i].trigger(r.toLowerCase(), e, t)
                            }
                            var r = {},
                                s = {},
                                o = this.destory,
                                c = this,
                                l = t.guid("webuploader_");
                            n.apply(c, arguments),
                                c.type = a,
                                c.exec = function(e, n) {
                                    var i, o = this,
                                        a = o.uid,
                                        l = t.slice(arguments, 2);
                                    return s[a] = o,
                                        u[e] && (r[a] || (r[a] = new u[e](o, c)), i = r[a], i[n]) ? i[n].apply(i, l) : c.flashExec.apply(o, arguments)
                                },
                                e[l] = function() {
                                    var e = arguments;
                                    setTimeout(function() {
                                            i.apply(null, e)
                                        },
                                        1)
                                },
                                this.jsreciver = l,
                                this.destory = function() {
                                    return o && o.apply(this, arguments)
                                },
                                this.flashExec = function(e, n) {
                                    var i = c.getFlash(),
                                        r = t.slice(arguments, 2);
                                    return i.exec(this.uid, e, n, r)
                                }
                        }
                        var o = t.$,
                            a = "flash",
                            u = {};
                        return t.inherits(n, {
                            constructor: s,
                            init: function() {
                                var e, n = this.getContainer(),
                                    i = this.options;
                                n.css({
                                    position: "absolute",
                                    top: "-8px",
                                    left: "-8px",
                                    width: "9px",
                                    height: "9px",
                                    overflow: "hidden"
                                }),
                                    e = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + i.swf + '" ',
                                t.browser.ie && (e += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),
                                    e += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + i.swf + '" /><param name="flashvars" value="uid=' + this.uid + "&jsreciver=" + this.jsreciver + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',
                                    n.html(e)
                            },
                            getFlash: function() {
                                return this._flash ? this._flash: (this._flash = o("#" + this.uid).get(0), this._flash)
                            }
                        }),
                            s.register = function(e, n) {
                                return n = u[e] = t.inherits(i, o.extend({
                                        flashExec: function() {
                                            var e = this.owner,
                                                t = this.getRuntime();
                                            return t.flashExec.apply(e, arguments)
                                        }
                                    },
                                    n))
                            },
                        r() >= 11.4 && n.addRuntime(a, s),
                            s
                    }),
                t("runtime/flash/filepicker", ["base", "runtime/flash/runtime"],
                    function(e, t) {
                        var n = e.$;
                        return t.register("FilePicker", {
                            init: function(e) {
                                var t, i, r = n.extend({},
                                    e);
                                for (t = r.accept && r.accept.length, i = 0; t > i; i++) r.accept[i].title || (r.accept[i].title = "Files");
                                delete r.button,
                                    delete r.id,
                                    delete r.container,
                                    this.flashExec("FilePicker", "init", r)
                            },
                            destroy: function() {}
                        })
                    }),
                t("runtime/flash/transport", ["base", "runtime/flash/runtime", "runtime/client"],
                    function(e, t, n) {
                        var i = e.$;
                        return t.register("Transport", {
                            init: function() {
                                this._status = 0,
                                    this._response = null,
                                    this._responseJson = null
                            },
                            send: function() {
                                var e, t = this.owner,
                                    n = this.options,
                                    r = this._initAjax(),
                                    s = t._blob,
                                    o = n.server;
                                r.connectRuntime(s.ruid),
                                    n.sendAsBinary ? (o += (/\?/.test(o) ? "&": "?") + i.param(t._formData), e = s.uid) : (i.each(t._formData,
                                        function(e, t) {
                                            r.exec("append", e, t)
                                        }), r.exec("appendBlob", n.fileVal, s.uid, n.filename || t._formData.name || "")),
                                    this._setRequestHeader(r, n.headers),
                                    r.exec("send", {
                                            method: n.method,
                                            url: o,
                                            mimeType: "application/octet-stream"
                                        },
                                        e)
                            },
                            getStatus: function() {
                                return this._status
                            },
                            getResponse: function() {
                                return this._response || ""
                            },
                            getResponseAsJson: function() {
                                return this._responseJson
                            },
                            abort: function() {
                                var e = this._xhr;
                                e && (e.exec("abort"), e.destroy(), this._xhr = e = null)
                            },
                            destroy: function() {
                                this.abort()
                            },
                            _initAjax: function() {
                                var e = this,
                                    t = new n("XMLHttpRequest");
                                return t.on("uploadprogress progress",
                                    function(t) {
                                        var n = t.loaded / t.total;
                                        return n = Math.min(1, Math.max(0, n)),
                                            e.trigger("progress", n)
                                    }),
                                    t.on("load",
                                        function() {
                                            var n = t.exec("getStatus"),
                                                i = "";
                                            return t.off(),
                                                e._xhr = null,
                                                n >= 200 && 300 > n ? (e._response = t.exec("getResponse"), e._responseJson = t.exec("getResponseAsJson")) : n >= 500 && 600 > n ? (e._response = t.exec("getResponse"), e._responseJson = t.exec("getResponseAsJson"), i = "server") : i = "http",
                                                e._response = decodeURIComponent(e._response),
                                                t.destroy(),
                                                t = null,
                                                i ? e.trigger("error", i) : e.trigger("load")
                                        }),
                                    t.on("error",
                                        function() {
                                            t.off(),
                                                e._xhr = null,
                                                e.trigger("error", "http")
                                        }),
                                    e._xhr = t,
                                    t
                            },
                            _setRequestHeader: function(e, t) {
                                i.each(t,
                                    function(t, n) {
                                        e.exec("setRequestHeader", t, n)
                                    })
                            }
                        })
                    }),
                t("preset/withoutimage", ["base", "widgets/filednd", "widgets/filepaste", "widgets/filepicker", "widgets/queue", "widgets/runtime", "widgets/upload", "widgets/validator", "runtime/html5/blob", "runtime/html5/dnd", "runtime/html5/filepaste", "runtime/html5/filepicker", "runtime/html5/transport", "runtime/flash/filepicker", "runtime/flash/transport"],
                    function(e) {
                        return e
                    }),
                t("webuploader", ["preset/withoutimage"],
                    function(e) {
                        return e
                    }),
                n("webuploader")
        }); !
    function(i, o, e) {
        var t = new o;
        t.set({
            html: !1,
            xhtmlOut: !1,
            breaks: !0,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1
        }),
            window.remarkable = t;
        var a = i.toolbar,
            r = function(i, o) {
                for (var e = 0,
                         t = a.length; t > e; e++) {
                    var r = a[e];
                    if ("string" != typeof r && r.name === i) {
                        r.action = o;
                        break
                    }
                }
            },
            l = $("body"),
            d = function() {
                var i = this;
                this.$win = $(['<div class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="editorToolImageTitle" aria-hidden="true">', '<div class="modal-header">', '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>', '<h3 id="editorToolImageTitle">添加连接</h3>', "</div>", '<div class="modal-body">', '<form class="form-horizontal">', '<div class="control-group">', '<label class="control-label">标题</label>', '<div class="controls">', '<input type="text" name="title" placeholder="Title">', "</div>", "</div>", '<div class="control-group">', '<label class="control-label">连接</label>', '<div class="controls">', '<input type="text" name="link" value="http://" placeholder="Link">', "</div>", "</div>", "</form>", "</div>", '<div class="modal-footer">', '<button class="btn btn-primary" role="save">确定</button>', "</div>", "</div>"].join("")).appendTo(l),
                    this.$win.on("click", "[role=save]",
                        function() {
                            i.$win.find("form").submit()
                        }).on("submit", "form",
                        function() {
                            var o = $(this),
                                e = o.find("[name=title]").val(),
                                t = o.find("[name=link]").val();
                            return i.$win.modal("hide"),
                                i.editor.push(" [" + e + "](" + t + ")"),
                                o.find("[name=title]").val(""),
                                o.find("[name=link]").val("http://"),
                                !1
                        })
            };
        d.prototype.bind = function(i) {
            this.editor = i,
                this.$win.modal("show")
        };
        var n = function() {
            var i = this;
            this.$win = $(['<div class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="editorToolImageTitle" aria-hidden="true">', '<div class="modal-header">', '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>', '<h3 id="editorToolImageTitle">图片</h3>', "</div>", '<div class="modal-body">', '<div class="upload-img">', '<div class="button">上传图片</div>', '<span class="tip"></span>', '<div class="alert alert-error hide"></div>', "</div>", "</div>", "</div>"].join("")).appendTo(l),
                this.$upload = this.$win.find(".upload-img").css({
                    height: 50,
                    padding: "60px 0",
                    textAlign: "center",
                    border: "4px dashed#ddd"
                }),
                this.$uploadBtn = this.$upload.find(".button").css({
                    width: 86,
                    height: 40,
                    margin: "0 auto"
                }),
                this.$uploadTip = this.$upload.find(".tip").hide(),
                this.file = !1;
            var o = $("[name=_csrf]").val();
            this.uploader = e.create({
                swf: "http://cdn.staticfile.org/webuploader/0.1.1/Uploader.swf",
                server: "/upload?_csrf=" + o,
                pick: this.$uploadBtn[0],
                paste: document.body,
                dnd: this.$upload[0],
                auto: !0,
                fileSingleSizeLimit: 2097152,
                accept: {
                    title: "Images",
                    extensions: "gif,jpg,jpeg,bmp,png",
                    mimeTypes: "image/*"
                }
            }),
                this.uploader.on("beforeFileQueued",
                    function(o) {
                        return i.file === !1 && i.editor ? (i.showFile(o), void 0) : !1
                    }),
                this.uploader.on("uploadProgress",
                    function(o, e) {
                        i.showProgress(o, 100 * e)
                    }),
                this.uploader.on("uploadSuccess",
                    function(o, e) {
                        e.success ? (i.$win.modal("hide"), i.editor.push(" ![" + o.name + "](" + e.url + ")")) : (i.removeFile(), i.showError(e.msg || "服务器走神了，上传失败"))
                    }),
                this.uploader.on("uploadComplete",
                    function(o) {
                        i.uploader.removeFile(o),
                            i.removeFile()
                    }),
                this.uploader.on("error",
                    function(o) {
                        switch (i.removeFile(), o) {
                            case "Q_EXCEED_SIZE_LIMIT":
                            case "F_EXCEED_SIZE":
                                i.showError("文件太大了, 不能超过2M");
                                break;
                            case "Q_TYPE_DENIED":
                                i.showError("只能上传图片");
                                break;
                            default:
                                i.showError("发生未知错误")
                        }
                    }),
                this.uploader.on("uploadError",
                    function() {
                        i.removeFile(),
                            i.showError("服务器走神了，上传失败")
                    })
        };
        n.prototype.removeFile = function() {
            this.file = !1,
                this.$uploadBtn.show(),
                this.$uploadTip.hide()
        },
            n.prototype.showFile = function(i) {
                this.file = i,
                    this.$uploadBtn.hide(),
                    this.$uploadTip.html("正在上传: " + i.name).show(),
                    this.hideError()
            },
            n.prototype.showError = function(i) {
                this.$upload.find(".alert-error").html(i).show()
            },
            n.prototype.hideError = function() {
                this.$upload.find(".alert-error").hide()
            },
            n.prototype.showProgress = function(i, o) {
                this.$uploadTip.html("正在上传: " + i.name + " " + o + "%").show()
            },
            n.prototype.bind = function(i) {
                this.editor = i,
                    this.$win.modal("show")
            };
        var s = new n,
            h = new d;
        r("image",
            function(i) {
                s.bind(i)
            }),
            r("link",
                function(i) {
                    h.bind(i)
                });
        var p = i.prototype.createToolbar;
        i.prototype.createToolbar = function(i) {
            p.call(this, i);
            var o = this;
            $(o.codemirror.display.input).on("focus",
                function() {
                    s.editor = o
                })
        },
            i.prototype.push = function(i) {
                var o = this.codemirror,
                    e = o.lastLine();
                o.setLine(e, o.getLine(e) + i)
            }
    } (window.Editor, window.Remarkable, window.WebUploader);